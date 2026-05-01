# Source Note: Official ROS 2, Nav2, and BehaviorTree Docs

- Source family: public project documentation for ROS 2 Jazzy, Nav2, and BehaviorTree.CPP
- Primary sources:
  - https://docs.ros.org/en/jazzy/
  - https://docs.nav2.org/
  - https://www.behaviortree.dev/docs/intro/
  - https://micro.ros.org/docs/overview/
  - https://gazebosim.org/docs/latest/ros2_integration/
- Editorial use in this experiment: verify terminology, frame conventions, lifecycle behavior, architecture claims, and version-sensitive guidance for Jazzy-focused articles derived from `ros2-copilot-skills`

## Articles Derived Here

- `articles/foundations/ros2-core-communication-and-execution.md`
- `articles/navigation/nav2-architecture-and-tuning-guide.md`
- `articles/navigation/behavior-trees-for-nav2-and-robot-autonomy.md`
- `articles/navigation/localization-state-estimation-and-frame-discipline.md`
- `articles/perception/vision-depth-and-lidar-pipelines.md`
- `articles/hardware/ros2-hardware-integration-patterns.md`
- `articles/devops/simulation-testing-and-deployment-for-ros2.md`

## Notes

These sources are not the primary editorial voice of the site. They are the correctness backstop for:

- ROS 2 communication semantics such as actions, QoS, and lifecycle-managed nodes
- Nav2 architecture, server responsibilities, costmaps, filters, and behavior-tree integration
- BehaviorTree.CPP terminology and XML model used by Nav2
- simulation and deployment guidance where host/runtime assumptions change quickly