---
title: "Collision Geometry in URDF"
summary: "Why collision geometry should be simpler and more intentional than visual geometry, especially when planning and simulation depend on it."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "collision-geometry/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/collision-geometry/SKILL.md"
tags: ["ros2", "urdf", "collision", "robot-model", "hardware"]
related: ["articles/foundations/urdf-fundamentals.md", "articles/hardware/joint-types-and-limits-in-urdf.md", "articles/hardware/urdf-and-gazebo-plugins.md"]
---

# Collision Geometry in URDF

Source: [ros2-copilot-skills collision geometry skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/collision-geometry/SKILL.md)

## Why This Matters

Collision geometry affects motion planning, safety margins, and simulation interactions. If it is overly detailed, too optimistic, or simply wrong, downstream systems reason about the wrong robot shape.

## Distilled Takeaways

- Collision geometry should be accurate enough to protect behavior but simple enough to compute efficiently.
- Visual meshes are rarely the right collision representation unchanged.
- Overly tight geometry can create false confidence in narrow spaces.
- Overly coarse geometry can unnecessarily reduce navigable space or produce unrealistic contact behavior.

## Practical Guidance

- Use simplified collision shapes that approximate the real robot envelope well.
- Validate the collision model against real clearances that matter.
- Treat collision geometry as separate from cosmetic visuals.
- Revisit collision shapes when the robot payload or external accessories change.

## Corroborating References

- [URDF tutorials](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/URDF/Adding-Physical-and-Collision-Properties-to-a-URDF-Model.html)
- [MoveIt robot modeling concepts](https://moveit.picknik.ai/)

## When to Read the Original Source

Go to the original skill when you want the practical advice for shaping collision models that support planning and simulation without misleading either.