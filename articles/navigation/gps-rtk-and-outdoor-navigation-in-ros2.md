---
title: "GPS, RTK, and Outdoor Navigation in ROS 2"
summary: "What changes when a robot leaves indoor map-only navigation and starts depending on GNSS, RTK corrections, and outdoor operating constraints."
source_repo: "slgrobotics/robots_bringup"
source_path: "README.md, Docs/Sensors, Docs/Dragger"
source_url: "https://github.com/slgrobotics/robots_bringup"
tags: ["ros2", "gps", "rtk", "outdoor-navigation", "robot_localization", "nav2"]
related: ["articles/hardware/rtk-base-stations-for-outdoor-robots.md", "articles/navigation/localization-state-estimation-and-frame-discipline.md", "articles/navigation/ekf-sensor-fusion-for-robots.md", "articles/navigation/multi-sensor-fusion-patterns.md"]
---

# GPS, RTK, and Outdoor Navigation in ROS 2

Source: [slgrobotics robots_bringup](https://github.com/slgrobotics/robots_bringup)

## Why This Matters

Outdoor robots do not get indoor navigation for free with a GPS plugged in. Once you depend on GNSS, you inherit satellite visibility, correction quality, antenna placement, frame discipline, and network availability as part of your navigation system.

## Distilled Takeaways

- Outdoor navigation is usually a fusion problem, not a single-sensor problem.
- GPS is most useful when fused with wheel odometry and IMU data through a coherent localization architecture.
- RTK can materially improve outdoor positioning, but it adds operational dependencies such as correction delivery, base-station configuration, and network resilience.
- Sensor placement and frame conventions still matter outdoors; a badly mounted antenna or IMU can look like software instability.
- Outdoor bringup should include explicit checks for Wi-Fi, VPN, correction sources, and power behavior, not just Nav2 parameters.

## Practical Value

- Use GNSS as part of a state-estimation pipeline, not as a replacement for odometry or IMU reasoning.
- Separate the questions of absolute global pose, local motion quality, and controller behavior when debugging field performance.
- Expect outdoor success to depend on operations discipline as much as package selection.
- Use this page as the bridge between indoor Nav2 experience and field robotics with real position infrastructure.

## Corroborating References

- [Nav2 GPS navigation tutorial](https://docs.nav2.org/tutorials/docs/navigation2_with_gps.html)
- [robot_localization integrating GPS](https://docs.ros.org/en/noetic/api/robot_localization/html/integrating_gps.html)
- [robot_localization package docs](https://github.com/cra-ros-pkg/robot_localization)

## When to Read the Original Source

Go to the original repository when you want a practical example of how one robot stack combines Jazzy bringup, sensor documentation, Raspberry Pi deployment, and outdoor GPS-oriented operation in a single working project.