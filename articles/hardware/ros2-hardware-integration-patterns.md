---
title: "ROS 2 Hardware Integration Patterns"
summary: "A guide to the hardware side of ROS 2 robots: microcontrollers, transport protocols, watchdogs, power, calibration, and the interfaces that keep software and electronics from drifting apart."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "multiple skills: teensy-platformio, serial-communication-protocol, hardware-watchdog, motor-controller-interface, battery-monitoring, udev-rules"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/docs/SKILLS-CATALOG.md"
tags: ["ros2", "hardware", "microcontrollers", "serial", "watchdog", "battery", "teensy", "udev"]
related: ["articles/hardware/serial-protocols-between-ros2-and-microcontrollers.md", "articles/hardware/odometry-calibration-for-diff-drive.md", "articles/foundations/ros2-core-communication-and-execution.md", "articles/hardware/i2c-sensors-with-ros2.md", "articles/hardware/motor-controller-interfaces.md", "articles/hardware/hardware-watchdogs-and-heartbeats.md"]
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

## Start Here

- Microcontrollers and device interfaces: [serial-protocols-between-ros2-and-microcontrollers.md](serial-protocols-between-ros2-and-microcontrollers.md), [micro-ros-setup.md](micro-ros-setup.md), [teensy-platformio-with-ros2.md](teensy-platformio-with-ros2.md), and [i2c-sensors-with-ros2.md](i2c-sensors-with-ros2.md)
- Motion interfaces and safety: [motor-controller-interfaces.md](motor-controller-interfaces.md), [servo-control-patterns.md](servo-control-patterns.md), [hardware-watchdogs-and-heartbeats.md](hardware-watchdogs-and-heartbeats.md), and [emergency-stop-integration.md](emergency-stop-integration.md)
- Power and health: [battery-monitoring-in-ros2.md](battery-monitoring-in-ros2.md), [battery-data-analysis.md](battery-data-analysis.md), and [power-management-for-mobile-robots.md](power-management-for-mobile-robots.md)
- Robot modeling and odometry: [differential-drive-kinematics.md](differential-drive-kinematics.md), [encoder-odometry-math.md](encoder-odometry-math.md), [wheel-odometry-models.md](wheel-odometry-models.md), [collision-geometry-in-urdf.md](collision-geometry-in-urdf.md), [inertia-calculation-for-urdf.md](inertia-calculation-for-urdf.md), and [joint-types-and-limits-in-urdf.md](joint-types-and-limits-in-urdf.md)

## Corroborating References

- [micro-ROS overview](https://micro.ros.org/docs/overview/)
- [PlatformIO documentation](https://docs.platformio.org/)
- [ROS 2 diagnostics stack repository](https://github.com/ros/diagnostics)

## When to Read the Original Source

Go to the original skills when you need concrete Teensy and PlatformIO setup, packet-format advice, motor-controller integration patterns, watchdog implementation ideas, or device-rule examples for multi-device Linux robots.