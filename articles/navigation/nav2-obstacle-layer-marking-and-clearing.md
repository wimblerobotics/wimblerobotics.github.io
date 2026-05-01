---
title: "Nav2 Obstacle Layer: Marking and Clearing"
summary: "How the obstacle layer turns live scans into marks and free-space clearing, and which source parameters usually explain phantom obstacles or missing hazards."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "obstacle-layer/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/obstacle-layer/SKILL.md"
tags: ["ros2", "nav2", "navigation", "costmaps", "lidar", "jazzy"]
related: ["articles/navigation/nav2-local-costmap-configuration.md", "articles/navigation/nav2-inflation-layer-tuning.md", "articles/navigation/nav2-voxel-layer-for-3d-obstacles.md"]
---

# Nav2 Obstacle Layer: Marking and Clearing

Source: [obstacle-layer](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/obstacle-layer/SKILL.md)

## Why This Matters

The obstacle layer is where most robots decide what is currently in the way. If its marking and clearing rules are wrong, the robot either invents obstacles that do not exist or misses ones that do.

## Distilled Takeaways

- `marking` and `clearing` are separate behaviors. Good obstacle handling usually needs both.
- `obstacle_range` defines how far detections can create obstacles. `raytrace_range` defines how far beams can clear free space.
- `raytrace_range` should be at least as large as `obstacle_range`, or marked cells can persist unnaturally.
- Observation-source order is not the same as plugin order. Sources within the layer are combined; the layer itself still participates in the broader plugin sequence.
- `footprint_clearing_enabled` is often useful because it prevents the robot from treating its own occupied footprint area as blocked.

## Practical Guidance

- Keep the source list explicit and per-sensor parameters honest. Do not copy lidar distances into depth cameras or vice versa.
- If phantom obstacles remain after the robot moves away, inspect clearing first, then source update rate, then TF.
- If thin or low objects are missed, the limitation may be sensing geometry rather than planner tuning.
- Use multiple observation sources in one layer only when they represent compatible 2D projection logic.

## Debugging Checklist

- Verify the sensor topic is live and timestamped correctly.
- Confirm the sensor frame exists in TF.
- Check whether `clearing: true` is actually enabled.
- Confirm `expected_update_rate` and stale-data handling fit the device.
- Compare `obstacle_range` and `raytrace_range`.

## Corroborating References

- [Nav2 obstacle layer configuration](https://docs.nav2.org/configuration/packages/costmap-plugins/obstacle.html)
- [LaserScan message definition](https://docs.ros.org/en/ros2_packages/jazzy/api/sensor_msgs/msg/LaserScan.html)
- [PointCloud2 message definition](https://docs.ros.org/en/ros2_packages/jazzy/api/sensor_msgs/msg/PointCloud2.html)

## When to Read the Original Source

Read the source skill when you need the exact meaning of per-source parameters like `marking`, `clearing`, `obstacle_range`, `raytrace_range`, and height filters, or when you are diagnosing stale obstacle cells.