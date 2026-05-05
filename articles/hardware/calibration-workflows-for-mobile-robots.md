---
title: "Calibration Workflows for Mobile Robots"
summary: "A practical order of operations for calibrating cameras, wheel odometry, IMUs, and multi-sensor geometry so downstream localization and perception tuning is not built on bad measurements."
source_repo: "ethz-asl/kalibr"
source_path: "README.md; wiki; corroborated by ROS camera_calibration docs and ros2_control diff_drive_controller docs"
source_url: "https://github.com/ethz-asl/kalibr"
tags: ["ros2", "calibration", "camera", "imu", "odometry", "extrinsics", "hardware"]
related: ["articles/perception/camera-calibration-for-ros2.md", "articles/hardware/odometry-calibration-for-diff-drive.md", "articles/navigation/imu-driver-configuration.md", "articles/navigation/sensor-frame-mounting-and-extrinsics.md", "articles/perception/multi-sensor-extrinsic-and-temporal-calibration.md"]
---

# Calibration Workflows for Mobile Robots

Source: [Kalibr](https://github.com/ethz-asl/kalibr), [camera_calibration docs](https://docs.ros.org/en/jazzy/p/camera_calibration/doc/index.html), and [diff_drive_controller Jazzy docs](https://control.ros.org/jazzy/doc/ros2_controllers/diff_drive_controller/doc/userdoc.html)

## Why This Matters

Robots are often tuned in the wrong order. Teams adjust filters, planners, and controllers while the robot is still carrying bad camera intrinsics, wrong wheel geometry, sloppy IMU assumptions, or stale sensor extrinsics. That wastes time because the downstream stack is being asked to compensate for errors that should have been removed earlier.

## Distilled Takeaways

- Calibration is a workflow, not a single step. Camera intrinsics, wheel geometry, IMU behavior, and sensor extrinsics affect one another.
- Effective values matter more than nominal values. Tire wear, mounting drift, focus changes, and real hardware tolerances all beat CAD purity.
- The right sequence usually starts with physical mounting truth, then single-sensor calibration, then cross-sensor calibration, and only then fusion and autonomy tuning.
- Calibration artifacts should be versioned like code: YAML files, parameter values, frame assumptions, capture procedures, and validation notes.
- A clean optimizer result is not enough. The robot still needs validation in RViz, simple motion tests, and end-to-end behavior checks.

## Practical Order of Operations

1. Confirm the physical build: frame names, sensor orientation, rigid mounts, and measured placement.
2. Calibrate camera intrinsics and distortion so `CameraInfo` is trustworthy.
3. Calibrate wheel radius and wheel separation using controlled straight-line and spin tests.
4. Sanity-check IMU axes, resting bias behavior, covariance realism, and mounting orientation before fusion.
5. Calibrate cross-sensor extrinsics and timing when cameras, IMUs, or other sensors must agree in one geometric model.
6. Only after that, tune EKFs, localization, mapping, or navigation behavior.

## What Usually Goes Wrong

- Intrinsics are recalculated, but old camera YAML files keep getting loaded at runtime.
- Odometry uses ideal wheel dimensions even though the controller already exposes radius and separation correction multipliers for real-world adjustment.
- IMUs are fused before anyone confirms axis conventions, gravity handling, or whether orientation output is actually trustworthy.
- Extrinsics are written once in URDF and never revisited after a bracket, mast, or enclosure change.
- Timestamp issues are mistaken for spatial calibration issues, or vice versa.

## Practical Value

- Use ROS camera calibration tools for monocular and stereo intrinsics when you need a reliable `CameraInfo` baseline.
- Use `diff_drive_controller` wheel multipliers and measured odometry tests when the robot drives plausible arcs in simulation but wrong arcs on the floor.
- Use a tool such as Kalibr when camera-IMU or multi-camera alignment and timing need to be estimated together instead of guessed.
- Keep calibration results close to bringup config so hardware replacement or field repair does not silently invalidate the stack.

## Corroborating References

- [Kalibr repository](https://github.com/ethz-asl/kalibr)
- [ROS 2 camera_calibration docs](https://docs.ros.org/en/jazzy/p/camera_calibration/doc/index.html)
- [diff_drive_controller Jazzy docs](https://control.ros.org/jazzy/doc/ros2_controllers/diff_drive_controller/doc/userdoc.html)
- [robot_localization repository](https://github.com/cra-ros-pkg/robot_localization)

## When to Read the Original Source

Go to the original sources when you want the exact camera-calibrator options, the diff-drive correction parameters used in Jazzy controllers, or the deeper visual-inertial and multi-sensor calibration workflows that Kalibr is built to solve.