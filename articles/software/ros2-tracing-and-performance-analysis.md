---
title: "ros2_tracing and Performance Analysis"
summary: "How to move from vague ROS 2 slowness to callback-level evidence using ros2_tracing, LTTng, and trace analysis workflows that fit Jazzy robots on Linux."
source_repo: "ros2/ros2_tracing"
source_path: "README.md; doc/design_ros_2.md; ROS 2 tracing tutorial"
source_url: "https://github.com/ros2/ros2_tracing"
tags: ["ros2", "tracing", "performance", "debugging", "instrumentation", "software"]
related: ["articles/software/performance-profiling-in-ros2.md", "articles/software/timestamp-discipline-and-message-synchronization.md", "articles/software/diagnostics-aggregation-and-health-dashboards.md", "articles/navigation/bt-logging-replay-and-trace-analysis.md"]
---

# ros2_tracing and Performance Analysis

Source: [ros2_tracing](https://github.com/ros2/ros2_tracing) and the [ROS 2 Jazzy tracing tutorial](https://docs.ros.org/en/jazzy/Tutorials/Advanced/ROS2-Tracing-Trace-and-Analyze.html)

## Why This Matters

Logs tell you what software decided to say. Traces tell you what actually executed, when it executed, and how long it took. That difference matters when a robot feels slow, callbacks bunch up under load, executor behavior becomes suspicious, or a distributed pipeline drops performance without a clean crash.

## Distilled Takeaways

- `ros2_tracing` gives ROS 2 core instrumentation on Linux using LTTng, so you can inspect callback execution, message flow, and runtime structure with much lower guesswork.
- For Jazzy-era Linux systems, tracing is usually available without rebuilding ROS 2, but kernel events still require the kernel tracer and correct tracing-group permissions.
- The `Trace` launch action is often the safest way to capture useful data because tracing needs to start before the application if you want initialization metadata and early runtime context.
- Snapshot mode and dual-session mode are especially useful for intermittent failures because they preserve recent history without constantly writing full traces to disk.
- Trace data becomes valuable when paired with analysis, not just collection. `babeltrace` is good for quick inspection; `tracetools_analysis` is good for callback-duration and message-flow work.

## Practical Workflow

1. Start from a symptom: delayed control, frame drops, executor stalls, or autonomy that degrades only under realistic load.
2. Capture a trace before launch with `ros2 trace` or a launch-file `Trace` action.
3. Use snapshot mode when you need a flight recorder and dual-session mode when startup behavior matters but continuous disk writes do not.
4. Inspect the raw trace quickly with `babeltrace` to confirm that the session contains the events you expected.
5. Use `tracetools_analysis` notebooks or APIs to plot callback duration and inspect message flow through the pipeline.
6. Only then change executor structure, callback grouping, QoS, or algorithm design.

## Operational Guidance

- Reach for tracing when logs and CPU graphs tell you something is wrong but not where the latency is accumulating.
- Pair traces with rosbag, diagnostics, and behavior-tree logs when investigating autonomy failures that span sensing, execution, and decision layers.
- Treat callback outliers as system clues, not only algorithm clues. Executor contention, blocking I/O, and queueing structure often matter as much as pure compute time.
- Keep tracing in reserve for field failures by deciding ahead of time where trace data should be stored and when snapshot capture should be triggered.

## Corroborating References

- [ROS 2 Jazzy tracing tutorial](https://docs.ros.org/en/jazzy/Tutorials/Advanced/ROS2-Tracing-Trace-and-Analyze.html)
- [ros2_tracing repository](https://github.com/ros2/ros2_tracing)
- [tracetools_analysis repository](https://github.com/ros-tracing/tracetools_analysis)
- [ros2_tracing paper](https://arxiv.org/abs/2201.00393)

## When to Read the Original Source

Go to the original sources when you want the exact CLI and launch-file tracing controls, snapshot and dual-session semantics, kernel-tracing requirements, or the sample analysis notebooks for callback durations and message-flow studies.