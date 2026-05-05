---
title: "Behavior Tree Control Nodes"
summary: "What selectors, sequences, fallbacks, and related control nodes mean in practice when you are trying to understand or design autonomy logic."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "bt-control-nodes/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/bt-control-nodes/SKILL.md"
tags: ["ros2", "behavior-trees", "bt", "nav2", "control-flow"]
related: ["articles/navigation/behavior-trees-for-nav2-and-robot-autonomy.md", "articles/navigation/behavior-tree-decorator-nodes.md", "articles/navigation/nav2-bt-condition-nodes.md"]
---

# Behavior Tree Control Nodes

Source: [ros2-copilot-skills BT control nodes skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/bt-control-nodes/SKILL.md)

## Why This Matters

Control nodes define the logic of a behavior tree. If action nodes say what the robot can do, control nodes decide when it tries something, when it retries, and when it gives up.

## Distilled Takeaways

- Control nodes are the decision structure of the tree.
- Sequences, fallbacks, parallels, and reactive variants each encode different autonomy tradeoffs.
- Most BT debugging starts with understanding which control node is driving the current branch behavior.
- Choosing the wrong control node can make a correct-looking tree behave poorly.

## Practical Guidance

- Read tree control flow before focusing on individual leaf nodes.
- Match the node type to the behavior you want under success, failure, and retry conditions.
- Use simpler control structures unless the behavior genuinely needs more complexity.
- Test trees under failure cases, not only the happy path.

## Corroborating References

- [BehaviorTree.CPP documentation](https://www.behaviortree.dev/)
- [Nav2 behavior tree docs](https://docs.nav2.org/behavior_trees/)

## When to Read the Original Source

Go to the original skill when you want the control-node-specific explanations and the practical examples that make tree logic easier to read.