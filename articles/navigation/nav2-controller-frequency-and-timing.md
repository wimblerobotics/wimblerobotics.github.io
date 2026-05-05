---
title: "Nav2 Controller Frequency and Timing"
summary: "How to tune controller timing so local control stays responsive without outrunning the robot CPU, sensor updates, or the rest of the velocity pipeline."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "controller-frequency-tuning/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/controller-frequency-tuning/SKILL.md"
tags: ["ros2", "nav2", "controller", "timing", "performance"]
related: ["articles/navigation/nav2-controller-selection-guide.md", "articles/navigation/velocity-smoother-for-cmd-vel.md", "articles/devops/simulation-testing-and-deployment-for-ros2.md"]
---

# Nav2 Controller Frequency and Timing

Source: [ros2-copilot-skills controller frequency skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/controller-frequency-tuning/SKILL.md)

## Why This Matters

Local control frequency sits at the intersection of compute budget, sensor freshness, and robot responsiveness. If the controller runs too slowly, motion feels stale. If it runs too fast for the hardware and sensing pipeline, it burns CPU while acting on outdated information.

## Distilled Takeaways

- Controller frequency should match how quickly the robot, sensors, and cmd_vel consumers can benefit from new commands.
- Higher frequency is not automatically better if the pipeline behind it is lagging.
- Timing problems often show up as oscillation, stale motion, or a robot that feels hesitant despite apparently correct plans.
- Controller tuning has to be considered alongside velocity smoothing, sensor rates, and compute load.

## Practical Guidance

- Measure actual loop rates and latency instead of assuming configured values are being achieved.
- Use a controller rate that the full system can sustain under realistic load.
- Revisit timing after enabling expensive critics, richer costmaps, or additional sensors.
- Treat CPU saturation as a navigation-quality problem, not just a systems problem.

## Corroborating References

- [Nav2 tuning guide](https://docs.nav2.org/tuning/index.html)
- [ROS 2 executor concepts](https://docs.ros.org/en/jazzy/Concepts/Intermediate/About-Executors.html)

## When to Read the Original Source

Go to the original skill when you want concrete guidance on controller frequency tradeoffs, stale-velocity symptoms, and how to match loop rate to platform compute and motion dynamics.