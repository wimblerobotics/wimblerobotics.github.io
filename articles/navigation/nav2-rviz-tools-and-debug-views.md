---
title: "Nav2 RViz Tools and Debug Views"
summary: "How to use RViz as a serious Nav2 debugging surface: initial pose, goals, costmaps, plans, TF, footprints, and the displays that reveal what the stack thinks is true."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "nav2-rviz-tools/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/nav2-rviz-tools/SKILL.md"
tags: ["ros2", "nav2", "rviz2", "debugging", "costmaps", "visualization"]
related: ["articles/navigation/rviz-goals-bt-navigator-and-nav2-flow.md", "articles/navigation/nav2-servers-and-data-flow.md", "articles/navigation/nav2-error-codes-and-failure-analysis.md"]
---

# Nav2 RViz Tools and Debug Views

Source: [ros2-copilot-skills Nav2 RViz tools skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/nav2-rviz-tools/SKILL.md)

## Why This Matters

RViz is not just a way to click goals. In Nav2, it is one of the fastest ways to see whether localization, costmaps, transforms, plans, and footprint assumptions all agree with reality.

## Distilled Takeaways

- The Nav2 RViz panel exposes lifecycle transitions, navigation control, and waypoint workflows.
- Costmap, plan, footprint, particle cloud, and TF displays are often more revealing than raw logs.
- QoS mismatches can make RViz appear broken even when the stack is publishing correctly.
- Setting an initial pose is part of localization correctness, not just UI interaction.
- A good RViz config is part of the robot toolchain and should be treated as a maintained artifact.

## Practical Guidance

- Make costmaps, plans, TF, robot model, and footprint standard displays in your navigation config.
- Check QoS settings whenever a map or costmap display appears blank.
- Use RViz to verify the stack's world model before adjusting planners or controllers.
- Save known-good configs and launch them consistently.

## Corroborating References

- [Nav2 getting started and RViz docs](https://docs.nav2.org/getting_started/index.html)
- [RViz user guide](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/RViz/RViz-Main.html)

## When to Read the Original Source

Go to the original skill when you want a detailed display checklist, Nav2 panel behavior, QoS fixes for map visualization, and the operational meaning of each recommended RViz display.