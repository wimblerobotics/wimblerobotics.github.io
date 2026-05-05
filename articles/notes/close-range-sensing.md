# Note: Close-Range Sensing and Ultrasonic Safety

You are probably here because the robot is fine in the large, but still clips furniture, misses chair legs, or needs a cheap last-line obstacle signal near the bumper.

## Likely First Answer

Start with [Ultrasonic Sensors for Robot Safety](../hardware/ultrasonic-sensors-for-robot-safety.md).

## If the Real Problem Is...

- feeding close-range data into Nav2: [Nav2 Range Sensor Layer for Close Obstacles](../navigation/nav2-range-sensor-layer-for-close-obstacles.md)
- unreliable host-MCU transport: [Serial Protocols Between ROS 2 and Microcontrollers](../hardware/serial-protocols-between-ros2-and-microcontrollers.md)
- safety behavior design: [Emergency Stop Integration](../hardware/emergency-stop-integration.md)
- broader heartbeat and fault handling: [Hardware Watchdogs and Heartbeats](../hardware/hardware-watchdogs-and-heartbeats.md)

## Shiny Objects Nearby

- [Collision Monitor and Safety Polygons](../navigation/collision-monitor-and-safety-polygons.md)
- [Laser Scan Processing and Filtering](../perception/laser-scan-processing-and-filtering.md)
- [Lidar Filter Chains and Self-Hit Removal](../perception/lidar-filter-chains-and-self-hit-removal.md)