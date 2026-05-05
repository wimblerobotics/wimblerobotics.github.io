---
title: "Nav2 Speed-Restricted Zones"
summary: "How to define map regions that cap robot speed, when percentage-based speed masks are easier to maintain, and which controllers actually honor speed limits cleanly."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "speed-restricted-zones/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/speed-restricted-zones/SKILL.md"
tags: ["ros2", "nav2", "navigation", "costmaps", "safety", "controller", "jazzy"]
related: ["articles/navigation/nav2-keepout-zones-and-no-go-areas.md", "articles/navigation/nav2-controller-selection-guide.md", "articles/navigation/nav2-global-costmap-configuration.md"]
---

# Nav2 Speed-Restricted Zones

Source: [speed-restricted-zones](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/speed-restricted-zones/SKILL.md)

## Why This Matters

Many environments do not need a full keepout. They need slower motion: near people, near ramps, beside fragile equipment, or in visually ambiguous spaces. Speed filters let you encode that policy without inventing fake obstacles.

## Distilled Takeaways

- Speed zones are built from a mask map plus a `SpeedFilter`, analogous to keepout filters but with graded behavior.
- Percentage-based limits are usually easier to reason about than absolute speed maps because they scale with robot configuration.
- The controller must actually honor the published speed-limit topic, or the filter adds complexity with no effect.
- White-versus-black semantics in the underlying image and OccupancyGrid conversion are easy to get wrong; validate them visually.
- Speed-restricted zones complement keepout zones rather than replacing them.

## Practical Guidance

- Use percentage mode unless you have a fixed operational requirement in meters per second.
- Validate controller support before depending on the feature. MPPI and Regulated Pure Pursuit handle it well; DWB usually needs extra work.
- Keep masks sparse and intentional. Too many speed zones make behavior hard to predict and harder to explain.
- Use RViz or topic inspection to confirm that speed-limit messages change as the robot moves through the map.

## Good Use Cases

- Crowded shared hallways.
- Ramps or traction-sensitive surfaces.
- Manipulation approach zones near people or equipment.
- Areas where perception quality drops and slower motion materially improves safety.

## Corroborating References

- [Nav2 speed filter configuration](https://docs.nav2.org/configuration/packages/costmap-plugins/speed_filter.html)
- [Nav2 MPPI controller docs](https://docs.nav2.org/configuration/packages/configuring-mppic.html)
- [Nav2 Regulated Pure Pursuit docs](https://docs.nav2.org/configuration/packages/configuring-regulated-pp.html)

## When to Read the Original Source

Read the source skill when you need the mask-value mapping details, the `costmap_filter_info_server` setup for speed filtering, or a controller-specific note about where native speed-limit support exists.