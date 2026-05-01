---
title: "Nav2 Global Costmap Configuration"
summary: "How to configure the global costmap for map-based planning, unknown-space policy, footprint handling, and the right layer set for indoor mobile robots."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "global-costmap-config/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/global-costmap-config/SKILL.md"
tags: ["ros2", "nav2", "navigation", "costmaps", "global-planning", "jazzy"]
related: ["articles/navigation/nav2-costmap-architecture-and-plugin-order.md", "articles/navigation/nav2-static-layer-and-map-ingestion.md", "articles/navigation/nav2-keepout-zones-and-no-go-areas.md"]
---

# Nav2 Global Costmap Configuration

Source: [global-costmap-config](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/global-costmap-config/SKILL.md)

## Why This Matters

The global costmap is where the planner reasons about route structure across the mapped environment. If it is framed incorrectly or polluted with local-reactive logic, the planner will produce paths that are brittle, overly conservative, or simply impossible.

## Distilled Takeaways

- The global costmap should usually use `global_frame: map`, not `odom`.
- It is usually anchored by the static map and then augmented with selective dynamic information.
- `track_unknown_space` changes whether unexplored cells are treated as blocked or traversable. That is a planning policy decision, not just a technical toggle.
- Footprint definition matters globally because planner feasibility depends on robot geometry, not just local obstacle avoidance.
- A minimal global costmap is often better than a crowded one.

## Practical Guidance

- Start with `static_layer` plus `inflation_layer`. Add `obstacle_layer` only if transient obstacles need to affect global replanning.
- Use `robot_radius` only for simple circular robots. Switch to an explicit polygon `footprint` when corners matter.
- Leave map dimensions to the static map unless you have a strong reason to resample or override them.
- Use `always_send_full_costmap: false` unless a downstream tool really needs full snapshots every cycle.
- If global planning fails across open space, check `track_unknown_space` and whether unknown cells are being treated as impassable.

## Common Failure Modes

- Using `global_frame: odom` and getting globally drifting plans.
- Copying the local costmap layer stack into the global costmap and paying a heavy compute cost for little planning value.
- Forgetting that the static map defines the authoritative large-scale geometry, so planner issues are blamed on the planner instead of the map or static layer.

## Corroborating References

- [Nav2 global costmap configuration](https://docs.nav2.org/configuration/packages/configuring-costmaps.html)
- [Nav2 map server and map semantics](https://docs.nav2.org/configuration/packages/map_server/configuring-map-server.html)
- [REP 105 frame conventions](https://www.ros.org/reps/rep-0105.html)

## When to Read the Original Source

Read the source skill when you need a concrete YAML baseline, a quick reminder on `track_unknown_space`, or a crisp explanation of why the global costmap should usually live in the `map` frame.