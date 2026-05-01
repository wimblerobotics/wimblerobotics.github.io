---
title: "ROS 2 Time, Duration, and Sim Time"
summary: "How to keep timestamps, timers, deadlines, and TF lookups coherent across real hardware, simulation, and rosbag playback."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "time-duration-rate/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/time-duration-rate/SKILL.md"
tags: ["ros2", "time", "sim-time", "tf", "timers", "rosbag2"]
related: ["articles/foundations/ros2-topics-and-pub-sub-patterns.md", "articles/software/message-filters-and-time-synchronized-sensors.md", "articles/navigation/localization-state-estimation-and-frame-discipline.md"]
---

# ROS 2 Time, Duration, and Sim Time

Source: [ros2-copilot-skills time skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/time-duration-rate/SKILL.md)

## Why This Matters

Time bugs are some of the most frustrating ROS 2 failures because they often appear as TF errors, stale messages, impossible durations, or simulation-only breakage. The fix is usually not a special case but a consistent time model.

## Distilled Takeaways

- ROS time, system time, and steady time serve different purposes and should not be mixed casually.
- If you use simulation or bag playback, all relevant nodes should agree on `use_sim_time`.
- Message stamps should come from the ROS node clock so the rest of the graph can reason about them correctly.
- `Time(0)` in TF lookups means “latest available,” which is often safer than demanding an exact current transform.
- Timers and rate-based loops are not interchangeable in callback-driven architectures.

## Practical Guidance

- Enable sim time consistently across the session or not at all.
- Guard against zero time before the first `/clock` message arrives.
- Use timers for periodic callbacks and reserve rate sleep for dedicated loops.
- Audit time handling whenever TF extrapolation or stale-data warnings appear.

## Corroborating References

- [ROS 2 clock and time design notes](https://design.ros2.org/articles/clock_and_time.html)
- [ROS 2 tf2 time tutorial material](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/Tf2/Tf2-Main.html)

## When to Read the Original Source

Go to the original skill when you want concrete Python and C++ time arithmetic, timeout patterns, timer behavior notes, and the practical warnings around sim time, `Time(0)`, and callback blocking.