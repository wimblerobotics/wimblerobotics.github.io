---
title: "Nav2 Range Sensor Layer for Close Obstacles"
summary: "How to use ultrasonic, IR, and time-of-flight range sensors in Nav2 costmaps for glass, low obstacles, and close-range blind spots that lidar often misses."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "range-sensor-layer/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/range-sensor-layer/SKILL.md"
tags: ["ros2", "nav2", "navigation", "costmaps", "sensors", "jazzy"]
related: ["articles/navigation/nav2-local-costmap-configuration.md", "articles/navigation/nav2-voxel-layer-for-3d-obstacles.md", "articles/hardware/ros2-hardware-integration-patterns.md"]
---

# Nav2 Range Sensor Layer for Close Obstacles

Source: [range-sensor-layer](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/range-sensor-layer/SKILL.md)

## Why This Matters

Short-range sensors catch classes of obstacles that 2D lidar often misses: glass, low objects below the scan plane, and obstacles inside the lidar minimum range. If you ignore them, the robot appears competent until it reaches exactly the awkward cases that matter in homes and labs.

## Distilled Takeaways

- `RangeSensorLayer` is designed for `sensor_msgs/Range`, not for generic scans or point clouds.
- `phi` should match the real beam width. Overstating it creates wedge-shaped false hazards.
- The layer uses a probabilistic model with `mark_threshold` and `clear_threshold`, rather than simple binary insertion.
- `clear_on_max_reading` is powerful when the device reliably reports max range as "nothing present."
- `combination_method: 1` is usually the safe choice so close-range sensor marks are not erased by other layers.

## Practical Guidance

- Use range sensors in the local costmap first. They are primarily a near-field safety supplement.
- Match `no_readings_timeout` to the actual publish rate so stale sensors fail safe without flapping.
- Mount these sensors where their special capability matters: glass height, bumper height, or lidar blind-spot regions.
- With multiple sensors, keep topics in one range sensor layer unless you have a compelling reason to isolate them.

## Good Use Cases

- Detecting glass doors or acrylic barriers.
- Catching foot-level or caster-height clutter below a lidar scan plane.
- Filling the dead zone immediately in front of the robot.

## Corroborating References

- [Nav2 range sensor layer configuration](https://docs.nav2.org/configuration/packages/costmap-plugins/range.html)
- [Range message definition](https://docs.ros.org/en/ros2_packages/jazzy/api/sensor_msgs/msg/Range.html)

## When to Read the Original Source

Read the source skill when you need the exact semantics of `phi`, `inflate_cone`, `mark_threshold`, `clear_threshold`, or the practical rule that `combination_method` should usually be maximum when this layer supplements lidar.