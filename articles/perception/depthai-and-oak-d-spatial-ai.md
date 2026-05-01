---
title: "DepthAI and OAK-D Spatial AI"
summary: "How to use OAK-D and DepthAI for stereo depth and on-device neural inference so a robot can offload perception without turning the host into a vision furnace."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "spatial-ai-depthai/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/spatial-ai-depthai/SKILL.md"
tags: ["ros2", "perception", "depthai", "oak-d", "spatial-ai", "depth-camera"]
related: ["articles/perception/depth-cameras-for-navigation-and-mapping.md", "articles/perception/yolo-integration-for-ros2-robots.md", "articles/perception/object-detection-pipelines-in-ros2.md"]
---

# DepthAI and OAK-D Spatial AI

Source: [ros2-copilot-skills DepthAI skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/spatial-ai-depthai/SKILL.md)

## Why This Matters

DepthAI cameras are compelling because they combine depth sensing and neural inference in one device. That shifts perception design decisions away from raw host horsepower and toward pipeline structure, model conversion, and what results should be published back into ROS 2.

## Distilled Takeaways

- OAK-D is most valuable when you exploit on-device compute rather than using it as an expensive USB camera.
- DepthAI pipelines are DAGs, which makes pipeline design an explicit engineering concern.
- Spatial detections are powerful because they combine 2D detection with depth-derived 3D position.
- Host CPU load is often low, but data contracts and topic design still matter.
- Device-accelerated perception helps most when it reduces system latency or frees the host for navigation and control work.

## Practical Guidance

- Decide whether the robot needs RGB, depth, spatial detections, or all three before building the pipeline.
- Treat model-to-blob conversion as part of deployment, not as a one-off experiment.
- Keep ROS topics standard so the rest of the robot is not tightly coupled to DepthAI internals.
- Use DepthAI where offloaded inference materially improves the whole system, not just benchmark FPS.

## Corroborating References

- [DepthAI documentation](https://docs.luxonis.com/)
- [depthai-ros repository](https://github.com/luxonis/depthai-ros)
- [Gazebo ROS 2 integration overview](https://gazebosim.org/docs/latest/ros2_integration/)

## When to Read the Original Source

Go to the original skill when you want the node types, blob conversion flow, launch examples, and pipeline-performance tradeoffs for using OAK-D as a real robotics perception component instead of a demo sensor.