---
title: "LIDAR Driver Bringup and Frame Alignment"
summary: "How to bring a 2D lidar online in ROS 2 without mirrored maps, rotated scans, or frame IDs that quietly poison the rest of the stack."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "lidar-driver-config/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/lidar-driver-config/SKILL.md"
tags: ["ros2", "perception", "lidar", "drivers", "tf", "frames", "bringup"]
related: ["articles/perception/laser-scan-processing-and-filtering.md", "articles/foundations/coordinate-frames-rep-105-and-navigation.md", "articles/navigation/rviz-goals-bt-navigator-and-nav2-flow.md"]
---

# LIDAR Driver Bringup and Frame Alignment

Source: [ros2-copilot-skills lidar driver config skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/lidar-driver-config/SKILL.md)

## Why This Matters

Lidar bringup errors are deceptively expensive. A mirrored scan or a frame mounted a few centimeters off can create mapping distortion, poor localization, or costmap behavior that looks like algorithm failure. Many robots spend too long tuning Nav2 before confirming that the sensor geometry is even sane.

## Distilled Takeaways

- Driver parameters, frame IDs, scan direction, and URDF placement all contribute to the meaning of the scan.
- A scan that looks visually plausible in isolation can still be rotated or mirrored relative to `base_link`.
- The `frame_id` is not paperwork. It is the contract between the lidar and the robot TF tree.
- Inverted or offset mounting is normal, but it must be made explicit in TF or driver configuration.
- Multi-lidar setups add value only if their frames and merge strategy are trustworthy.

## Practical Guidance

- Verify the scan in RViz against the robot model before touching SLAM or costmap tuning.
- Measure the lidar mount carefully and encode it in URDF instead of relying on vague assumptions.
- Use stable device paths so bringup does not depend on Linux assigning the same `/dev` name every boot.
- Treat scan mirroring and rotation as frame/debugging problems first, not mapping problems.

## Corroborating References

- [REP 105 coordinate frame conventions](https://www.ros.org/reps/rep-0105.html)
- [Nav2 state estimation concepts](https://docs.nav2.org/concepts/index.html#state-estimation)

## When to Read the Original Source

Go to the original skill when you need concrete examples for LD19, RPLidar, Hokuyo, and multi-lidar launch patterns, including the specific parameters most likely to cause mirrored scans or misaligned maps.