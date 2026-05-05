# Source Note: ROS 2 Systems and Operations Docs

- Source families used here:
  - `ros2/ros2_documentation`
  - `ros/diagnostics`
  - `slgrobotics/robots_bringup`
- Repository theme: official and field-tested material about ROS 2 discovery boundaries, distributed-system assumptions, and operator-visible robot health
- Editorial use in this knowledge base: create practical ops-focused pages that bridge the gap between package docs and what robot maintainers need when systems span multiple machines and failure states

## Articles Derived Here

- `articles/devops/ros2-multi-machine-networking-and-discovery.md`
- `articles/software/diagnostics-aggregation-and-health-dashboards.md`

## Notes

These sources are strongest when the site needs pages about:

- how DDS and `ROS_DOMAIN_ID` affect real deployments
- why Wi-Fi and VPN setup are part of robot bringup
- how `/diagnostics`, `diagnostic_updater`, and `diagnostic_aggregator` support operator-facing health views
- how to turn a distributed ROS 2 stack into something maintainable instead of merely functional