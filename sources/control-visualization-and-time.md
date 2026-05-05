# Source Note: Control, Visualization, and Time Sources

- Source families used here:
  - `ros-controls/control.ros.org`
  - `foxglove` docs and blog
  - `ros2/ros2_documentation` design notes
  - `message_filters` docs
- Repository theme: practical sources for robot control architecture, developer/operator visualization workflows, and stamped-data discipline
- Editorial use in this experiment: expand beyond the original 158 skills with public sources that cover real workflow gaps for robot builders

## Articles Derived Here

- `articles/hardware/ros2-control-design-patterns-in-jazzy.md`
- `articles/software/foxglove-and-rviz-role-separation.md`
- `articles/software/timestamp-discipline-and-message-synchronization.md`

## Notes

These sources are especially useful for filling gaps where the repo needs more than package-level API summaries:

- robot-wide `ros2_control` architecture rather than only one diff-drive example
- clearer tool-role separation between RViz and Foxglove
- timestamp handling as a systems problem rather than a narrow `message_filters` tip