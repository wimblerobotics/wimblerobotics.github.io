---
title: "Multi-Sensor Extrinsic and Temporal Calibration"
summary: "Why cameras, IMUs, and other sensors must agree in both space and time, and how offline calibration workflows like Kalibr help replace hand-tuned guesses with measured relationships."
source_repo: "ethz-asl/kalibr"
source_path: "README.md; wiki"
source_url: "https://github.com/ethz-asl/kalibr"
tags: ["ros2", "calibration", "extrinsics", "camera", "imu", "timing", "perception"]
related: ["articles/perception/camera-calibration-for-ros2.md", "articles/navigation/sensor-frame-mounting-and-extrinsics.md", "articles/navigation/imu-integration-for-mobile-robots.md", "articles/software/timestamp-discipline-and-message-synchronization.md", "articles/navigation/multi-sensor-fusion-patterns.md"]
---

# Multi-Sensor Extrinsic and Temporal Calibration

Source: [Kalibr](https://github.com/ethz-asl/kalibr)

## Why This Matters

Multi-sensor systems do not fail only because one sensor is noisy. They also fail because sensors disagree about where they are mounted and when they observed the world. If a camera, IMU, and base frame do not align in both space and time, mapping and fusion problems look random even though the root cause is geometric.

## Distilled Takeaways

- Spatial extrinsics and temporal offset are both first-order calibration problems for camera-IMU and camera-camera systems.
- Hand-measured transforms are useful starting points, but high-quality multi-sensor stacks usually need estimation from real motion data.
- Kalibr is valuable because it tackles multiple problems together: camera intrinsics, camera-camera extrinsics, camera-IMU extrinsics, timing offset, and IMU intrinsic effects.
- Good calibration data requires deliberate motion and coverage, not just long recordings.
- Offline calibration output should feed a maintained TF and configuration story rather than becoming a one-off lab artifact.

## Practical Guidance

- Start with good single-sensor calibration first; multi-sensor estimation cannot rescue fundamentally bad camera intrinsics or wildly misconfigured IMU data.
- Record motion that excites the sensors enough to expose timing and geometry, not only gentle straight-line driving.
- Treat calibration outputs as candidates to validate in RViz, bags, and fusion behavior, not as unquestionable truth.
- Revisit calibration after mount changes, lens changes, or hardware replacement.

## Operational Notes

- Kalibr remains especially useful as a conceptual and offline workflow reference even when your runtime ROS 2 stack is Jazzy-first.
- Temporal offset matters whenever sensors are fused tightly enough that timestamp slop turns into pose or map error.
- The practical goal is not a beautiful report. It is consistent downstream behavior in localization, odometry, and perception.

## Corroborating References

- [Kalibr repository](https://github.com/ethz-asl/kalibr)
- [ROS 2 camera_calibration docs](https://docs.ros.org/en/jazzy/p/camera_calibration/doc/index.html)
- [ROS 2 time and timestamp discipline article](https://wimblerobotics.github.io/software/timestamp-discipline-and-message-synchronization/)

## When to Read the Original Source

Go to the original source when you want the exact classes of calibration Kalibr supports, the assumptions behind visual-inertial calibration, or the deeper references on continuous-time spatial and temporal estimation.