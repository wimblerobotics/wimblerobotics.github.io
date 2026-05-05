# Source Note: Nav2 Docking and Map Operations Sources

- Source families used here:
  - `ros-navigation/docs.nav2.org`
  - `nav2_map_server`
  - `SteveMacenski/slam_toolbox`
- Repository theme: operational navigation topics that start after a robot already basically works, including docking, semantic policy layers, and map maintenance over time
- Editorial use in this knowledge base: cover two backlog gaps that matter in deployed robots more than in first-time demos

## Articles Derived Here

- `articles/navigation/docking-and-semantic-navigation-in-nav2.md`
- `articles/navigation/map-lifecycle-versioning-and-field-updates.md`

## Notes

These sources are especially useful when the site needs to explain that:

- docking is a specialized autonomy workflow with its own control and perception requirements
- semantic navigation depends on map-anchored policy layers, not only obstacle geometry
- map files, masks, and pose graphs are operational assets that require lifecycle discipline