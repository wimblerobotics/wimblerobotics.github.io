# Note: Workspace Bootstrap and Build Hygiene

You are probably here because the codebase is present, but the environment still feels fragile or surprising.

## Likely First Answer

Start with [Bootstrapping a Jazzy Workspace](../devops/bootstrapping-a-jazzy-workspace.md).

## If the Real Problem Is...

- stale overlays or wrong package winning: [Colcon Workspace Discipline for Faster ROS 2 Iteration](../devops/colcon-workspace-discipline.md)
- package structure confusion: [package.xml, CMakeLists.txt, and Python Package Structure](../software/package-xml-cmakelists-and-python-package-structure.md)
- dependency setup: [rosdep Dependency Management](../devops/rosdep-dependency-management.md)
- multiple workspaces and precedence: [Workspace Overlays and Package Precedence](../devops/workspace-overlays-and-package-precedence.md)
- unattended startup later: [systemd Autostart for Robots](../devops/systemd-autostart-for-robots.md)

## Shiny Objects Nearby

- [GitHub Actions for ROS 2](../devops/github-actions-for-ros2.md)
- [Docker for ROS 2 Development](../devops/docker-for-ros2-development.md)
- [ROS 2 Testing Strategy](../devops/ros2-testing-strategy.md)