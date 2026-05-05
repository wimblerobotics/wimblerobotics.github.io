---
title: "Custom BT Action Nodes in C++"
summary: "How to write custom BehaviorTree.CPP action nodes in C++ so Nav2 autonomy can call project-specific capabilities without bloating the tree logic itself."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "custom-bt-action-cpp/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/custom-bt-action-cpp/SKILL.md"
tags: ["ros2", "nav2", "behavior-trees", "cpp", "custom-nodes"]
related: ["articles/navigation/behavior-trees-for-nav2-and-robot-autonomy.md", "articles/navigation/custom-bt-action-nodes-in-python.md", "articles/navigation/writing-custom-nav2-behavior-plugins.md"]
---

# Custom BT Action Nodes in C++

Source: [ros2-copilot-skills custom BT action C++ skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/custom-bt-action-cpp/SKILL.md)

## Why This Matters

Custom BT action nodes are how higher-level autonomy calls into project-specific capabilities without hardwiring business logic into the tree structure itself. C++ action nodes are especially useful when the action touches performance-sensitive code or existing C++ ROS 2 components.

## Distilled Takeaways

- A BT action node should wrap a clear robot capability, not absorb general autonomy logic.
- Ports and return semantics are the contract between the tree and the implementation.
- C++ is a good fit when the node integrates closely with existing C++ systems or needs tighter runtime control.
- Good node design keeps the tree readable while still exposing useful behavior.

## Practical Guidance

- Keep each node's purpose narrow and semantically clear.
- Use ports deliberately so the tree can reason about inputs and outputs explicitly.
- Test node behavior both in isolation and inside the intended subtree.
- Avoid burying large state machines inside a single BT action node.

## Corroborating References

- [BehaviorTree.CPP docs](https://www.behaviortree.dev/docs/intro/)
- [Nav2 behavior tree docs](https://docs.nav2.org/behavior_trees/index.html)

## When to Read the Original Source

Go to the original skill when you want the C++ action-node scaffolding and the implementation details for exposing custom robot actions into a Nav2 tree.