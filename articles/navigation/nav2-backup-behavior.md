---
title: "Nav2 Backup Behavior"
summary: "How and when to use the backup behavior so the robot can recover from local dead-ends without turning a minor snag into a recovery loop."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "backup-behavior/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/backup-behavior/SKILL.md"
tags: ["ros2", "nav2", "recovery", "behavior-server", "safety"]
related: ["articles/navigation/nav2-behavior-server-and-recovery-actions.md", "articles/navigation/recovery-behavior-trees-in-nav2.md", "articles/navigation/nav2-error-codes-and-failure-analysis.md"]
---

# Nav2 Backup Behavior

Source: [ros2-copilot-skills backup behavior skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/backup-behavior/SKILL.md)

## Why This Matters

Backing up is one of the simplest recovery actions, but it can rescue a robot from local traps, controller hesitation, and near-collision states that would otherwise cascade into repeated failure. It also carries real safety implications because reverse motion is often less observable than forward motion.

## Distilled Takeaways

- Backup is useful when a robot needs space to replan or rotate out of a poor local state.
- Reverse distance and speed should be tuned for the robot's sensing and stopping capability, not just for speed of escape.
- Backup works best as part of a broader recovery strategy, not as a single universal answer.
- If reverse sensing is weak, backup must be constrained conservatively.

## Practical Guidance

- Keep reverse distances short enough to be safe in cluttered indoor environments.
- Pair backup with spin, wait, or costmap-clearing logic depending on the failure mode.
- Test reverse recovery around low obstacles, chair legs, and partial occlusions.
- Treat backup failures as a signal that sensing or recovery sequencing may need redesign.

## Corroborating References

- [Nav2 behavior server docs](https://docs.nav2.org/configuration/packages/configuring-behavior-server.html)
- [Nav2 behavior trees docs](https://docs.nav2.org/behavior_trees/index.html)

## When to Read the Original Source

Go to the original skill when you want parameter-level guidance on backup distance and speed, and examples of how backup fits into behavior-server and recovery-tree configurations.