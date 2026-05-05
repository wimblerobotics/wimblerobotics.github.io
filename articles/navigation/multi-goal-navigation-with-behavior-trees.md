---
title: "Multi-Goal Navigation with Behavior Trees"
summary: "How to structure behavior trees for multi-goal tasks when simple waypoint following is not enough to express the autonomy you need."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "multi-goal-navigation-bt/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/multi-goal-navigation-bt/SKILL.md"
tags: ["ros2", "nav2", "behavior-trees", "waypoints", "multi-goal"]
related: ["articles/navigation/nav2-waypoint-follower-and-patrol-routes.md", "articles/navigation/bt-subtrees-for-reusable-autonomy.md", "articles/navigation/behavior-trees-for-nav2-and-robot-autonomy.md"]
---

# Multi-Goal Navigation with Behavior Trees

Source: [ros2-copilot-skills multi-goal navigation BT skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/multi-goal-navigation-bt/SKILL.md)

## Why This Matters

Many robot tasks are more than one destination. Patrol loops, inspection routes, multi-room chores, and workflow sequences all need autonomy that reasons across multiple goals rather than treating each navigation request as an isolated event.

## Distilled Takeaways

- Waypoint following is useful, but BT-based multi-goal autonomy gives richer control over branching, retries, and mission context.
- Multi-goal navigation benefits from reusable subtrees and explicit state on the blackboard.
- The right abstraction depends on whether the robot is executing a route or a real task workflow.
- Mission-level logic belongs above individual navigate-to-pose calls.

## Practical Guidance

- Use BT structure when goals have dependencies, conditional behavior, or mission context.
- Keep route state and goal progression explicit rather than implicit in action callbacks.
- Design for interruption, replanning, and partial completion.
- Reserve simple waypoint followers for simpler route-execution use cases.

## Corroborating References

- [Nav2 behavior tree docs](https://docs.nav2.org/behavior_trees/index.html)
- [Nav2 waypoint follower docs](https://docs.nav2.org/configuration/packages/configuring-waypoint-follower.html)

## When to Read the Original Source

Go to the original skill when you want concrete multi-goal BT patterns and the practical distinction between route execution and richer on-robot autonomy.