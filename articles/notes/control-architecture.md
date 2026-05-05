# Note: ros2_control Architecture

You are probably here because the robot needs a cleaner control stack and you are deciding whether `ros2_control` should be the architectural backbone or just another package on the side.

## Likely First Answer

Start with [ros2_control Design Patterns in Jazzy](../hardware/ros2-control-design-patterns-in-jazzy.md).

## If the Real Problem Is...

- a concrete diff-drive implementation: [Diff-Drive Base Control with ros2_control and Arduino](../hardware/diff-drive-base-control-with-ros2-control-and-arduino.md)
- generic driver boundaries: [Hardware Abstraction Layers in ROS 2](../hardware/hardware-abstraction-layers-in-ros2.md)
- actuator-facing interface choices: [Motor Controller Interfaces](../hardware/motor-controller-interfaces.md)
- simulator-backed bringup: [Gazebo Sim Setup for ROS 2](../devops/gazebo-sim-setup-for-ros2.md)

## Shiny Objects Nearby

- [ROS 2 Hardware Integration Patterns](../hardware/ros2-hardware-integration-patterns.md)
- [Odometry Calibration for Diff-Drive](../hardware/odometry-calibration-for-diff-drive.md)
- [Jazzy Desktop and SBC Setup for Robots](../devops/jazzy-desktop-and-sbc-setup-for-robots.md)