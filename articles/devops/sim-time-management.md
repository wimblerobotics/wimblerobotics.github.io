---
title: "Sim Time Management"
summary: "How to keep ROS 2 nodes in agreement about simulated time so bags, visualization, and navigation do not quietly disagree about when things happened."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "sim-time-management/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/sim-time-management/SKILL.md"
tags: ["ros2", "simulation", "time", "clock", "devops"]
related: ["articles/foundations/ros2-time-duration-and-sim-time.md", "articles/devops/simulated-sensors-in-gazebo.md", "articles/devops/gazebo-sim-setup-for-ros2.md"]
---

# Sim Time Management

Source: [ros2-copilot-skills sim time management skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/sim-time-management/SKILL.md)

## Why This Matters

Simulated time only works when the whole relevant graph agrees to use it. Partial use of sim time is a common source of confusing behavior in playback, visualization, and test automation.

## Distilled Takeaways

- Sim time is a graph-wide coordination concern, not a local node detail.
- Mixed time sources create hard-to-diagnose failures.
- Bags, RViz, and time-aware algorithms all depend on consistent clock use.
- Time configuration should be part of launch design and testing.

## Practical Guidance

- Make use_sim_time configuration explicit in launch files.
- Verify clock behavior when moving between live, simulated, and replayed workflows.
- Treat timestamp anomalies as a likely time-source problem early.
- Keep time assumptions documented for contributors and operators.

## Corroborating References

- [ROS 2 clock and time docs](https://docs.ros.org/en/jazzy/Concepts/Basic/About-Time.html)
- [Gazebo Sim documentation](https://gazebosim.org/docs)

## When to Read the Original Source

Go to the original skill when you want the practical sim-time failure modes and the reminders for keeping the graph on one clock.