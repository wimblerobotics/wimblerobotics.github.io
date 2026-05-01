---
title: "Workspace Overlays and Package Precedence"
summary: "How ROS 2 overlay chains really work, how custom workspaces override underlays, and how to verify which package version you are actually running."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "workspace-overlays/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/workspace-overlays/SKILL.md"
tags: ["ros2", "overlays", "workspaces", "underlay", "ament_prefix_path", "colcon"]
related: ["articles/devops/colcon-workspace-discipline.md", "articles/software/package-xml-cmakelists-and-python-package-structure.md", "articles/navigation/nav2-architecture-and-tuning-guide.md"]
---

# Workspace Overlays and Package Precedence

Source: [ros2-copilot-skills workspace overlays skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/workspace-overlays/SKILL.md)

## Why This Matters

ROS 2 overlay chains are powerful and dangerous for the same reason: package precedence is real. If you do not know which workspace is winning, you cannot trust your tests, your debugging, or your deploys.

## Distilled Takeaways

- The workspace sourced last usually has the highest priority.
- Overlay behavior is what lets you override apt-installed packages with local development versions.
- Source order mistakes and stale install spaces are a major cause of “my change had no effect” confusion.
- `AMENT_PREFIX_PATH`, `COLCON_PREFIX_PATH`, and `ros2 pkg prefix` are practical debugging tools, not trivia.
- Multi-workspace chains should be deliberate and documented, especially when custom forks are involved.

## Practical Guidance

- Source underlays first and overlays later.
- Verify package provenance whenever behavior does not match your current code.
- Use clean rebuilds after major branch changes or structural edits.
- Avoid mixing distributions in overlay chains.

## Corroborating References

- [ROS 2 creating a workspace tutorial](https://docs.ros.org/en/jazzy/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html)
- [colcon documentation](https://colcon.readthedocs.io/en/released/)

## When to Read the Original Source

Go to the original skill when you want step-by-step overlay examples, environment-variable breakdowns, and practical verification commands for multi-layer workspaces.