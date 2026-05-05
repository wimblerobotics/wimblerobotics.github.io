---
title: "ROS 2 Multi-Machine Networking and Discovery"
summary: "How to reason about ROS 2 across more than one computer, including DDS domain boundaries, discovery interference, and the practical network assumptions real robots keep violating."
source_repo: "ros2/ros2_documentation; slgrobotics/robots_bringup"
source_path: "Concepts/Intermediate/About-Domain-ID.rst; robots_bringup README.md and Docs/ROS-Jazzy/README-Husarnet.md"
source_url: "https://docs.ros.org/en/jazzy/Concepts/Intermediate/About-Domain-ID.html"
tags: ["ros2", "dds", "networking", "multi-machine", "devops", "debugging"]
related: ["articles/devops/jazzy-desktop-and-sbc-setup-for-robots.md", "articles/devops/systemd-autostart-for-robots.md", "articles/navigation/gps-rtk-and-outdoor-navigation-in-ros2.md", "articles/software/logging-and-diagnostics-in-ros2.md"]
---

# ROS 2 Multi-Machine Networking and Discovery

Source: [ROS 2 Domain ID docs](https://docs.ros.org/en/jazzy/Concepts/Intermediate/About-Domain-ID.html) and [slgrobotics robots_bringup](https://github.com/slgrobotics/robots_bringup)

## Why This Matters

ROS 2 often looks simple on one machine and mysterious on two. The failure is rarely magical. It usually comes from discovery scope, DDS domain boundaries, Wi-Fi quality, VPN assumptions, or the fact that the robot and the workstation were never treated as one distributed system.

## Distilled Takeaways

- `ROS_DOMAIN_ID` is the first discovery boundary to check when multiple ROS 2 systems share a physical network.
- Domain IDs isolate groups of machines, but they also map onto concrete UDP port ranges, so the choice is not arbitrary at scale.
- Multi-machine robot stacks depend on network quality, not just package correctness.
- Wi-Fi benchmarking, VPN setup, and remote access discipline belong in robot bringup, especially for desktop-plus-SBC development patterns.
- A robot that works locally but fails distributed usually needs network reasoning before application-level debugging.

## Practical Value

- Treat the workstation, SBC, and field network as one system with explicit assumptions.
- Set and document domain IDs intentionally so neighboring teams or robots do not cross-discover.
- Check Wi-Fi, VPN, SSH, and discovery boundaries before blaming Nav2, TF, or sensors.
- Use this page as the first stop when one machine sees the robot and another does not.

## Corroborating References

- [ROS 2 Domain ID concepts](https://docs.ros.org/en/jazzy/Concepts/Intermediate/About-Domain-ID.html)
- [ROS 2 middleware concepts](https://docs.ros.org/en/jazzy/Concepts/Intermediate/About-Different-Middleware-Vendors.html)
- [slgrobotics robots_bringup](https://github.com/slgrobotics/robots_bringup)

## When to Read the Original Source

Go to the ROS 2 docs when you need the concrete Domain ID constraints and port implications. Go to the `robots_bringup` repo when you want the practical operator-facing reminder that Wi-Fi testing, Husarnet or similar VPN setup, and desktop-to-Raspberry-Pi connectivity are part of bringup rather than optional cleanup.