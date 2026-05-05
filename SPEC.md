# Knowledge Base Spec

## Purpose

Maintain a canonical robotics knowledge base that can be linked from hbrobotics.org and that helps readers find practical answers, design guidance, and debugging direction across a wide range of robotics topics.

The repo is the canonical source of truth. The published site is already layered on top of it and should continue to be treated as the public delivery surface for the same content model.

## Target Audience

- upper-end beginner programmers building robots
- intermediate ROS 2 users expanding into navigation, sensing, hardware integration, and debugging
- senior engineers who still want curated references, practical lessons, and links to strong source material

## Product Shape

The knowledge base should primarily consist of curated Markdown articles that summarize and link to stronger original sources.

Each article should answer one or more of these questions:

- What is this topic and why does it matter?
- What are the most important technical takeaways?
- What common mistakes or failure modes should the reader know?
- When should the reader go to the original source?
- What nearby topics are related?

## Core Content Types

### 1. Curated knowledge articles

Short public-facing pages derived from source material.

### 2. Source notes

Internal provenance pages describing source families and how they are being used editorially.

### 3. Generated graph artifacts

Machine-generated files derived from tags and related-article links.

## Source Policy

### Public sources

Good candidates:

- public GitHub repos
- public docs
- blog posts
- public mailing lists
- public forum threads
- public videos or transcripts where reuse is lawful and appropriate

### Private or semi-private sources

Use cautiously:

- email archives
- Google Groups content with restricted access
- Discord
- Facebook groups
- Slack communities

Default rule: summarize technical lessons, preserve attribution internally, and avoid publishing long verbatim excerpts unless explicit permission is documented.

## Information Architecture

The repo should stay simple and legible in raw Git form.

Current structure:

- `articles/foundations/`
- `articles/navigation/`
- `articles/hardware/`
- `articles/software/`
- `articles/devops/`

This may later expand into more domains such as perception, controls, simulation, manufacturing, debugging, and operations.

## Metadata Model

Each article should contain frontmatter fields:

- `title`
- `summary`
- `source_repo`
- `source_path`
- `source_url`
- `tags`
- `related`

The current graph builder depends on `tags` and `related`.

## Quality Bar For Articles

An article is acceptable when it:

- clearly identifies the source
- states why the topic matters
- extracts useful technical lessons rather than copying source text
- gives readers a practical mental model, checklist, or failure-mode view
- links to adjacent topics where appropriate

## Non-Goals For Now

- full original tutorials for every topic
- massive ingestion of unreviewed scraped material
- sophisticated NLP-based knowledge extraction
- exposing private-source material without a clear review and permission policy

## Current Publishing Stack

### Canonical Public Site

- MkDocs Material on GitHub Pages is the current canonical publishing path.
- The repo stays Markdown-first so GitHub, editors, AI tools, and the published site all share the same source material.
- `site_url` and generated sitemap support search-engine discovery.
- `robots.txt` and `llms.txt` at the site root support crawler and assistant discovery.

### Discovery And Reference Goals

- The site should be easily findable when users search for practical robotics and ROS 2 problem-solving terms.
- GitHub should present the repo as an actively maintained canonical reference, not a side experiment.
- The public site should reward deep linking into specific problem pages, not only home-page visits.
- The content should remain highly linkable because individual pages solve narrow, real robot problems.

## Future Publishing Evaluation

### Quartz Or Similar Digital Garden

Quartz remains worth evaluating later for stronger backlink and graph-native browsing, but it is not the current publishing platform.

## Success Criteria For The Canonical Knowledge Base

The knowledge base is successful if it demonstrates that:

- source material can be turned into useful short articles quickly
- Git-based review remains practical
- the tagging and related-link structure is useful enough to navigate
- the current public site remains discoverable, maintainable, and worth linking to as a robotics resource