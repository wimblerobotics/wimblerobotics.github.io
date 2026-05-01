---
title: "Nav2 Inflation Layer Tuning"
summary: "How the inflation layer turns lethal cells into traversability gradients, why cost scaling is unintuitive at first, and how to tune for wall clearance without blocking the map."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "inflation-layer/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/inflation-layer/SKILL.md"
tags: ["ros2", "nav2", "navigation", "costmaps", "tuning", "jazzy"]
related: ["articles/navigation/nav2-costmap-architecture-and-plugin-order.md", "articles/navigation/nav2-global-costmap-configuration.md", "articles/navigation/nav2-local-costmap-configuration.md"]
---

# Nav2 Inflation Layer Tuning

Source: [inflation-layer](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/inflation-layer/SKILL.md)

## Why This Matters

Inflation is the bridge between raw obstacle truth and planner behavior. Without it, plans cut corners unrealistically. With poor tuning, the robot either scrapes walls or decides ordinary hallways are unnavigable.

## Distilled Takeaways

- Inflation should usually be the last layer in the plugin list.
- `inflation_radius` defines how far cost spreads from lethal cells.
- `cost_scaling_factor` changes how quickly that cost decays with distance.
- The unintuitive part: higher `cost_scaling_factor` means steeper decay, which often lets paths run closer to walls.
- Robot footprint geometry matters because the inscribed radius anchors where high costs begin to matter.

## Practical Guidance

- Tune `inflation_radius` from corridor and furniture geometry first, then tune `cost_scaling_factor` for path centering behavior.
- If the robot hugs walls, try a lower `cost_scaling_factor` or a slightly larger inflation radius.
- If doorways become unusable, inflation is probably too broad for the actual footprint and environment.
- When comparing planners or controllers, freeze inflation tuning first. Otherwise you are changing the optimization landscape while blaming the downstream algorithm.

## What the Gradient Is Doing

The inflation layer converts a hard obstacle boundary into a cost field. Planners use that field to prefer safer paths, and some controllers also use it directly in their local scoring. That is why inflation tuning changes both route choice and tracking behavior.

## Corroborating References

- [Nav2 inflation layer configuration](https://docs.nav2.org/configuration/packages/costmap-plugins/inflation.html)
- [Nav2 tuning guide](https://docs.nav2.org/tuning/index.html)

## When to Read the Original Source

Read the source skill when you want the exact inflation cost formula, a sharper explanation of how `cost_scaling_factor` changes path-wall distance, or a compact set of indoor tuning heuristics.