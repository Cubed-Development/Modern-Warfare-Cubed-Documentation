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

## Cloning the repository

Visit [MWCs GitHub repository], click the green 'Code' button to open a small popup. In this popup, select `Open with GitHub Desktop`.

Follow the instructions provided by [GitHub Desktop] and wait for the repository to be cloned.

## Opening in IntelliJ IDEA

Launch IntelliJ Idea, select `Open`, navigate to the repository you've just cloned. Select the `build.gradle` file and click `OK`. When prompted, click `Open as Project`. Wait for IntelliJ Idea to import the project.

### The setup

Open the Gradle panel on the right side of IntelliJ IDEA, navigate to `Tasks` -> `modded minecraft` and double-click `setupDecompWorkspace`. This task sets up your workspace with the necessary decompiled sources and allows you to start modifying the code.

Once `setupDecompWorkspace` finishes, reload Gradle. Then, double-click `runClient` to start the client, or `runServer` to start the server.

[GitHub Desktop]: https://desktop.github.com/
[MWCs GitHub repository]: https://github.com/Cubed-Development/Modern-Warfare-Cubed
