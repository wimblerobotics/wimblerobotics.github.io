---
title: "Collision Monitor and Safety Polygons"
summary: "How to use Nav2 Collision Monitor as the last motion-safety layer before the drivetrain, with stop and slowdown zones grounded in real robot geometry."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "collision-monitor/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/collision-monitor/SKILL.md"
tags: ["ros2", "nav2", "collision-monitor", "safety", "sensors"]
related: ["articles/navigation/nav2-architecture-and-tuning-guide.md", "articles/navigation/nav2-costmap-architecture-and-plugin-order.md", "articles/hardware/ros2-hardware-integration-patterns.md"]
---

# Collision Monitor and Safety Polygons

Source: [ros2-copilot-skills collision monitor skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/collision-monitor/SKILL.md)

## Why This Matters

Collision Monitor is often the last software layer that can prevent a bad velocity command from reaching the drivetrain. That makes it different from costmaps and planners: it is not there to navigate elegantly, but to fail safely when the environment or the rest of the stack gets it wrong.

## Distilled Takeaways

- Collision Monitor is a protective layer on the cmd_vel path, not a replacement for planning or costmaps.
- Safety polygons should be based on the real robot shape, stopping distance, and sensor coverage.
- Stop zones and slowdown zones solve different problems and should be tuned separately.
- This layer is especially valuable when dynamic obstacles or sensing dropouts make planning assumptions brittle.

## Practical Guidance

- Start with conservative stop zones before adding more nuanced slowdown behavior.
- Validate that each sensor meaningfully covers the polygon region it is supposed to protect.
- Inspect the cmd_vel chain end to end so you know where commands are being altered.
- Treat false positives and missed stops as geometry and sensing problems first, not just parameter annoyances.

## Corroborating References

- [Nav2 collision monitor docs](https://docs.nav2.org/configuration/packages/collision_monitor/configuring-collision-monitor-node.html)
- [Nav2 concepts overview](https://docs.nav2.org/concepts/index.html)

## When to Read the Original Source

Go to the original skill when you want polygon configuration patterns, sensor-integration details, and practical advice on choosing stop versus slowdown behavior for indoor mobile robots.