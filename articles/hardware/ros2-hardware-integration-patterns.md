---
title: "ROS 2 Hardware Integration Patterns"
summary: "A guide to the hardware side of ROS 2 robots: microcontrollers, transport protocols, watchdogs, power, calibration, and the interfaces that keep software and electronics from drifting apart."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "multiple skills: teensy-platformio, serial-communication-protocol, hardware-watchdog, motor-controller-interface, battery-monitoring, udev-rules"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/docs/SKILLS-CATALOG.md"
tags: ["ros2", "hardware", "microcontrollers", "serial", "watchdog", "battery", "teensy", "udev"]
related: ["articles/hardware/serial-protocols-between-ros2-and-microcontrollers.md", "articles/hardware/odometry-calibration-for-diff-drive.md", "articles/foundations/ros2-core-communication-and-execution.md"]
---

# ROS 2 Hardware Integration Patterns

Source: [ros2-copilot-skills catalog](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/docs/SKILLS-CATALOG.md)

## Why This Matters

Robots fail at the hardware-software boundary more often than tutorials admit. Once motors, encoders, IMUs, power rails, and microcontrollers are involved, the engineering problem becomes less about one package and more about building reliable contracts between the host computer and the physical machine.

## Distilled Takeaways

- A microcontroller bridge should be treated as a subsystem with its own protocol, timing model, diagnostics, and safety behavior.
- Watchdogs, estops, and timeout handling are part of the normal architecture, not optional safety garnish.
- Stable device naming through udev saves a great deal of bringup pain once a robot has multiple USB serial devices.
- Good hardware integration exposes diagnostics and counters so flaky links and borderline power conditions are visible before they become navigation problems.
- Calibration work such as wheel geometry, sensor mounting, and current or voltage scaling is the difference between plausible demos and dependable robots.

## Practical Value

- Define the host-to-MCU boundary clearly: commands, telemetry, timestamps, error reporting, and failure response.
- Prefer explicit packet protocols over newline-delimited wishful thinking.
- Make watchdog and estop behavior testable.
- Log power and transport quality as first-class telemetry, especially on mobile robots.

## Corroborating References

- [micro-ROS overview](https://micro.ros.org/docs/overview/)
- [PlatformIO documentation](https://docs.platformio.org/)
- [ROS 2 diagnostics stack repository](https://github.com/ros/diagnostics)

## When to Read the Original Source

Go to the original skills when you need concrete Teensy and PlatformIO setup, packet-format advice, motor-controller integration patterns, watchdog implementation ideas, or device-rule examples for multi-device Linux robots.