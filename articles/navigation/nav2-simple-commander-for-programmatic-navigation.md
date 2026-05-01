---
title: "Nav2 Simple Commander for Programmatic Navigation"
summary: "How to use `BasicNavigator` to send goals, follow waypoints, inspect feedback, and write useful robot autonomy scripts without reimplementing the whole Nav2 client layer."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "nav2-simple-commander/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/nav2-simple-commander/SKILL.md"
tags: ["ros2", "nav2", "python", "basicnavigator", "actions", "autonomy"]
related: ["articles/navigation/nav2-waypoint-follower-and-patrol-routes.md", "articles/software/ros2-actions-for-long-running-robot-tasks.md", "articles/navigation/behavior-trees-for-nav2-and-robot-autonomy.md"]
---

# Nav2 Simple Commander for Programmatic Navigation

Source: [ros2-copilot-skills Nav2 Simple Commander skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/nav2-simple-commander/SKILL.md)

## Why This Matters

Not every robot application needs a full custom action-client layer or a custom behavior tree on day one. `BasicNavigator` gives Python applications a simpler way to drive Nav2 while still exposing goals, feedback, path queries, costmap actions, and task completion state.

## Distilled Takeaways

- `BasicNavigator` is a practical bridge between direct action APIs and higher-level autonomy code.
- It helps with initialization, lifecycle readiness checks, goal dispatch, feedback polling, and path operations.
- It is especially useful for patrol scripts, inspection workflows, and integration tools.
- It does not replace architectural thinking; it just lowers the integration cost.
- Programmatic navigation code still needs explicit failure handling and timeout logic.

## Practical Guidance

- Use it for application logic that is richer than RViz goal clicks but lighter than full BT authoring.
- Treat feedback and result handling as operational signals, not optional printouts.
- Build patrol and inspection loops around explicit retries and costmap clearing strategy.
- Use it as a stepping stone to more structured autonomy if the behavior keeps growing.

## Corroborating References

- [Nav2 Simple Commander API docs](https://docs.nav2.org/commander_api/index.html)
- [Nav2 concepts overview](https://docs.nav2.org/concepts/index.html)

## When to Read the Original Source

Go to the original skill when you want a patrol example, API method rundown, path-computation usage, and concrete patterns for waiting on Nav2 readiness and handling task results.