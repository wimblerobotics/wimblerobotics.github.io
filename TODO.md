# Incremental Roadmap

## Immediate Improvements

1. Add 10 to 20 more articles from strong public sources to see whether the taxonomy stays coherent.
2. Normalize tags so near-duplicates do not appear over time.
3. Add source notes for every new source family instead of only for repos.
4. Decide whether article folders should remain domain-based or move toward audience-task domains such as setup, debugging, hardware, navigation, and design.

## Next AI Session Suggestions

1. Review the current six articles and tighten any that feel too generic.
2. Add at least one article from each of these topic areas: perception, controls, simulation, and diagnostics.
3. Expand `scripts/build_topic_graph.py` so it also reports orphaned articles with no inbound or outbound `related` links.
4. Create a small controlled-tag glossary so future articles stay consistent.

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