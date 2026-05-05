---
title: "Behavior Trees for Nav2 and Robot Autonomy"
summary: "How Nav2 uses BehaviorTree.CPP, what XML structure and blackboard flow actually mean, and when to move from waypoint scripts to real autonomy logic."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "multiple skills: bt-xml-fundamentals, bt-control-nodes, bt-decorator-nodes, bt-blackboard-patterns, bt-action-nodes-nav2, patrol-behavior-tree"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/docs/SKILLS-CATALOG.md"
tags: ["ros2", "nav2", "behavior-trees", "autonomy", "btcpp", "groot2"]
related: ["articles/navigation/nav2-architecture-and-tuning-guide.md", "articles/navigation/rviz-goals-bt-navigator-and-nav2-flow.md", "articles/foundations/ros2-core-communication-and-execution.md", "articles/foundations/behavior-tree-ticks-status-and-control-flow.md", "articles/navigation/custom-nav2-bt-plugins-and-configuration.md", "articles/navigation/behavior-tree-blackboard-patterns.md", "articles/navigation/patrol-behavior-trees.md", "articles/navigation/nav2-bt-action-nodes.md"]
---

# Behavior Trees for Nav2 and Robot Autonomy

Source: [ros2-copilot-skills catalog](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/docs/SKILLS-CATALOG.md)

## Why This Matters

Behavior trees are where many ROS 2 robots stop being demos and start becoming systems. They let you centralize decision logic, make recovery behavior explicit, and build reusable autonomy pieces without burying application logic across launch files, timer callbacks, and one-off state variables.

## Distilled Takeaways

- Nav2 uses BehaviorTree.CPP v4, and the XML file is not just configuration. It is the robot's decision structure for navigation.
- Control nodes, decorator nodes, and blackboard variables shape behavior as much as the leaf action nodes do.
- Blackboard hygiene matters. If data flow between nodes is vague, the tree becomes difficult to debug and harder to evolve safely.
- Waypoint following is enough for some task dispatch patterns, but richer autonomy usually needs an application-level tree that reasons about failures, retries, and robot state.
- Logging and visualization are not optional once trees become non-trivial. A BT without observability becomes a hidden state machine.

## Practical Value

- Use a small number of well-named subtrees rather than one giant XML file.
- Treat recovery logic as a first-class subtree, not as a last-minute appendage.
- Keep application-level autonomy decisions above the lower-level navigation action nodes.
- Use Groot2 and trace logging early, before the tree becomes too large to reason about by inspection.

## Start Here

- For BT execution semantics: [Behavior Tree Ticks, Status, and Control Flow](../foundations/behavior-tree-ticks-status-and-control-flow.md)
- For Nav2 leaf-node structure: [Nav2 Behavior Tree Action Nodes](nav2-bt-action-nodes.md), [Behavior Tree Control Nodes](behavior-tree-control-nodes.md), and [Behavior Tree Decorator Nodes](behavior-tree-decorator-nodes.md)
- For extending the tree with your own code: [Custom Nav2 BT Plugins and Configuration](custom-nav2-bt-plugins-and-configuration.md), [Custom BT Action Nodes in C++](custom-bt-action-nodes-in-cpp.md), and [Custom BT Action Nodes in Python](custom-bt-action-nodes-in-python.md)

## Corroborating References

- [BehaviorTree.CPP introduction](https://www.behaviortree.dev/docs/intro/)
- [Nav2 behavior tree docs](https://docs.nav2.org/behavior_trees/index.html)
- [Nav2 concepts: why BTs are central](https://docs.nav2.org/concepts/index.html#behavior-trees)

## When to Read the Original Source

Go to the original skills when you need exact XML patterns, subtree composition examples, custom node extension points in Python or C++, and practical advice on mixing built-in Nav2 nodes with higher-level patrol or multi-goal logic.