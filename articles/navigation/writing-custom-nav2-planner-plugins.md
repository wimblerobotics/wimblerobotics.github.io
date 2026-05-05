---
title: "Writing Custom Nav2 Planner Plugins"
summary: "When a custom global planner makes sense, and how to extend Nav2 planning without discarding the standard server architecture."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "custom-planner-plugin/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/custom-planner-plugin/SKILL.md"
tags: ["ros2", "nav2", "planner", "plugins", "customization"]
related: ["articles/navigation/nav2-planner-selection-guide.md", "articles/navigation/navfn-planner-basics-and-when-to-use-it.md", "articles/navigation/smac-planner-hybrid-a-star.md"]
---

# Writing Custom Nav2 Planner Plugins

Source: [ros2-copilot-skills custom planner plugin skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/custom-planner-plugin/SKILL.md)

## Why This Matters

Most robots should start with existing planners, but some environments or mission requirements justify custom planning logic. The plugin system is how you do that without abandoning the rest of the Nav2 planning architecture.

## Distilled Takeaways

- A custom planner is justified when the planning problem is materially different from the built-in options.
- The planner should expose a clear objective and path semantics that the rest of the stack can understand.
- Good plugin boundaries let you experiment without forking Nav2 itself.
- Planning complexity is only worth it if the environment or vehicle actually benefits from it.

## Practical Guidance

- Define the planning gap clearly before building a plugin.
- Test against the same global costmap and localization assumptions as stock planners.
- Keep planner output compatible with the rest of the navigation pipeline.
- Compare against built-in planners regularly so the custom logic earns its complexity.

## Corroborating References

- [Nav2 plugin tutorials](https://docs.nav2.org/plugin_tutorials/index.html)
- [Nav2 planner plugins docs](https://docs.nav2.org/plugins/index.html)

## When to Read the Original Source

Go to the original skill when you want the planner-plugin structure and packaging details for extending the planner server cleanly.