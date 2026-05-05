---
title: "Localization, State Estimation, and Frame Discipline"
summary: "A practical guide to REP 105 frames, odometry vs localization responsibilities, and how to keep EKF, IMU, wheel odometry, and SLAM from fighting each other."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "multiple skills: coordinate-frames-and-tf, ekf-sensor-fusion, ukf-sensor-fusion, encoder-odometry-math, wheel-odometry-model, amcl-tuning"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/docs/SKILLS-CATALOG.md"
tags: ["ros2", "localization", "tf", "frames", "robot_localization", "ekf", "imu", "odometry"]
related: ["articles/foundations/urdf-as-a-frame-translation-system.md", "articles/navigation/nav2-architecture-and-tuning-guide.md", "articles/hardware/odometry-calibration-for-diff-drive.md", "articles/navigation/amcl-tuning-in-nav2.md"]
---

# Localization, State Estimation, and Frame Discipline

Source: [ros2-copilot-skills catalog](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/docs/SKILLS-CATALOG.md)

## Why This Matters

Navigation quality is capped by state-estimation quality. If `map`, `odom`, `base_link`, and sensor frames are conceptually mixed together, every downstream subsystem becomes harder to tune. Many robots fail not because AMCL, SLAM Toolbox, or robot_localization are bad, but because the frame responsibilities were never made explicit.

## Distilled Takeaways

- REP 105 is the baseline mental model: global positioning owns `map -> odom`, odometry owns `odom -> base_link`, and the rest of the robot should hang off `base_link` through static or controlled transforms.
- Wheel odometry is usually a local motion estimate, not a global truth source.
- `robot_localization` becomes much easier to configure when you think in terms of which physical dimensions each source should contribute, rather than turning booleans on until the output looks less wrong.
- Double-fusing the same physical quantity poorly is often worse than leaving a measurement out.
- Bad sensor-frame mounting assumptions can look like filter instability, planner drift, or costmap corruption.

## Practical Value

- Start with frame discipline before touching covariance matrices.
- Fuse only the dimensions each sensor genuinely measures well.
- Verify wheel geometry, IMU orientation, and sensor timestamps before tuning recovery behaviors or controllers.
- Use this page as a bridge between URDF work, hardware calibration, and navigation tuning.

## Corroborating References

- [REP 105 coordinate frame conventions](https://www.ros.org/reps/rep-0105.html)
- [Nav2 state estimation concepts](https://docs.nav2.org/concepts/index.html#state-estimation)
- [robot_localization package docs](https://github.com/cra-ros-pkg/robot_localization)

## When to Read the Original Source

Go to the original skills when you need detailed 15-element filter vectors, wheel-odometry math, AMCL tuning parameters, or explicit examples for combining encoders, IMU, and additional odometry sources in a Jazzy robot.