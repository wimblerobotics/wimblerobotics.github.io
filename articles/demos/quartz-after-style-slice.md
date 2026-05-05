# Demo: After (Quartz-Style Slice)

This is a mock of how the same topic might feel in Quartz.
It is not a real Quartz render.
It is a content-and-layout demo of the experience Quartz tends to encourage.

---

## Explorer

- Notes
  - Navigation
    - Outdoor GPS and RTK Navigation
    - Localization, State Estimation, and Frame Discipline
    - EKF Sensor Fusion for Robots
    - Multi-Sensor Fusion Patterns
  - Hardware
    - RTK Base Stations for Outdoor Robots
    - Odometry Calibration for Diff-Drive

---

## Note

# Outdoor GPS and RTK Navigation

Aliases: GPS Navigation, Outdoor GNSS Navigation

Tags: `ros2`, `gps`, `rtk`, `outdoor-navigation`, `robot_localization`, `nav2`

Outdoor robots do not get indoor navigation for free with a GPS plugged in.
Once you depend on GNSS, you inherit satellite visibility, correction quality, antenna placement, frame discipline, and network availability as part of your navigation system.

## Linked Notes

- [Localization, State Estimation, and Frame Discipline](../navigation/localization-state-estimation-and-frame-discipline.md)
- [EKF Sensor Fusion for Robots](../navigation/ekf-sensor-fusion-for-robots.md)
- [Multi-Sensor Fusion Patterns](../navigation/multi-sensor-fusion-patterns.md)
- [RTK Base Stations for Outdoor Robots](../hardware/rtk-base-stations-for-outdoor-robots.md)
- [ROS 2 Multi-Machine Networking and Discovery](../devops/ros2-multi-machine-networking-and-discovery.md)

## Backlinks

This note is referenced by pages like:

- [Note: Outdoor GPS and RTK Navigation](../notes/outdoor-gps-navigation.md)
- [Jazzy Desktop and SBC Setup for Robots](../devops/jazzy-desktop-and-sbc-setup-for-robots.md)
- [ROS 2 Multi-Machine Networking and Discovery](../devops/ros2-multi-machine-networking-and-discovery.md)

## Local Graph View

```text
Outdoor GPS and RTK Navigation
|- Localization, State Estimation, and Frame Discipline
|  |- EKF Sensor Fusion for Robots
|  |- Multi-Sensor Fusion Patterns
|- RTK Base Stations for Outdoor Robots
|- ROS 2 Multi-Machine Networking and Discovery
```

## Trails You Might Follow

- outdoor navigation -> GNSS fusion -> frame discipline -> IMU integration
- outdoor navigation -> RTK infrastructure -> multi-machine networking -> robot health
- outdoor navigation -> odometry quality -> diff-drive calibration -> controller tuning

---

## Why This Feels Like Quartz

- The page reads more like a note than a routing layer.
- Metadata, backlinks, and graph context are part of the page itself.
- The reader is encouraged to wander laterally through the note network.
- Cross-cutting relationships become more visible without extra editorial prose.

## Product Traits

- stronger networked-thought feel
- more visible backlinks and graph-like context
- easier serendipitous discovery
- weaker emphasis on one curated next step

## Risk

This style can make the site feel richer, but also noisier.
For readers who arrive with a single robot problem and want the next useful answer immediately, the extra note context may help or may just slow them down.