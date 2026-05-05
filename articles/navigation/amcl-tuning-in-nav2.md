---
title: "AMCL Tuning in Nav2"
summary: "How to tune AMCL by relating particle behavior, scan quality, and map alignment to the localization symptoms you actually see on the robot."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "amcl-tuning/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/amcl-tuning/SKILL.md"
tags: ["ros2", "nav2", "amcl", "localization", "tuning"]
related: ["articles/navigation/localization-recovery-patterns.md", "articles/navigation/localization-state-estimation-and-frame-discipline.md", "articles/navigation/map-server-configuration.md"]
---

# AMCL Tuning in Nav2

Source: [ros2-copilot-skills AMCL tuning skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/amcl-tuning/SKILL.md)

## Why This Matters

AMCL is often judged by whether the robot "looks localized" in RViz, but good tuning is really about stability under motion, ambiguity, and recovery. Poor AMCL tuning can masquerade as navigation instability, map problems, or bad operator initialization.

## Distilled Takeaways

- AMCL tuning is about balancing responsiveness, robustness, and pose stability.
- Good scan quality and frame discipline matter before particle tuning does.
- Initialization quality and motion model realism strongly affect results.
- The right settings depend on map quality, lidar geometry, and environment ambiguity.

## Practical Guidance

- Tune against real failure cases like long corridors, turns, and revisits.
- Watch for pose jumping, slow convergence, and overconfidence after bad starts.
- Fix bad scans, bad TF, or bad maps before chasing AMCL parameters.
- Treat recovery behavior as part of localization design, not a separate concern.

## Corroborating References

- [Nav2 AMCL configuration docs](https://docs.nav2.org/configuration/packages/configuring-amcl.html)
- [REP 105 coordinate frame conventions](https://www.ros.org/reps/rep-0105.html)

## When to Read the Original Source

Go to the original skill when you want the AMCL-specific parameter guidance and the mapping from common localization symptoms to likely tuning directions.