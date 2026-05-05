---
title: "Behavior Tree Plugin Walkthrough"
summary: "A concrete walkthrough for turning a simple C++ class into a loadable BehaviorTree.CPP plugin, including ports, registration, and build-system wiring."
source_repo: "wimblerobotics/Robotics_Book"
source_path: "book/chapters/creating_a_custom_behavior.md and custom_behaviors/src/blink_light.cpp"
source_url: "https://github.com/wimblerobotics/Robotics_Book/blob/main/book/chapters/creating_a_custom_behavior.md"
tags: ["ros2", "nav2", "behavior-trees", "plugins", "cpp", "bt"]
related: ["articles/navigation/custom-bt-action-nodes-in-cpp.md", "articles/navigation/custom-nav2-bt-plugins-and-configuration.md", "articles/navigation/behavior-tree-xml-fundamentals.md", "articles/foundations/behavior-tree-ticks-status-and-control-flow.md"]
---

# Behavior Tree Plugin Walkthrough

Source: [Robotics_Book custom behavior chapter](https://github.com/wimblerobotics/Robotics_Book/blob/main/book/chapters/creating_a_custom_behavior.md)

## Why This Matters

It is easy to talk abstractly about custom behavior-tree nodes and still leave readers unable to build one. The missing middle is usually not BT theory. It is the concrete glue between a C++ class, the port contract, the registration macro, the shared library, and the XML node name that Nav2 or BehaviorTree.CPP actually loads.

## Distilled Takeaways

- A custom BT plugin starts as an ordinary node class with a clear tick contract.
- Input ports are not decoration; they are the node's interface to the XML tree.
- `BT_REGISTER_NODES` is the bridge that makes the class loadable by the tree factory.
- The build target must be a shared library with the right dependencies and plugin export definitions.
- Simple synchronous examples are useful because they isolate plugin mechanics before adding action servers or long-running behavior.

## Practical Value

- Start with a minimal synchronous node that proves ports, registration, and XML wiring all work.
- Keep the node behavior narrow so you can distinguish plugin-loading problems from autonomy-design problems.
- Treat the XML tag name, provided ports, and registered type name as one contract that must stay aligned.
- Use a small example like `BlinkLight` before moving on to project-specific behaviors that talk to ROS actions or hardware.

## Corroborating References

- [BehaviorTree.CPP docs](https://www.behaviortree.dev/docs/intro/)
- [Nav2 behavior tree docs](https://docs.nav2.org/behavior_trees/index.html)
- [Nav2 plugin tutorial material](https://docs.nav2.org/plugin_tutorials/docs/writing_new_bt_plugin.html)

## When to Read the Original Source

Go to the original chapter when you want the full `BlinkLight` example, the step-by-step `CMakeLists.txt` and `package.xml` wiring, and the most concrete explanation in this repo of how a C++ behavior-tree plugin becomes loadable from XML.