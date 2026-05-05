---
title: "ROS 2 Map Formats and Occupancy Grids"
summary: "How ROS 2 map files are structured and why understanding the map image plus YAML pair makes the rest of the mapping stack easier to reason about."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "map-formats/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/map-formats/SKILL.md"
tags: ["ros2", "maps", "occupancy-grid", "mapping", "nav2"]
related: ["articles/navigation/map-server-configuration.md", "articles/navigation/map-saver-configuration.md", "articles/navigation/nav2-static-layer-and-map-ingestion.md"]
---

# ROS 2 Map Formats and Occupancy Grids

Source: [ros2-copilot-skills map formats skill](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/map-formats/SKILL.md)

## Why This Matters

Maps in ROS 2 are simple enough to use quickly and subtle enough to confuse people later. Understanding how the image file and metadata YAML define an occupancy grid helps explain map alignment, resolution, origin, and why downstream planners interpret the map the way they do.

## Distilled Takeaways

- A ROS 2 map is usually an occupancy image plus YAML metadata describing resolution, origin, and thresholds.
- Small misunderstandings in origin or resolution can show up as global navigation errors.
- The map format is part of the navigation contract, not just a storage detail.
- Map interpretation has direct consequences for costmaps and planner behavior.

## Practical Guidance

- Inspect map YAML whenever a static map feels misaligned or oddly scaled.
- Treat origin and resolution as first-class values worth verifying visually.
- Keep map artifacts versioned and documented.
- Use the same mental model when moving maps between robots or environments.

## Corroborating References

- [Nav2 map server docs](https://docs.nav2.org/configuration/packages/map_server/configuring-map-server.html)
- [nav_msgs OccupancyGrid definition](https://docs.ros.org/en/jazzy/p/nav_msgs/msg/OccupancyGrid.html)

## When to Read the Original Source

Go to the original skill when you want the concrete breakdown of map files and the practical reminders about thresholds, image interpretation, and YAML metadata.