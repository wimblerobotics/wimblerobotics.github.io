---
title: "SMAC Planner Hybrid-A*"
summary: "Why Hybrid-A* planning matters for kinematically constrained robots and how to decide if that extra planning realism is worth it."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "smac-planner-hybrid-a-star/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/smac-planner-hybrid-a-star/SKILL.md"
tags: ["ros2", "nav2", "planner", "hybrid-a-star", "smac"]
related: ["articles/navigation/smac-lattice-planner.md", "articles/navigation/nav2-planner-selection-guide.md", "articles/navigation/nav2-controller-selection-guide.md"]
---

# SMAC Planner Hybrid-A*

Source: [ros2-copilot-skills Hybrid-A* skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/smac-planner-hybrid-a-star/SKILL.md)

## Why This Matters

Hybrid-A* matters when the robot's orientation and turning constraints materially shape whether a path is actually useful. For ackermann-like or constrained-motion vehicles, this can make the difference between a path that looks legal on a grid and a path the robot can actually follow well.

## Distilled Takeaways

- Hybrid-A* planning explicitly incorporates heading and motion constraints into global planning.
- It is most justified when simpler 2D planners produce paths that are hard for the vehicle to execute.
- The added complexity only pays off when the vehicle model and environment demand it.
- Planner realism and controller compatibility should be judged together.

## Practical Guidance

- Choose Hybrid-A* when the vehicle is not well served by unconstrained 2D path planning.
- Compare path-following outcomes, not just planner output visuals.
- Keep vehicle limits and footprint assumptions realistic.
- Test in maps with the tight turns and directional constraints that motivated the choice.

## Corroborating References

- [Nav2 planner plugins docs](https://docs.nav2.org/plugins/index.html)
- [Nav2 tuning guide](https://docs.nav2.org/tuning/index.html)

## When to Read the Original Source

Go to the original skill when you want the Hybrid-A* specific configuration and the practical tradeoffs against lattice and simpler 2D planning.