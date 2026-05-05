---
title: "Performance Profiling in ROS 2"
summary: "How to profile a ROS 2 system so CPU, latency, throughput, and callback behavior are diagnosed with data instead of intuition."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "performance-profiling/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/performance-profiling/SKILL.md"
tags: ["ros2", "profiling", "performance", "debugging", "software"]
related: ["articles/software/component-composition-for-high-bandwidth-pipelines.md", "articles/software/intra-process-zero-copy-communication.md", "articles/software/logging-and-diagnostics-in-ros2.md"]
---

# Performance Profiling in ROS 2

Source: [ros2-copilot-skills performance profiling skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/performance-profiling/SKILL.md)

## Why This Matters

ROS 2 performance problems often show up as lag, dropped frames, missed deadlines, or sluggish autonomy. Profiling is how those symptoms get tied back to concrete bottlenecks in code, transport, or execution structure.

## Distilled Takeaways

- Profiling should target an observed symptom, not just collect numbers.
- CPU usage, memory pressure, callback latency, and throughput all matter depending on the system.
- Execution structure can be just as important as algorithm speed.
- Performance tuning is safer when based on traces and measurements.

## Practical Guidance

- Start with a clear symptom such as delayed control, frame drops, or excessive CPU.
- Measure the path from source to sink instead of only one node.
- Compare profiles before and after changes to confirm real improvement.
- Keep profiling in the workflow for high-bandwidth or real-time-sensitive subsystems.

## Corroborating References

- [ROS 2 tracing docs](https://docs.ros.org/en/jazzy/Tutorials/Advanced/ROS2-Tracing-Trace-and-Analyze.html)
- [ros2_tracing repository](https://github.com/ros2/ros2_tracing)

## When to Read the Original Source

Go to the original skill when you want the practical profiling mindset and the common places ROS 2 systems hide their real bottlenecks.