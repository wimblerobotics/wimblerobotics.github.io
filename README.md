# knowledge_try1

A throwaway experiment for a robotics knowledge base that could eventually sit behind a link from hbrobotics.org.

This repo is organized around short, curated knowledge articles that do three things:

- point to a stronger original source
- summarize the technical value of that source
- connect the topic to nearby robotics problems through tags and related links

## Layout

- `articles/` contains public-facing knowledge articles
- `sources/` contains provenance notes for the repositories used to derive articles
- `scripts/` contains lightweight tooling for graph generation
- `generated/` contains graph artifacts generated from article metadata

## Content Shape

Each article uses Markdown plus frontmatter with:

- `title`
- `summary`
- `source_repo`
- `source_path`
- `source_url`
- `tags`
- `related`

That keeps the repo readable in GitHub, usable as an Obsidian vault, and scriptable for future site generation.

## Sample Content

### From Robotics_Book

- `articles/foundations/urdf-as-a-frame-translation-system.md`
- `articles/navigation/rviz-goals-bt-navigator-and-nav2-flow.md`
- `articles/hardware/odometry-calibration-for-diff-drive.md`

### From ros2-copilot-skills

- `articles/devops/colcon-workspace-discipline.md`
- `articles/software/launch-files-patterns-and-pitfalls.md`
- `articles/hardware/serial-protocols-between-ros2-and-microcontrollers.md`

## Graph Generation

Run:

```bash
python3 scripts/build_topic_graph.py
```

This scans article frontmatter and produces:

- `generated/topic_graph.json`
- `generated/topic_graph.md`

The current graph is tag-based rather than NLP-based. That keeps it deterministic and easy to curate.

## Why This Structure

This layout is trying to balance three needs:

1. Git-friendly contribution through pull requests
2. Obsidian-friendly backlink and graph exploration
3. Public-site-friendly curated content rather than raw notes

If this direction is useful, the next obvious step would be to add either MkDocs or Quartz on top of the same Markdown source tree.
