---
title: "Custom ROS 2 Interfaces"
summary: "How to design `.msg`, `.srv`, and `.action` definitions that support clear robot APIs without creating circular-package pain or unstable contracts."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "custom-interfaces/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/custom-interfaces/SKILL.md"
tags: ["ros2", "messages", "services", "actions", "interfaces", "api"]
related: ["articles/software/ros2-actions-for-long-running-robot-tasks.md", "articles/software/ros2-services-without-deadlocks.md", "articles/software/package-xml-cmakelists-and-python-package-structure.md"]
---

# Custom ROS 2 Interfaces

Source: [ros2-copilot-skills custom interfaces skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/custom-interfaces/SKILL.md)

## Why This Matters

Interface design is where a robot project either becomes coherent or drifts into topic-name folklore. Custom messages, services, and actions are not just transport schemas. They are the public contracts that let subsystems evolve without constant archaeological debugging.

## Distilled Takeaways

- Keep interfaces in dedicated interface packages to avoid circular dependency pain.
- Design fields for operational meaning, not just for what is easiest to publish right now.
- Constants and explicit naming conventions can make status and mode messages far easier to consume safely.
- Interface changes ripple across builds, generated code, and runtime expectations, so treat them as deliberate versioned changes.
- A good action or service definition usually starts with a good message vocabulary.

## Practical Guidance

- Use standard messages when they already express the concept well.
- Create custom interfaces when the robot genuinely has a reusable domain API.
- Keep request, result, and feedback semantics crisp so higher-level autonomy can reason about them.
- Rebuild and re-source immediately after interface edits. Anything else invites ghost bugs.

## Corroborating References

- [ROS 2 custom interface tutorial](https://docs.ros.org/en/jazzy/Tutorials/Beginner-Client-Libraries/Custom-ROS2-Interfaces.html)
- [ROS 2 actions tutorial](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/Understanding-ROS2-Actions.html)

## When to Read the Original Source

Go to the original skill when you want example package structure, CMake and `package.xml` snippets, field-type reminders, and the explicit warnings around dependency declarations and interface-package layout.