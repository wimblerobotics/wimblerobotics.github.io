# Remaining Roadmap

## Site Exploration Track

### Quartz or Similar Digital Garden

1. Test whether the current Markdown and frontmatter layout maps cleanly into Quartz.
2. Evaluate backlink visibility, graph browsing, and note discovery.
3. Revisit whether Quartz is worth a migration after the MkDocs note-first experience has had more time in real use.

### Obsidian Workflow

1. Open the repo as an Obsidian vault.
2. Check whether tags and related links are enough to make exploration useful.
3. Decide whether maintainers should use Obsidian for editorial work while keeping Git as the canonical store.

## Backlog Beyond the Current 158 Skills

1. Human-robot interaction basics for status reporting, prompts, teleoperation handoff, and safe autonomy interruption.
2. Security and remote access basics for internet-connected ROS 2 robots.
3. Data products for external review: test reports, bag-based regressions, and reproducible issue packages.

## Canonical Operations Track

1. Add Google Search Console and Bing Webmaster verification once site-owner credentials are available.
2. Consider richer social preview assets and metadata overrides for high-value landing pages.
3. Periodically review topic-graph zero-inbound pages and add related-link coverage before they drift out of the problem-first flow.

## Structural Decisions Still Open

1. Whether to keep one article type or add separate patterns for tutorials, troubleshooting pages, and design notes.
2. Whether to keep `generated/` checked into Git or rebuild it in CI.
3. Whether tags alone are enough or whether a controlled taxonomy document should become mandatory.

## Stretch Ideas

1. Generate topic landing pages automatically from tags.
2. Build a script that flags weak articles missing related links, missing source fields, or overly broad tags.
3. Add article difficulty or audience metadata if that improves browsing.