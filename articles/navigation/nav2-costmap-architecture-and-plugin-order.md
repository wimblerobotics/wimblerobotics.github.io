---
title: "Nav2 Costmap Architecture and Plugin Order"
summary: "How Nav2 costmaps are built from ordered plugins, why layer order changes behavior, and which parameters usually explain stale obstacles, missing inflation, or inconsistent plans."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "costmap-architecture/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/costmap-architecture/SKILL.md"
tags: ["ros2", "nav2", "navigation", "costmaps", "jazzy"]
related: ["articles/navigation/nav2-global-costmap-configuration.md", "articles/navigation/nav2-local-costmap-configuration.md", "articles/navigation/nav2-inflation-layer-tuning.md", "articles/navigation/nav2-costmap-filters-and-mask-layers.md", "articles/navigation/nav2-denoise-layer-for-noisy-depth-sensors.md", "articles/navigation/nav2-range-sensor-layer-for-close-obstacles.md"]
---

# Nav2 Costmap Architecture and Plugin Order

Source: [costmap-architecture](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/costmap-architecture/SKILL.md)

## Why This Matters

Most Nav2 path-quality and collision-margin problems are not planner bugs. They come from costmap construction: the wrong frame, the wrong update timing, or a plugin sequence that causes one layer to overwrite or dilute another.

## Distilled Takeaways

- A Nav2 costmap is not a single map. It is a master grid assembled from ordered plugins, and order is part of the algorithm.
- Global and local costmaps should usually solve different problems. Global costmaps carry map structure and planning-scale context; local costmaps carry immediate obstacle truth near the robot.
- Inflation should normally run last so earlier layers can mark lethal or unknown cells before inflation expands their cost gradients.
- Timing parameters matter operationally. A good plugin stack with poor `update_frequency`, `publish_frequency`, or `transform_tolerance` still produces laggy or inconsistent behavior.
- Cost interpretation matters: free is `0`, unknown is typically `255`, lethal is `254`, and intermediate values carry the soft gradient that planners and controllers use differently.

## Practical Guidance

- Treat the `plugins` list as ordered logic, not an unordered registry. If you move layers around, expect behavior to change.
- Put structural map content first, dynamic obstacle content next, policy filters after that, and inflation last.
- Use the global costmap to answer "where can I reasonably plan through the mapped world?" Use the local costmap to answer "what can I safely drive through right now?"
- Keep `raytrace_range` at least as large as `obstacle_range` for clearing layers, or stale obstacle marks will accumulate.
- If the robot seems to hug walls, clip corners, or refuse narrow corridors, inspect the costmap before replacing the planner or controller.

## Typical Layer Sequences

Global costmap often starts from a pattern like:

```yaml
plugins: ["static_layer", "obstacle_layer", "keepout_filter", "speed_filter", "inflation_layer"]
```

Local costmap often starts from a pattern like:

```yaml
plugins: ["voxel_layer", "range_sensor_layer", "keepout_filter", "inflation_layer"]
```

The exact list varies by robot, but the sequence is deliberate: map and sensed obstacles first, policy overlays next, inflation last.

## High-Value Parameters to Check First

- `global_frame`
- `robot_base_frame`
- `resolution`
- `update_frequency`
- `publish_frequency`
- `transform_tolerance`
- `always_send_full_costmap`
- `track_unknown_space`
- Per-layer `combination_method`

These explain a large fraction of real-world Nav2 failures.

## Corroborating References

- [Nav2 costmap configuration guide](https://docs.nav2.org/configuration/packages/configuring-costmaps.html)
- [Nav2 costmap 2d package docs](https://docs.nav2.org/configuration/packages/configuring-costmaps.html#costmap2d-ros-parameters)
- [Nav2 tuning guide](https://docs.nav2.org/tuning/index.html)

## When to Read the Original Source

Read the source skill when you want the exact cell-value conventions, plugin ordering rules, or a compact refresher on how the master costmap update loop combines layers.