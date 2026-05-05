---
title: "MPPI Critics Explained"
summary: "How to think about MPPI critics as a policy stack for local motion instead of a bag of mysterious weights."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "mppi-critics/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/mppi-critics/SKILL.md"
tags: ["ros2", "nav2", "mppi", "critics", "controller-tuning"]
related: ["articles/navigation/mppi-controller-basics-and-tuning.md", "articles/navigation/path-tracking-metrics-that-actually-matter.md", "articles/navigation/nav2-controller-selection-guide.md"]
---

# MPPI Critics Explained

Source: [ros2-copilot-skills MPPI critics skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/mppi-critics/SKILL.md)

## Why This Matters

With MPPI, critic weights effectively define the robot's local motion preferences. If the robot behaves oddly in clutter, path tracking, or goal approach, the explanation often lives in how critics are balancing progress, smoothness, and obstacle cost.

## Distilled Takeaways

- Critics encode tradeoffs between path quality, clearance, goal-seeking, and dynamic feasibility.
- Weight changes interact, so MPPI tuning is about system balance rather than isolated parameter edits.
- A critic stack should reflect the robot's task and environment, not just copied defaults.
- Clear test scenarios make critic tuning dramatically more effective.

## Practical Guidance

- Tune critics around visible failure modes such as wall hugging, path cutting, or hesitant approach.
- Keep track of profile changes so you can reproduce both improvements and regressions.
- Avoid treating large weights as a substitute for better costmaps or motion limits.
- Compare behavior in repeated scenarios rather than ad hoc manual impressions.

## Corroborating References

- [Nav2 MPPI controller docs](https://docs.nav2.org/configuration/packages/configuring-mppic.html)
- [Nav2 tuning guide](https://docs.nav2.org/tuning/index.html)

## When to Read the Original Source

Go to the original skill when you want the detailed critic-by-critic explanation and tuning profiles that make MPPI behavior easier to interpret and deliberately shape.