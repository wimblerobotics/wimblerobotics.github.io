---
title: "MPPI Trajectory Visualization and Debugging"
summary: "How to inspect sampled MPPI trajectories so controller tuning is based on what the controller is actually considering, not on guesswork after the fact."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "mppi-trajectory-visualization/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/mppi-trajectory-visualization/SKILL.md"
tags: ["ros2", "nav2", "mppi", "debugging", "rviz"]
related: ["articles/navigation/mppi-controller-basics-and-tuning.md", "articles/navigation/mppi-critics-explained.md", "articles/navigation/nav2-rviz-tools-and-debug-views.md"]
---

# MPPI Trajectory Visualization and Debugging

Source: [ros2-copilot-skills MPPI trajectory visualization skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/mppi-trajectory-visualization/SKILL.md)

## Why This Matters

MPPI can feel opaque if you only look at the final cmd_vel and robot motion. Visualization is how you see whether the controller is exploring reasonable trajectory candidates, overreacting to costs, or being constrained by bad assumptions upstream.

## Distilled Takeaways

- Visualizing sampled trajectories makes MPPI tuning dramatically more interpretable.
- Good debug views reveal whether the controller is considering useful candidates at all.
- Visualization helps separate critic problems from costmap or kinematic problems.
- The goal is not prettier RViz output. The goal is faster diagnosis of local-motion behavior.

## Practical Guidance

- Use visualization when MPPI behaves strangely in only some environments or maneuvers.
- Compare what the controller samples with what the operator expected it to sample.
- Treat empty or obviously skewed candidate sets as a sign of deeper configuration issues.
- Pair visualization with repeatable test paths and scenarios.

## Corroborating References

- [Nav2 RViz and debugging docs](https://docs.nav2.org/)
- [Nav2 tuning guide](https://docs.nav2.org/tuning/index.html)

## When to Read the Original Source

Go to the original skill when you want the concrete visualization hooks and the specific debugging patterns for understanding MPPI candidate trajectories in RViz.