---
title: "ROS 2 Launch Files: Patterns and Pitfalls"
summary: "A working mental model for ROS 2 Python launch files, with emphasis on substitutions, argument handling, namespacing, and common launch-time mistakes."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "launch-files/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/launch-files/SKILL.md"
tags: ["ros2", "launch", "python", "namespaces", "parameters", "beginner"]
related: ["articles/devops/colcon-workspace-discipline.md", "articles/navigation/rviz-goals-bt-navigator-and-nav2-flow.md"]
---

# ROS 2 Launch Files: Patterns and Pitfalls

Source: [ros2-copilot-skills launch files skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/launch-files/SKILL.md)

## Why This Matters

Launch files are one of the first places ROS 2 projects become difficult to reason about. A clean launch structure makes it much easier to switch between simulation and hardware, pass parameters, namespace subsystems, and compose larger systems.

## Distilled Takeaways

- A launch file is not just a list of nodes. It is a structured description with declared arguments, substitutions, conditions, grouping, and optional runtime logic.
- `LaunchConfiguration` is a substitution object, not a normal Python boolean or string. That catches many people.
- If you need ordinary Python branching based on launch arguments, use `OpaqueFunction` and inspect the resolved values from the launch context.
- Grouping with `PushRosNamespace` and `SetParameter` is often cleaner than repeating namespace and common settings on every node.
- Launch, config, and map assets must actually be installed, or `get_package_share_directory()` will betray you at runtime.

## Common Mistakes

- Referencing a launch argument before it is declared.
- Treating `LaunchConfiguration('use_sim_time')` as though it could be used directly in a Python `if` statement.
- Forgetting `output='screen'` during development and then wondering where logs went.
- Installing executables but not installing launch or config directories.
- Confusing namespacing effects when a `GroupAction` changes the resolution of topics, services, and parameters.

## Design Guidance

- Use launch arguments for the major operating modes, such as `use_sim_time`, namespace, and hardware-vs-sim selection.
- Put complex conditional logic in one place rather than spreading conditions across every node.
- Prefer readable composition over clever one-liners.
- Treat launch files as part of the robot's architecture, not as disposable glue.

## When to Read the Original Source

Go to the original skill when you want ready-to-use code patterns for includes, conditions, grouping, event handlers, parameter YAML usage, and packaging requirements.
