---
pagination_next: null
pagination_prev: null
description: Setting up the development environment for Modern Warfare Cubed
sidebar_position: 1
---

# Setting Up the Development Environment

:::warning

The Modern Warfare Cubed documentation is under construction.

Documenting things takes time, like **a lot** of time, so please be patient.

:::

*This guide assumes that you have [IntelliJ Idea] & [GitHub Desktop] installed. If you don't, please refer to the official guides for [IntelliJ Idea setup] and [GitHub Desktop setup].*

### Cloning the repository
First, you will want to visit MWC's [GitHub page](https://github.com/Cubed-Development/Modern-Warfare-Cubed). Click the green 'Code' button to open a small popup. In this popup, select `Open with GitHub Desktop`.

Follow the instructions provided by [GitHub Desktop] and wait for the repository to be cloned.

### Opening in IntelliJ IDEA

Launch IntelliJ Idea, select `Open`, navigate to the repository you've just cloned. Select the `build.gradle` file and click `OK`. When prompted, click `Open as Project`. Wait for IntelliJ Idea to import the project.

### Workspace setup

Open the Gradle panel on the right side of IntelliJ IDEA, navigate to `Tasks` -> `modded minecraft` and double-click `setupDecompWorkspace`.
This task will set up the workspace by decompiling Minecraft's source code, to allow you to start modifying the code of MWC.

Once `setupDecompWorkspace` finishes, reload Gradle. Then, double-click `runClient` to start the client, or `runServer` to start the server.

[GitHub Desktop]: https://desktop.github.com/
[IntelliJ Idea]: https://www.jetbrains.com/idea/
[IntelliJ Idea setup]: https://www.jetbrains.com/help/idea/installation-guide.html
[GitHub Desktop setup]: https://docs.github.com/en/desktop/installing-and-configuring-github-desktop
