---
title: "Serial Protocols Between ROS 2 and Microcontrollers"
summary: "Why robotics projects need a real packet protocol over UART, and what a robust packet format should include for framing, validation, and recovery."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "serial-communication-protocol/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/serial-communication-protocol/SKILL.md"
tags: ["ros2", "serial", "microcontrollers", "protocols", "hardware", "reliability"]
related: ["articles/hardware/odometry-calibration-for-diff-drive.md", "articles/software/launch-files-patterns-and-pitfalls.md"]
---

# Serial Protocols Between ROS 2 and Microcontrollers

Source: [ros2-copilot-skills serial protocol skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/serial-communication-protocol/SKILL.md)

## Why This Matters

Raw serial is only a byte stream. Without explicit framing and validation, a robotics system cannot reliably tell where messages start, whether bytes were corrupted by noise, or how to recover after partial reads and reconnections.

## Distilled Takeaways

- A structured packet should include sync bytes, packet type, payload length, payload, and a checksum or CRC.
- Two sync bytes reduce false packet detection compared with a single start byte.
- Length-delimited payloads keep the parser deterministic.
- CRC checking is essential once a robot leaves the desk and lives near motors, switching supplies, vibration, and cable noise.
- The system needs an error strategy, not just a happy-path parser.

## Useful Design Pattern

A practical packet layout is:

- sync bytes
- command or data type byte
- payload length byte
- payload bytes
- CRC byte

That gives you framing, dispatch, and corruption detection in a compact form.

## Operational Lessons

- Host-to-MCU traffic is often event-driven, such as sending motor commands on `/cmd_vel` updates.
- MCU-to-host traffic is often periodic, such as encoder, IMU, or battery telemetry at a fixed rate.
- Communication timeouts should trigger a safety response, especially for mobility hardware.
- Error counters and diagnostic publication are worth the small effort because they expose flaky wiring and noisy links early.
- If packet payloads can contain framing bytes, use byte stuffing or a framing approach like COBS.

## Where This Helps in Real Robots

- motor controller bridges
- custom battery or sensor boards
- Teensy or STM32 companion microcontrollers
- watchdog and safety channels
- telemetry streams that must keep working under electrical noise

## When to Read the Original Source

Go to the original skill when you want concrete packet examples, CRC implementation details, parser logic, and a host/MCU communication pattern that can be adapted directly into a project.
