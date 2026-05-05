# Note: Outdoor GPS and RTK Navigation

You are probably here because the robot works indoors or in simulation, but field behavior is unstable, globally inaccurate, or much harder to reason about once GNSS enters the loop.

## Likely First Answer

Start with [GPS, RTK, and Outdoor Navigation in ROS 2](../navigation/gps-rtk-and-outdoor-navigation-in-ros2.md).

## If the Real Problem Is...

- weak state estimation architecture: [Localization, State Estimation, and Frame Discipline](../navigation/localization-state-estimation-and-frame-discipline.md)
- poor sensor fusion setup: [EKF Sensor Fusion for Robots](../navigation/ekf-sensor-fusion-for-robots.md)
- multiple sensors disagreeing: [Multi-Sensor Fusion Patterns](../navigation/multi-sensor-fusion-patterns.md)
- RTK correction infrastructure: [RTK Base Stations for Outdoor Robots](../hardware/rtk-base-stations-for-outdoor-robots.md)

## Shiny Objects Nearby

- [IMU Integration for Mobile Robots](../navigation/imu-integration-for-mobile-robots.md)
- [Visual Odometry for Mobile Robots](../navigation/visual-odometry-for-mobile-robots.md)
- [Odometry Calibration for Diff-Drive](../hardware/odometry-calibration-for-diff-drive.md)