---
title: "Executors, Callback Groups, and Concurrency in ROS 2"
summary: "How callbacks are actually scheduled in ROS 2, when multithreading helps, and where Python, callback groups, and deadlocks interact in surprising ways."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "executors-and-callbacks/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/executors-and-callbacks/SKILL.md"
tags: ["ros2", "executors", "callbacks", "concurrency", "threads", "rclpy"]
related: ["articles/software/ros2-services-without-deadlocks.md", "articles/software/lifecycle-nodes-and-managed-startup.md", "articles/software/message-filters-and-time-synchronized-sensors.md"]
---

# Executors, Callback Groups, and Concurrency in ROS 2

Source: [ros2-copilot-skills executors skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/executors-and-callbacks/SKILL.md)

## Why This Matters

When a ROS 2 node feels “randomly blocked,” the problem is often not random at all. It is the executor model. Timers, subscriptions, services, and actions all compete for callback execution, and callback groups determine which work may overlap.

## Distilled Takeaways

- `SingleThreadedExecutor` is the simplest model, but one slow callback can stall everything else.
- `MultiThreadedExecutor` only helps if callback groups actually allow concurrency.
- The default callback group is mutually exclusive, so adding threads alone often changes less than people expect.
- In Python, the GIL limits CPU-bound parallelism even when multiple executor threads exist.
- Reentrant groups increase power and risk at the same time because the same callback may run concurrently.

## Practical Guidance

- Use separate callback groups when a timer must keep ticking while service or action responses arrive.
- Protect shared state explicitly once true concurrency enters the design.
- Avoid blocking spin helpers inside callbacks unless the executor design has been proven safe.
- Keep concurrency small and reasoned, not decorative.

## Corroborating References

- [ROS 2 executors concept docs](https://docs.ros.org/en/jazzy/Concepts/Intermediate/About-Executors.html)
- [ROS 2 callback groups guide](https://docs.ros.org/en/jazzy/How-To-Guides/Using-callback-groups.html)

## When to Read the Original Source

Go to the original skill when you want explicit callback-group patterns, executor usage examples in Python and C++, and the warning list around the GIL, reentrant groups, and spin-related deadlocks.