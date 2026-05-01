---
title: "Nav2 Voxel Layer for 3D Obstacles"
summary: "When to use the voxel layer instead of a plain obstacle layer, how 3D raycasting changes clearing behavior, and which Z parameters matter for depth cameras and mixed-height sensors."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "voxel-layer/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/voxel-layer/SKILL.md"
tags: ["ros2", "nav2", "navigation", "costmaps", "depth", "pointclouds", "jazzy"]
related: ["articles/navigation/nav2-local-costmap-configuration.md", "articles/navigation/nav2-obstacle-layer-marking-and-clearing.md", "articles/perception/vision-depth-and-lidar-pipelines.md"]
---

# Nav2 Voxel Layer for 3D Obstacles

Source: [voxel-layer](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/voxel-layer/SKILL.md)

## Why This Matters

Robots with depth cameras, tilted sensors, or obstacles at multiple heights can produce misleading 2D obstacle maps. The voxel layer exists to preserve enough vertical structure that clearing and marking remain physically plausible.

## Distilled Takeaways

- Use `VoxelLayer` when your obstacle problem is genuinely 3D, not just when you happen to have a `PointCloud2` topic.
- The voxel grid tracks vertical occupancy per cell, so clearing is done in 3D rather than by flattening everything into a single 2D plane.
- `origin_z`, `z_resolution`, and `z_voxels` define the monitored vertical span.
- `mark_threshold` controls how many occupied voxels in a column are needed before the 2D costmap sees that column as occupied.
- `publish_voxel_map` is excellent for debugging and expensive for steady-state production.

## Practical Guidance

- Prefer a single voxel layer with multiple observation sources over multiple independent voxel layers.
- Match `max_obstacle_height` to the vertical extent you actually want to model. Points above the grid are silently ignored.
- Use a small positive `min_obstacle_height` for depth sensors if ground hits are polluting the costmap.
- Keep the local costmap window modest. A voxel layer is usually worth the extra compute only in the near field.

## When Voxel Layer Solves Real Problems

- A depth camera detects an object on a table while a low lidar sees through the lower space.
- A tilted sensor sees the ground at some ranges and needs 3D ray geometry to avoid false marks.
- A robot must represent overhangs, shelves, or mixed-height clutter more faithfully than a flat projection allows.

## Corroborating References

- [Nav2 voxel layer configuration](https://docs.nav2.org/configuration/packages/costmap-plugins/voxel.html)
- [Nav2 costmap plugin documentation](https://docs.nav2.org/configuration/packages/configuring-costmaps.html)

## When to Read the Original Source

Read the source skill when you need the voxel-specific parameters, memory model, debugging workflow with `publish_voxel_map`, or a concrete explanation of why 3D raycasting clears differently than the standard obstacle layer.