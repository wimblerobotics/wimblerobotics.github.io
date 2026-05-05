---
title: "Theta* Planner"
summary: "How Theta* fits into the Nav2 planner landscape when you want straighter, more direct path structure than a strict grid shortest path tends to provide."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "theta-star-planner/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/theta-star-planner/SKILL.md"
tags: ["ros2", "nav2", "planner", "theta-star", "global-planning"]
related: ["articles/navigation/navfn-planner-basics-and-when-to-use-it.md", "articles/navigation/smac-planner-2d.md", "articles/navigation/nav2-planner-selection-guide.md"]
---

# Theta* Planner

Source: [ros2-copilot-skills Theta* skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/theta-star-planner/SKILL.md)

## Why This Matters

Some global paths are technically valid but unnecessarily grid-like. Theta* is valuable when more direct, line-of-sight-friendly path structure improves the downstream control problem and produces routes that feel less artificial.

## Distilled Takeaways

- Theta* can produce more direct path structures than strict grid-constrained shortest paths.
- The benefit is clearest when global path geometry materially affects controller behavior.
- It is still a planner choice that depends on environment shape and controller needs.
- Better-looking paths are only helpful if they remain robust in real costmap conditions.

## Practical Guidance

- Use Theta* when grid artifacts are clearly degrading the global path.
- Compare path directness and controller-followability, not just planner runtime.
- Verify the costmap and inflation settings before attributing awkward paths to the planner alone.
- Keep simpler planners in mind if the operational benefit is small.

## Corroborating References

- [Nav2 planner plugins docs](https://docs.nav2.org/plugins/index.html)
- [Nav2 tuning guide](https://docs.nav2.org/tuning/index.html)

## When to Read the Original Source

Go to the original skill when you want the Theta*-specific considerations and comparison notes relative to NavFn and SMAC 2D.