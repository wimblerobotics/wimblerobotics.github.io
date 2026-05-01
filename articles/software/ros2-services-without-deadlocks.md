---
title: "ROS 2 Services Without Deadlocks"
summary: "When services are the right tool, when they are not, and how to avoid the executor deadlocks that catch many ROS 2 developers early."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "service-patterns/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/service-patterns/SKILL.md"
tags: ["ros2", "services", "clients", "servers", "executors", "deadlocks"]
related: ["articles/software/ros2-actions-for-long-running-robot-tasks.md", "articles/software/executors-callback-groups-and-concurrency.md", "articles/software/parameter-handling-and-runtime-reconfiguration.md"]
---

# ROS 2 Services Without Deadlocks

Source: [ros2-copilot-skills service patterns skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/service-patterns/SKILL.md)

## Why This Matters

Services are deceptively simple. They feel like RPC, but in ROS 2 they still live inside the executor model. That means a careless synchronous call inside a callback can freeze the very machinery needed to deliver the response.

## Distilled Takeaways

- Use services for quick request-reply work such as configuration, state queries, and discrete commands.
- If the operation is long-running, needs feedback, or should support cancellation, it is usually an action instead.
- `call_async` is the safe default on the client side.
- Synchronous waiting inside callbacks is where many service deadlocks come from.
- Service callbacks should return quickly so they do not stall the rest of the node.

## Practical Guidance

- Always give `wait_for_service` a timeout.
- Prefer asynchronous patterns even when you think the request will return quickly.
- If you truly need blocking behavior, isolate it carefully with callback groups and executor design.
- Treat service names as one-server contracts, not broadcast channels.

## Corroborating References

- [ROS 2 services tutorial](https://docs.ros.org/en/jazzy/Tutorials/Beginner-CLI-Tools/Understanding-ROS2-Services/Understanding-ROS2-Services.html)
- [Nav2 concepts on actions vs other interfaces](https://docs.nav2.org/concepts/index.html)

## When to Read the Original Source

Go to the original skill when you want Python and C++ client/server code, callback-safe calling patterns, and the exact deadlock scenarios to avoid in single-threaded execution.