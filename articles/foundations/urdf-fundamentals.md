---
title: "URDF Fundamentals"
summary: "The core mental model for URDF so links, joints, visuals, collisions, and inertias read as a coherent robot description instead of XML trivia."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "urdf-fundamentals/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/urdf-fundamentals/SKILL.md"
tags: ["ros2", "urdf", "robot-model", "tf", "foundations"]
related: ["articles/foundations/urdf-as-a-frame-translation-system.md", "articles/foundations/xacro-macros-for-robot-models.md", "articles/hardware/joint-types-and-limits-in-urdf.md"]
---

# URDF Fundamentals

Source: [ros2-copilot-skills URDF fundamentals skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/urdf-fundamentals/SKILL.md)

## Why This Matters

URDF is the structural description that many other ROS 2 tools quietly depend on. If the model is confused, TF, visualization, planning, and simulation all become harder to trust.

## Distilled Takeaways

- URDF describes the robot as links and joints with geometry and physical properties.
- A good URDF is both a kinematic model and a communication tool for the rest of the stack.
- Clean naming and realistic structure matter more than visual completeness alone.
- Robot modeling errors usually show up downstream in places that look unrelated at first.

## Practical Guidance

- Build the URDF around real robot structure, not only what looks tidy in XML.
- Validate the model in RViz and TF before depending on it elsewhere.
- Keep frames, joint names, and dimensions consistent across code and hardware.
- Treat the robot model as maintained infrastructure, not a one-time file.

## Corroborating References

- [URDF tutorials](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/URDF/URDF-Main.html)
- [robot_state_publisher repository](https://github.com/ros/robot_state_publisher)

## When to Read the Original Source

Go to the original skill when you want the practical orientation to URDF concepts and the reminders that make the rest of the robot-model pipeline easier to reason about.