# Demo: URL and Section Structure

This page compares the current public shape with a more intentionally curated alternative.
It is not a migration plan. It is a quick way to see whether the current paths feel good enough or whether you want a cleanup pass.

## Current Public Shape

Examples from the live site:

- `/navigation/nav2-architecture-and-tuning-guide/`
- `/navigation/nav2-controller-selection-guide/`
- `/navigation/rviz-goals-bt-navigator-and-nav2-flow/`
- `/foundations/urdf-as-a-frame-translation-system/`
- `/devops/simulation-testing-and-deployment-for-ros2/`

What this gives you:

- low migration cost
- article files map directly to public URLs
- simple editorial workflow

What it costs:

- some slugs are long and book-title-like
- some section names are broad internal buckets rather than the cleanest public IA
- readers do not always get an obvious sense of subsection structure

## More Pleasant Docs-Site Structure

Possible public reshaping:

- `/navigation/nav2/`
- `/navigation/controllers/`
- `/navigation/planners/`
- `/navigation/recoveries/`
- `/robot-modeling/urdf-frames/`
- `/robot-modeling/urdf-structure/`
- `/operations/simulation/`
- `/operations/workspaces/`

Possible section reshaping:

- Core ROS 2
- Robot Modeling and Frames
- Navigation and Autonomy
- Sensors and Perception
- Robot Hardware
- Build, Simulate, and Operate

What this gives you:

- cleaner public URLs
- stronger public-facing information architecture
- easier section landing pages and teaching paths

What it costs:

- path migration work
- nav restructuring
- possible redirects or broken old links unless handled carefully
- a need to decide whether file layout should also change or just public slugs

## More Pleasant Digital-Garden Structure

If the site leaned garden-first, you might choose flatter note-like slugs instead:

- `/notes/nav2-architecture/`
- `/notes/controller-choice/`
- `/notes/urdf-frames/`
- `/notes/localization-recovery/`
- `/notes/gazebo-physics/`

What this gives you:

- stronger sense of a linked note garden
- less pressure to force every article into a strict section tree
- easier acceptance of cross-disciplinary notes

What it costs:

- weaker section identity
- less obvious browse-by-discipline navigation
- more reliance on backlinks, related links, and search quality

## The Real Decision

If you like the current site but want it cleaner, the docs-site option is the natural refinement.

If you want readers to arrive anywhere and roam across adjacent ideas, the digital-garden option is the stronger fit.

If you want a compromise, keep the current docs-site skeleton and add more backlink-style discovery inside pages and section hubs.