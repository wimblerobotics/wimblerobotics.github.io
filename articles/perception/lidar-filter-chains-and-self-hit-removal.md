---
title: "LIDAR Filter Chains and Self-Hit Removal"
summary: "How to use `laser_filters` to remove chassis hits, range junk, shadows, and speckle before your robot mistakes itself for an obstacle."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "lidar-filtering/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/lidar-filtering/SKILL.md"
tags: ["ros2", "perception", "lidar", "laser-filters", "navigation", "debugging"]
related: ["articles/perception/laser-scan-processing-and-filtering.md", "articles/perception/lidar-driver-bringup-and-frame-alignment.md", "articles/navigation/nav2-obstacle-layer-marking-and-clearing.md"]
---

# LIDAR Filter Chains and Self-Hit Removal

Source: [ros2-copilot-skills lidar filtering skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/lidar-filtering/SKILL.md)

## Why This Matters

Most mobile robots need some lidar filtering. Without it, the scanner often sees the robot body, weird edge artifacts, or isolated noise points and then hands those directly to the navigation stack. The result is a robot that looks blocked by imaginary obstacles or navigates with a permanent layer of mistrust.

## Distilled Takeaways

- `laser_filters` gives you a sequential pipeline, so filter order is part of the design.
- Angular and box filters are the usual tools for self-hit removal.
- Range, speckle, and shadow filters handle different classes of noise and should not be treated as interchangeable.
- A filtered scan is a product worth versioning and reviewing, not just a quick cleanup step.
- Good filtering removes known bad data while preserving real walls and obstacle edges.

## Practical Guidance

- Start by visualizing both raw and filtered scans in RViz at the same time.
- Remove the robot footprint first, then apply narrower artifact filters.
- Keep the filter chain in YAML so it is inspectable and repeatable.
- If filtering damages real structure, back off and verify geometry assumptions before adding more plugins.

## Corroborating References

- [laser_filters repository](https://github.com/ros-perception/laser_filters)
- [Nav2 obstacle layer configuration guide](https://docs.nav2.org/configuration/packages/costmap-plugins/obstacle.html)

## When to Read the Original Source

Go to the original skill when you want concrete YAML chains for angular bounds, box filters, speckle removal, and shadow filtering, plus launch integration details for exposing a clean `/scan` topic to the rest of the robot.