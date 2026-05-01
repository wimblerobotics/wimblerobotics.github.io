#!/usr/bin/env python3
from __future__ import annotations

import ast
import json
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ARTICLES_DIR = ROOT / "articles"
GENERATED_DIR = ROOT / "generated"


def parse_frontmatter(path: Path) -> dict[str, object]:
    text = path.read_text(encoding="utf-8")
    if not text.startswith("---\n"):
        return {}

    parts = text.split("\n---\n", 1)
    if len(parts) != 2:
        return {}

    frontmatter = parts[0].splitlines()[1:]
    data: dict[str, object] = {}
    for raw_line in frontmatter:
        line = raw_line.strip()
        if not line or ":" not in line:
            continue
        key, value = line.split(":", 1)
        key = key.strip()
        value = value.strip()
        if not value:
            data[key] = ""
            continue
        if value.startswith("["):
            data[key] = ast.literal_eval(value)
        else:
            data[key] = value.strip('"')
    return data


def collect_articles() -> list[dict[str, object]]:
    articles: list[dict[str, object]] = []
    for path in sorted(ARTICLES_DIR.rglob("*.md")):
        frontmatter = parse_frontmatter(path)
        if not frontmatter:
            continue
        tags = list(frontmatter.get("tags", []))
        related = list(frontmatter.get("related", []))
        articles.append(
            {
                "path": str(path.relative_to(ROOT)),
                "title": frontmatter.get("title", path.stem),
                "summary": frontmatter.get("summary", ""),
                "tags": tags,
                "related": related,
            }
        )
    return articles


def build_graph(articles: list[dict[str, object]]) -> dict[str, object]:
    tag_counts: Counter[str] = Counter()
    tag_pairs: Counter[tuple[str, str]] = Counter()
    article_to_tag_edges: list[dict[str, object]] = []
    article_links: list[dict[str, object]] = []

    for article in articles:
        article_path = article["path"]
        tags = sorted(set(article["tags"]))
        for tag in tags:
            tag_counts[tag] += 1
            article_to_tag_edges.append(
                {"source": article_path, "target": tag, "kind": "article-tag"}
            )
        for index, left in enumerate(tags):
            for right in tags[index + 1 :]:
                tag_pairs[(left, right)] += 1
        for related in article["related"]:
            article_links.append(
                {"source": article_path, "target": related, "kind": "article-link"}
            )

    tag_nodes = [
        {"id": tag, "kind": "tag", "weight": count}
        for tag, count in sorted(tag_counts.items())
    ]
    article_nodes = [
        {"id": article["path"], "kind": "article", "title": article["title"]}
        for article in articles
    ]
    tag_edges = [
        {"source": left, "target": right, "kind": "tag-cooccurrence", "weight": weight}
        for (left, right), weight in sorted(tag_pairs.items())
    ]

    return {
        "nodes": article_nodes + tag_nodes,
        "edges": article_to_tag_edges + article_links + tag_edges,
        "stats": {
            "article_count": len(articles),
            "tag_count": len(tag_nodes),
            "tag_pair_count": len(tag_edges),
        },
    }


def write_markdown_report(articles: list[dict[str, object]], graph: dict[str, object]) -> None:
    tag_pair_edges = [
        edge for edge in graph["edges"] if edge["kind"] == "tag-cooccurrence"
    ]
    strongest_pairs = sorted(
        tag_pair_edges,
        key=lambda edge: (-int(edge["weight"]), edge["source"], edge["target"]),
    )[:12]

    lines = [
        "# Topic Graph Report",
        "",
        f"- Articles scanned: {graph['stats']['article_count']}",
        f"- Tags discovered: {graph['stats']['tag_count']}",
        f"- Tag co-occurrence edges: {graph['stats']['tag_pair_count']}",
        "",
        "## Strongest Tag Pairs",
        "",
    ]

    if strongest_pairs:
        for edge in strongest_pairs:
            lines.append(
                f"- `{edge['source']}` <-> `{edge['target']}`: {edge['weight']} shared article(s)"
            )
    else:
        lines.append("- No tag co-occurrence pairs found")

    lines.extend(["", "## Articles", ""])
    for article in articles:
        tags = ", ".join(article["tags"])
        lines.append(f"- `{article['path']}`: {tags}")

    (GENERATED_DIR / "topic_graph.md").write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> None:
    GENERATED_DIR.mkdir(parents=True, exist_ok=True)
    articles = collect_articles()
    graph = build_graph(articles)
    (GENERATED_DIR / "topic_graph.json").write_text(
        json.dumps(graph, indent=2) + "\n",
        encoding="utf-8",
    )
    write_markdown_report(articles, graph)
    print(f"Scanned {len(articles)} article(s). Wrote generated/topic_graph.json and generated/topic_graph.md")


if __name__ == "__main__":
    main()
