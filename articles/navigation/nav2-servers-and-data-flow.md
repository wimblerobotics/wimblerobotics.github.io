---
title: "Nav2 Servers and Data Flow"
summary: "A practical explanation of which Nav2 server does what, how costmaps and actions move data through the stack, and where to look first when navigation misbehaves."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "nav2-architecture-overview/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/nav2-architecture-overview/SKILL.md"
tags: ["ros2", "nav2", "servers", "costmaps", "planner", "controller"]
related: ["articles/navigation/nav2-architecture-and-tuning-guide.md", "articles/navigation/nav2-lifecycle-manager-and-bond-monitoring.md", "articles/navigation/nav2-controller-selection-guide.md"]
---

# Nav2 Servers and Data Flow

Source: [ros2-copilot-skills Nav2 architecture skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/nav2-architecture-overview/SKILL.md)

## Why This Matters

Nav2 gets easier as soon as you stop treating it as a black box. The planner, controller, behavior server, BT navigator, costmaps, and safety layers each have distinct jobs. If you know the data flow, you know where to debug.

## Distilled Takeaways

- The BT navigator coordinates work; it does not compute trajectories itself.
- The planner and controller operate on different costmaps for different purposes.
- Recovery and assistive behaviors live alongside navigation, not outside it.
- Velocity smoothing and collision monitoring belong in the command path after controller output.
- Most “Nav2 is broken” moments are really a single-server or single-link problem in the chain.

## Practical Guidance

- Debug server state before tuning algorithms.
- Follow the path from goal to `cmd_vel` whenever the robot does nothing or behaves strangely.
- Treat local and global costmaps as separate products with separate failure modes.
- Make a habit of checking whether the behavior you expect belongs to the planner, controller, BT, or costmap layer.

## Corroborating References

- [Nav2 concepts overview](https://docs.nav2.org/concepts/index.html)
- [Nav2 configuration guide](https://docs.nav2.org/configuration/index.html)

## When to Read the Original Source

Go to the original skill when you want the concrete server list, topic map, launch-file structure, and the compact debugging entry points for each major stage in the navigation pipeline.