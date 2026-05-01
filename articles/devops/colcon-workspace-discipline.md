---
title: "Colcon Workspace Discipline for Faster ROS 2 Iteration"
summary: "A practical guide to building, rebuilding, and debugging ROS 2 workspaces without wasting time or running the wrong overlay."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "colcon-workspace/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/colcon-workspace/SKILL.md"
tags: ["ros2", "colcon", "workspace", "build", "overlays", "devops"]
related: ["articles/software/launch-files-patterns-and-pitfalls.md", "articles/navigation/rviz-goals-bt-navigator-and-nav2-flow.md"]
---

# Colcon Workspace Discipline for Faster ROS 2 Iteration

Source: [ros2-copilot-skills colcon workspace skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/colcon-workspace/SKILL.md)

## Why This Matters

A surprising amount of ROS 2 confusion comes from workspace mistakes rather than code defects. If the wrong overlay is sourced, if Python changes were copied instead of symlinked, or if a stale install tree is shadowing the package you meant to run, debugging time gets wasted fast.

## Distilled Takeaways

- Use `colcon build --symlink-install` for development. That keeps Python, launch, and config files live without unnecessary rebuilds.
- Re-source the workspace after every build that changes installed artifacts.
- Know the difference between `--packages-select`, `--packages-up-to`, `--packages-above`, and `--packages-skip`.
- Clean builds are sometimes the correct answer, especially after branch switches or package layout changes.
- Overlay order matters. Your workspace can intentionally override packages from the underlay, but you need to verify which version is actually running.

## Practical Habits

- Build from the workspace root, not from `src/`.
- Check `ros2 pkg prefix <package>` when behavior does not match your latest edits.
- Inspect `AMENT_PREFIX_PATH` when you suspect the wrong install space is active.
- Use selective builds when you already know the change surface.
- Use `rosdep install --from-paths src --ignore-src -r -y` as part of normal setup hygiene.

## Common Failure Modes

- Package not found because `install/setup.bash` was not sourced after build.
- Code edits not taking effect because the workspace was built without `--symlink-install`.
- Mystery runtime behavior because an older overlay or an apt-installed package is winning.
- Repeated confusion after interface changes because dependent packages were not rebuilt.

## When to Read the Original Source

Go to the original skill when you want the exact commands, common mistake table, clean-build workflow, and overlay examples in a compact reference format.
