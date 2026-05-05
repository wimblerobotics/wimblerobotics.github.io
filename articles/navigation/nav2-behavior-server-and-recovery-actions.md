---
title: "Nav2 Behavior Server and Recovery Actions"
summary: "How spin, backup, wait, assisted teleop, and custom behaviors fit into Nav2, and how recovery design changes whether the robot feels robust or brittle."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "behavior-server/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/behavior-server/SKILL.md"
tags: ["ros2", "nav2", "behavior-server", "recovery", "spin", "backup"]
related: ["articles/navigation/behavior-trees-for-nav2-and-robot-autonomy.md", "articles/navigation/nav2-error-codes-and-failure-analysis.md", "articles/navigation/nav2-controller-selection-guide.md", "articles/navigation/assisted-teleop-for-shared-control.md"]
---

# Nav2 Behavior Server and Recovery Actions

Source: [ros2-copilot-skills behavior server skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/behavior-server/SKILL.md)

## Why This Matters

Navigation stacks do not just need to succeed when the world is clean. They need explicit ways to react when planning, control, or local environment assumptions fail. The behavior server is where that reaction layer lives.

## Distilled Takeaways

- Spin, backup, drive-on-heading, wait, and assisted teleop are building blocks for recovery and assistive autonomy.
- Recovery actions depend on costmap and footprint truth, so stale obstacle data can make recoveries fail for the wrong reason.
- Behavior design belongs in the BT and server configuration together, not in one place alone.
- Clear-costmap behavior before motion recovery is often the difference between useful and pointless recovery.
- Custom behaviors are justified when the robot needs a domain-specific move or operator-assist pattern.

## Practical Guidance

- Tune recovery distances and velocities for the real robot, not a generic example robot.
- Include recovery logic in testing, not just nominal navigation flows.
- Expect different recovery sequences for different environments and robot forms.
- Use recovery design to expose what the robot should do when it is confused, blocked, or boxed in.

## Corroborating References

- [Nav2 behavior tree docs](https://docs.nav2.org/behavior_trees/index.html)
- [Nav2 plugins documentation](https://docs.nav2.org/plugins/index.html)

## When to Read the Original Source

Go to the original skill when you want parameter examples, BT recovery snippets, collision-checking explanation, and practical notes on stale costmap obstacles and recovery plugin behavior.