---
title: "Multi-Floor Mapping Strategies"
summary: "How to think about mapping buildings with multiple floors so maps, localization, and mission logic stay separable instead of collapsing into one giant ambiguous space."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "multi-floor-mapping/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/multi-floor-mapping/SKILL.md"
tags: ["ros2", "mapping", "multi-floor", "localization", "navigation"]
related: ["articles/navigation/map-merging-strategies.md", "articles/navigation/map-server-configuration.md", "articles/navigation/multi-goal-navigation-with-behavior-trees.md"]
---

# Multi-Floor Mapping Strategies

Source: [ros2-copilot-skills multi-floor mapping skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/multi-floor-mapping/SKILL.md)

## Why This Matters

Multi-floor environments add a conceptual layer to mapping: floor identity becomes part of navigation state. Treating the whole building as one naive 2D map usually creates more ambiguity than value.

## Distilled Takeaways

- Separate-floor maps are often easier to deploy and maintain than one forced global artifact.
- Floor selection becomes an autonomy and localization concern, not just a map-storage detail.
- Elevators, stairs, and transitions need explicit system logic around them.
- Multi-floor systems work best when map management and mission sequencing are kept clear.

## Practical Guidance

- Treat floor changes as explicit state transitions in the robot mission.
- Keep per-floor maps versioned independently.
- Define how the robot knows which floor map is active.
- Avoid overcomplicating global map structure when a simpler per-floor model is operationally clearer.

## Corroborating References

- [Nav2 map server docs](https://docs.nav2.org/configuration/packages/map_server/configuring-map-server.html)
- [REP 105 coordinate frame conventions](https://www.ros.org/reps/rep-0105.html)

## When to Read the Original Source

Go to the original skill when you want the practical multi-floor map-management patterns and the reasoning around transitions between floors.