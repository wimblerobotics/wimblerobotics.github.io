# Contributing

This site is intended to be a living robotics knowledge base, not a finished book.
The goal is to keep adding short, technically useful articles that help people solve an immediate problem and then discover the next concepts they should understand.

The proposed contribution flow is sensible: copy the article template into your preferred editor, fill it in carefully, and submit the result as a pull request.
That keeps contribution lightweight while still making the content easy to review and rewrite for consistency when needed.

Useful links:

- Published template: [Article Template](article-template.md)
- Controlled tag glossary: [Tag Glossary](tag-glossary.md)
- Site home page: [Home](index.md)
- GitHub repository: [wimblerobotics/wimblerobotics.github.io](https://github.com/wimblerobotics/wimblerobotics.github.io)
- Template file in the repo: [ARTICLE_TEMPLATE.md](https://github.com/wimblerobotics/wimblerobotics.github.io/blob/main/ARTICLE_TEMPLATE.md)

## Contribution Workflow

1. Start from the published [Article Template](article-template.md) or the repository file [ARTICLE_TEMPLATE.md](https://github.com/wimblerobotics/wimblerobotics.github.io/blob/main/ARTICLE_TEMPLATE.md).
2. Pick a public source that is worth summarizing.
3. Create a new article in the most appropriate folder under `articles/`.
4. Fill in the frontmatter completely: title, summary, source provenance, tags, and related links.
5. Reuse canonical tags from the published [Tag Glossary](tag-glossary.md) instead of inventing near-duplicates.
6. Write the article in the site style: concise, practical, and oriented around what helps a robot builder make progress.
7. If the source family is new, add a note in `sources/` describing the source and how it is being used.
8. Submit a pull request.

## Two Ways To Contribute

### Option 1: Browser-Only GitHub Flow

This is the easiest path if you do not normally work with Git locally.

1. Open the repo on GitHub: [wimblerobotics/wimblerobotics.github.io](https://github.com/wimblerobotics/wimblerobotics.github.io)
2. Fork it to your own GitHub account using the GitHub `Fork` button.
3. Open the folder where your new article belongs under `articles/`.
4. Create a new file or edit an existing file in the GitHub web editor.
5. Copy in the [Article Template](article-template.md) and fill it out.
6. Commit your change to your fork.
7. Open a pull request back to `wimblerobotics/wimblerobotics.github.io`.

### Option 2: Local Clone Flow

Use this if you prefer working in VS Code, a text editor, or a local notes workflow.

1. Fork the repo on GitHub.
2. Clone your fork locally:

```bash
git clone https://github.com/YOUR-USERNAME/wimblerobotics.github.io.git
cd wimblerobotics.github.io
```

3. Open the repo in your editor.
4. Copy the template from [Article Template](article-template.md) or from `ARTICLE_TEMPLATE.md`.
5. Add your new article under the correct folder in `articles/`.
6. Save, commit, and push:

```bash
git add .
git commit -m "Add article on TOPIC"
git push
```

7. Open a pull request from your fork on GitHub.

If you are not sure which folder to use, start with the closest match and mention the uncertainty in the pull request.

## What Files Contributors Usually Need

- The article template: [Article Template](article-template.md)
- The controlled tag glossary: [Tag Glossary](tag-glossary.md)
- The contribution guide: [Contributing](contributing.md)
- Existing articles to imitate for tone and structure: start from [Home](index.md)

If you are cloning the repo, the corresponding paths are:

- `ARTICLE_TEMPLATE.md`
- `articles/tag-glossary.md`
- `articles/contributing.md`
- `articles/`
- `sources/`

## What Makes A Good Article

- It solves a real robotics problem or explains a real robotics decision.
- It gives the reader a better mental model, not just a pile of commands.
- It helps the reader debug, configure, compare, or avoid a failure mode.
- It is explicit about where the information came from.
- It links to related articles so the reader can keep learning after fixing the immediate issue.

## What To Leave Out

- Long copied passages from the original source.
- Marketing language, hype, or generic praise.
- Exhaustive API listings that do not help someone make a practical decision.
- Unsourced claims, especially around tuning advice or version-sensitive behavior.
- Tag sprawl. Use existing tags where possible.

## Writing Advice

- Lead with user value. Start from why the topic matters on a real robot.
- Prefer distilled takeaways over narrative summary.
- Mention common mistakes and failure modes early.
- Keep the article skimmable. If a section is turning into a manual, it is probably too long.
- Link out when the original source is where the reader should go for full examples, reference tables, or implementation details.
- If something is Jazzy-specific, say so.
- Small practical details matter. Part numbers, adhesives, fastener habits, wiring cautions, mounting tricks, and vendor quirks can be very useful when they affect whether a robot works reliably.
- Leave out details that do not change a design, debugging path, or implementation decision.

## Short Example

This is the rough shape contributors should follow:

```md
---
title: "Clear, specific title"
summary: "One sentence on what the article helps the reader understand or do."
source_repo: "owner/repo"
source_path: "path/inside/source"
source_url: "https://example.com/source"
tags: ["ros2", "example-topic"]
related: ["articles/somewhere/related-article.md"]
---

# Clear, specific title

Source: [Original source label](https://example.com/source)

## Why This Matters

One short paragraph on why this topic matters in a real robot project.

## Distilled Takeaways

- Practical takeaway 1
- Practical takeaway 2
- Common pitfall

## Practical Value

- Checklist, comparison point, or debugging guidance

## When to Read the Original Source

Explain what extra depth the original source provides.
```

## Review Standard

Pull requests should expect editing for consistency.
That is normal for this site.
The main quality bar is usefulness: readers should come away with a clearer mental model, a shorter debugging path, or a better design decision.

Contributors do not need to write in exactly the final site voice on the first pass. Domain knowledge is often the hardest part to recover later, so it is better to contribute the useful technical insight and let review tighten the presentation.