---
title: "DWB Critics and Scoring"
summary: "How DWB critics shape local-motion choice, and how to reason about weights without blindly twisting knobs until the robot behaves differently."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "dwb-critics/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/dwb-critics/SKILL.md"
tags: ["ros2", "nav2", "dwb", "critics", "controller-tuning"]
related: ["articles/navigation/dwb-controller-basics-and-tuning.md", "articles/navigation/path-tracking-metrics-that-actually-matter.md", "articles/navigation/nav2-controller-selection-guide.md"]
---

# DWB Critics and Scoring

Source: [ros2-copilot-skills DWB critics skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/dwb-critics/SKILL.md)

## Why This Matters

DWB does not have one behavior. It has the behavior created by its critics. If the robot hugs walls, overshoots goals, or oscillates at path transitions, the cause is often the scoring mix rather than the trajectory sampling itself.

## Distilled Takeaways

- Critics are the value system of DWB: they decide what counts as good local motion.
- Weights interact, so changing one critic can change the meaning of the rest.
- Goal approach, path alignment, obstacle clearance, and rotation behavior often need to be balanced deliberately for a specific robot.
- Tuning critics is easier when you diagnose a concrete motion symptom instead of tuning abstractly.

## Practical Guidance

- Change a small number of critic weights at a time and observe a repeatable scenario.
- Focus first on the dominant failure mode the operator can see.
- Remember that bad local scoring can also be a symptom of a poor local costmap or footprint.
- Keep a record of weight changes so you can reason backward when behavior regresses.

## Corroborating References

- [Nav2 DWB controller docs](https://docs.nav2.org/configuration/packages/configuring-dwb-controller.html)
- [Nav2 tuning guide](https://docs.nav2.org/tuning/index.html)

## When to Read the Original Source

Go to the original skill when you want critic-by-critic tuning advice and concrete guidance for interpreting common DWB motion pathologies.