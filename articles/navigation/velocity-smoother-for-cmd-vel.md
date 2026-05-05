---
title: "Velocity Smoother for cmd_vel"
summary: "Why a velocity smoother often improves real robot motion more than another round of controller tuning, and where it fits in the cmd_vel chain."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "velocity-smoother/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/velocity-smoother/SKILL.md"
tags: ["ros2", "nav2", "cmd_vel", "velocity-smoother", "control"]
related: ["articles/navigation/nav2-controller-frequency-and-timing.md", "articles/navigation/nav2-architecture-and-tuning-guide.md", "articles/hardware/ros2-hardware-integration-patterns.md"]
---

# Velocity Smoother for cmd_vel

Source: [ros2-copilot-skills velocity smoother skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/velocity-smoother/SKILL.md)

## Why This Matters

Real robots care about acceleration, jerk, traction, drivetrain backlash, and passenger comfort in a way that path planners do not. A velocity smoother exists to make outgoing commands more physically and operationally reasonable before they hit the drivetrain.

## Distilled Takeaways

- Velocity smoothing protects the robot from abrupt command changes even when the controller is mathematically valid.
- It is especially valuable on hardware with noticeable acceleration limits or motor-control sensitivity.
- Smoothing belongs in the motion pipeline as a deliberate layer, not as an accidental side effect of slow control loops.
- Over-smoothing can make the robot feel sluggish, so the goal is controlled motion, not lethargy.

## Practical Guidance

- Use the smoother when local control output is too abrupt for the drivetrain or environment.
- Tune it alongside controller rate and hardware capabilities.
- Verify the position of the smoother in the cmd_vel chain so you know which commands it is actually shaping.
- Distinguish between controller indecision and hardware-friendly smoothing.

## Corroborating References

- [Nav2 configuration docs](https://docs.nav2.org/configuration/index.html)
- [Nav2 concepts overview](https://docs.nav2.org/concepts/index.html)

## When to Read the Original Source

Go to the original skill when you want the specific velocity-smoother configuration details and the tradeoffs around acceleration, deceleration, and operator feel.