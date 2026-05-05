# Note: Diff-Drive Base Control

You are probably here because the robot's base works only halfway: motors spin, but the interface is brittle, odometry is suspect, or ROS 2 control feels disconnected from the microcontroller reality.

## Likely First Answer

Start with [Diff-Drive Base Control with ros2_control and Arduino](../hardware/diff-drive-base-control-with-ros2-control-and-arduino.md).

## If the Real Problem Is...

- unreliable host-MCU communication: [Serial Protocols Between ROS 2 and Microcontrollers](../hardware/serial-protocols-between-ros2-and-microcontrollers.md)
- wrong wheel scaling or turn bias: [Odometry Calibration for Diff-Drive](../hardware/odometry-calibration-for-diff-drive.md)
- encoder math confusion: [Encoder Odometry Math](../hardware/encoder-odometry-math.md)
- overall hardware contract design: [ROS 2 Hardware Integration Patterns](../hardware/ros2-hardware-integration-patterns.md)

## Shiny Objects Nearby

- [Differential Drive Kinematics](../hardware/differential-drive-kinematics.md)
- [Motor Controller Interfaces](../hardware/motor-controller-interfaces.md)
- [Hardware Watchdogs and Heartbeats](../hardware/hardware-watchdogs-and-heartbeats.md)