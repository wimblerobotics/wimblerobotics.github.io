# Note: Timestamps and Sensor Synchronization

You are probably here because callbacks are not lining up, fusion quality is inconsistent, or a multi-sensor pipeline behaves differently on replay than it did live.

## Likely First Answer

Start with [Timestamp Discipline and Message Synchronization](../software/timestamp-discipline-and-message-synchronization.md).

## If the Real Problem Is...

- ROS time model confusion: [ROS 2 Time, Duration, and Sim Time](../foundations/ros2-time-duration-and-sim-time.md)
- sync policy tuning: [message_filters and Time-Synchronized Sensors](../software/message-filters-and-time-synchronized-sensors.md)
- multi-machine clock assumptions: [ROS 2 Multi-Machine Networking and Discovery](../devops/ros2-multi-machine-networking-and-discovery.md)
- downstream fusion instability: [Multi-Sensor Fusion Patterns](../navigation/multi-sensor-fusion-patterns.md)

## Shiny Objects Nearby

- [Localization, State Estimation, and Frame Discipline](../navigation/localization-state-estimation-and-frame-discipline.md)
- [IMU Integration for Mobile Robots](../navigation/imu-integration-for-mobile-robots.md)
- [Vision, Depth, and LIDAR Pipelines for ROS 2 Robots](../perception/vision-depth-and-lidar-pipelines.md)