---
title: "Nav2 YAML Parameter Structure"
summary: "How Nav2 parameter files are actually organized, why the double-namespace costmap pattern exists, and how to avoid configuration files that look right but load nothing."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "nav2-params-structure/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/nav2-params-structure/SKILL.md"
tags: ["ros2", "nav2", "yaml", "parameters", "costmaps", "launch"]
related: ["articles/navigation/nav2-architecture-and-tuning-guide.md", "articles/software/parameter-handling-and-runtime-reconfiguration.md", "articles/software/launch-files-patterns-and-pitfalls.md"]
---

# Nav2 YAML Parameter Structure

Source: [ros2-copilot-skills Nav2 params structure skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/nav2-params-structure/SKILL.md)

## Why This Matters

Nav2 configuration is infamous for files that are valid YAML but wrong ROS 2 configuration. The pain comes from node naming, child-node costmaps, and plugin namespaces all being meaningful at once.

## Distilled Takeaways

- The doubled costmap namespace is a consequence of child-node naming, not a typo.
- Plugin aliases in lists must match the nested parameter keys exactly.
- Launch-time rewriting is part of normal Nav2 configuration, especially for `use_sim_time` and BT file overrides.
- Node-name remapping can silently invalidate a parameter file if the top-level YAML keys no longer match.
- Most Nav2 YAML bugs are structure bugs, not algorithm bugs.

## Practical Guidance

- Validate indentation and node names before touching controller or planner parameters.
- Treat parameter-file structure as part of bringup architecture.
- Keep one clear canonical navigation YAML file per robot configuration.
- Use rewritten YAML intentionally and always convert types when launch arguments drive boolean or numeric values.

## Corroborating References

- [Nav2 configuration guide](https://docs.nav2.org/configuration/index.html)
- [ROS 2 launch and parameter guides](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/Launch/Launch-Main.html)

## When to Read the Original Source

Go to the original skill when you want full hierarchy examples, `RewrittenYaml` explanation, and explicit mistake cases for indentation, namespace mismatch, and plugin-key mismatches.