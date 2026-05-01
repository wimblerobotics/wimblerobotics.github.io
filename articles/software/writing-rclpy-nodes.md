---
title: "Writing rclpy Nodes in ROS 2"
summary: "How to structure Python ROS 2 nodes so they stay maintainable under timers, parameters, callback groups, and real robot shutdown behavior."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "python-node-boilerplate/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/python-node-boilerplate/SKILL.md"
tags: ["ros2", "rclpy", "python", "nodes", "software", "beginner"]
related: ["articles/software/writing-rclcpp-nodes.md", "articles/software/executors-callback-groups-and-concurrency.md", "articles/software/parameter-handling-and-runtime-reconfiguration.md"]
---

# Writing rclpy Nodes in ROS 2

Source: [ros2-copilot-skills Python node skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/python-node-boilerplate/SKILL.md)

## Why This Matters

Python is often the fastest way to get a robot feature working, which makes it easy to ship structural problems with it. If your node lifecycle, parameter handling, or shutdown pattern is sloppy, the resulting issues tend to look like ROS problems instead of straightforward code hygiene problems.

## Distilled Takeaways

- Use class-based nodes with explicit initialization and cleanup.
- Declare parameters in the constructor and keep runtime update handling explicit.
- `rclpy.spin()` is simple and effective until concurrency or blocking I/O forces a more deliberate executor choice.
- Python's GIL means multithreaded executors help more with I/O concurrency than with CPU-bound work.
- Entry-point wiring in packaging is part of the node contract, not packaging trivia.

## Practical Guidance

- Keep startup and shutdown paths boring and explicit.
- Prefer one clear responsibility per node, especially in Python.
- Move CPU-heavy work out of Python when timing pressure becomes real.
- Use parameter YAML files and launch wiring consistently so the node is reproducible across machines.

## Corroborating References

- [ROS 2 Python publisher/subscriber tutorial](https://docs.ros.org/en/jazzy/Tutorials/Beginner-Client-Libraries/Writing-A-Simple-Py-Publisher-And-Subscriber.html)
- [ROS 2 Python parameters tutorial](https://docs.ros.org/en/jazzy/Tutorials/Beginner-Client-Libraries/Using-Parameters-In-A-Class-Python.html)

## When to Read the Original Source

Go to the original skill when you want a more complete production node pattern with callback groups, executor setup, dynamic parameters, and packaging reminders for `console_scripts`.