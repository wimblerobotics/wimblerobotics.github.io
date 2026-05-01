---
title: "ROS 2 Actions for Long-Running Robot Tasks"
summary: "A practical guide to using actions for navigation, docking, patrol loops, and other tasks that need feedback, cancellation, and explicit result handling."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "action-server-client/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/action-server-client/SKILL.md"
tags: ["ros2", "actions", "navigation", "feedback", "cancellation", "autonomy"]
related: ["articles/software/ros2-services-without-deadlocks.md", "articles/navigation/nav2-architecture-and-tuning-guide.md", "articles/navigation/behavior-trees-for-nav2-and-robot-autonomy.md"]
---

# ROS 2 Actions for Long-Running Robot Tasks

Source: [ros2-copilot-skills action skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/action-server-client/SKILL.md)

## Why This Matters

Many robot tasks are not “set and forget.” They take time, can fail midway, may need to be canceled, and often need progress feedback. Actions exist for exactly that category of work, and Nav2 uses them extensively for the same reason.

## Distilled Takeaways

- Actions are the right abstraction for tasks like navigation, docking, route execution, and patrol goals.
- Good action design means thinking about goal validation, feedback cadence, cancellation semantics, and result meaning up front.
- ROS 2 actions do not magically preempt old goals for you. Preemption policy is application logic.
- An action server should not bury all task logic in one opaque callback. Long-running work still needs clear state management.
- Action clients should handle goal acceptance, feedback, result, and cancellation explicitly.

## Practical Guidance

- Design feedback to help operators and higher-level autonomy make decisions, not just to satisfy the API.
- Treat cancellation as a normal path, not an error case.
- Make result messages carry enough context to support retries and diagnosis.
- Use actions whenever a service call would otherwise need polling hacks or ad hoc progress topics.

## Corroborating References

- [ROS 2 actions tutorial](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/Understanding-ROS2-Actions.html)
- [Nav2 concepts: actions are central to the stack](https://docs.nav2.org/concepts/index.html#action-server)

## When to Read the Original Source

Go to the original skill when you want full Python and C++ action-server/client patterns, `.action` schema examples, and explicit advice on cancellation and preemption handling.