---
title: "SMAC Lattice Planner"
summary: "When the lattice variant of SMAC is the right global planner and why motion-model-aware planning can justify the extra complexity."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "smac-lattice-planner/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/smac-lattice-planner/SKILL.md"
tags: ["ros2", "nav2", "planner", "smac", "lattice"]
related: ["articles/navigation/smac-planner-hybrid-a-star.md", "articles/navigation/nav2-planner-selection-guide.md", "articles/navigation/nav2-global-costmap-configuration.md"]
---

# SMAC Lattice Planner

Source: [ros2-copilot-skills SMAC lattice skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/smac-lattice-planner/SKILL.md)

## Why This Matters

Some robots need the global planner to respect more of the vehicle's motion structure than a generic 2D shortest path. The lattice variant of SMAC is attractive when motion feasibility and orientation-aware planning matter enough to justify the additional complexity.

## Distilled Takeaways

- Lattice planning is useful when the vehicle motion model matters materially to path quality.
- It is more complex than plain 2D planning but can produce paths that are more meaningful for constrained platforms.
- The value comes when planning realism reduces downstream control pain.
- It should be chosen for a vehicle and environment reason, not just because it sounds more advanced.

## Practical Guidance

- Use the lattice planner when kinematic feasibility needs to be respected earlier in planning.
- Compare against simpler planners on real paths and controller outcomes.
- Keep the motion-model assumptions aligned with the actual vehicle.
- Expect more configuration and testing than with basic 2D planners.

## Corroborating References

- [Nav2 planner plugins docs](https://docs.nav2.org/plugins/index.html)
- [Nav2 tuning guide](https://docs.nav2.org/tuning/index.html)

## When to Read the Original Source

Go to the original skill when you want SMAC lattice-specific setup, tradeoffs, and selection guidance relative to the other planners.