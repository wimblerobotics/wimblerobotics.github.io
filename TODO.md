# Incremental Roadmap

## Immediate Improvements

1. Build out the full `ros2-copilot-skills` import as a hub-plus-leaf article set instead of treating the repo as a small proof of concept.
2. Normalize tags so near-duplicates do not appear over time.
3. Add source notes for every new source family instead of only for repos.
4. Keep reviewing whether domain folders remain the right public shape as the site expands into troubleshooting, diagnostics, and design guidance.

## Current Major Content Track

1. Create high-value hub pages for the major ROS 2 learning cliffs: core ROS 2, Nav2 architecture, behavior trees, state estimation, perception pipelines, hardware integration, and deployment.
2. Add leaf articles under those hubs for the full 158 skills in `ros2-copilot-skills`.
3. Cross-link every new article to at least two nearby topics so readers can move from immediate problem-solving into adjacent concepts.
4. Verify guidance against ROS 2 Jazzy and authoritative project docs as content is added.

## Next AI Session Suggestions

1. Continue the `ros2-copilot-skills` pass with section batches rather than one-off articles.
2. Expand `scripts/build_topic_graph.py` so it also reports orphaned articles with no inbound or outbound `related` links.
3. Create a small controlled-tag glossary so future articles stay consistent.
4. Add section landing pages or generated indexes once the leaf-article count is large enough to justify them.

## Site Exploration Track

### MkDocs Material

1. Create a tiny proof of concept using the existing `articles/` tree.
2. Evaluate navigation, search, tag browsing, and GitHub Pages deployment effort.
3. Decide whether article frontmatter can drive section indexes automatically.
4. Check whether backlink-like related-topic pages are good enough without a graph-first UI.

### Quartz or Similar Digital Garden

1. Test whether the current Markdown and frontmatter layout maps cleanly into Quartz.
2. Evaluate backlink visibility, graph browsing, and note discovery.
3. Decide whether the repo wants a digital-garden feel or a more traditional docs-site feel.
4. Check how much restructuring would be needed to make article URLs and sections pleasant.

### Obsidian Workflow

1. Open the repo as an Obsidian vault.
2. Check whether tags and related links are enough to make exploration useful.
3. Decide whether maintainers should use Obsidian for editorial work while keeping Git as the canonical store.

## Source Expansion Track

1. Identify more public GitHub repos, blog posts, and robotics writeups that are strong candidates for summarization.
2. Define a repeatable intake process for email archives and other private-source material.
3. Add explicit provenance and permission tracking if email-derived content becomes a real workstream.

## Backlog Beyond the Current 158 Skills

1. ros2_control for drivetrain, arm, and hardware-interface design patterns in Jazzy.
2. DDS discovery, multicast, and multi-machine debugging for real robot networks.
3. Foxglove and RViz role separation for telemetry, debugging, and operator workflows.
4. Diagnostics aggregation, health dashboards, and failure triage patterns.
5. Calibration workflows for cameras, IMUs, wheel radii, and multi-sensor extrinsics.
6. Timestamp discipline, clock drift, and message synchronization strategies for robots with multiple computers or MCUs.
7. ros2_tracing and deeper performance instrumentation for callback latency and executor contention.
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
4. Add a contributor guide once the repo stops being purely experimental.