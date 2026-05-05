---
title: "Behavior Tree XML Fundamentals"
summary: "A practical reading guide for BT XML so Nav2 trees stop looking like magic markup and start reading like robot logic."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "bt-xml-fundamentals/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/bt-xml-fundamentals/SKILL.md"
tags: ["ros2", "behavior-trees", "bt", "xml", "nav2"]
related: ["articles/navigation/behavior-trees-for-nav2-and-robot-autonomy.md", "articles/navigation/behavior-tree-control-nodes.md", "articles/navigation/bt-subtrees-for-reusable-autonomy.md"]
---

# Behavior Tree XML Fundamentals

Source: [ros2-copilot-skills BT XML fundamentals skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/bt-xml-fundamentals/SKILL.md)

## Why This Matters

Nav2 autonomy often appears in XML first. If you can read BT XML comfortably, you can review autonomy behavior, debug sequencing mistakes, and understand recovery logic without needing to guess how the system works from runtime behavior alone.

## Distilled Takeaways

- BT XML is a declarative representation of robot decision structure.
- Reading it well means understanding control nodes, decorators, conditions, actions, and blackboard usage together.
- Most confusion comes from not knowing what a node name implies operationally.
- XML clarity matters because trees are often reviewed and maintained by multiple contributors.

## Practical Guidance

- Read the tree top-down, identifying control structure before leaf semantics.
- Trace named nodes back to their implementations or documented roles.
- Keep XML organized so reviewers can understand intent quickly.
- Prefer explicit structure over compressed cleverness in maintainable robot behaviors.

## Corroborating References

- [BehaviorTree.CPP documentation](https://www.behaviortree.dev/)
- [Nav2 behavior tree docs](https://docs.nav2.org/behavior_trees/)

## When to Read the Original Source

Go to the original skill when you want the specific XML reading heuristics and the markup patterns that show up most often in Nav2 behavior trees.