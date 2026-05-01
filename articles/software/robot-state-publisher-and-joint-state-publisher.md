---
title: "robot_state_publisher and joint_state_publisher"
summary: "How URDF becomes a live TF tree in ROS 2, when joint_state_publisher helps, and how to keep visualization and navigation aligned with real joint sources."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "robot-state-publisher/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/robot-state-publisher/SKILL.md"
tags: ["ros2", "robot_state_publisher", "joint_state_publisher", "urdf", "tf", "xacro"]
related: ["articles/foundations/urdf-as-a-frame-translation-system.md", "articles/foundations/tf2-transforms-and-lookups.md", "articles/foundations/coordinate-frames-rep-105-and-navigation.md"]
---

# robot_state_publisher and joint_state_publisher

Source: [ros2-copilot-skills robot_state_publisher skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/robot-state-publisher/SKILL.md)

## Why This Matters

URDF is only useful to the live system once its frame structure reaches TF correctly. `robot_state_publisher` is the bridge that turns the robot description into runtime transforms, and misuse here can make a perfectly good URDF feel broken in RViz or Nav2.

## Distilled Takeaways

- `robot_state_publisher` publishes fixed-joint transforms from URDF and dynamic transforms from `/joint_states`.
- `joint_state_publisher` is primarily a development and test aid, not a substitute for real hardware state on production robots.
- Xacro launch wiring matters because the published robot description is part of the runtime contract.
- Namespaces and frame prefixes matter once you have multiple robots or multiple instances.
- Wheel and other driven joints should usually come from hardware or simulation, not from fake GUI-driven publishers.

## Practical Guidance

- Keep the source of truth for movable joints explicit.
- Use the GUI tool for visualization and debug, not production.
- Treat robot description publishing as part of bringup architecture.
- Audit frame prefixes carefully in multi-robot systems.

## Corroborating References

- [robot_state_publisher package docs](https://docs.ros.org/en/jazzy/p/robot_state_publisher/)
- [joint_state_publisher package docs](https://docs.ros.org/en/jazzy/p/joint_state_publisher/)

## When to Read the Original Source

Go to the original skill when you want launch snippets for xacro-based bringup, `source_list` behavior, multi-robot prefix examples, and differential-drive joint-state flow guidance.