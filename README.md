# HB Robotics Knowledge Base

The HB Robotics Knowledge Base is a canonical public reference for practical robotics and ROS 2 work.

Public site: https://wimblerobotics.github.io/

This repository is the canonical source for the published site. The content is intended to improve continuously through pull requests, editorial revision, and the addition of strong public source material.

This repo is organized around short, curated knowledge articles that do three things:

- point to a stronger original source
- summarize the technical value of that source
- connect the topic to nearby robotics problems through tags and related links

## Repository Role

- Canonical content store for the published site
- GitHub-friendly editorial workspace for contributors and maintainers
- Search-indexable public resource for robotics and ROS 2 problem solving
- Source-backed knowledge base rather than a generic docs dump

The exact current article count is tracked in `generated/topic_graph.md` after each regeneration.

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

For stricter validation, run:

```bash
python3 scripts/build_topic_graph.py --fail-on-unresolved-related
```

## Publishing And Discovery

The current public stack is MkDocs Material deployed to GitHub Pages.

Discovery-oriented artifacts in the repo and site include:

- explicit `site_url` for sitemap generation
- root-level GitHub contribution guidance
- `articles/robots.txt` for crawler hints
- `articles/llms.txt` for AI and assistant-oriented crawling
- generated topic-graph artifacts for current structure and article count

If search-console or webmaster verification is needed later, the required verification tokens can be added without changing the content model.

## Why This Structure

This layout balances three needs:

1. Git-friendly contribution through pull requests
2. Obsidian-friendly backlink and graph exploration
3. Public-site-friendly curated content rather than raw notes

The current site layer is MkDocs Material. Quartz remains a future evaluation path, not the active publishing platform.

## Contributing

The expected contribution model is intentionally simple:

1. Copy `ARTICLE_TEMPLATE.md` into your preferred editor.
2. Fill it in using a public source that is worth summarizing.
3. Add the new article under `articles/`.
4. Submit a pull request.

Contributors should expect editorial cleanup for consistency. The bar is usefulness, not raw volume.

For the fuller public-facing guide, see `articles/contributing.md` in the docs tree or the root `CONTRIBUTING.md`.
