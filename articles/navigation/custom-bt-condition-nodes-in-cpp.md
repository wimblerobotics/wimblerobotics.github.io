---
title: "Custom BT Condition Nodes in C++"
summary: "How to add project-specific condition checks to a Nav2 behavior tree while keeping decision logic readable and state semantics explicit."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "custom-bt-condition-cpp/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/custom-bt-condition-cpp/SKILL.md"
tags: ["ros2", "nav2", "behavior-trees", "conditions", "cpp"]
related: ["articles/navigation/nav2-bt-condition-nodes.md", "articles/navigation/custom-bt-action-nodes-in-cpp.md", "articles/navigation/behavior-trees-for-nav2-and-robot-autonomy.md"]
---

# Custom BT Condition Nodes in C++

Source: [ros2-copilot-skills custom BT condition C++ skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/custom-bt-condition-cpp/SKILL.md)

## Why This Matters

Custom condition nodes are how a project expresses its own notion of readiness, safety, mission state, or environment-specific triggers. These checks often matter more than action implementation because they shape the flow of autonomy itself.

## Distilled Takeaways

- A condition node should answer one clear question about robot state.
- Custom conditions are valuable when the project has state semantics beyond Nav2's built-ins.
- Condition nodes should remain cheap, predictable, and easy to reason about.
- If a condition is unstable, the tree will feel unstable too.

## Practical Guidance

- Keep conditions focused and side-effect free.
- Use clear naming so the tree reads like a meaningful decision flow.
- Watch for flickering conditions under noisy inputs and add hysteresis or filtering where needed.
- Avoid mixing long computations or action behavior into a condition node.

## Corroborating References

- [BehaviorTree.CPP docs](https://www.behaviortree.dev/docs/intro/)
- [Nav2 behavior tree docs](https://docs.nav2.org/behavior_trees/index.html)

## When to Read the Original Source

Go to the original skill when you want the custom-condition node implementation pattern and reminders about how condition semantics affect tree stability.