# Source Note: Tracing and Calibration Sources

- Source families used here:
  - `ros2/ros2_tracing`
  - `ros-tracing/tracetools_analysis`
  - `ros-perception/camera_calibration`
  - `ros-controls/ros2_controllers` diff-drive docs
  - `ethz-asl/kalibr`
- Repository theme: system introspection for callback-level performance work, plus practical calibration workflows that tie sensor geometry and timing back to reliable robot behavior
- Editorial use in this experiment: fill two thin but high-value gaps between existing leaf articles on profiling, camera calibration, IMU integration, and wheel odometry

## Articles Derived Here

- `articles/software/ros2-tracing-and-performance-analysis.md`
- `articles/hardware/calibration-workflows-for-mobile-robots.md`
- `articles/perception/multi-sensor-extrinsic-and-temporal-calibration.md`

## Notes

These sources matter because the repo already had useful leaves for profiling, camera calibration, IMU integration, and odometry calibration, but it lacked:

- a stronger ROS 2 tracing page for callback latency, executor contention, and trace-analysis workflow
- a calibration hub that connects cameras, wheel geometry, IMUs, and multi-sensor extrinsics in the right order
- a source-backed bridge from basic camera calibration to tighter spatial and temporal multi-sensor alignment