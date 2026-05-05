---
title: "Behavior Tree Decorator Nodes"
summary: "How decorator nodes reshape behavior tree execution by gating, repeating, delaying, or otherwise modifying child-node behavior."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "bt-decorator-nodes/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/bt-decorator-nodes/SKILL.md"
tags: ["ros2", "behavior-trees", "bt", "nav2", "decorators"]
related: ["articles/navigation/behavior-tree-control-nodes.md", "articles/navigation/behavior-trees-for-nav2-and-robot-autonomy.md", "articles/navigation/recovery-behavior-trees-in-nav2.md"]
---

# Behavior Tree Decorator Nodes

Source: [ros2-copilot-skills BT decorator nodes skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/bt-decorator-nodes/SKILL.md)

## Why This Matters

Decorator nodes are small but influential. They change how often a subtree runs, when it is allowed to run, or how its result is interpreted, which means they can silently control much of the tree's real behavior.

## Distilled Takeaways

- Decorators modify child-node behavior without changing the subtree body itself.
- They are useful for retries, timing, gating, inversion, and rate control.
- Overusing decorators can make a tree harder to reason about than necessary.
- They are often the hidden cause of surprising repeat or skip behavior.

## Practical Guidance

- Use decorators when they make the tree simpler, not merely more clever.
- Check decorator semantics first when a subtree runs too often or not often enough.
- Keep rate and retry behavior explicit.
- Document non-obvious decorators in complex trees.

## Corroborating References

- [BehaviorTree.CPP documentation](https://www.behaviortree.dev/)
- [Nav2 behavior tree docs](https://docs.nav2.org/behavior_trees/)

## When to Read the Original Source

Go to the original skill when you want the decorator-specific examples and the practical reminders about rate, retry, and gating behavior.