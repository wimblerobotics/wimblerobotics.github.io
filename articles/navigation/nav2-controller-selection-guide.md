---
title: "Nav2 Controller Selection Guide"
summary: "How to choose between MPPI, DWB, RPP, and related controller strategies based on CPU budget, obstacle behavior, path quality needs, and robot predictability."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "controller-comparison/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/controller-comparison/SKILL.md"
tags: ["ros2", "nav2", "controller", "mppi", "dwb", "rpp"]
related: ["articles/navigation/nav2-planner-selection-guide.md", "articles/navigation/nav2-architecture-and-tuning-guide.md", "articles/navigation/nav2-behavior-server-and-recovery-actions.md", "articles/navigation/graceful-controller-for-smooth-approach.md", "articles/navigation/writing-custom-nav2-controller-plugins.md"]
---

# Nav2 Controller Selection Guide

Source: [ros2-copilot-skills controller comparison skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/controller-comparison/SKILL.md)

## Why This Matters

The controller is where a path turns into robot motion. That makes controller choice highly visible to operators: smoothness, confidence in tight spaces, CPU load, and recovery behavior all show up here.

## Distilled Takeaways

- MPPI offers the strongest path quality and obstacle negotiation at higher CPU cost.
- DWB remains a practical middle ground for many robots and environments.
- RPP is lightweight and predictable when the environment and task are simpler.
- Controller choice should reflect CPU budget and obstacle environment, not just desired elegance.
- The planner-controller pairing matters as much as either choice in isolation.

## Practical Guidance

- Start simple, then earn your way to higher controller complexity.
- Measure compute budget honestly, especially on SBC-class hardware.
- Use controller switching strategically for different behaviors if the task warrants it.
- Revisit controller choice when your robot or environment changes, not just when tuning gets annoying.

## Corroborating References

- [Nav2 controller plugins docs](https://docs.nav2.org/plugins/index.html)
- [Nav2 tuning guide](https://docs.nav2.org/tuning/index.html)

## When to Read the Original Source

Go to the original skill when you want the comparison tables, CPU-budget estimates, migration path, and cross-reference between MPPI, DWB, and RPP parameter concepts.