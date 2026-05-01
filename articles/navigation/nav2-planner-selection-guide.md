---
title: "Nav2 Planner Selection Guide"
summary: "How to choose between NavFn, SMAC 2D, Hybrid-A*, Lattice, and Theta* based on robot kinematics, map size, path quality needs, and debugging evidence."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "planner-comparison/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/planner-comparison/SKILL.md"
tags: ["ros2", "nav2", "planner", "navfn", "smac", "theta-star"]
related: ["articles/navigation/nav2-controller-selection-guide.md", "articles/navigation/nav2-architecture-and-tuning-guide.md", "articles/navigation/nav2-yaml-parameter-structure.md"]
---

# Nav2 Planner Selection Guide

Source: [ros2-copilot-skills planner comparison skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/planner-comparison/SKILL.md)

## Why This Matters

Planner choice affects path shape, compute time, and how much burden falls on the controller. Switching planners can help, but many teams switch too early when the real problem is still costmap quality or controller tuning.

## Distilled Takeaways

- Differential-drive indoor robots usually start well with NavFn or SMAC 2D.
- Ackermann-like robots often need kinematically aware planners such as Hybrid-A* or Lattice.
- Theta* can be a useful middle ground when 2D paths need to be less jagged.
- Planner selection should follow robot kinematics and task shape, not fashion.
- If costmaps are wrong, changing planners usually just changes the style of failure.

## Practical Guidance

- Fix costmap and TF issues before planner shopping.
- Add a smoother before escalating to more complex planners if path roughness is the main complaint.
- Keep runtime planner switching available if your robot has different navigation modes.
- Benchmark in your real environment, not in abstract preference tables alone.

## Corroborating References

- [Nav2 planner plugins documentation](https://docs.nav2.org/plugins/index.html)
- [Nav2 tuning guide](https://docs.nav2.org/tuning/index.html)

## When to Read the Original Source

Go to the original skill when you want a fuller decision matrix, recommended upgrade path, and concrete guidance for differential, ackermann, and holonomic robots.