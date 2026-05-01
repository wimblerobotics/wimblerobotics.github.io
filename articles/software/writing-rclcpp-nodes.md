---
title: "Writing rclcpp Nodes in ROS 2"
summary: "A practical guide to idiomatic C++ ROS 2 nodes, including node shape, timers, subscriptions, components, and the pitfalls that silently break runtime behavior."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "cpp-node-boilerplate/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/cpp-node-boilerplate/SKILL.md"
tags: ["ros2", "rclcpp", "cpp", "nodes", "components", "software"]
related: ["articles/software/writing-rclpy-nodes.md", "articles/software/component-composition-for-high-bandwidth-pipelines.md", "articles/software/package-xml-cmakelists-and-python-package-structure.md"]
---

# Writing rclcpp Nodes in ROS 2

Source: [ros2-copilot-skills C++ node skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/cpp-node-boilerplate/SKILL.md)

## Why This Matters

ROS 2 C++ nodes are often where performance-sensitive parts of a robot end up. That makes it especially costly to get the structure wrong. A node that compiles but mishandles ownership, timer setup, or component registration can fail in ways that look unrelated to the original mistake.

## Distilled Takeaways

- Store publishers, subscriptions, and timers as members or they vanish silently when scopes end.
- Prefer modern callback style and explicit parameter declaration over clever constructor tricks.
- Component-style nodes are often the right default because they preserve the option of composition later.
- `shared_from_this()` in constructors is a classic trap in C++ ROS 2 code.
- Logging, parameter descriptors, and clear node boundaries make later debugging much cheaper.

## Practical Guidance

- Start with a clean minimal node pattern, then add capabilities deliberately.
- Use component registration even when a standalone executable also exists.
- Treat CMake registration and install rules as part of the node implementation, not afterthoughts.
- Reach for C++ when the workload is CPU-heavy, latency-sensitive, or likely to benefit from composition and intra-process transport.

## Corroborating References

- [ROS 2 C++ publisher/subscriber tutorial](https://docs.ros.org/en/jazzy/Tutorials/Beginner-Client-Libraries/Writing-A-Simple-Cpp-Publisher-And-Subscriber.html)
- [ROS 2 composition docs](https://docs.ros.org/en/jazzy/Concepts/Intermediate/About-Composition.html)

## When to Read the Original Source

Go to the original skill when you want concrete minimal and component-style node code, logging macro usage, and the warning list around ownership, constructor misuse, and component registration.