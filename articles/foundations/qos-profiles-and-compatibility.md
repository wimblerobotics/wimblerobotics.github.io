---
title: "QoS Profiles and Compatibility in ROS 2"
summary: "A practical guide to ROS 2 QoS so you can predict when nodes will talk, when they will silently ignore each other, and how to debug the difference."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "qos-profiles/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/qos-profiles/SKILL.md"
tags: ["ros2", "qos", "topics", "reliability", "durability", "debugging"]
related: ["articles/foundations/ros2-topics-and-pub-sub-patterns.md", "articles/software/message-filters-and-time-synchronized-sensors.md", "articles/navigation/nav2-architecture-and-tuning-guide.md"]
---

# QoS Profiles and Compatibility in ROS 2

Source: [ros2-copilot-skills QoS skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/qos-profiles/SKILL.md)

## Why This Matters

QoS is one of the most common reasons a ROS 2 system “looks fine” but does not communicate. It is also one of the least respected parts of beginner tutorials. If you do not know which side of a connection is demanding reliability, durability, or history guarantees, you are debugging blind.

## Distilled Takeaways

- Reliability controls delivery guarantees, durability controls late-joiner history, and depth controls queue behavior for `KEEP_LAST`.
- Sensor pipelines often prefer `BEST_EFFORT` because dropping stale samples is better than building latency.
- Latched-style behavior in ROS 2 comes from `TRANSIENT_LOCAL`, but the subscriber must also ask for compatible durability to benefit.
- Compatibility is asymmetric. A subscriber can demand more than a publisher can provide and receive nothing.
- `ros2 topic info --verbose` should be a reflex whenever a topic appears dead.

## Practical Guidance

- Use sensor-data profiles for scans, IMUs, and images unless you have a strong reason not to.
- Use `TRANSIENT_LOCAL` intentionally for things like maps, static descriptions, and other state snapshots.
- Do not guess at QoS when integrating third-party packages. Inspect it.
- Avoid `KEEP_ALL` casually unless you have bounded rates and a convincing memory story.

## Corroborating References

- [ROS 2 QoS concepts](https://docs.ros.org/en/jazzy/Concepts/Intermediate/About-Quality-of-Service-Settings.html)
- [ROS 2 QoS demos and compatibility discussion](https://docs.ros.org/en/jazzy/Tutorials/Demos/Quality-of-Service.html)

## When to Read the Original Source

Go to the original skill when you want compatibility tables, concrete profile examples, runtime override patterns, and the standard topic-by-topic QoS conventions that show up repeatedly in mobile robots.