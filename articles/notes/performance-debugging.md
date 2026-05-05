# Note: Performance Debugging and Tracing

You are probably here because the robot feels slow, callbacks miss their timing only under load, or logs tell you something is wrong without showing where the latency is accumulating.

## Likely First Answer

Start with [ros2_tracing and Performance Analysis](../software/ros2-tracing-and-performance-analysis.md).

## If the Real Problem Is...

- general profiling mindset: [Performance Profiling in ROS 2](../software/performance-profiling-in-ros2.md)
- timing or stamp coherence: [Timestamp Discipline and Message Synchronization](../software/timestamp-discipline-and-message-synchronization.md)
- autonomy decision history: [BT Logging, Replay, and Trace Analysis](../navigation/bt-logging-replay-and-trace-analysis.md)
- health visibility rather than latency: [Diagnostics Aggregation and Health Dashboards](../software/diagnostics-aggregation-and-health-dashboards.md)

## Shiny Objects Nearby

- [Component Composition for High-Bandwidth Pipelines](../software/component-composition-for-high-bandwidth-pipelines.md)
- [Intra-Process and Zero-Copy Communication in ROS 2](../software/intra-process-zero-copy-communication.md)
- [ROS 2 Multi-Machine Networking and Discovery](../devops/ros2-multi-machine-networking-and-discovery.md)