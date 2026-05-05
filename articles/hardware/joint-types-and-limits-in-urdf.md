---
title: "Joint Types and Limits in URDF"
summary: "How URDF joint choices and limits shape what the rest of the robot stack believes is mechanically possible."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "joint-types-and-limits/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/joint-types-and-limits/SKILL.md"
tags: ["ros2", "urdf", "joints", "limits", "robot-model"]
related: ["articles/foundations/urdf-fundamentals.md", "articles/hardware/collision-geometry-in-urdf.md", "articles/hardware/servo-control-patterns.md"]
---

# Joint Types and Limits in URDF

Source: [ros2-copilot-skills joint types and limits skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/joint-types-and-limits/SKILL.md)

## Why This Matters

Joint definitions tell the rest of the ROS 2 stack what motion is possible. If the joint type or limits are wrong, robot_state_publisher, simulation, and control will all inherit the wrong mechanical story.

## Distilled Takeaways

- Joint type defines the kind of motion a link relationship can have.
- Joint limits communicate mechanical boundaries and should be realistic.
- Incorrect limits cause either artificial restriction or unsafe optimism.
- Joint modeling decisions propagate into control and simulation behavior.

## Practical Guidance

- Match joint type and limits to the real mechanism, not just the nearest convenient XML option.
- Review limits after changing actuators or link geometry.
- Keep units and frame assumptions explicit.
- Test the model in visualization or simulation to confirm expected motion.

## Corroborating References

- [URDF tutorials](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/URDF/Building-a-Visual-Robot-Model-with-URDF-from-Scratch.html)
- [robot_state_publisher repository](https://github.com/ros/robot_state_publisher)

## When to Read the Original Source

Go to the original skill when you want the practical reading of URDF joint semantics and the common mistakes around limits and motion types.