---
title: "Custom Nav2 BT Plugins and Configuration"
summary: "How custom behavior-tree plugins fit into Nav2, from the plugin library itself through XML use and bt_navigator configuration."
source_repo: "wimblerobotics/Robotics_Book"
source_path: "book/chapters/creating_a_custom_behavior.md"
source_url: "https://github.com/wimblerobotics/Robotics_Book/blob/main/book/chapters/creating_a_custom_behavior.md"
tags: ["ros2", "nav2", "behavior-trees", "bt", "plugins", "cpp"]
related: ["articles/navigation/behavior-tree-plugin-walkthrough.md", "articles/navigation/writing-custom-nav2-behavior-plugins.md", "articles/navigation/custom-bt-action-nodes-in-cpp.md", "articles/navigation/behavior-tree-xml-fundamentals.md"]
---

# Custom Nav2 BT Plugins and Configuration

Source: [Robotics_Book custom behavior chapter](https://github.com/wimblerobotics/Robotics_Book/blob/main/book/chapters/creating_a_custom_behavior.md)

## Why This Matters

Custom BT nodes are where a robot's autonomy starts to reflect its own hardware or mission logic instead of only the built-in Nav2 behaviors. The extension point is useful, but it only works cleanly when the library build, plugin registration, XML usage, and `navigation.yaml` wiring all line up.

## Distilled Takeaways

- A custom BT node is more than a C++ class. It is a plugin that must be registered, built, installed, and loaded by Nav2.
- The XML tree and `plugin_lib_names` configuration are part of the runtime contract.
- Behavior-tree extension is often simpler than adding ad hoc logic elsewhere because it keeps autonomy flow explicit.
- Plugin authoring gets easier when the distinction between synchronous BT work and long-running external work is kept clear.

## Practical Value

- Trace custom-node problems through four layers: the C++ node, plugin registration, installed shared library, and Nav2 configuration.
- Keep XML examples and `navigation.yaml` snippets together when documenting a custom plugin.
- Use custom BT plugins when the robot needs a reusable autonomy action with clear status semantics.
- Treat build-system and install rules as part of the feature, not as packaging trivia.

## Corroborating References

- [Nav2 BT plugin tutorial](https://docs.nav2.org/plugin_tutorials/docs/writing_new_bt_plugin.html)
- [BehaviorTree.CPP ROS 2 integration docs](https://www.behaviortree.dev/docs/ros2_integration/)

## When to Read the Original Source

Go to the original chapter when you want the end-to-end example showing the plugin class, `BT_REGISTER_NODES` registration, CMake and package metadata, and the specific `navigation.yaml` changes needed to load a custom node into Nav2.