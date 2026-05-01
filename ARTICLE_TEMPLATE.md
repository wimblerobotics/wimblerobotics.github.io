# Article Template

Use this template when creating a new knowledge article.

```md
---
title: "Short, specific title"
summary: "One-sentence summary of what the article helps the reader understand or do."
source_repo: "owner/repo-or-source-family"
source_path: "path/inside/source/or-descriptive-location"
source_url: "https://example.com/or/repo/path"
tags: ["ros2", "example-topic", "hardware"]
related: ["articles/somewhere/related-article.md"]
---

# Article Title

Source: [Descriptive source label](https://example.com/or/repo/path)

## Why This Matters

One short paragraph about why this topic matters in a real robot project.

## Distilled Takeaways

- Technical takeaway 1
- Technical takeaway 2
- Technical takeaway 3
- Common pitfall or failure mode

## Practical Value

- Checklist, design guidance, debugging value, or decision criteria

## When to Read the Original Source

Explain what extra depth or examples the original source provides.
```

## Writing Guidance

- Lead with user value, not source description.
- Prefer summaries, mental models, and troubleshooting angles.
- Keep the article short enough to skim.
- Do not copy long passages from the source.
- Reuse existing tags when possible.
- Add at least one `related` link if a good connection exists.

## Good Candidate Sources

- concise technical chapters
- practical setup guides
- debugging notes
- hardware integration writeups
- navigation and perception tuning guides

## Bad Candidate Sources

- content with unclear permission for public reuse
- pages with too little technical substance to summarize
- repetitive material that does not add a new angle to the repo