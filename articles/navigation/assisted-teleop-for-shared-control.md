---
title: "Assisted Teleop for Shared Control"
summary: "How to blend manual teleoperation with obstacle-aware safety behavior so an operator stays in control without driving blindly into the environment."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "assisted-teleop/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/assisted-teleop/SKILL.md"
tags: ["ros2", "nav2", "teleop", "shared-control", "safety"]
related: ["articles/navigation/nav2-behavior-server-and-recovery-actions.md", "articles/navigation/nav2-rviz-tools-and-debug-views.md", "articles/hardware/ros2-hardware-integration-patterns.md"]
---

# Assisted Teleop for Shared Control

Source: [ros2-copilot-skills assisted teleop skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/assisted-teleop/SKILL.md)

## Why This Matters

Pure manual teleop is often too fragile in tight spaces, but full autonomy is not always the right answer either. Assisted teleop gives the operator intent while letting the robot trim or block unsafe motion based on current obstacle data.

## Distilled Takeaways

- Assisted teleop works best when the safety layer is predictable rather than surprising.
- Obstacle avoidance during teleop should preserve user intent where possible instead of simply stopping all motion.
- The quality of local sensing and costmap data directly determines whether shared control feels helpful or frustrating.
- This mode is especially useful during docking, recovery, inspection, and debugging.

## Practical Guidance

- Use assisted teleop where the operator needs precision but still benefits from local collision protection.
- Keep velocity limits conservative enough that the avoidance logic has room to act.
- Test with realistic operator inputs, not only idealized joystick motions.
- Make it obvious to the operator when motion is being modified or suppressed.

## Corroborating References

- [Nav2 behavior server docs](https://docs.nav2.org/configuration/packages/configuring-behavior-server.html)
- [Nav2 concepts overview](https://docs.nav2.org/concepts/index.html)

## When to Read the Original Source

Go to the original skill when you want the assisted-teleop-specific parameter patterns, behavior-server integration details, and tuning advice for blending user commands with obstacle-aware motion.