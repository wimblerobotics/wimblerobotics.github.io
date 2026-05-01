---
title: "Person Tracking for Robot Behaviors"
summary: "How to move from person detection to stable tracked people that can drive patrol logic, following behavior, or operator alerts."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "person-tracking/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/person-tracking/SKILL.md"
tags: ["ros2", "perception", "person-tracking", "vision", "behavior-trees", "autonomy"]
related: ["articles/perception/object-detection-pipelines-in-ros2.md", "articles/perception/yolo-integration-for-ros2-robots.md", "articles/navigation/behavior-trees-for-nav2-and-robot-autonomy.md"]
---

# Person Tracking for Robot Behaviors

Source: [ros2-copilot-skills person tracking skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/person-tracking/SKILL.md)

## Why This Matters

Detecting a person once is not the same as tracking a person through time. Robots that react to humans need continuity, position estimates, and confidence over time. Otherwise every frame becomes a new argument about whether the robot really saw someone.

## Distilled Takeaways

- Tracking is about identity and continuity, not just repeated detection.
- Spatial tracking in map or robot frames is far more useful for robot behavior than raw image coordinates.
- Even simple nearest-neighbor or Kalman-based tracking can be enough if the problem is scoped correctly.
- Track confirmation and coast time are essential to avoiding twitchy behavior.
- Privacy and retention decisions are part of the design when people are involved.

## Practical Guidance

- Separate detection, tracking, and decision logic into different layers.
- Publish a tracked-person message that downstream behaviors can consume directly.
- Require a track to survive multiple frames before letting it trigger autonomy.
- Define how long a lost track should persist based on your robot's environment and latency budget.

## Corroborating References

- [vision_msgs package](https://github.com/ros-perception/vision_msgs)
- [BehaviorTree.CPP docs](https://www.behaviortree.dev/docs/intro/)

## When to Read the Original Source

Go to the original skill when you want concrete matching logic, simple track data structures, patrol-oriented BT integration patterns, and the privacy cautions that matter for in-home or human-facing robots.