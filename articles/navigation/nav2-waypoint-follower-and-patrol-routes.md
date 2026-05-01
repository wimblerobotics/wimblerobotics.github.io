---
title: "Nav2 Waypoint Follower and Patrol Routes"
summary: "How to use waypoint following for patrols, inspections, and multi-stop tasks, and where it stops being enough compared with richer behavior-tree autonomy."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "waypoint-follower/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/waypoint-follower/SKILL.md"
tags: ["ros2", "nav2", "waypoints", "patrol", "inspection", "autonomy"]
related: ["articles/navigation/nav2-simple-commander-for-programmatic-navigation.md", "articles/navigation/behavior-trees-for-nav2-and-robot-autonomy.md", "articles/navigation/nav2-rviz-tools-and-debug-views.md"]
---

# Nav2 Waypoint Follower and Patrol Routes

Source: [ros2-copilot-skills waypoint follower skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/waypoint-follower/SKILL.md)

## Why This Matters

Many robots need to visit multiple places in sequence long before they need a sophisticated autonomy system. The waypoint follower covers that middle ground well, but only if you understand its limits and task-executor model.

## Distilled Takeaways

- Waypoint following is a good fit for patrols, inspections, and multi-room traversal.
- It is sequential, not route-optimizing.
- Task executors let each waypoint do a little more than just “arrive and continue.”
- `stop_on_failure` changes the operational character of the patrol significantly.
- Once route logic starts depending on robot state, failures, or mission context, a BT-based autonomy layer often becomes the better abstraction.

## Practical Guidance

- Decide whether your robot should stop the mission on one blocked waypoint or continue the route.
- Set action timeouts to match the longest realistic leg, not a happy-path demo run.
- Use waypoint following for structured repetitive routes before investing in a larger autonomy framework.
- Treat patrol looping logic as application code unless you intentionally move it into a BT.

## Corroborating References

- [Nav2 waypoint follower documentation](https://docs.nav2.org/configuration/packages/configuring-waypoint-follower.html)
- [Nav2 Simple Commander API docs](https://docs.nav2.org/commander_api/index.html)

## When to Read the Original Source

Go to the original skill when you want Python examples, task-executor plugin descriptions, patrol-loop patterns, and the operational differences between `FollowWaypoints` and `NavigateThroughPoses`.