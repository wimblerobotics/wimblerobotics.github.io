---
title: "Behavior Tree Blackboard Patterns"
summary: "How to use the BT blackboard as shared execution state without turning the tree into a hidden-variable system nobody can safely debug."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "bt-blackboard-patterns/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/bt-blackboard-patterns/SKILL.md"
tags: ["ros2", "behavior-trees", "bt", "blackboard", "nav2"]
related: ["articles/navigation/behavior-trees-for-nav2-and-robot-autonomy.md", "articles/navigation/bt-subtrees-for-reusable-autonomy.md", "articles/navigation/behavior-tree-xml-fundamentals.md"]
---

# Behavior Tree Blackboard Patterns

Source: [ros2-copilot-skills BT blackboard patterns skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/bt-blackboard-patterns/SKILL.md)

## Why This Matters

The blackboard is one of the most powerful and most abuse-prone parts of a behavior tree system. Used well, it lets nodes share state cleanly. Used badly, it makes tree behavior impossible to reason about from the XML alone.

## Distilled Takeaways

- The blackboard should carry shared execution context, not arbitrary global state.
- Clear naming and ownership matter because hidden data flow is a common BT failure mode.
- Reusable subtrees depend on predictable blackboard contracts.
- Good blackboard discipline reduces debugging time dramatically.

## Practical Guidance

- Treat blackboard keys as part of the tree interface.
- Keep the number of shared variables small and intentional.
- Document which nodes read and write important keys.
- Avoid clever implicit coupling between distant parts of the tree.

## Corroborating References

- [BehaviorTree.CPP documentation](https://www.behaviortree.dev/)
- [Nav2 behavior tree docs](https://docs.nav2.org/behavior_trees/)

## When to Read the Original Source

Go to the original skill when you want the practical blackboard usage patterns and the specific anti-patterns that show up in real robot behavior trees.