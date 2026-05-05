---
title: "Nav2 Behavior Tree Action Nodes"
summary: "What Nav2 BT action nodes actually represent in the autonomy stack and how to reason about them without treating the tree as decorative XML."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "bt-action-nodes-nav2/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/bt-action-nodes-nav2/SKILL.md"
tags: ["ros2", "nav2", "behavior-trees", "bt", "actions"]
related: ["articles/navigation/behavior-trees-for-nav2-and-robot-autonomy.md", "articles/navigation/custom-bt-action-nodes-in-cpp.md", "articles/navigation/nav2-servers-and-data-flow.md"]
---

# Nav2 Behavior Tree Action Nodes

Source: [ros2-copilot-skills Nav2 BT action nodes skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/bt-action-nodes-nav2/SKILL.md)

## Why This Matters

In Nav2, BT action nodes are where the tree actually asks the navigation stack to do work. Understanding them makes the tree legible as an execution system rather than a diagram of intentions.

## Distilled Takeaways

- Action nodes are the bridge between BT logic and long-running Nav2 work.
- They typically correspond to action-driven behaviors such as planning, control, waiting, or recovery.
- Good tree design depends on knowing what each action node starts, monitors, and returns.
- Debugging a navigation tree gets easier when action nodes are treated as operational interfaces.

## Practical Guidance

- Read BT XML by identifying action nodes first and the surrounding logic second.
- Trace each action node to the server or subsystem that actually executes it.
- Check return statuses when a tree appears to stall or oscillate.
- Add custom action nodes only when the autonomy logic needs a new capability, not just a renamed one.

## Corroborating References

- [Nav2 behavior tree docs](https://docs.nav2.org/behavior_trees/)
- [BehaviorTree.CPP documentation](https://www.behaviortree.dev/)

## When to Read the Original Source

Go to the original skill when you want the concrete rundown of common Nav2 BT action nodes and how they are used in practical trees.