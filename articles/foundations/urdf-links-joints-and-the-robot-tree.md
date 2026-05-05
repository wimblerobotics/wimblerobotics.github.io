---
title: "URDF Links, Joints, and the Robot Tree"
summary: "A simple structural guide to URDF that focuses on links, joints, and the tree shape they must form before higher-level modeling details matter."
source_repo: "wimblerobotics/Robotics_Book"
source_path: "book/elements_of_a_urdf.md"
source_url: "https://github.com/wimblerobotics/Robotics_Book/blob/main/book/elements_of_a_urdf.md"
tags: ["ros2", "urdf", "robot-model", "foundations", "joints"]
related: ["articles/foundations/urdf-fundamentals.md", "articles/foundations/urdf-as-a-frame-translation-system.md", "articles/hardware/joint-types-and-limits-in-urdf.md"]
---

# URDF Links, Joints, and the Robot Tree

Source: [Robotics_Book URDF structure chapter](https://github.com/wimblerobotics/Robotics_Book/blob/main/book/elements_of_a_urdf.md)

## Why This Matters

Many URDF problems happen before collision geometry, inertias, or simulation plugins enter the picture. If the model does not form a clean tree of links and joints with one root robot element, the rest of the stack inherits a bad structural description.

## Distilled Takeaways

- URDF is fundamentally a tree of links connected by joints under one `robot` root element.
- Links describe rigid bodies; joints describe how those bodies connect and move relative to each other.
- The structural tree matters because TF, visualization, and robot-state reasoning all build on it.
- Gazebo-specific additions are useful, but they sit beside the core robot-description model rather than replacing it.

## Practical Value

- Start URDF debugging by checking tree structure and parent-child relationships first.
- Make sure every non-root link has exactly one parent joint relationship.
- Separate the core robot description from simulator-specific extras mentally, even when they live in nearby XML.
- Use this view when a robot model feels confusing before you get lost in visuals or inertial data.

## Corroborating References

- [URDF tutorials](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/URDF/URDF-Main.html)
- [robot_state_publisher repository](https://github.com/ros/robot_state_publisher)

## When to Read the Original Source

Go to the original chapter when you want a plain-language walkthrough of the major URDF elements and the structural relationship between the `robot`, `link`, `joint`, `material`, `transmission`, and `gazebo` elements.