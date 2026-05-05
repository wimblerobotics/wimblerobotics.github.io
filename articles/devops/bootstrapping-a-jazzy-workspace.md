---
title: "Bootstrapping a Jazzy Workspace"
summary: "A concise guide to setting up a ROS 2 Jazzy workspace for example-driven learning so environment assumptions are explicit from the start."
source_repo: "wimblerobotics/Robotics_Book"
source_path: "book/chapters/setup.md"
source_url: "https://github.com/wimblerobotics/Robotics_Book/blob/main/book/chapters/setup.md"
tags: ["ros2", "jazzy", "workspace", "colcon", "devops"]
related: ["articles/devops/colcon-workspace-discipline.md", "articles/devops/workspace-overlays-and-package-precedence.md", "articles/devops/rosdep-dependency-management.md"]
---

# Bootstrapping a Jazzy Workspace

Source: [Robotics_Book setup chapter](https://github.com/wimblerobotics/Robotics_Book/blob/main/book/chapters/setup.md)

## Why This Matters

Many ROS 2 beginners hit trouble before they write meaningful code because the machine, distro, workspace, and sourcing assumptions were never made explicit. A small amount of setup discipline removes a large amount of fake complexity from everything that follows.

## Distilled Takeaways

- Jazzy example repos should state their OS, ROS distribution, and workspace assumptions up front.
- A reproducible workspace bootstrap is part of the teaching material, not just a preface.
- `colcon build --symlink-install` plus correct `setup.bash` sourcing should be treated as normal workflow, not optional magic.
- Environment drift becomes much worse when those assumptions stay implicit.

## Practical Value

- Start learning repos with an explicit workspace root, clone path, build step, and source step.
- Re-source the workspace in new terminals unless shell startup is already managing it intentionally.
- Treat deviations from the documented OS or ROS version as real engineering changes, not cosmetic substitutions.
- Use this setup pattern for book code, sample repos, and internal training material.

## Corroborating References

- [ROS 2 Jazzy installation docs](https://docs.ros.org/en/jazzy/Installation.html)
- [colcon documentation](https://colcon.readthedocs.io/)

## When to Read the Original Source

Go to the original chapter when you want the exact workspace bootstrap commands, the expected directory layout, and the practical explanation for sourcing the workspace in each terminal.