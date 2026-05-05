---
title: "Emergency Stop Integration"
summary: "How to integrate an e-stop so the robot fails safe in hardware and software instead of merely setting a boolean that everyone hopes is honored."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "emergency-stop/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/emergency-stop/SKILL.md"
tags: ["ros2", "safety", "e-stop", "hardware", "control"]
related: ["articles/hardware/hardware-watchdogs-and-heartbeats.md", "articles/navigation/collision-monitor-and-safety-polygons.md", "articles/hardware/motor-controller-interfaces.md"]
---

# Emergency Stop Integration

Source: [ros2-copilot-skills emergency stop skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/emergency-stop/SKILL.md)

## Why This Matters

An emergency stop is meaningful only if it reliably removes hazardous motion. That usually means hardware authority first, with software awareness layered on top for visibility and coordinated recovery.

## Distilled Takeaways

- An e-stop should have a hardware-enforced safety effect, not only a software request.
- Software still needs to know the e-stop state so the rest of the system behaves coherently.
- Recovery from e-stop should be explicit and controlled.
- Safety logic must be simpler and more trustworthy than normal autonomy logic.

## Practical Guidance

- Make sure the e-stop can prevent motion even if ROS 2 is unhealthy.
- Propagate e-stop state to diagnostics and operator interfaces.
- Define the recovery procedure after an e-stop release.
- Test the entire stop path with real actuators, not only simulated messages.

## Corroborating References

- [ROS diagnostics overview](https://github.com/ros/diagnostics)
- [Nav2 collision monitor docs](https://docs.nav2.org/configuration/packages/collision_monitor/configuring-collision-monitor-node.html)

## When to Read the Original Source

Go to the original skill when you want the practical e-stop integration guidance and the division of responsibility between hardware safety and ROS-visible state.