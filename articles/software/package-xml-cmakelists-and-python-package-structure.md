---
title: "package.xml, CMakeLists.txt, and Python Package Structure"
summary: "A practical guide to the files that make ROS 2 packages buildable, installable, and discoverable in Jazzy, including the mistakes that make launch and runtime assets disappear."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "package-xml-cmake/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/package-xml-cmake/SKILL.md"
tags: ["ros2", "package.xml", "cmake", "ament", "python", "build"]
related: ["articles/devops/colcon-workspace-discipline.md", "articles/software/launch-files-patterns-and-pitfalls.md", "articles/software/parameter-handling-and-runtime-reconfiguration.md"]
---

# package.xml, CMakeLists.txt, and Python Package Structure

Source: [ros2-copilot-skills package configuration skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/package-xml-cmake/SKILL.md)

## Why This Matters

Many ROS 2 debugging sessions start in the wrong place because the real problem is packaging. If a package does not declare dependencies correctly or does not install launch, config, URDF, or Python entry points properly, the runtime failure often looks unrelated to the actual mistake.

## Distilled Takeaways

- `package.xml` and the build file are part of the package API, not ceremony.
- Installation rules matter as much as compilation rules because ROS 2 tools find runtime assets in the install space.
- `ament_cmake` and `ament_python` packages have different failure modes, but both need careful asset installation.
- Interface packages deserve explicit structure because generated messages, services, and actions affect downstream builds.
- A surprising number of launch-time file lookup errors are packaging errors in disguise.

## Practical Guidance

- Install launch, config, URDF, and related data directories deliberately.
- Use the narrowest dependency tags that remain readable.
- Keep Python package entry points and installed script locations aligned with ROS 2 expectations.
- Treat package structure as an onboarding surface for future contributors.

## Corroborating References

- [ROS 2 package creation tutorial](https://docs.ros.org/en/jazzy/Tutorials/Beginner-Client-Libraries/Creating-Your-First-ROS2-Package.html)
- [ament_cmake documentation](https://docs.ros.org/en/jazzy/How-To-Guides/Ament-CMake-Documentation.html)

## When to Read the Original Source

Go to the original skill when you want complete example files for C++ packages, Python packages, and interface packages, including install rules and dependency-tag guidance.