---
title: "rviz2 Goals, bt_navigator, and Nav2 Flow"
summary: "What actually happens after you click a Nav2 goal in rviz2, from action client request through behavior tree execution and recovery behavior."
source_repo: "wimblerobotics/Robotics_Book"
source_path: "book/chapters/navigating_with_rviz.md"
source_url: "https://github.com/wimblerobotics/Robotics_Book/blob/main/book/chapters/navigating_with_rviz.md"
tags: ["ros2", "nav2", "rviz2", "behavior-trees", "actions", "navigation"]
related: ["articles/foundations/urdf-as-a-frame-translation-system.md", "articles/software/launch-files-patterns-and-pitfalls.md"]
---

# rviz2 Goals, bt_navigator, and Nav2 Flow

Source: [Robotics_Book navigation chapter](https://github.com/wimblerobotics/Robotics_Book/blob/main/book/chapters/navigating_with_rviz.md)

## Why This Matters

It is easy to think of the rviz2 goal tool as a direct "move there" button. In practice, the click-and-drag gesture triggers a chain of action, planning, control, and recovery logic inside Nav2. Understanding that chain makes debugging much easier.

## Distilled Takeaways

- The rviz2 Nav2 Goal tool acts as an action client, not as the navigation logic itself.
- `bt_navigator` loads navigator plugins such as `navigate_to_pose` and `navigate_through_poses` from `navigation.yaml`.
- The navigate-to-pose flow relies on a behavior tree XML file that defines planning, following, replanning, and recovery behavior.
- Planner and controller selection happen inside the behavior tree execution flow, not as a one-off decision detached from the rest of the navigation stack.
- Recovery behavior is part of the default design. Clearing costmaps, spinning, waiting, and backing up are not afterthoughts; they are built into the tree.

## Debugging Value

If a robot appears to "refuse" a goal, it helps to ask which layer is actually failing:

- goal publication from rviz2
- action connection to the navigator
- planner success
- controller success
- repeated recovery loops
- custom plugin loading from `plugin_lib_names`

That is a better debugging strategy than treating Nav2 as a black box.

## Good Questions to Ask in Practice

- Which behavior tree XML is actually loaded for `navigate_to_pose`?
- Are custom behavior tree plugins installed and loadable?
- Is the failure in planning, path following, or recovery exhaustion?
- Is the robot repeatedly recovering because costmaps or localization are wrong?

## When to Read the Original Source

Go to the original chapter when you want a narrative walkthrough of the default Nav2 behavior tree, including how the XML structure maps to planning, following, and recovery actions.
