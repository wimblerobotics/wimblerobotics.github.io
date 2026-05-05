---
title: "BT Logging, Replay, and Trace Analysis"
summary: "How to debug behavior trees by recording what actually happened instead of reconstructing autonomy failures from memory and log fragments."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "bt-logging-and-replay/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/bt-logging-and-replay/SKILL.md"
tags: ["ros2", "nav2", "behavior-trees", "debugging", "logging"]
related: ["articles/navigation/groot2-for-nav2-behavior-trees.md", "articles/navigation/behavior-trees-for-nav2-and-robot-autonomy.md", "articles/navigation/nav2-error-codes-and-failure-analysis.md"]
---

# BT Logging, Replay, and Trace Analysis

Source: [ros2-copilot-skills BT logging skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/bt-logging-and-replay/SKILL.md)

## Why This Matters

Complex autonomy failures are hard to reason about after the fact. Behavior-tree logging and replay give you a time-resolved record of how the tree branched, failed, and recovered instead of forcing you to reconstruct events from partial logs and operator recollection.

## Distilled Takeaways

- BT logs make autonomy behavior inspectable at the level of decisions, not just node console output.
- Replay is especially valuable for intermittent failures and complex recovery sequences.
- Good traces shorten the distance between operator symptom and tree-level cause.
- Logging is most useful when enabled before the tree becomes difficult to reason about manually.

## Practical Guidance

- Capture tree traces during realistic test runs, not only when something breaks in production.
- Pair BT traces with rosbag and system logs for a full-failure picture.
- Use trace review to identify repeated bad branch choices and unstable conditions.
- Treat logging and replay as standard autonomy tooling, not emergency-only tooling.

## Corroborating References

- [BehaviorTree.CPP docs](https://www.behaviortree.dev/docs/intro/)
- [Nav2 behavior tree docs](https://docs.nav2.org/behavior_trees/index.html)

## When to Read the Original Source

Go to the original skill when you want the concrete logging and replay hooks and advice on how to interpret tree execution traces during diagnosis.