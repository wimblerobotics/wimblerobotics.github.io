---
title: "udev Rules for Robot Devices"
summary: "Why persistent device naming matters on robots and how udev rules reduce serial-port roulette across reboots."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "udev-rules/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/udev-rules/SKILL.md"
tags: ["ros2", "udev", "linux", "devices", "devops"]
related: ["articles/devops/systemd-autostart-for-robots.md", "articles/hardware/serial-protocols-between-ros2-and-microcontrollers.md", "articles/hardware/teensy-platformio-with-ros2.md"]
---

# udev Rules for Robot Devices

Source: [ros2-copilot-skills udev rules skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/udev-rules/SKILL.md)

## Why This Matters

Robots often depend on multiple USB or serial devices that should be addressed consistently. udev rules help make device identity stable enough for reliable bringup and service management.

## Distilled Takeaways

- Persistent naming prevents hardware enumeration order from breaking launch files.
- Device identity should be based on stable attributes, not port luck.
- udev rules are part of deployment reproducibility.
- Stable device names reduce operator error and boot-time surprises.

## Practical Guidance

- Create predictable names for robot-critical serial and USB devices.
- Keep rules versioned with the rest of the robot configuration.
- Test naming after reboot and reconnect events.
- Document which physical device maps to each persistent path.

## Corroborating References

- [udev man page](https://man7.org/linux/man-pages/man7/udev.7.html)
- [systemd documentation](https://www.freedesktop.org/software/systemd/man/systemd.device.html)

## When to Read the Original Source

Go to the original skill when you want the practical rule-writing guidance and the device-stability mindset that matters on deployed robots.