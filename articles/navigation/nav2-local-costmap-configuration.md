---
title: "Nav2 Local Costmap Configuration"
summary: "How to configure the rolling local costmap for near-field obstacle avoidance, controller stability, and practical sizing and update-rate tradeoffs."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "local-costmap-config/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/local-costmap-config/SKILL.md"
tags: ["ros2", "nav2", "navigation", "costmaps", "local-planning", "jazzy"]
related: ["articles/navigation/nav2-costmap-architecture-and-plugin-order.md", "articles/navigation/nav2-obstacle-layer-marking-and-clearing.md", "articles/navigation/nav2-voxel-layer-for-3d-obstacles.md"]
---

# Nav2 Local Costmap Configuration

Source: [local-costmap-config](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/local-costmap-config/SKILL.md)

## Why This Matters

The controller only looks a short distance ahead. If the local costmap is oversized, stale, or framed incorrectly, the robot will feel hesitant, oscillatory, or blind to nearby obstacles.

## Distilled Takeaways

- The local costmap should usually use `global_frame: odom` and `rolling_window: true`.
- It is a short-horizon safety and control product, not a second global map.
- Local costmaps generally should not include `static_layer`; they should be built from live sensing and immediate policy filters.
- Width, height, and resolution are control-design parameters because they shape the controller's view of the world.
- Update frequency should usually be meaningfully faster than the global costmap.

## Practical Guidance

- Size the window to cover the stopping distance, turning radius needs, and a modest look-ahead margin. Bigger is not automatically better.
- Keep resolution high enough to represent doorways, furniture edges, and robot footprint margins, but not so high that update time becomes the bottleneck.
- Prefer `voxel_layer` for depth cameras or mixed-height sensors. Use `obstacle_layer` alone only when the environment and sensing are genuinely 2D.
- If the local planner reacts late, check costmap update rate and TF latency before tuning controller gains.
- If the robot freezes around clutter, inspect whether the local window is too small to show an escape path or too large to stay fresh.

## Common Failure Modes

- Using `map` instead of `odom` and making the controller sensitive to localization jumps.
- Adding `static_layer` and then wondering why local obstacle truth feels wrong.
- Using a local window so large that the update loop cannot keep pace.

## Corroborating References

- [Nav2 costmap configuration guide](https://docs.nav2.org/configuration/packages/configuring-costmaps.html)
- [Nav2 controller concepts](https://docs.nav2.org/concepts/index.html)
- [REP 105 frame conventions](https://www.ros.org/reps/rep-0105.html)

## When to Read the Original Source

Read the source skill when you want a compact YAML example, the sizing formula for cells versus resolution, or a short checklist for why local costmaps should usually be rolling and `odom`-framed.