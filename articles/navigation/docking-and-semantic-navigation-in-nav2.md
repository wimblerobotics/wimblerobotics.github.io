---
title: "Docking and Semantic Navigation in Nav2"
summary: "Why docking, keepout zones, speed limits, and map-anchored policy layers turn indoor navigation into a semantic workflow instead of a plain geometry problem."
source_repo: "ros-navigation/docs.nav2.org"
source_path: "Using Docking Server; Navigating with Keepout Zones; Navigating with Speed Limits"
source_url: "https://docs.nav2.org/tutorials/docs/using_docking.html"
tags: ["ros2", "nav2", "navigation", "docking", "costmaps", "semantics"]
related: ["articles/navigation/nav2-costmap-filters-and-mask-layers.md", "articles/navigation/behavior-trees-for-nav2-and-robot-autonomy.md", "articles/navigation/nav2-keepout-zones-and-no-go-areas.md", "articles/navigation/nav2-speed-restricted-zones.md", "articles/navigation/localization-state-estimation-and-frame-discipline.md"]
---

# Docking and Semantic Navigation in Nav2

Source: [Nav2 docking tutorial](https://docs.nav2.org/tutorials/docs/using_docking.html) and [Nav2 keepout-zones tutorial](https://docs.nav2.org/tutorials/docs/navigation2_with_keepout_filter.html)

## Why This Matters

Many indoor robots eventually hit a ceiling where plain path planning is no longer enough. The robot now needs to dock reliably, respect no-go and slow-go areas, and navigate in spaces where policy matters as much as obstacle geometry. At that point navigation becomes semantic: the map is no longer just occupancy, it also encodes what the robot is allowed to do in each area.

## Distilled Takeaways

- Docking is a specialized navigation workflow with its own staging, perception, retry, and success-detection logic.
- Nav2's Docking Server is built around plugins so dock pose refinement, contact detection, and charging detection can match the robot's hardware reality.
- Semantic indoor behavior often starts with costmap filters: keepout zones, preferred lanes, and speed restrictions encoded as map-anchored policy.
- Keepout and speed filters should usually be applied intentionally in both global and local costmaps so planning and execution respect the same environmental rules.
- Docking reliability improves when the final docking loop is decoupled from global localization drift, which is why using `odom` as the fixed frame for the close-in procedure is often the right move.

## Practical Workflow

1. Keep the global map and localization pipeline responsible for getting near the goal area.
2. Use filter masks to encode where the robot must not go, where it should slow down, and where lanes or staging areas matter.
3. Give docking its own dock database, prestaging offsets, and production-quality signals such as detected dock poses, battery state, and contact cues.
4. Test docking as a repeatability problem, not a one-time demo. Reliability over many attempts matters more than one successful video.
5. Treat semantics as an operational asset: map masks, dock IDs, and policy zones should be versioned with the same discipline as navigation parameters.

## Operational Notes

- If docking is invoked from a behavior tree, be explicit about whether Nav2 itself is allowed to navigate to the staging pose or whether the higher-level autonomy layer must prestage first.
- Keep dock instance data separate from general server configuration when one robot may operate in multiple environments.
- Validate filter-mask alignment against the base map visually before tuning planners around it.
- Use semantic constraints to simplify autonomy, not to hide localization or perception failures.

## Corroborating References

- [Nav2 docking tutorial](https://docs.nav2.org/tutorials/docs/using_docking.html)
- [Nav2 keepout-zones tutorial](https://docs.nav2.org/tutorials/docs/navigation2_with_keepout_filter.html)
- [Nav2 speed-zones tutorial](https://docs.nav2.org/tutorials/docs/navigation2_with_speed_filter.html)
- [Nav2 docking configuration guide](https://docs.nav2.org/configuration/packages/configuring-docking-server.html)

## When to Read the Original Source

Go to the original Nav2 docs when you want the exact docking plugin APIs, dock database configuration, action interfaces, or the mask-server and costmap-filter launch details for keepout and speed-zone deployments.