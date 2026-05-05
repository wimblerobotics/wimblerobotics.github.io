---
title: "Timestamp Discipline and Message Synchronization"
summary: "Why multi-sensor and multi-computer robots fail when timestamps are treated casually, and how ROS 2 time handling plus message_filters make those failures easier to reason about."
source_repo: "ros2/ros2_documentation; message_filters docs"
source_path: "clock and time design notes; Approximate Time Synchronizer tutorial"
source_url: "https://docs.ros.org/en/jazzy/p/message_filters/doc/Tutorials/Approximate-Synchronizer-Cpp.html"
tags: ["ros2", "timestamps", "synchronization", "message-filters", "multi-machine", "debugging"]
related: ["articles/foundations/ros2-time-duration-and-sim-time.md", "articles/software/message-filters-and-time-synchronized-sensors.md", "articles/devops/ros2-multi-machine-networking-and-discovery.md", "articles/navigation/multi-sensor-fusion-patterns.md"]
---

# Timestamp Discipline and Message Synchronization

Source: [message_filters approximate sync tutorial](https://docs.ros.org/en/jazzy/p/message_filters/doc/Tutorials/Approximate-Synchronizer-Cpp.html) and [ROS 2 clock and time design notes](https://design.ros2.org/articles/clock_and_time.html)

## Why This Matters

Robots with multiple sensors or multiple computers usually fail on time before they fail on algorithms. If timestamps are inconsistent, delayed, or sourced from the wrong clock, synchronizers stop firing, fusion quality drops, and debugging turns into superstition.

## Distilled Takeaways

- Header stamps are part of the data contract, not decoration.
- `message_filters` only works well when timestamps and QoS settings are already coherent.
- Approximate synchronization is often the practical choice, but it does not excuse bad clocks.
- Multi-machine systems amplify timestamp problems because network delay and unsynchronized device assumptions get mixed together.
- Time discipline should be designed before downstream fusion or perception tuning.

## Practical Value

- Stamp messages from a consistent ROS-aware clock path.
- Keep QoS aligned across synchronized topics or the filter layer will fail before your logic runs.
- Use approximate sync for realistic sensor timing, but choose queue size and age penalty deliberately.
- Audit clock assumptions whenever fusion, perception, or recorded playback seems intermittently wrong.

## Corroborating References

- [ROS 2 clock and time design notes](https://design.ros2.org/articles/clock_and_time.html)
- [Approximate Time Synchronizer tutorial](https://docs.ros.org/en/jazzy/p/message_filters/doc/Tutorials/Approximate-Synchronizer-Cpp.html)
- [message_filters docs](https://docs.ros.org/en/jazzy/p/message_filters/doc/index.html)

## When to Read the Original Source

Go to the original docs when you want the actual synchronizer API, queue and age-penalty setup, and the lower-level clock model behind ROS 2 time and stamped data.