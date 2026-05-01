---
title: "Nav2 Static Layer and Map Ingestion"
summary: "How the static layer imports map_server output into the global costmap, when transient-local QoS matters, and how trinary versus raw map interpretation affects planning."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "static-layer/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/static-layer/SKILL.md"
tags: ["ros2", "nav2", "navigation", "maps", "costmaps", "jazzy"]
related: ["articles/navigation/nav2-global-costmap-configuration.md", "articles/navigation/nav2-costmap-architecture-and-plugin-order.md", "articles/navigation/localization-state-estimation-and-frame-discipline.md"]
---

# Nav2 Static Layer and Map Ingestion

Source: [static-layer](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/static-layer/SKILL.md)

## Why This Matters

The static layer is the normal bridge from `map_server` into Nav2 planning. When it is configured badly, the global planner is effectively solving the wrong world model.

## Distilled Takeaways

- The static layer is usually foundational for the global costmap and usually unnecessary for the local costmap.
- `map_subscribe_transient_local: true` is a practical default because it lets late-joining subscribers receive the latched map.
- `subscribe_to_updates` matters mainly for live map updates during SLAM or dynamic map-serving workflows.
- `trinary_costmap: true` is the common baseline because it collapses the map into free, occupied, and unknown states.
- Map resolution and origin alignment matter as much as occupancy content.

## Practical Guidance

- Keep the global costmap sourced from the same authoritative map topic that localization and planning expect.
- Use trinary interpretation unless you have a strong reason to preserve probabilistic intermediate map values.
- If the static layer appears empty, check QoS and startup order before debugging the planner.
- If the map looks blurred or misaligned, inspect the map metadata before touching navigation parameters.

## Common Failure Modes

- Starting Nav2 and map server with incompatible QoS expectations.
- Adding static layer to the local rolling costmap and creating stale structural data in a product that should be sensor-driven.
- Mismatched origin or resolution between the map and policy masks.

## Corroborating References

- [Nav2 static layer configuration](https://docs.nav2.org/configuration/packages/costmap-plugins/static.html)
- [Nav2 map server configuration](https://docs.nav2.org/configuration/packages/map_server/configuring-map-server.html)
- [slam_toolbox](https://docs.ros.org/en/ros2_packages/jazzy/api/slam_toolbox/)

## When to Read the Original Source

Read the source skill when you need a concrete global-costmap example with `static_layer`, the meaning of `trinary_costmap`, or the startup/QoS rationale for transient-local map subscription.