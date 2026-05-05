---
title: "Physics Tuning in Gazebo"
summary: "How to tune simulator physics so robot behavior is stable and useful for testing without chasing fake realism."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "physics-tuning/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/physics-tuning/SKILL.md"
tags: ["ros2", "gazebo", "simulation", "physics", "devops"]
related: ["articles/devops/gazebo-sim-setup-for-ros2.md", "articles/devops/simulated-sensors-in-gazebo.md", "articles/hardware/inertia-calculation-for-urdf.md"]
---

# Physics Tuning in Gazebo

Source: [ros2-copilot-skills physics tuning skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/physics-tuning/SKILL.md)

## Why This Matters

Simulation physics should be tuned for stable, decision-relevant behavior. If contact, friction, or integration settings are badly chosen, the robot may look fine visually while producing motion behavior that teaches the wrong lessons.

## Distilled Takeaways

- Physics tuning is about useful simulation behavior, not maximum complexity.
- Contact, friction, inertia, and step timing interact strongly.
- Many apparent controller or planner problems in simulation are really physics-model problems.
- The right tuning depends on what aspect of robot behavior the simulation is meant to validate.

## Practical Guidance

- Start from stable baseline settings before increasing realism.
- Tune physics against concrete observed mismatches in simulated motion or contact.
- Recheck robot inertias and collision shapes before blaming the solver.
- Keep simulator settings versioned and tied to a stated test purpose.

## Corroborating References

- [Gazebo Sim documentation](https://gazebosim.org/docs)
- [URDF tutorials](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/URDF/Adding-Physical-and-Collision-Properties-to-a-URDF-Model.html)

## When to Read the Original Source

Go to the original skill when you want the practical physics-tuning perspective and the reminders for getting simulation to behave usefully for robotics work.