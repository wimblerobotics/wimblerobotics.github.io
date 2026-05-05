# Solve a Problem

This is the problem-first front door for the site.
The goal is to get a reader from an immediate robotics problem to useful answers, then outward into nearby ideas worth understanding next.

## Common Starting Points

### Navigation Feels Opaque

- Start here: [Note: Nav2 Architecture](nav2-architecture.md)
- Then branch into planners, controllers, costmaps, behavior trees, or recovery.

### The Robot Moves Badly

- Start here: [Note: Choosing a Nav2 Controller](controller-choice.md)
- Then branch into path-tracking metrics, planner choice, or motion smoothing.

### Localization Is Unstable

- Start here: [Note: Localization Recovery](localization-recovery.md)
- Then branch into AMCL, sensor fusion, frame discipline, or mapping.

### URDF and TF Are Confusing

- Start here: [Note: URDF and Frames](urdf-frames.md)
- Then branch into `robot_state_publisher`, xacro, extrinsics, or base frame conventions.

### Simulation Is Misleading or Brittle

- Start here: [Note: Gazebo Physics and Simulation Truth](gazebo-physics.md)
- Then branch into world building, simulated sensors, and ROS/Gazebo bridging.

### The Workspace Itself Keeps Biting You

- Start here: [Note: Workspace Bootstrap and Build Hygiene](workspace-bootstrap.md)
- Then branch into overlays, rosdep, package structure, and startup discipline.

### Desktop and Robot Bringup Keep Diverging

- Start here: [Note: Jazzy Bringup Across Desktop and SBC](jazzy-bringup.md)
- Then branch into ROS installation, Raspberry Pi setup, device access, and boot discipline.

### Outdoor Navigation Falls Apart

- Start here: [Note: Outdoor GPS and RTK Navigation](outdoor-gps-navigation.md)
- Then branch into GNSS fusion, IMU integration, odometry quality, and RTK operations.

### Base Control Feels Fragile

- Start here: [Note: Diff-Drive Base Control](diff-drive-base-control.md)
- Then branch into ros2_control, serial protocols, odometry math, and watchdog design.

### Close-Range Sensing Still Misses Obstacles

- Start here: [Note: Close-Range Sensing and Ultrasonic Safety](close-range-sensing.md)
- Then branch into ultrasonic timing, MCU reporting, emergency stop logic, and Nav2 range-layer integration.

### I Need a Custom Behavior Tree Node

- Start here: [Note: Custom Behavior Tree Plugins](custom-bt-plugins.md)
- Then branch into ports, plugin registration, XML wiring, and Nav2 integration choices.

### ROS 2 Breaks When I Move To Two Machines

- Start here: [Note: Robot Networking and Multi-Machine ROS 2](robot-networking.md)
- Then branch into DDS domain boundaries, Wi-Fi assumptions, VPN setup, and desktop-to-robot discovery.

### The Robot Runs But Health Is Opaque

- Start here: [Note: Robot Health and Diagnostics](robot-health.md)
- Then branch into diagnostics aggregation, health dashboards, watchdogs, and incident review.

### The Control Stack Needs Cleaner Boundaries

- Start here: [Note: ros2_control Architecture](control-architecture.md)
- Then branch into hardware interfaces, controller manager boundaries, simulator integration, and drivetrain examples.

### The Team Needs Better Visualization Workflows

- Start here: [Note: Visualization and Telemetry Workflows](visualization-workflows.md)
- Then branch into RViz discipline, Foxglove workflows, rosbag analysis, and diagnostics dashboards.

### Timestamps Keep Breaking The Pipeline

- Start here: [Note: Timestamps and Sensor Synchronization](time-sync.md)
- Then branch into ROS time, message_filters, multi-machine assumptions, and fusion quality.

### The Robot Slows Down Only Under Real Load

- Start here: [Note: Performance Debugging and Tracing](performance-debugging.md)
- Then branch into profiling, callback latency, executor contention, and multi-machine timing assumptions.

### Sensor Calibration Keeps Poisoning The Stack

- Start here: [Note: Robot Calibration Workflows](calibration-workflows.md)
- Then branch into camera intrinsics, wheel odometry calibration, IMU setup, and multi-sensor extrinsics.

## How This Part of the Site Works

- Notes are short wayfinding pages.
- They are meant to reduce clicks from problem to likely answer.
- They also surface nearby learning opportunities, not just the narrow fix.