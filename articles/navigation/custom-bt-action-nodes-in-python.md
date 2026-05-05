---
title: "Custom BT Action Nodes in Python"
summary: "How to write Python-backed custom BT action nodes when the autonomy logic is easier to express in Python than in a compiled plugin."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "custom-bt-action-python/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/custom-bt-action-python/SKILL.md"
tags: ["ros2", "nav2", "behavior-trees", "python", "custom-nodes"]
related: ["articles/navigation/custom-bt-action-nodes-in-cpp.md", "articles/navigation/behavior-trees-for-nav2-and-robot-autonomy.md", "articles/software/writing-rclpy-nodes.md"]
---

# Custom BT Action Nodes in Python

Source: [ros2-copilot-skills custom BT action Python skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/custom-bt-action-python/SKILL.md)

## Why This Matters

Python can be the faster path for writing autonomy helpers, integrations, and task-specific actions, especially when the logic is not performance-critical. The important part is still the interface: what the tree asks for, what the node returns, and what side effects it owns.

## Distilled Takeaways

- Python BT actions are useful when development speed and clarity matter more than peak performance.
- The same design rule applies as in C++: the node should wrap one meaningful capability.
- Good port design and clean success/failure semantics matter more than language choice.
- Python nodes are a strong fit for orchestration, integration, and light task logic.

## Practical Guidance

- Use Python for custom BT actions that are I/O-bound or orchestration-heavy.
- Keep long-running or compute-heavy work out of a node that should remain reactive.
- Make failure semantics explicit so the tree can respond appropriately.
- Promote to C++ later only if the performance or integration case is real.

## Corroborating References

- [BehaviorTree.CPP docs](https://www.behaviortree.dev/docs/intro/)
- [ROS 2 Python tutorials](https://docs.ros.org/en/jazzy/Tutorials/Beginner-Client-Libraries/Writing-A-Simple-Py-Publisher-And-Subscriber.html)

## When to Read the Original Source

Go to the original skill when you want the Python-side node pattern and guidance for exposing custom task logic to a Nav2 BT without overcomplicating the tree.