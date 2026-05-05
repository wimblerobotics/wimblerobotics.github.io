---
title: "Behavior Tree Ticks, Status, and Control Flow"
summary: "A practical explanation of how behavior trees actually execute so ticks, node states, and control-flow semantics stop feeling like decorative vocabulary."
source_repo: "wimblerobotics/Robotics_Book"
source_path: "book/chapters/brief_intro_to_bt.md"
source_url: "https://github.com/wimblerobotics/Robotics_Book/blob/main/book/chapters/brief_intro_to_bt.md"
tags: ["ros2", "behavior-trees", "bt", "autonomy", "foundations"]
related: ["articles/navigation/behavior-trees-for-nav2-and-robot-autonomy.md", "articles/navigation/behavior-tree-control-nodes.md", "articles/navigation/behavior-tree-decorator-nodes.md"]
---

# Behavior Tree Ticks, Status, and Control Flow

Source: [Robotics_Book behavior-tree introduction chapter](https://github.com/wimblerobotics/Robotics_Book/blob/main/book/chapters/brief_intro_to_bt.md)

## Why This Matters

Behavior trees get easier to debug once you stop treating them as static XML and start treating them as a repeated tick-and-response loop. Most confusion about Nav2 trees comes from not understanding how `RUNNING`, `SUCCESS`, and `FAILURE` propagate through the tree over time.

## Distilled Takeaways

- A behavior tree runs by repeatedly ticking the root node, not by executing the XML once.
- Each node should respond quickly with a status, even when the real-world action it represents takes longer.
- Control and decorator nodes matter because they decide how child status values shape the next tick.
- Leaf-node behavior only makes sense when you understand the control flow around it.

## Practical Value

- Read BT logs as state transitions, not just as printed messages.
- Treat `RUNNING` as the normal representation of ongoing work, not as an error or half-failure.
- Debug surprising tree behavior by tracing which node keeps getting ticked and why.
- Use this mental model before modifying retry, fallback, or recovery structure in Nav2.

## Corroborating References

- [BehaviorTree.CPP introduction](https://www.behaviortree.dev/docs/intro/)
- [Nav2 behavior tree docs](https://docs.nav2.org/behavior_trees/index.html)

## When to Read the Original Source

Go to the original chapter when you want a slower walkthrough of BT vocabulary, a concrete tick-by-tick example, and the intuition for why fast status returns are central to responsive robot behavior.