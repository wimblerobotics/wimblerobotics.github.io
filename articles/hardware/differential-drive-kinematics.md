---
title: "Differential Drive Kinematics"
summary: "The minimum kinematic model every diff-drive robot builder should understand before debugging odometry, control, or path tracking."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "differential-drive-model/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/differential-drive-model/SKILL.md"
tags: ["ros2", "differential-drive", "kinematics", "odometry", "hardware"]
related: ["articles/hardware/encoder-odometry-math.md", "articles/hardware/wheel-odometry-models.md", "articles/hardware/odometry-calibration-for-diff-drive.md"]
---

# Differential Drive Kinematics

Source: [ros2-copilot-skills differential drive model skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/differential-drive-model/SKILL.md)

## Why This Matters

Diff-drive robots look mechanically simple, but their control and odometry logic only make sense when the underlying kinematic assumptions are explicit. Many navigation problems trace back to misunderstanding that model.

## Distilled Takeaways

- Diff-drive motion comes from the relationship between left and right wheel motion.
- Wheel radius, track width, and slip assumptions shape both control and odometry.
- A clean kinematic model is prerequisite knowledge for tuning higher-level navigation.
- Real robots depart from the ideal model, which is why calibration matters.

## Practical Guidance

- Use the ideal kinematic model as a baseline, then validate it against the real robot.
- Recheck track width and wheel radius assumptions after hardware changes.
- Treat persistent turn or arc errors as model-calibration issues early.
- Keep the kinematic model in mind when interpreting cmd_vel and odometry behavior.

## Corroborating References

- [REP 103 standard units and conventions](https://www.ros.org/reps/rep-0103.html)
- [ros2_control diff drive controller docs](https://control.ros.org/)

## When to Read the Original Source

Go to the original skill when you want the diff-drive math intuition and the practical relationship between ideal kinematics and real robot behavior.