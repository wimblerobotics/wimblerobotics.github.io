# Knowledge Base Spec

## Purpose

Create a robotics knowledge base that can be linked from hbrobotics.org and that helps readers find practical answers, design guidance, and debugging direction across a wide range of robotics topics.

The repo is the canonical source of truth. A published site may later be layered on top of it.

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

## Publishing Options To Evaluate

### Option A: GitHub-only for now

Pros:

- lowest complexity
- easy PR workflow
- no site-generation decisions yet

Cons:

- weak browse experience for nontechnical readers
- limited graph and backlink UX

### Option B: MkDocs Material

Pros:

- strong documentation UX
- straightforward navigation and search
- easy GitHub Pages deployment

Cons:

- less native graph-oriented browsing
- more docs-site than knowledge-garden feel

### Option C: Quartz or similar digital garden

Pros:

- backlink and graph-friendly
- closer to Obsidian-style exploration
- good fit for cross-linked notes

Cons:

- may require more opinionated content modeling
- PR and docs-site conventions may need more adaptation

## Success Criteria For This Experiment

The experiment is successful if it demonstrates that:

- source material can be turned into useful short articles quickly
- Git-based review remains practical
- the tagging and related-link structure is useful enough to navigate
- a future site layer can be added without rewriting the content model