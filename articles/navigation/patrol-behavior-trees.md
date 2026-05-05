---
title: "Patrol Behavior Trees"
summary: "How to structure patrol autonomy as a behavior tree so repeatable route logic, interruption handling, and recovery remain readable."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "patrol-behavior-tree/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/patrol-behavior-tree/SKILL.md"
tags: ["ros2", "behavior-trees", "patrol", "nav2", "autonomy"]
related: ["articles/navigation/multi-goal-navigation-with-behavior-trees.md", "articles/navigation/nav2-waypoint-follower-and-patrol-routes.md", "articles/navigation/recovery-behavior-trees-in-nav2.md"]
---

# Patrol Behavior Trees

Source: [ros2-copilot-skills patrol behavior tree skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/patrol-behavior-tree/SKILL.md)

## Why This Matters

Patrol robots need more than a list of waypoints. They need repeatable route logic, interruption handling, retry behavior, and sensible recovery, all of which fit naturally into a behavior tree model.

## Distilled Takeaways

- Patrol logic benefits from explicit sequencing, conditions, and recovery structure.
- Behavior trees make route repetition and exception handling visible.
- Patrol behavior should account for pauses, operator interruption, and transient failures.
- A readable patrol tree is easier to audit than ad hoc waypoint glue code.

## Practical Guidance

- Model patrol tasks as mission logic, not just a loop around waypoints.
- Decide what happens on repeated failure, interruption, or stale localization.
- Keep route-specific data separate from the reusable control structure.
- Test patrol logic under interruptions, not just continuous success.

## Corroborating References

- [Nav2 waypoint follower docs](https://docs.nav2.org/configuration/packages/configuring-waypoint-follower.html)
- [BehaviorTree.CPP documentation](https://www.behaviortree.dev/)

## When to Read the Original Source

Go to the original skill when you want the patrol-specific tree patterns and the practical ways to encode route repetition and contingencies.