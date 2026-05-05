# Project Guidelines

## Mission

This repository is a Git-backed canonical robotics knowledge base intended to support robot builders from strong beginners through senior ROS 2 practitioners.

The main job in this repo is to turn useful source material into short, curated Markdown articles that:

- point readers at the original source
- summarize the technical value of that source
- connect the topic to nearby robotics problems through tags and related links

Read [README.md](README.md), [SPEC.md](SPEC.md), [TODO.md](TODO.md), and [ARTICLE_TEMPLATE.md](ARTICLE_TEMPLATE.md) before making substantial changes.

## Working Rules

- Keep the repo Markdown-first and Git-friendly.
- Preserve the article frontmatter schema: `title`, `summary`, `source_repo`, `source_path`, `source_url`, `tags`, `related`.
- Prefer paraphrase over quotation. Do not copy large blocks of source text into articles.
- For private or semi-private sources such as mailing lists, email archives, Discord, Facebook groups, or private docs, default to summarize-only unless explicit reuse permission is documented.
- Keep attribution and provenance explicit.
- Treat `generated/` as generated output. Regenerate it instead of editing it by hand.

## Content Standards

- Write for technically capable readers who may be new to a specific robotics subdomain.
- Optimize for practical value: what the source helps the reader understand, configure, debug, or avoid.
- Keep article tone concise and technical rather than promotional.
- Prefer controlled tags over free-form tag sprawl. Reuse existing tags when they fit.
- Add or update `related` links when creating new articles.

## Repo Structure

- `articles/` contains public-facing knowledge pages.
- `sources/` contains source provenance notes and editorial context.
- `scripts/` contains lightweight repo tooling.
- `generated/` contains machine-generated artifacts.

## Workflow

When adding or revising articles:

1. Confirm the source is appropriate for public summarization.
2. Add or update the article using [ARTICLE_TEMPLATE.md](ARTICLE_TEMPLATE.md).
3. Add or update the relevant note in `sources/` if a new source family is introduced.
4. Regenerate the graph with `python3 scripts/build_topic_graph.py`.
5. Keep changes small and reviewable.

## Near-Term Direction

Follow [SPEC.md](SPEC.md) for the current product shape and [TODO.md](TODO.md) for the incremental roadmap, including future evaluation of Quartz and related publishing options.