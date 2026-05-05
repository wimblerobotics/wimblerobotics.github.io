---
title: "Jazzy Desktop and SBC Setup for Robots"
summary: "How to treat the workstation and the on-robot computer as one bringup system so simulation, deployment, and troubleshooting stay aligned."
source_repo: "slgrobotics/robots_bringup"
source_path: "README.md and Docs/ROS-Jazzy, Docs/Ubuntu-RPi"
source_url: "https://github.com/slgrobotics/robots_bringup"
tags: ["ros2", "jazzy", "raspberry-pi", "bringup", "ubuntu", "devops"]
related: ["articles/devops/bootstrapping-a-jazzy-workspace.md", "articles/devops/rosdep-dependency-management.md", "articles/devops/systemd-autostart-for-robots.md", "articles/devops/gazebo-sim-setup-for-ros2.md"]
---

# Jazzy Desktop and SBC Setup for Robots

Source: [slgrobotics robots_bringup](https://github.com/slgrobotics/robots_bringup)

## Why This Matters

Many ROS 2 robots are really two environments pretending to be one project: a desktop machine for simulation, visualization, and development, and an on-robot SBC for sensors, drivers, and real deployment. Bringup gets much easier when those roles are explicit instead of mixed together ad hoc.

## Distilled Takeaways

- A practical Jazzy robot stack often assumes Ubuntu 24.04 on both the desktop and the robot, but with different package sets and responsibilities.
- Desktop bringup should focus on Gazebo, RViz, development tools, and heavy debugging workflows.
- The on-board SBC should stay lean: ROS 2 base, device access, launch discipline, and remote administration.
- Documentation is more useful when it separates clean-machine setup, simulated robot bringup, and physical robot bringup into distinct paths.
- Wi-Fi quality, power stability, and remote-access setup are part of bringup, not side issues.

## Practical Value

- Use one documented workstation path for desktop simulation and one documented path for Raspberry Pi or other SBC deployment.
- Keep package installation, shell sourcing, and workspace layout explicit so a second machine can reproduce them.
- Treat network setup, device permissions, and boot behavior as first-class parts of the robot platform.
- Use this pattern when you want one codebase to support both Gazebo work and real hardware iteration.

## Corroborating References

- [ROS 2 Jazzy installation docs](https://docs.ros.org/en/jazzy/Installation.html)
- [Gazebo and ROS 2 setup docs](https://gazebosim.org/docs/latest/ros_installation/)
- [systemd service documentation](https://www.freedesktop.org/software/systemd/man/systemd.service.html)

## When to Read the Original Source

Go to the original repository when you want a lived example of a multi-robot Jazzy environment that covers desktop setup, Raspberry Pi setup, simulation entry points, sensor notes, and real-world bringup assumptions in one place.