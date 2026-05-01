---
title: "Simulation, Testing, and Deployment for ROS 2"
summary: "A practical guide to using simulation, containers, CI, rosbag workflows, and system startup discipline to make a robot reproducible off the developer laptop."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "multiple skills: docker-ros2, github-actions-ros2, gz-sim-setup, gz-ros2-bridge, simulation-testing, rosbag2-analysis, systemd-autostart"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/docs/SKILLS-CATALOG.md"
tags: ["ros2", "devops", "simulation", "docker", "gazebo", "ci", "rosbag2", "systemd"]
related: ["articles/devops/colcon-workspace-discipline.md", "articles/software/launch-files-patterns-and-pitfalls.md", "articles/navigation/nav2-architecture-and-tuning-guide.md"]
---

# Simulation, Testing, and Deployment for ROS 2

Source: [ros2-copilot-skills catalog](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/docs/SKILLS-CATALOG.md)

## Why This Matters

ROS 2 projects become fragile when build, simulation, and runtime practices are treated as side concerns. Reproducibility is what turns one developer's working laptop into a robot other people can test, review, and improve.

## Distilled Takeaways

- Simulation is most useful when it validates interfaces, timing, TF, and behavior assumptions rather than trying to cosmetically mimic reality.
- Containers are valuable for repeatability, but only if device access, networking, GUI forwarding, and runtime dependencies are modeled honestly.
- CI should at least prove that the workspace resolves dependencies, builds, and exercises the most important packages or launch paths.
- rosbag2 is not just for recording demos. It is one of the best tools for regression testing and offline debugging of perception and navigation behavior.
- Production startup should be explicit and restartable. If the robot depends on a fragile manual bringup sequence, deployment is not finished.

## Practical Value

- Use simulation to catch TF, topic, and launch integration problems early.
- Treat Dockerfiles and startup scripts as part of the robot's architecture.
- Record representative bag files and reuse them as test assets.
- Prefer boring, well-documented boot flows over clever shell rituals.

## Corroborating References

- [Gazebo ROS 2 integration](https://gazebosim.org/docs/latest/ros2_integration/)
- [ROS 2 testing concepts](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/Testing/Testing-Main.html)
- [rosbag2 documentation](https://docs.ros.org/en/jazzy/Tutorials/Advanced/Recording-A-Bag-From-Your-Own-Node-CPP.html)
- [Nav2 setup and tutorials](https://docs.nav2.org/getting_started/index.html)

## When to Read the Original Source

Go to the original skills when you need concrete Docker examples, bridge setup patterns for Gazebo, CI workflow scaffolding, rosbag analysis habits, or startup approaches for unattended robots.