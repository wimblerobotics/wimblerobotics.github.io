---
title: "Wait Behavior in Nav2"
summary: "How a deliberate wait action can be part of robust autonomy when used for temporal reasoning instead of as a vague pause button."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "wait-behavior/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/wait-behavior/SKILL.md"
tags: ["ros2", "nav2", "behavior-server", "wait", "recovery"]
related: ["articles/navigation/nav2-behavior-server-and-recovery-actions.md", "articles/navigation/spin-behavior.md", "articles/navigation/nav2-waypoint-follower-and-patrol-routes.md"]
---

# Wait Behavior in Nav2

Source: [ros2-copilot-skills wait behavior skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/wait-behavior/SKILL.md)

## Why This Matters

Sometimes the correct action is to do nothing briefly. A wait behavior can be a genuine autonomy tool when it gives a dynamic obstacle time to clear, sequences a task safely, or prevents the robot from escalating too quickly into more aggressive recovery actions.

## Distilled Takeaways

- Wait is useful when time itself changes the situation, not when the system is just confused.
- It can reduce unnecessary motion in crowded or human-shared environments.
- Wait belongs in recovery and autonomy sequences when there is a clear temporal reason for it.
- Overuse of wait can hide deeper issues in planning, sensing, or sequencing.

## Practical Guidance

- Use wait for dynamic-obstacle patience, interaction timing, or controlled task sequencing.
- Keep durations tied to a reason, not to habit.
- Evaluate whether wait actually improves mission success or just delays failure.
- Combine wait with clear follow-up actions so the tree resumes with intent.

## Corroborating References

- [Nav2 behavior trees docs](https://docs.nav2.org/behavior_trees/index.html)
- [Nav2 behavior server docs](https://docs.nav2.org/configuration/packages/configuring-behavior-server.html)

## When to Read the Original Source

Go to the original skill when you want wait-specific configuration and examples of how it fits into practical recovery and autonomy sequences.