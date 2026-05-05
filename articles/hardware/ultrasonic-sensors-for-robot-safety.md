---
title: "Ultrasonic Sensors for Robot Safety"
summary: "How to integrate cheap ultrasonic range sensors into a robot without lying to yourself about timing, concurrency, or the boundary between MCU logic and ROS 2 reporting."
source_repo: "wimblerobotics/Robotics_Book"
source_path: "ultrasonic.md"
source_url: "https://github.com/wimblerobotics/Robotics_Book/blob/main/ultrasonic.md"
tags: ["ros2", "ultrasonic", "range-sensors", "hardware", "safety", "microcontrollers"]
related: ["articles/navigation/nav2-range-sensor-layer-for-close-obstacles.md", "articles/hardware/serial-protocols-between-ros2-and-microcontrollers.md", "articles/hardware/hardware-watchdogs-and-heartbeats.md", "articles/hardware/emergency-stop-integration.md"]
---

# Ultrasonic Sensors for Robot Safety

Source: [Robotics_Book ultrasonic notes](https://github.com/wimblerobotics/Robotics_Book/blob/main/ultrasonic.md)

## Why This Matters

Ultrasonic sensors look trivial until a robot has more than one of them, needs stable timing, or depends on them for safety behavior. The hard part is not reading one pulse in isolation. It is building a timing model that still works when triggers, echoes, interrupts, and ROS reporting all compete for attention.

## Distilled Takeaways

- Ultrasonic devices are timing-sensitive hardware, not just another generic range topic.
- A robust implementation separates trigger scheduling, echo capture, and higher-level robot response.
- Echo measurement belongs in interrupt-driven logic because the pulse width itself is the data.
- Multi-sensor setups benefit from a state machine and round-robin triggering so sensors do not interfere with each other.
- ROS 2 should usually consume cached, already-measured distances rather than trying to own microsecond timing directly.

## Practical Value

- Use a periodic timer to advance a simple state machine: trigger high, trigger low, then countdown until it is time to service the next device.
- Capture echo edges in per-sensor interrupt handlers so distance is computed from pulse duration instead of approximate loop timing.
- Publish the last known distance at a sane reporting rate rather than coupling ROS traffic to every low-level signal transition.
- Treat ultrasonic sensors as a close-range safety or fallback input, then connect them upward into e-stop, collision monitoring, or costmap logic.

## Corroborating References

- [sensor_msgs Range message](https://docs.ros.org/en/jazzy/p/sensor_msgs/msg/Range.html)
- [Nav2 range sensor layer](https://docs.nav2.org/configuration/packages/costmap-plugins/range.html)
- [ROS 2 timers tutorial](https://docs.ros.org/en/jazzy/Tutorials/Beginner-Client-Libraries/Writing-A-Simple-Cpp-Publisher-And-Subscriber.html)

## When to Read the Original Source

Go to the original source when you want the concrete timing breakdown for trigger and echo signals, the round-robin state-machine model for multiple sonar devices, and the practical argument for keeping the microsecond work on the MCU side.