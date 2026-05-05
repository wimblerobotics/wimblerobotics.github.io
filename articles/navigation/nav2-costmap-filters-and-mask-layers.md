---
title: "Nav2 Costmap Filters and Mask Layers"
summary: "How to use costmap filters for keepout, speed, and spatial policy overlays when obstacle layers alone are not enough to express robot behavior."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "costmap-filters/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/costmap-filters/SKILL.md"
tags: ["ros2", "nav2", "costmaps", "filters", "keepout", "speed-limits"]
related: ["articles/navigation/nav2-keepout-zones-and-no-go-areas.md", "articles/navigation/nav2-speed-restricted-zones.md", "articles/navigation/nav2-costmap-architecture-and-plugin-order.md"]
---

# Nav2 Costmap Filters and Mask Layers

Source: [ros2-copilot-skills costmap filters skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/costmap-filters/SKILL.md)

## Why This Matters

Obstacle layers tell the robot where things are. Costmap filters tell it how to behave in specific places. That distinction matters whenever the robot should avoid some areas, slow down in others, or follow environment-specific policy rather than just raw geometry.

## Distilled Takeaways

- Costmap filters are for spatial policy, not just obstacle marking.
- Filter masks let you encode keepout zones, speed restrictions, and similar map-anchored behavior.
- Filters work best when the map, mask, and robot frame conventions are aligned cleanly.
- This mechanism is a strong fit for indoor service robots, warehouses, and mixed human-robot environments.

## Practical Guidance

- Use filters when you need the robot to behave differently by location, not merely avoid obstacles.
- Keep the semantic meaning of each mask explicit and documented.
- Validate alignment between the base map and the filter mask visually before tuning downstream behavior.
- Treat costmap filters as operational policy that may change over time, not hardcoded design facts.

## Corroborating References

- [Nav2 costmap filters docs](https://docs.nav2.org/configuration/packages/configuring-costmaps.html)
- [Nav2 concepts: costmap filters](https://docs.nav2.org/concepts/index.html#environmental-representation)

## When to Read the Original Source

Go to the original skill when you want the filter-mask mental model, deployment patterns, and concrete examples for keepout and speed-restriction overlays.