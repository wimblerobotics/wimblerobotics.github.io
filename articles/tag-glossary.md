# Tag Glossary

This page is the controlled vocabulary reference for article tags.
The goal is not to create a perfect taxonomy.
The goal is to keep tags consistent enough that the site remains explorable as it grows.

## Core Rules

- Keep tags lowercase.
- Prefer singular forms unless the plural is the standard term in ROS usage.
- Prefer one stable term over multiple near-synonyms.
- Use tags to help discovery, not to restate the full title.
- Reuse existing tags before adding new ones.

## Canonical Families

### Platform and Distribution

- `ros2`: use on almost every ROS 2 article.
- `jazzy`: use when the article is explicitly Jazzy-specific or version-sensitive.

### Major Technical Areas

- `navigation`
- `perception`
- `hardware`
- `software`
- `devops`
- `simulation`
- `localization`
- `mapping`
- `slam`
- `urdf`
- `tf`
- `rviz`

### Nav2 and Autonomy

- `nav2`: the default tag for Nav2-specific content.
- `behavior-trees`: prefer this over inventing new BT synonyms for general tree content.
- `bt`: reserve for articles that are specifically about node semantics, XML structure, or plugin-level BehaviorTree.CPP work.
- `planner`: use for planner-specific leaves.
- `controller`: use for controller-specific leaves.
- `costmaps`: use for costmap and costmap-layer material.
- `recovery`: use for recovery and failure-handling content.

### Robot Modeling and State Estimation

- `robot-model`: use for structural robot-description topics.
- `odometry`
- `sensor-fusion`
- `ekf`
- `ukf`
- `frames`: use only when frame placement or extrinsics are the real topic.

### Sensors and Perception Products

- `lidar`
- `vision`
- `depth-camera`
- `pointcloud`: prefer this over `pointclouds`.
- `imu`
- `camera`

### Operations and Tooling

- `testing`
- `debugging`
- `diagnostics`
- `performance`
- `rosbag2`
- `docker`
- `systemd`
- `gazebo`

## Preferred Choices for Common Near-Duplicates

- Prefer `rviz` over `rviz2` unless the ROS 2 branding itself is the point.
- Prefer `pointcloud` over `pointclouds`.
- Prefer `controller` over `controllers`.
- Prefer `workspace` over `workspaces` unless the article is specifically about multiple workspace layers.
- Prefer `behavior-trees` for general topic tagging and add `bt` only when the article is specifically about BT implementation details.

## When To Add a New Tag

Add a new tag only if at least one of these is true:

- The article would be hard to discover without it.
- The concept is already becoming a recurring cluster.
- The new tag is more precise than an overloaded existing one.

If a new tag is added, keep it simple, lowercase, and likely to be reusable on future articles.