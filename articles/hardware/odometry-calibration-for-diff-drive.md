---
title: "Odometry Calibration for Differential Drive Robots"
summary: "A practical workflow for improving wheel odometry by separately calibrating effective wheel diameter and wheel separation."
source_repo: "wimblerobotics/Robotics_Book"
source_path: "book/chapters/calibrating_odom.md"
source_url: "https://github.com/wimblerobotics/Robotics_Book/blob/main/book/chapters/calibrating_odom.md"
tags: ["ros2", "odometry", "calibration", "differential-drive", "encoders", "hardware"]
related: ["articles/foundations/urdf-as-a-frame-translation-system.md", "articles/hardware/serial-protocols-between-ros2-and-microcontrollers.md"]
---

# Odometry Calibration for Differential Drive Robots

Source: [Robotics_Book odometry chapter](https://github.com/wimblerobotics/Robotics_Book/blob/main/book/chapters/calibrating_odom.md)

## Why This Matters

Wheel odometry is one of the first places new robot builders discover that the robot's reported motion and its real motion are different things. The source chapter makes the important point plainly: sensors lie, wheels slip, and software has to work through imperfect measurements.

## Distilled Takeaways

- Good odometry depends heavily on two effective measurements: wheel diameter and distance between wheels.
- Those are not purely CAD values. Tire wear, tilt, wobble, and surface conditions change the effective measurements.
- Straight-line tests mostly expose wheel-diameter error.
- Spin-in-place tests mostly expose wheel-separation error.
- Odometry parameters used by the driver do not have to be identical to the dimensions used in the URDF.

## Practical Calibration Loop

1. Mark a known start pose.
2. Record odometry before motion.
3. Move in a controlled way that isolates one parameter.
4. Record odometry after motion.
5. Measure actual motion.
6. Adjust the configured value.
7. Repeat until the results are consistently close, not just lucky once.

For wheel-diameter adjustment, the core correction is:

`correction_ratio = actual_distance / odometry_distance`

Then:

`new_wheel_diameter = current_wheel_diameter * correction_ratio`

## Operational Lessons

- Sampling rate matters. Curved motion integrated too slowly becomes wrong quickly.
- Linux scheduling jitter can degrade odometry if the computation loop is not regular enough.
- Better odometry improves mapping and navigation, even when higher-level localization will later correct drift.
- If odometry is far off, localization and navigation may fail before they get a chance to compensate.

## When to Read the Original Source

Go to the original chapter when you want the full hands-on procedure, example commands, measurement workflow, and explanation of why the effective values often differ from the robot's nominal measurements.
