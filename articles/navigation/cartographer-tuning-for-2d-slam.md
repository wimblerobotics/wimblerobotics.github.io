---
title: "Cartographer Tuning for 2D SLAM"
summary: "How to think about Cartographer tuning in ROS 2 so map quality problems are traced back to scan matching, submaps, and motion assumptions instead of guesswork."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "cartographer-tuning/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/cartographer-tuning/SKILL.md"
tags: ["ros2", "slam", "cartographer", "mapping", "localization"]
related: ["articles/navigation/slam-toolbox-online-mapping.md", "articles/navigation/loop-closure-what-it-fixes.md", "articles/navigation/localization-state-estimation-and-frame-discipline.md"]
---

# Cartographer Tuning for 2D SLAM

Source: [ros2-copilot-skills Cartographer tuning skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/cartographer-tuning/SKILL.md)

## Why This Matters

Cartographer can produce excellent maps, but only when its scan matching, motion filtering, and submap behavior line up with the robot and environment. When they do not, the resulting map errors often look like bad sensors or bad TF even when the real problem is tuning.

## Distilled Takeaways

- Cartographer tuning is about balancing local scan matching, submap quality, and loop-closure behavior.
- The right settings depend on sensor rate, environment geometry, and robot motion smoothness.
- Map distortion often comes from a mismatch between motion assumptions and actual platform behavior.
- Good tuning depends on clean TF, timestamps, and lidar geometry before anything else.

## Practical Guidance

- Validate TF, scan direction, and odometry assumptions before changing SLAM parameters.
- Tune on representative routes, not just a single short hallway pass.
- Watch for symptoms like smeared walls, drifting corners, or repeated map tearing.
- Keep a record of parameter changes because Cartographer tuning can otherwise become opaque quickly.

## Corroborating References

- [Cartographer ROS documentation](https://google-cartographer-ros.readthedocs.io/)
- [ROS 2 Cartographer repository](https://github.com/ros2/cartographer_ros)

## When to Read the Original Source

Go to the original skill when you want parameter-level guidance on submaps, motion filtering, scan matching, and loop-closure behavior for 2D Cartographer setups.