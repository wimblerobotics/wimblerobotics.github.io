---
title: "Coordinate Frames, REP 105, and Navigation"
summary: "A practical guide to `map`, `odom`, `base_link`, `base_footprint`, and sensor frames so state estimation and navigation can agree on what the robot is doing."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "coordinate-frames-and-tf/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/coordinate-frames-and-tf/SKILL.md"
tags: ["ros2", "frames", "rep105", "tf", "navigation", "localization"]
related: ["articles/foundations/tf2-transforms-and-lookups.md", "articles/navigation/localization-state-estimation-and-frame-discipline.md", "articles/foundations/urdf-as-a-frame-translation-system.md"]
---

# Coordinate Frames, REP 105, and Navigation

Source: [ros2-copilot-skills coordinate frames skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/coordinate-frames-and-tf/SKILL.md)

## Why This Matters

If a robot team is vague about frames, the rest of the stack pays for it. REP 105 is not bureaucratic overhead. It is the shared mental model that lets odometry, localization, TF, and navigation cooperate instead of fighting.

## Distilled Takeaways

- `map` is global and may jump, `odom` is local and smooth, and `base_link` is the robot body frame.
- The split between `map -> odom` and `odom -> base_link` is the key to understanding localization and odometry responsibilities.
- One transform, one publisher. Violating that rule creates flickering or impossible state.
- Sensor frames should be attached through URDF and robot_state_publisher, not improvised ad hoc.
- Many navigation bugs are really frame-ownership bugs.

## Practical Guidance

- Decide clearly which node owns each transform before bringup starts.
- Keep sensor-frame orientation explicit, especially for cameras and IMUs.
- Use REP 105 as a review checklist for every robot TF tree.
- Check transform ownership before tuning AMCL, EKF, or costmaps.

## Corroborating References

- [REP 105 coordinate frames for mobile platforms](https://www.ros.org/reps/rep-0105.html)
- [Nav2 state estimation concepts](https://docs.nav2.org/concepts/index.html#state-estimation)

## When to Read the Original Source

Go to the original skill when you want a more explicit publisher-by-transform breakdown, example launch structure, and troubleshooting cases for duplicate publishers, missing `map -> odom`, or sensor-frame offsets.