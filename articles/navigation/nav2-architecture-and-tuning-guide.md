---
title: "Nav2 Architecture and Tuning Guide"
summary: "A system-level guide to how Nav2 servers, costmaps, planners, controllers, and recovery behaviors fit together, plus the first tuning decisions that matter."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "multiple skills: nav2-architecture-overview, nav2-params-structure, costmap-architecture, controller-comparison, planner-comparison, behavior-server"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/docs/SKILLS-CATALOG.md"
tags: ["ros2", "nav2", "navigation", "costmaps", "planners", "controllers", "recovery", "jazzy"]
related: ["articles/navigation/nav2-costmap-architecture-and-plugin-order.md", "articles/navigation/behavior-trees-for-nav2-and-robot-autonomy.md", "articles/navigation/localization-state-estimation-and-frame-discipline.md"]
---

# Nav2 Architecture and Tuning Guide

Source: [ros2-copilot-skills catalog](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/docs/SKILLS-CATALOG.md)

## Why This Matters

Nav2 is easier to tune when you stop thinking of it as a single package. It is a set of lifecycle-managed servers connected by actions, TF, costmaps, and behavior trees. The most common failures come from misunderstanding which server owns which responsibility, or from tuning one layer while the real limit sits upstream or downstream.

## Distilled Takeaways

- The BT Navigator coordinates navigation, but it does not compute paths or velocities itself. It delegates to planner, controller, smoother, behavior, waypoint, and related servers.
- The global and local costmaps solve different problems. Tuning them as if they were the same data product leads to poor plans, oscillation, or needless obstacle inflation.
- Planner choice, controller choice, footprint definition, and costmap layer order interact. Good tuning is about system coherence more than isolated parameter changes.
- Recovery behavior is architecture, not polish. If the robot can get stuck, the navigation stack needs explicit ways to detect and respond.
- The cmd_vel chain matters: controller output, optional velocity smoothing, collision monitoring, and hardware enforcement must agree or the robot will feel inconsistent.

## Core Navigation Subtopics

- Architecture and data flow: [Nav2 Servers and Data Flow](nav2-servers-and-data-flow.md)
- Costmap structure: [Nav2 Costmap Architecture and Plugin Order](nav2-costmap-architecture-and-plugin-order.md)
- Global map-based planning context: [Nav2 Global Costmap Configuration](nav2-global-costmap-configuration.md)
- Near-field control context: [Nav2 Local Costmap Configuration](nav2-local-costmap-configuration.md)
- Policy overlays: [Nav2 Keepout Zones and No-Go Areas](nav2-keepout-zones-and-no-go-areas.md) and [Nav2 Speed-Restricted Zones](nav2-speed-restricted-zones.md)

## Practical Value

- Use this page as the first-stop orientation layer before tuning specific planners or controllers.
- Validate server activation and TF first, then footprint and costmaps, then planner and controller behavior, then recoveries.
- Pick a controller based on robot behavior, not popularity. Differential drive in cluttered spaces, ackermann-like motion, and slow indoor service robots often need different tradeoffs.
- Keep a clear mental split between path generation problems, path tracking problems, and safety-stop problems.

## Corroborating References

- [Nav2 concepts overview](https://docs.nav2.org/concepts/index.html)
- [Nav2 tuning guide](https://docs.nav2.org/tuning/index.html)
- [Nav2 configuration guide](https://docs.nav2.org/configuration/index.html)
- [REP 105 frame conventions](https://www.ros.org/reps/rep-0105.html)

## When to Read the Original Source

Go to the original skills when you need concrete parameter structure examples for costmap layers, comparisons between MPPI, DWB, RPP, SMAC, NavFn, and recovery-related plugins, or when you are picking the first controller-planner stack for a new robot.