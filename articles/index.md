# HB Robotics Knowledge Base

A curated collection of short, practical articles for robot builders using ROS 2 — from strong beginners through senior practitioners.

This is a living site. It is meant to grow through pull requests, source review, and ongoing revision as ROS 2 practice changes and the collection becomes more useful.

Each article:

- points to a stronger original source
- summarizes the technical value of that source
- connects the topic to nearby robotics problems through tags and related links

## Contributing

Contributions are part of the design of this site, not an afterthought.
The expected workflow is simple: copy the article template into your preferred editor, fill it in carefully, and submit a pull request.

If you want the full workflow, a short example, and writing guidance, start with [Contributing](contributing.md).

---

## Browse by Section

### [Foundations](foundations/ros2-core-communication-and-execution.md)

Core mental models and system concepts that underpin all ROS 2 development.

Start with [ROS 2 Core Communication and Execution](foundations/ros2-core-communication-and-execution.md), then [TF2 Transforms and Lookups in Practice](foundations/tf2-transforms-and-lookups.md), [Coordinate Frames, REP 105, and Navigation](foundations/coordinate-frames-rep-105-and-navigation.md), and [URDF as a Frame Translation System](foundations/urdf-as-a-frame-translation-system.md).

### [Navigation](navigation/nav2-architecture-and-tuning-guide.md)

Nav2, behavior trees, path planning, and goal handling.

Start with [Nav2 Architecture and Tuning Guide](navigation/nav2-architecture-and-tuning-guide.md), [Nav2 Servers and Data Flow](navigation/nav2-servers-and-data-flow.md), [Nav2 Costmap Architecture and Plugin Order](navigation/nav2-costmap-architecture-and-plugin-order.md), and [Localization, State Estimation, and Frame Discipline](navigation/localization-state-estimation-and-frame-discipline.md).

### [Perception](perception/vision-depth-and-lidar-pipelines.md)

Cameras, depth sensors, point clouds, LIDAR pipelines, and the perception products that other subsystems can actually use.

Start with [Vision, Depth, and LIDAR Pipelines for ROS 2 Robots](perception/vision-depth-and-lidar-pipelines.md).

### [Hardware](hardware/ros2-hardware-integration-patterns.md)

Sensors, actuators, microcontrollers, serial interfaces, and odometry.

Start with [ROS 2 Hardware Integration Patterns](hardware/ros2-hardware-integration-patterns.md), then [Serial Protocols Between ROS 2 and Microcontrollers](hardware/serial-protocols-between-ros2-and-microcontrollers.md) and [Odometry Calibration for Diff-Drive](hardware/odometry-calibration-for-diff-drive.md).

### [Software](software/launch-files-patterns-and-pitfalls.md)

ROS 2 software architecture: launch files, nodes, parameters, and lifecycle.

Start with [Writing rclpy Nodes in ROS 2](software/writing-rclpy-nodes.md), [Writing rclcpp Nodes in ROS 2](software/writing-rclcpp-nodes.md), and [Launch Files: Patterns and Pitfalls](software/launch-files-patterns-and-pitfalls.md).

### [DevOps](devops/simulation-testing-and-deployment-for-ros2.md)

Workspace management, colcon builds, overlays, and CI practices.

Start with [Simulation, Testing, and Deployment for ROS 2](devops/simulation-testing-and-deployment-for-ros2.md), [Colcon Workspace Discipline for Faster ROS 2 Iteration](devops/colcon-workspace-discipline.md), and [Workspace Overlays and Package Precedence](devops/workspace-overlays-and-package-precedence.md).

---

## Suggested Learning Paths

- New to ROS 2 robot software: [ROS 2 Core Communication and Execution](foundations/ros2-core-communication-and-execution.md) → [ROS 2 Launch Files: Patterns and Pitfalls](software/launch-files-patterns-and-pitfalls.md) → [URDF as a Frame Translation System](foundations/urdf-as-a-frame-translation-system.md)
- Building your first mobile robot: [ROS 2 Hardware Integration Patterns](hardware/ros2-hardware-integration-patterns.md) → [Localization, State Estimation, and Frame Discipline](navigation/localization-state-estimation-and-frame-discipline.md) → [Nav2 Architecture and Tuning Guide](navigation/nav2-architecture-and-tuning-guide.md)
- Working on autonomy: [Behavior Trees for Nav2 and Robot Autonomy](navigation/behavior-trees-for-nav2-and-robot-autonomy.md) → [RViz Goals, BT Navigator, and the Nav2 Flow](navigation/rviz-goals-bt-navigator-and-nav2-flow.md)

---

## Browse by Tag

See the [Tags](tags.md) index to find articles by topic.

---

## About This Site

This knowledge base is an experiment in curated, Git-backed technical documentation.
Articles are derived from public sources and summarized for practical value.
The source repository is kept Markdown-first so it remains useful as a GitHub repo,
an Obsidian vault, and this published site simultaneously.

It is also intentionally editorial rather than encyclopedic. The goal is not to restate all documentation. The goal is to help someone building a robot understand what matters, what usually goes wrong, and what to read next.
