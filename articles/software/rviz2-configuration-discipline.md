---
title: "RViz2 Configuration Discipline"
summary: "How to treat RViz configurations as shared operational assets rather than personal local clutter."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "rviz2-config/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/rviz2-config/SKILL.md"
tags: ["ros2", "rviz", "visualization", "tooling", "software"]
related: ["articles/software/foxglove-and-rviz-role-separation.md", "articles/navigation/nav2-rviz-tools-and-debug-views.md", "articles/software/custom-rviz-overlays.md", "articles/software/launch-files-patterns-and-pitfalls.md"]
---

# RViz2 Configuration Discipline

Source: [ros2-copilot-skills RViz2 config skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/rviz2-config/SKILL.md)

## Why This Matters

Shared RViz configurations save teams time, reduce confusion, and make debugging sessions more reproducible. Without discipline, each contributor ends up seeing a different robot story.

## Distilled Takeaways

- RViz configs should reflect common operational and debugging needs.
- Versioned configs make bringup and troubleshooting faster.
- A good config highlights the most important topics, frames, and states.
- RViz setup belongs in the repo when it matters to team workflows.

## Practical Guidance

- Keep curated RViz configs for common robot tasks.
- Remove stale displays and topic assumptions as the system evolves.
- Launch known-good RViz configs from the repo rather than relying on local history.
- Review configs after changes to frames, sensors, or navigation behavior.

## Corroborating References

- [RViz documentation](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/RViz/RViz-Main.html)
- [rviz repository](https://github.com/ros2/rviz)

## When to Read the Original Source

Go to the original skill when you want the practical workflow guidance for keeping RViz configurations useful and shareable.