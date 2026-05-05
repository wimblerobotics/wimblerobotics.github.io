---
title: "Sensor Frame Mounting and Extrinsics"
summary: "Why sensor extrinsics are a first-order robotics problem, and how small mounting mistakes become large localization and perception problems later."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "sensor-frame-mounting/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/sensor-frame-mounting/SKILL.md"
tags: ["ros2", "tf", "frames", "extrinsics", "sensors"]
related: ["articles/navigation/localization-state-estimation-and-frame-discipline.md", "articles/foundations/urdf-as-a-frame-translation-system.md", "articles/perception/camera-calibration-for-ros2.md"]
---

# Sensor Frame Mounting and Extrinsics

Source: [ros2-copilot-skills sensor frame mounting skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/sensor-frame-mounting/SKILL.md)

## Why This Matters

Sensor extrinsics are the bridge between the physical robot and the software model of the robot. A few millimeters or degrees of error can show up as map distortion, bad obstacle placement, inconsistent fusion, or detections that seem to float in the wrong place.

## Distilled Takeaways

- Extrinsics are not metadata. They are geometry that the rest of the stack depends on.
- Mounting accuracy matters most when multiple sensors or world-model steps need to agree spatially.
- Small alignment errors compound quickly across mapping, localization, and perception chains.
- URDF and TF should describe real mounting, not idealized mounting.

## Practical Guidance

- Measure sensor placement carefully and revisit it after hardware changes.
- Validate extrinsics visually in RViz against real observed geometry.
- Treat unexplained map or perception offsets as possible extrinsic problems early.
- Document mounts and assumptions so future contributors know what changed.

## Corroborating References

- [REP 105 coordinate frame conventions](https://www.ros.org/reps/rep-0105.html)
- [tf2 tutorials](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/Tf2/Tf2-Main.html)

## When to Read the Original Source

Go to the original skill when you want the practical sensor-mounting reminders and the specific extrinsic failure modes that show up most often on mobile robots.