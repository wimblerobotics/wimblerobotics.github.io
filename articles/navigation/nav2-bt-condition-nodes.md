---
title: "Nav2 BT Condition Nodes"
summary: "How Nav2 condition nodes shape behavior-tree branching and why clean condition design matters as much as action-node implementation."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "bt-condition-nodes-nav2/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/bt-condition-nodes-nav2/SKILL.md"
tags: ["ros2", "nav2", "behavior-trees", "conditions", "autonomy"]
related: ["articles/navigation/behavior-trees-for-nav2-and-robot-autonomy.md", "articles/navigation/bt-subtrees-for-reusable-autonomy.md", "articles/navigation/recovery-behavior-trees-in-nav2.md"]
---

# Nav2 BT Condition Nodes

Source: [ros2-copilot-skills BT condition nodes skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/bt-condition-nodes-nav2/SKILL.md)

## Why This Matters

Condition nodes decide how the tree branches under real robot state, and bad condition design can make a tree feel unstable or opaque. In Nav2, conditions are where state observation turns into control-flow choice.

## Distilled Takeaways

- Condition nodes should reflect meaningful robot state, not accidental implementation details.
- They are critical for recovery gating, goal progress, path validity, and environment-aware branching.
- Poorly chosen conditions can cause oscillation between branches or premature recovery.
- The behavior tree becomes easier to reason about when conditions are explicit and semantically narrow.

## Practical Guidance

- Use condition nodes to make tree decisions readable and debuggable.
- Prefer a few clear state checks over complicated implicit logic in action nodes.
- Watch for repeated branch flipping as a sign of weak condition design.
- Treat conditions as part of the autonomy contract, not just tree plumbing.

## Corroborating References

- [Nav2 behavior tree docs](https://docs.nav2.org/behavior_trees/index.html)
- [BehaviorTree.CPP docs](https://www.behaviortree.dev/docs/intro/)

## When to Read the Original Source

Go to the original skill when you want the built-in Nav2 condition-node inventory and practical reminders about where each condition fits in real trees.