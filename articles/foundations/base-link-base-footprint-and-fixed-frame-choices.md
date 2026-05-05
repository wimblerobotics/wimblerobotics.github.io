---
title: "base_link, base_footprint, and Fixed-Frame Choices"
summary: "How base_link, base_footprint, and RViz fixed-frame choices affect what a robot believes about its own geometry and its place in the world."
source_repo: "wimblerobotics/Robotics_Book"
source_path: "book/chapters/urdfs.md"
source_url: "https://github.com/wimblerobotics/Robotics_Book/blob/main/book/chapters/urdfs.md"
tags: ["ros2", "urdf", "tf", "frames", "foundations"]
related: ["articles/foundations/coordinate-frames-rep-105-and-navigation.md", "articles/foundations/urdf-as-a-frame-translation-system.md", "articles/software/robot-state-publisher-and-joint-state-publisher.md"]
---

# base_link, base_footprint, and Fixed-Frame Choices

Source: [Robotics_Book URDF chapter](https://github.com/wimblerobotics/Robotics_Book/blob/main/book/chapters/urdfs.md)

## Why This Matters

Robots become easier to reason about when the team is precise about what `base_link` means, what `base_footprint` is for, and what RViz is actually showing when a fixed frame is selected. A lot of frame confusion comes from mixing these ideas together until visualization choices start looking like navigation bugs.

## Distilled Takeaways

- `base_link` is usually the main body reference for the robot, not the floor contact point.
- `base_footprint` is useful when a planar ground-aligned frame is needed for navigation and visualization.
- RViz does not merely show the robot; it shows the world from the chosen fixed frame.
- Frame-parent choices in URDF change what appears intuitive later in TF, RViz, and navigation tooling.

## Practical Value

- Use `base_link` for the robot body and `base_footprint` when a ground-projected frame helps the rest of the stack.
- Change RViz fixed frames deliberately when trying to understand geometry from a specific sensor or body reference.
- Debug odd-looking map and robot alignment by checking the frame chain before assuming the map or URDF is wrong.
- Keep frame semantics documented so hardware and software contributors share the same mental model.

## Corroborating References

- [REP 105 coordinate frame conventions](https://www.ros.org/reps/rep-0105.html)
- [tf2 tutorials](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/Tf2/Tf2-Main.html)

## When to Read the Original Source

Go to the original chapter when you want the worked URDF examples showing wheels, `base_footprint`, a fixed map element, and the way RViz visual changes reveal what each frame choice really means.