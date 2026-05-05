---
title: "Recovery Behavior Trees in Nav2"
summary: "How to design recovery subtrees that actually diagnose and respond to common failure states instead of cycling through moves at random."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "recovery-behavior-tree/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/recovery-behavior-tree/SKILL.md"
tags: ["ros2", "nav2", "behavior-trees", "recovery", "autonomy"]
related: ["articles/navigation/nav2-behavior-server-and-recovery-actions.md", "articles/navigation/nav2-backup-behavior.md", "articles/navigation/spin-behavior.md"]
---

# Recovery Behavior Trees in Nav2

Source: [ros2-copilot-skills recovery BT skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/recovery-behavior-tree/SKILL.md)

## Why This Matters

Recovery design is where a navigation stack shows whether it understands failure or merely reacts to it. A good recovery tree turns known failure modes into deliberate responses; a poor one just cycles through motions until the operator gives up.

## Distilled Takeaways

- Recovery trees should reflect likely failure causes, not just a generic list of fallback actions.
- Different failures call for different responses: perception refresh, local escape, patience, or escalation.
- The recovery subtree is part of the robot's autonomy architecture, not a patch at the end.
- Metrics and traces matter because recovery quality is hard to judge from one incident.

## Practical Guidance

- Design recovery around specific classes of failure you have actually observed.
- Keep escalation logic explicit so the tree does not loop blindly.
- Pair each recovery action with the failure mode it is supposed to address.
- Review recovery traces after real failures and refine the tree intentionally.

## Corroborating References

- [Nav2 behavior tree docs](https://docs.nav2.org/behavior_trees/index.html)
- [BehaviorTree.CPP docs](https://www.behaviortree.dev/docs/intro/)

## When to Read the Original Source

Go to the original skill when you want concrete recovery-tree structuring advice and examples of how to sequence wait, backup, spin, and related actions coherently.