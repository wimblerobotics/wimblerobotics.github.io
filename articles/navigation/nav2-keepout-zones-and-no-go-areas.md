---
title: "Nav2 Keepout Zones and No-Go Areas"
summary: "How to define keepout masks and costmap filters so planners and controllers avoid stairwells, fragile zones, and other areas the robot should never enter."
source_repo: "wimblerobotics/ros2-copilot-skills"
source_path: "keepout-zones/SKILL.md"
source_url: "https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/keepout-zones/SKILL.md"
tags: ["ros2", "nav2", "navigation", "costmaps", "safety", "jazzy"]
related: ["articles/navigation/nav2-global-costmap-configuration.md", "articles/navigation/nav2-speed-restricted-zones.md", "articles/navigation/nav2-static-layer-and-map-ingestion.md"]
---

# Nav2 Keepout Zones and No-Go Areas

Source: [keepout-zones](https://github.com/wimblerobotics/ros2-copilot-skills/blob/main/keepout-zones/SKILL.md)

## Why This Matters

Some places are off-limits regardless of what the sensors currently report. Keepout filters let you encode navigation policy directly into the world model instead of hoping the operator or planner remembers it.

## Distilled Takeaways

- Keepout zones are usually implemented with a separate mask map plus filter metadata, not by painting over the navigation map itself.
- The mask must align exactly with the navigation map in resolution and origin.
- Keepout is usually binary: a cell is either restricted or not.
- The global costmap is the main place to apply keepout because that is where route selection happens.
- Putting keepout into the local costmap can add a final safety barrier when policy violations are unacceptable.

## Practical Guidance

- Use keepout for staircases, hazardous lab regions, private rooms, fragile displays, or docking-side exclusion zones.
- Keep the mask visually simple: white everywhere, black only where access is forbidden.
- Add the mask server and filter info server to lifecycle management or the filter will appear configured but inactive.
- Visualize the keepout mask in RViz as a separate map layer when debugging alignment.

## Common Failure Modes

- Inverted mask semantics causing most of the map to become lethal.
- Resolution or origin mismatch between the base map and the keepout mask.
- Forgetting to load the filter plugin in the costmap even though the mask server is running.

## Corroborating References

- [Nav2 keepout filter configuration](https://docs.nav2.org/configuration/packages/costmap-plugins/keepout_filter.html)
- [Nav2 costmap filters overview](https://docs.nav2.org/configuration/packages/configuring-costmaps.html#filters)

## When to Read the Original Source

Read the source skill when you want the exact multi-node setup, lifecycle integration details, or a concrete example of how the filter and mask server fit into a Nav2 launch system.