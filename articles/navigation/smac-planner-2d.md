---
title: "SMAC Planner 2D"
summary: "When SMAC 2D is the right upgrade from simpler planners and how to think about its place in the Nav2 planner lineup."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "smac-planner-2d/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/smac-planner-2d/SKILL.md"
tags: ["ros2", "nav2", "planner", "smac", "2d"]
related: ["articles/navigation/navfn-planner-basics-and-when-to-use-it.md", "articles/navigation/nav2-planner-selection-guide.md", "articles/navigation/theta-star-planner.md"]
---

# SMAC Planner 2D

Source: [ros2-copilot-skills SMAC 2D skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/smac-planner-2d/SKILL.md)

## Why This Matters

SMAC 2D occupies a practical middle ground: it remains a 2D grid-based planner while offering more sophistication than a very basic shortest-path planner. That makes it a useful option when the robot needs better path quality but not necessarily a richer motion model.

## Distilled Takeaways

- SMAC 2D is still fundamentally a 2D planner, but with stronger planning characteristics than simpler baseline options.
- It can be a good upgrade path when NavFn feels too limited.
- Planner choice should still be grounded in environment structure and controller behavior.
- Better planning only helps if localization and costmaps are already trustworthy.

## Practical Guidance

- Evaluate SMAC 2D when you want better global behavior without committing to motion-model-heavy planning.
- Compare the resulting paths against NavFn in the actual maps your robot uses.
- Watch whether improved global plans meaningfully help the local controller.
- Avoid planner churn unless a real mission issue justifies it.

## Corroborating References

- [Nav2 planner plugins docs](https://docs.nav2.org/plugins/index.html)
- [Nav2 tuning guide](https://docs.nav2.org/tuning/index.html)

## When to Read the Original Source

Go to the original skill when you want the SMAC 2D-specific tuning and the practical comparison against NavFn and the other planners.