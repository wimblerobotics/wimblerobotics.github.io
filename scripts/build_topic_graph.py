#!/usr/bin/env python3
from __future__ import annotations

import ast
import json
from collections import Counter
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
    article_paths = {str(article["path"]) for article in articles}
    inbound_related_counts: Counter[str] = Counter()
    outbound_related_counts: Counter[str] = Counter()
    unresolved_related_links: list[dict[str, str]] = []

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
            outbound_related_counts[str(article_path)] += 1
            if related in article_paths:
                inbound_related_counts[str(related)] += 1
            else:
                unresolved_related_links.append(
                    {"source": str(article_path), "target": str(related)}
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

    zero_inbound_articles = sorted(
        path for path in article_paths if inbound_related_counts[path] == 0
    )
    zero_outbound_articles = sorted(
        path for path in article_paths if outbound_related_counts[path] == 0
    )
    fully_orphaned_articles = sorted(
        path
        for path in article_paths
        if inbound_related_counts[path] == 0 and outbound_related_counts[path] == 0
    )

    return {
        "nodes": article_nodes + tag_nodes,
        "edges": article_to_tag_edges + article_links + tag_edges,
        "stats": {
            "article_count": len(articles),
            "tag_count": len(tag_nodes),
            "tag_pair_count": len(tag_edges),
            "article_link_count": len(article_links),
            "zero_inbound_article_count": len(zero_inbound_articles),
            "zero_outbound_article_count": len(zero_outbound_articles),
            "fully_orphaned_article_count": len(fully_orphaned_articles),
            "unresolved_related_link_count": len(unresolved_related_links),
        },
        "link_health": {
            "zero_inbound_articles": zero_inbound_articles,
            "zero_outbound_articles": zero_outbound_articles,
            "fully_orphaned_articles": fully_orphaned_articles,
            "unresolved_related_links": unresolved_related_links,
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
        f"- Related-link edges: {graph['stats']['article_link_count']}",
        f"- Articles with no inbound related links: {graph['stats']['zero_inbound_article_count']}",
        f"- Articles with no outbound related links: {graph['stats']['zero_outbound_article_count']}",
        f"- Fully orphaned articles: {graph['stats']['fully_orphaned_article_count']}",
        f"- Unresolved related links: {graph['stats']['unresolved_related_link_count']}",
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

    link_health = graph["link_health"]
    lines.extend(["", "## Related Link Health", ""])

    for heading, items in (
        ("Articles with no inbound related links", link_health["zero_inbound_articles"]),
        ("Articles with no outbound related links", link_health["zero_outbound_articles"]),
        ("Fully orphaned articles", link_health["fully_orphaned_articles"]),
    ):
        lines.append(f"### {heading}")
        lines.append("")
        if items:
            for item in items:
                lines.append(f"- `{item}`")
        else:
            lines.append("- None")
        lines.append("")

    lines.append("### Unresolved Related Links")
    lines.append("")
    if link_health["unresolved_related_links"]:
        for edge in link_health["unresolved_related_links"]:
            lines.append(f"- `{edge['source']}` -> `{edge['target']}`")
    else:
        lines.append("- None")

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
