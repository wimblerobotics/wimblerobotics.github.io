# Source Note: slgrobotics

- Source profile: https://github.com/slgrobotics
- Strong public repos inspected for this knowledge base:
  - `robots_bringup`
  - `articubot_one`
  - `diffdrive_arduino`
  - `Esp32_RTK_BaseStation`
- Repository theme: practical ROS 2 Jazzy robot bringup notes, multi-robot sample code, diff-drive hardware integration, and outdoor GPS/RTK operating patterns
- Editorial use in this knowledge base: mine the repos for field-tested setup assumptions, hardware/software boundary patterns, and outdoor-navigation operational lessons that complement official ROS and Nav2 docs

## Articles Derived Here

- `articles/devops/jazzy-desktop-and-sbc-setup-for-robots.md`
- `articles/navigation/gps-rtk-and-outdoor-navigation-in-ros2.md`
- `articles/hardware/diff-drive-base-control-with-ros2-control-and-arduino.md`
- `articles/hardware/rtk-base-stations-for-outdoor-robots.md`

## Notes

This source family is most useful when the site needs concrete examples of how a real hobby-to-serious robot stack is organized across:

- Ubuntu 24.04 desktop and Raspberry Pi roles
- Gazebo plus real-hardware bringup
- GPS, RTK, Wi-Fi, and outdoor operations
- diff-drive base control split across ROS 2 and microcontrollers

The strongest editorial value is not polished API documentation. It is the operational detail about what a working robot stack actually has to account for once sensors, networking, SBCs, and field use are involved.