# Contributing

This site is intended to be a living robotics knowledge base, not a finished book.
The goal is to keep adding short, technically useful articles that help people solve an immediate problem and then discover the next concepts they should understand.

The proposed contribution flow is sensible: copy the article template into your preferred editor, fill it in carefully, and submit the result as a pull request.
That keeps contribution lightweight while still making the content easy to review and rewrite for consistency when needed.

## Contribution Workflow

1. Start from the article template in the repository root: `ARTICLE_TEMPLATE.md`.
2. Pick a public source that is worth summarizing.
3. Create a new article in the most appropriate folder under `articles/`.
4. Fill in the frontmatter completely: title, summary, source provenance, tags, and related links.
5. Write the article in the site style: concise, practical, and oriented around what helps a robot builder make progress.
6. If the source family is new, add a note in `sources/` describing the source and how it is being used.
7. Submit a pull request.

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