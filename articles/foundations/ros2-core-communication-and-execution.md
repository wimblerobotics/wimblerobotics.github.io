---
title: "ROS 2 Core Communication and Execution"
summary: "A practical mental model for ROS 2 topics, services, actions, QoS, executors, and lifecycle behavior so debugging starts from architecture instead of guesswork."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "multiple skills: topic-pub-sub, service-patterns, action-server-client, qos-profiles, executors-and-callbacks, lifecycle-nodes"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/docs/SKILLS-CATALOG.md"
tags: ["ros2", "architecture", "topics", "services", "actions", "qos", "executors", "lifecycle", "beginner"]
related: ["articles/software/launch-files-patterns-and-pitfalls.md", "articles/navigation/nav2-architecture-and-tuning-guide.md", "articles/navigation/localization-state-estimation-and-frame-discipline.md"]
---

# ROS 2 Core Communication and Execution

Source: [ros2-copilot-skills catalog](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/docs/SKILLS-CATALOG.md)

## Why This Matters

Many ROS 2 problems look like package or parameter mistakes when the real issue is a broken communication contract. If a topic uses the wrong QoS, if a long-running task was implemented as a service instead of an action, or if callbacks are blocked by the executor model, the robot will behave unpredictably even when the code compiles cleanly.

## Distilled Takeaways

- Topics are for streaming data, services are for short request-response work, and actions are for long-running tasks with feedback, cancellation, and result handling.
- QoS is not an advanced corner case. It is the transport contract, and mismatches can make publishers and subscribers silently ignore each other.
- Executors and callback groups decide what can run concurrently. A node can deadlock itself if it waits synchronously inside a callback that shares the same execution path.
- Lifecycle nodes are useful when startup order, controlled activation, and deterministic shutdown matter, which is why Nav2 relies on them heavily.
- A lot of debugging becomes easier when you treat ROS 2 as a graph of communication contracts instead of a pile of nodes.

## Practical Value

- When a sensor stream appears to vanish, inspect QoS before touching the driver.
- When a robot task needs progress updates or cancellation, reach for an action instead of inventing ad hoc topics.
- When a launch sequence is flaky, check whether the involved nodes should be lifecycle-managed.
- When callbacks interfere with each other, review executor choice and callback-group boundaries before adding threads blindly.

## Core Follow-Up Articles

- [ROS 2 Topics and Pub-Sub Patterns](ros2-topics-and-pub-sub-patterns.md)
- [QoS Profiles and Compatibility in ROS 2](qos-profiles-and-compatibility.md)
- [ROS 2 Time, Duration, and Sim Time](ros2-time-duration-and-sim-time.md)
- [ROS 2 Services Without Deadlocks](../software/ros2-services-without-deadlocks.md)
- [ROS 2 Actions for Long-Running Robot Tasks](../software/ros2-actions-for-long-running-robot-tasks.md)
- [Executors, Callback Groups, and Concurrency in ROS 2](../software/executors-callback-groups-and-concurrency.md)
- [Lifecycle Nodes and Managed Startup in ROS 2](../software/lifecycle-nodes-and-managed-startup.md)
- [Parameter Handling and Runtime Reconfiguration in ROS 2](../software/parameter-handling-and-runtime-reconfiguration.md)
- [package.xml, CMakeLists.txt, and Python Package Structure](../software/package-xml-cmakelists-and-python-package-structure.md)
- [message_filters and Time-Synchronized Sensors](../software/message-filters-and-time-synchronized-sensors.md)

## Corroborating References

- [ROS 2 QoS concepts](https://docs.ros.org/en/jazzy/Concepts/Intermediate/About-Quality-of-Service-Settings.html)
- [ROS 2 actions tutorial set](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/Understanding-ROS2-Actions.html)
- [Managed node lifecycle design](https://design.ros2.org/articles/node_lifecycle.html)
- [Nav2 concepts: actions, lifecycle, and servers](https://docs.nav2.org/concepts/index.html)

## When to Read the Original Source

Go to the original skills when you want concrete code for Python and C++ nodes, action client and server patterns, callback-group examples, and the practical warning tables around QoS mismatches and executor deadlocks.