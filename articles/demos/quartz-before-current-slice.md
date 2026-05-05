# Demo: Before (Current Site Slice)

This is a mock of how the current site presents a problem-first note.
The emphasis is on getting a reader to the likely next answer quickly.

---

## Solve a Problem

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

---

## Why This Feels Like The Current Site

- The reader arrives through a problem statement.
- The page gives a single most likely next click.
- Related links are hand-curated and grouped by purpose.
- The page acts like a short routing layer rather than a long note.

## Product Traits

- strong editorial control
- fewer moving parts on the page
- easier onboarding for problem-driven readers
- weaker sense of the broader note network

## Risk

This style is efficient, but it can hide how richly connected the underlying knowledge base is.
Readers mostly see the path you chose for them rather than the larger graph of related material.