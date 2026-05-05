---
title: "NavFn Planner Basics and When to Use It"
summary: "Why NavFn still matters, what problem class it solves well, and when a simpler global planner is exactly the right engineering choice."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "navfn-planner/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/navfn-planner/SKILL.md"
tags: ["ros2", "nav2", "planner", "navfn", "global-planning"]
related: ["articles/navigation/nav2-planner-selection-guide.md", "articles/navigation/smac-planner-2d.md", "articles/navigation/nav2-global-costmap-configuration.md"]
---

# NavFn Planner Basics and When to Use It

Source: [ros2-copilot-skills NavFn planner skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/navfn-planner/SKILL.md)

## Why This Matters

Global planning does not always need to be fancy. NavFn remains useful because many robots operating on a 2D occupancy map simply need a reliable freespace planner with modest complexity and predictable behavior.

## Distilled Takeaways

- NavFn is a strong fit for standard 2D global planning on static or slowly changing maps.
- It is often easier to understand and deploy than more advanced planners.
- Planner choice should reflect map structure and robot motion model, not just feature lists.
- Simpler planning is often preferable when the local controller and environment do not demand more.

## Practical Guidance

- Start with NavFn when the robot is basically differential-drive and the map representation is conventional 2D costmap space.
- Compare against SMAC or Theta* only when there is a concrete planning limitation to address.
- Keep global costmap quality high, because even a straightforward planner inherits whatever map quality you give it.
- Do not blame the planner for problems caused by bad localization or costmap inflation.

## Corroborating References

- [Nav2 planner plugins docs](https://docs.nav2.org/plugins/index.html)
- [Nav2 tuning guide](https://docs.nav2.org/tuning/index.html)

## When to Read the Original Source

Go to the original skill when you want NavFn-specific configuration guidance and comparison notes against the other global planners in the Nav2 ecosystem.