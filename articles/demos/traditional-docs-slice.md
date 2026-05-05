# Demo: Traditional Docs Slice

This is a mock slice of the site if it leaned harder into a traditional docs structure.
The emphasis is on orientation, hierarchy, and a clearer recommended path.

## Section

Navigation

## Subsection

Nav2 Basics

## Page

# Nav2 Architecture and Tuning Guide

Use this page as the entry point for the Navigation section.
It gives the reader the system overview first, then sends them into narrower pages in a deliberate order.

## Recommended Reading Order

1. [Nav2 Architecture and Tuning Guide](../navigation/nav2-architecture-and-tuning-guide.md)
2. [Nav2 Servers and Data Flow](../navigation/nav2-servers-and-data-flow.md)
3. [Nav2 Costmap Architecture and Plugin Order](../navigation/nav2-costmap-architecture-and-plugin-order.md)
4. [Nav2 Planner Selection Guide](../navigation/nav2-planner-selection-guide.md)
5. [Nav2 Controller Selection Guide](../navigation/nav2-controller-selection-guide.md)
6. [Nav2 Behavior Server and Recovery Actions](../navigation/nav2-behavior-server-and-recovery-actions.md)

## Prerequisites

- [Coordinate Frames, REP 105, and Navigation](../foundations/coordinate-frames-rep-105-and-navigation.md)
- [TF2 Transforms and Lookups in Practice](../foundations/tf2-transforms-and-lookups.md)
- [Localization, State Estimation, and Frame Discipline](../navigation/localization-state-estimation-and-frame-discipline.md)

## After This Page

- If you are tuning planning quality, continue to [Nav2 Planner Selection Guide](../navigation/nav2-planner-selection-guide.md)
- If you are tuning path tracking, continue to [Nav2 Controller Selection Guide](../navigation/nav2-controller-selection-guide.md)
- If you are debugging recoveries, continue to [Nav2 Behavior Server and Recovery Actions](../navigation/nav2-behavior-server-and-recovery-actions.md)

## Why This Feels Different

This version assumes the site should behave more like a curated manual.
The reader is given a section, a place within that section, and a clearer next step.

Likely product traits:

- stronger navigation hierarchy
- more curated landing pages
- clearer prerequisites and next steps
- more stable public structure for teaching and linking

## Reader Experience

Good fit if you want:

- a documentation-site feel
- easier onboarding for newer readers
- clearer ownership of sections
- more predictable URLs and section names

Risk:

- less exploratory discovery
- harder to surface cross-cutting topics without adding more structure
- readers may stay inside one section longer than is actually ideal for robotics problem-solving