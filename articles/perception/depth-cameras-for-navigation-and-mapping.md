---
title: "Depth Cameras for Navigation and Mapping"
summary: "How to turn depth images into point clouds or virtual scans that Nav2 and mapping pipelines can use without unnecessary compute or frame confusion."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "depth-camera-pipeline/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/depth-camera-pipeline/SKILL.md"
tags: ["ros2", "perception", "depth-camera", "pointcloud", "laserscan", "navigation"]
related: ["articles/perception/camera-calibration-for-ros2.md", "articles/perception/pointcloud-processing-for-navigation.md", "articles/navigation/nav2-obstacle-layer-marking-and-clearing.md"]
---

# Depth Cameras for Navigation and Mapping

Source: [ros2-copilot-skills depth camera skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/depth-camera-pipeline/SKILL.md)

## Why This Matters

Depth cameras are attractive because they seem to give a robot instant 3D awareness, but the useful output is rarely the raw depth image. The real design choice is what derived product the rest of the stack can consume reliably: point clouds, virtual scans, or a filtered obstacle source.

## Distilled Takeaways

- `depth_image_proc` turns calibrated depth images into point clouds, while `depthimage_to_laserscan` gives a lighter path into 2D navigation.
- The best pipeline depends on the downstream task, not on which output looks more sophisticated.
- Optical-frame conventions differ from robot-body conventions, so TF discipline matters immediately.
- A depth camera is often most valuable where a 2D lidar misses low obstacles or short-range structure.
- CPU cost and transform correctness are usually the first real constraints.

## Practical Guidance

- Use virtual scans when you want cheap obstacle integration for a single depth camera.
- Use point clouds when you need height filtering, multi-camera fusion, or richer 3D processing.
- Verify the `camera_link` to optical-frame chain in URDF and TF before touching costmap parameters.
- Keep depth-camera outputs clearly separate from semantic detections so you can tune them independently.

## Corroborating References

- [image_pipeline repository](https://github.com/ros-perception/image_pipeline)
- [depthimage_to_laserscan package](https://github.com/ros-perception/depthimage_to_laserscan)
- [Nav2 environmental representation concepts](https://docs.nav2.org/concepts/index.html#environmental-representation)

## When to Read the Original Source

Go to the original skill when you want concrete launch examples for `depth_image_proc` and `depthimage_to_laserscan`, direct costmap snippets, and the frame-convention details that usually cause the first integration failures.