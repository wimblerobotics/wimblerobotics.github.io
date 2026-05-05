---
title: "Hardware Watchdogs and Heartbeats"
summary: "How to design a robot so actuator enablement depends on continued system health rather than one startup event that is never reconsidered."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "hardware-watchdog/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/hardware-watchdog/SKILL.md"
tags: ["ros2", "hardware", "watchdog", "safety", "heartbeats"]
related: ["articles/hardware/emergency-stop-integration.md", "articles/hardware/motor-controller-interfaces.md", "articles/software/logging-and-diagnostics-in-ros2.md"]
---

# Hardware Watchdogs and Heartbeats

Source: [ros2-copilot-skills hardware watchdog skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/hardware-watchdog/SKILL.md)

## Why This Matters

A watchdog turns loss of coordination into a safe outcome. If the robot depends on periodic proof that control software is alive, stale commands and silent process failure become much less dangerous.

## Distilled Takeaways

- Watchdogs protect against stale commands and dead control loops.
- Heartbeats should be tied to real system health, not mere process existence.
- The hardware response to a missed heartbeat must be unambiguous.
- Recovery after watchdog trip should be deliberate and observable.

## Practical Guidance

- Make heartbeat frequency and timeout values explicit design choices.
- Test watchdog behavior by killing processes and severing comms, not only by reasoning about it.
- Expose watchdog state to operators and logs.
- Keep safety behavior independent of best-effort network timing when possible.

## Corroborating References

- [ROS diagnostics overview](https://github.com/ros/diagnostics)
- [systemd documentation](https://www.freedesktop.org/software/systemd/man/systemd.service.html)

## When to Read the Original Source

Go to the original skill when you want the practical watchdog integration patterns and the heartbeat design reminders for real robot hardware.