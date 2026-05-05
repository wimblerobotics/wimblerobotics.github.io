---
title: "Rotation Shim Controller"
summary: "How the Rotation Shim helps clean up heading alignment before path following, and when it fixes real problems instead of papering over worse ones."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "rotation-shim-controller/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/rotation-shim-controller/SKILL.md"
tags: ["ros2", "nav2", "controller", "rotation-shim", "heading-alignment"]
related: ["articles/navigation/regulated-pure-pursuit-controller.md", "articles/navigation/nav2-controller-selection-guide.md", "articles/navigation/nav2-waypoint-follower-and-patrol-routes.md"]
---

# Rotation Shim Controller

Source: [ros2-copilot-skills rotation shim skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/rotation-shim-controller/SKILL.md)

## Why This Matters

Some path followers perform better when the robot starts in a reasonable orientation. The Rotation Shim exists to handle that initial alignment cleanly instead of making the main controller struggle to do two jobs at once.

## Distilled Takeaways

- Rotation Shim is useful when initial heading alignment materially affects path-following quality.
- It can make simple controllers behave more reliably at path start and around replans.
- It should solve a real heading-transition problem, not compensate for bad path or goal logic.
- Clear handoff behavior between shim and main controller matters.

## Practical Guidance

- Use it when you observe poor path pickup due to initial orientation mismatch.
- Test it with replanning, waypoint transitions, and frequent goal changes.
- Keep the transition between rotation and path following predictable.
- If the robot still behaves badly after alignment, diagnose the main controller and path quality directly.

## Corroborating References

- [Nav2 controller plugins docs](https://docs.nav2.org/plugins/index.html)
- [Nav2 tuning guide](https://docs.nav2.org/tuning/index.html)

## When to Read the Original Source

Go to the original skill when you want the rotation-shim-specific control flow and tuning advice for pairing it with RPP or other local controllers.