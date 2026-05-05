# Contributing

The canonical contribution guide for this repository lives at [articles/contributing.md](articles/contributing.md).

Use that guide for:

- article workflow
- source and provenance expectations
- tag reuse guidance
- review standards

Quick start:

1. Copy [ARTICLE_TEMPLATE.md](ARTICLE_TEMPLATE.md).
2. Add or update an article under [articles/](articles).
3. Add or update a provenance note under [sources/](sources) if needed.
4. Regenerate the graph with `python3 scripts/build_topic_graph.py --fail-on-unresolved-related`.
5. Build the site with `python3 -m mkdocs build`.