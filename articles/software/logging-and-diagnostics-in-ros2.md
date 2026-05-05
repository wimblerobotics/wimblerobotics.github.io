---
title: "Logging and Diagnostics in ROS 2"
summary: "How to make robot logs and diagnostics actionable enough that failures can be understood after the moment has passed."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "logging-and-diagnostics/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/logging-and-diagnostics/SKILL.md"
tags: ["ros2", "logging", "diagnostics", "debugging", "software"]
related: ["articles/devops/rosbag2-analysis-workflows.md", "articles/software/performance-profiling-in-ros2.md", "articles/hardware/hardware-watchdogs-and-heartbeats.md"]
---

# Logging and Diagnostics in ROS 2

Source: [ros2-copilot-skills logging and diagnostics skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/logging-and-diagnostics/SKILL.md)

## Why This Matters

Robots are hard to debug after the fact unless they emit state that explains what they believed, what they attempted, and what subsystem was unhealthy. Logging and diagnostics are how a robot leaves evidence.

## Distilled Takeaways

- Logs should explain decisions and failures, not only report that code paths executed.
- Diagnostics should expose subsystem health in a structured way.
- Good observability reduces dependence on live reproduction of failures.
- Logging volume matters less than signal quality and context.

## Practical Guidance

- Log events that help reconstruct cause and effect during robot failures.
- Publish health information with stable meanings operators can learn.
- Align logs, diagnostics, and rosbag recording so they complement each other.
- Review logs from real incidents and improve them when they are not enough.

## Corroborating References

- [ROS diagnostics overview](https://github.com/ros/diagnostics)
- [ROS 2 logging concepts](https://docs.ros.org/en/jazzy/Concepts/Intermediate/About-Logging.html)

## When to Read the Original Source

Go to the original skill when you want the practical logging and diagnostics mindset for making robot failures more explainable.