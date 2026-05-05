# Source Note: Public Source Candidates

This page tracks strong public sources that are good candidates for future summarization work.

## High-Value Candidates

- `ros2/ros2_tracing`
  - Why it matters: strong source for callback latency, executor contention, trace capture, and performance analysis workflows
  - Candidate topics: `ros2_tracing`, trace-guided optimization, performance regression triage, distributed message flow analysis
- `foxglove` docs and blog
  - Why it matters: strong source for telemetry workflows, data analysis, bag playback, and team debugging layouts
  - Candidate topics: Foxglove layouts, MCAP workflows, operator dashboards, comparison against RViz/Webviz
- `ros-controls` docs
  - Why it matters: strong source for arm and drivetrain control architecture, controller manager patterns, and simulator integrations
  - Candidate topics: arm control patterns, controller switching, topic-based hardware adapters, simulator-backed controller testing
- `ros/diagnostics`
  - Why it matters: strong source for health dashboards, diagnostic aggregation, and structured operator visibility
  - Candidate topics: analyzer rules, dashboard design, diagnostics-driven incident triage
- `ros2/rviz` and RViz docs
  - Why it matters: strong source for visualization discipline, panel workflows, and debugging practices
  - Candidate topics: team RViz conventions, custom displays, role separation versus Foxglove

## Selection Heuristics

- Prefer sources that teach operational patterns, not just API surface.
- Prefer sources with stable public URLs and maintained documentation.
- Prefer sources that complement official ROS docs with real deployment or workflow experience.