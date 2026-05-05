---
title: "Camera Calibration for ROS 2"
summary: "Why camera calibration matters, how to collect usable data, and how to keep image-based perception from drifting out of geometric trustworthiness."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "camera-calibration/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/camera-calibration/SKILL.md"
tags: ["ros2", "perception", "camera", "calibration", "vision", "camera-info"]
related: ["articles/hardware/calibration-workflows-for-mobile-robots.md", "articles/perception/multi-sensor-extrinsic-and-temporal-calibration.md", "articles/perception/depth-cameras-for-navigation-and-mapping.md", "articles/navigation/localization-state-estimation-and-frame-discipline.md"]
---

# Camera Calibration for ROS 2

Source: [ros2-copilot-skills camera calibration skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/camera-calibration/SKILL.md)

## Why This Matters

Many perception pipelines fail quietly because the camera geometry is wrong rather than because the detector is bad. If intrinsics, distortion, or stereo alignment are off, depth back-projection, object localization, rectification, and map alignment all degrade in ways that look like downstream bugs.

## Distilled Takeaways

- Calibration is what makes `CameraInfo` trustworthy enough for rectification, projection, and 3D reconstruction.
- A calibration target must be measured accurately and kept flat, or the numeric output is only pretending to be metric.
- Coverage matters more than raw image count. You need target motion across image edges, distances, and tilt angles.
- Reprojection error is a useful sanity check, but visual verification of the rectified image still matters.
- Recalibrate after meaningful changes to lens, focus, or mounting.

## Practical Guidance

- Use a rigid checkerboard or equivalent target, not curled paper.
- Capture enough views to exercise image corners and skew, not just the center of the frame.
- Store the resulting calibration file in a stable, versioned location and point the driver at it explicitly.
- When a vision stack appears geometrically wrong, verify `camera_info` before changing inference code.

## Corroborating References

- [camera_calibration package docs](https://docs.ros.org/en/ros2_packages/jazzy/api/camera_calibration/doc/index.html)
- [image_pipeline repository](https://github.com/ros-perception/image_pipeline)

## When to Read the Original Source

Go to the original skill when you want the concrete calibrator command lines, the meaning of the GUI progress bars, example YAML output, and stereo-specific reminders for generating a usable baseline and rectification model.