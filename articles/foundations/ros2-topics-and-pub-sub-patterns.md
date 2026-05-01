---
title: "ROS 2 Topics and Pub-Sub Patterns"
summary: "How to design ROS 2 topic flows that are observable, timestamped correctly, and resilient under real robot bandwidth and callback pressure."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "topic-pub-sub/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/topic-pub-sub/SKILL.md"
tags: ["ros2", "topics", "pub-sub", "messages", "qos", "beginner"]
related: ["articles/foundations/qos-profiles-and-compatibility.md", "articles/foundations/ros2-time-duration-and-sim-time.md", "articles/software/message-filters-and-time-synchronized-sensors.md"]
---

# ROS 2 Topics and Pub-Sub Patterns

Source: [ros2-copilot-skills topic pub-sub skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/topic-pub-sub/SKILL.md)

## Why This Matters

Topics are the backbone of most ROS 2 systems, but a topic graph only becomes useful when message rates, QoS, timestamps, and callback behavior are designed intentionally. Many robots appear flaky because their topic flows were treated as trivial plumbing.

## Distilled Takeaways

- Use topics for continuous streams such as commands, telemetry, images, scans, and derived state.
- Prefer timer-based publishing over ad hoc constructor-time publication so the system has a stable cadence and subscribers have time to connect.
- Stamp messages with the node clock, not wall-clock helpers from the standard library, so simulation and bag playback keep working.
- Large messages like images and point clouds need explicit bandwidth discipline.
- Topic health should be observable from the CLI with `ros2 topic info`, `hz`, `bw`, and targeted `echo` checks.

## Practical Guidance

- Store subscription handles as members or the subscription silently disappears.
- Keep topic names consistent with their scope: absolute names only when you mean to bypass namespace structure.
- Treat message type selection as part of API design. A bad message choice leaks pain into downstream nodes.
- When multiple topic streams must be correlated, do not fake synchronization with “latest message” globals unless the timing tolerance is truly loose.

## Corroborating References

- [ROS 2 topics tutorials](https://docs.ros.org/en/jazzy/Tutorials/Beginner-CLI-Tools/Understanding-ROS2-Topics/Understanding-ROS2-Topics.html)
- [ROS 2 QoS concepts](https://docs.ros.org/en/jazzy/Concepts/Intermediate/About-Quality-of-Service-Settings.html)

## When to Read the Original Source

Go to the original skill when you want concrete Python and C++ publisher/subscriber patterns, examples for latched topics, and the warning list for timestamps, queue depth, and large-message transport.