# Remaining Roadmap

## Near-Term Work

1. Continue the `Robotics_Book` pass from the strongest remaining source material that is not already covered by existing articles.
2. Review the current tag vocabulary and normalize the remaining singular/plural or near-synonym cases now that `articles/tag-glossary.md` exists as the controlled reference.
3. Add a lightweight CI check that regenerates `generated/topic_graph.*` and fails if a new article introduces unresolved `related` links.

## Site Exploration Track

### Quartz or Similar Digital Garden

1. Test whether the current Markdown and frontmatter layout maps cleanly into Quartz.
2. Evaluate backlink visibility, graph browsing, and note discovery.
3. Extend the new note-style public paths beyond the initial slice if the digital-garden direction feels right in practice.
4. Decide whether to keep implementing the digital-garden feel in MkDocs or move to Quartz for stronger backlink and graph-native behavior.

### Obsidian Workflow

1. Open the repo as an Obsidian vault.
2. Check whether tags and related links are enough to make exploration useful.
3. Decide whether maintainers should use Obsidian for editorial work while keeping Git as the canonical store.

## Source Expansion Track

1. Identify more public GitHub repos, blog posts, and robotics writeups that are strong candidates for summarization.
2. Define a repeatable intake process for email archives and other private-source material.
3. Add explicit provenance and permission tracking if email-derived content becomes a real workstream.

## Backlog Beyond the Current 158 Skills

1. `ros2_control` for drivetrain, arm, and hardware-interface design patterns in Jazzy.
2. DDS discovery, multicast, and multi-machine debugging for real robot networks.
3. Foxglove and RViz role separation for telemetry, debugging, and operator workflows.
4. Diagnostics aggregation, health dashboards, and failure triage patterns.
5. Calibration workflows for cameras, IMUs, wheel radii, and multi-sensor extrinsics.
6. Timestamp discipline, clock drift, and message synchronization strategies for robots with multiple computers or MCUs.
7. `ros2_tracing` and deeper performance instrumentation for callback latency and executor contention.
8. Navigation with elevators, docking, and semantically constrained indoor environments.
9. Map lifecycle practices: field updates, versioning, annotation, and environment-change handling.
10. Human-robot interaction basics for status reporting, prompts, teleoperation handoff, and safe autonomy interruption.
11. Security and remote access basics for internet-connected ROS 2 robots.
12. Data products for external review: test reports, bag-based regressions, and reproducible issue packages.

## Structural Decisions Still Open

1. Whether to keep one article type or add separate patterns for tutorials, troubleshooting pages, and design notes.
2. Whether to keep `generated/` checked into Git or rebuild it in CI.
3. Whether tags alone are enough or whether a controlled taxonomy document should become mandatory.
4. Whether this repo should stay an experiment or become the actual canonical knowledge base.

## Stretch Ideas

1. Generate topic landing pages automatically from tags.
2. Build a script that flags weak articles missing related links, missing source fields, or overly broad tags.
3. Add article difficulty or audience metadata if that improves browsing.