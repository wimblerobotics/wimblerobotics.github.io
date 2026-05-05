# Source Note: Robotics_Book

- Source repo: https://github.com/wimblerobotics/Robotics_Book
- Local source used for this experiment: `/home/ros/Robotics_Book`
- Repository theme: book-style ROS 2 learning material with chapters, examples, and practical notes
- Editorial use in this experiment: summarize the practical lessons and point readers back to the original repo and chapter files

## Articles Derived Here

- `articles/foundations/urdf-as-a-frame-translation-system.md`
- `articles/foundations/urdf-links-joints-and-the-robot-tree.md`
- `articles/foundations/base-link-base-footprint-and-fixed-frame-choices.md`
- `articles/foundations/behavior-tree-ticks-status-and-control-flow.md`
- `articles/navigation/rviz-goals-bt-navigator-and-nav2-flow.md`
- `articles/navigation/custom-nav2-bt-plugins-and-configuration.md`
- `articles/navigation/behavior-tree-plugin-walkthrough.md`
- `articles/hardware/odometry-calibration-for-diff-drive.md`
- `articles/hardware/ultrasonic-sensors-for-robot-safety.md`
- `articles/devops/bootstrapping-a-jazzy-workspace.md`

## Notes

The most useful material in the local checkout for this experiment came from substantive chapters rather than the short chapter stubs. The strongest themes were:

- URDF as frame-management infrastructure, not just robot geometry
- the XML tree structure of URDF itself: links, joints, and the robot root
- how `base_link`, `base_footprint`, and fixed-frame choices affect RViz and navigation reasoning
- what Nav2 is actually doing when a goal is set in rviz2
- the practical execution model of behavior trees: ticks, node states, and control flow
- custom Nav2 behavior-tree extension through plugin libraries and XML wiring
- wheel odometry calibration as a practical, iterative measurement process
- reproducible Jazzy workspace bootstrap assumptions for book-style code examples
- ultrasonic sensor timing, interrupt handling, and close-range safety use
