---
title: "rosdep Dependency Management"
summary: "Why rosdep matters for keeping a ROS 2 workspace installable by other people and other machines."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "rosdep-dependencies/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/rosdep-dependencies/SKILL.md"
tags: ["ros2", "rosdep", "dependencies", "devops", "build"]
related: ["articles/devops/colcon-workspace-discipline.md", "articles/devops/github-actions-for-ros2.md", "articles/software/package-xml-cmakelists-and-python-package-structure.md"]
---

# rosdep Dependency Management

Source: [ros2-copilot-skills rosdep dependencies skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/rosdep-dependencies/SKILL.md)

## Why This Matters

Projects stay healthier when dependency installation is encoded in the workspace rather than remembered by individuals. rosdep is the standard way to express and install many ROS-related system dependencies reproducibly.

## Distilled Takeaways

- rosdep reduces environment drift by turning dependency setup into a shared workflow.
- Correct package manifests are a prerequisite for good rosdep behavior.
- It helps both onboarding and CI.
- Dependency discipline pays off most when the workspace is used by more than one machine.

## Practical Guidance

- Keep package manifests accurate and up to date.
- Run rosdep as part of setup, not only after build failures.
- Use CI to catch missing dependency declarations.
- Treat unexplained local-only success as a sign rosdep coverage may be incomplete.

## Corroborating References

- [rosdep documentation](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/Rosdep.html)
- [REP 149 package manifest format](https://www.ros.org/reps/rep-0149.html)

## When to Read the Original Source

Go to the original skill when you want the practical rosdep workflow guidance and the dependency-management habits that make ROS 2 repos more portable.