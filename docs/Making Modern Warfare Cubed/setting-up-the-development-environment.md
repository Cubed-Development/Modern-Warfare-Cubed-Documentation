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

Direct contribution can be challenging, but it's the most impactful way to contribute if done correctly.

> The shortest path to a solution isn't creating an issue, it's solving it yourself.

*This guide assumes that you have [IntelliJ Idea] & [GitHub Desktop] installed. If you don't, please refer to the official guides for [IntelliJ Idea setup] and [GitHub Desktop setup].*

### Cloning the repository

Visit the [main GitHub page of this repository], click the green 'Code' button to open a small popup. In this popup, select `Open with GitHub Desktop`.

Follow the instructions provided by [GitHub Desktop] and wait for the repository to be cloned.

### Opening in IntelliJ IDEA

Launch IntelliJ Idea, select `Open`, navigate to the repository you've just cloned. Select the `build.gradle` file and click `OK`. When prompted, click `Open as Project`. Wait for IntelliJ Idea to import the project.

### The setup

Open the Gradle panel on the right side of IntelliJ IDEA, navigate to `Tasks` -> `modded minecraft` and double-click `setupDecompWorkspace`. This task sets up your workspace with the necessary decompiled sources and allows you to start modifying the code.

Once `setupDecompWorkspace` finishes, reload Gradle. Then, double-click `runClient` to start the client, or `runServer` to start the server.

---

## Making changes

**Before making any changes, create a new branch, please make sure that every change in this branch is coherent and is related together** This will help you keep your changes separate from the main codebase and make it easier to collaborate with other contributors. To create a new branch, click on the branch selector in the top-left corner of GitHub Desktop, then click "New branch" and give your branch a descriptive name.

Make your changes in IntelliJ IDEA. When you're done, save your changes and commit them to your branch in GitHub Desktop. Be sure to write a clear and descriptive commit message that explains the changes you made.

---

## Testing your changes

Before submitting your changes, ensure that they function as expected and do not break any existing functionality. Describe any testing procedures you performed in the pull request description.

## Creating a pull request

When you're ready to share your changes with the project, create a pull request. To do this, go to the [main GitHub page of this repository] and click the "Pull requests" tab. Then click the green "New pull request" button.

Select the branch that contains your changes and the branch you want to merge your changes into, typically the main branch of the repository.

Write a clear and descriptive title for your pull request. Then just fill the categories of the templates.

Review your changes and confirm everything looks as expected. Then click the green "Create pull request" button.

Your pull request will then undergo a review process. Other contributors may provide feedback, and you may need to make changes based on their comments. Once your pull request is approved, your changes will be merged into the main codebase.

---

## Conclusion
Always communicate clearly with other contributors and adhere to the project's coding standards and guidelines. Good luck with your contributions to Modern Warfare Cubed!

[Ragnarök Code of Conduct]: https://gist.github.com/Desoroxxx/207333fdeca9d2bae7485f774bfa7457
[Ragnarök Versioning Convention]: https://gist.github.com/Desoroxxx/5d4a45785ce19a6653ba99f72325c703
[Keep a Changelog]: https://keepachangelog.com/en/1.0.0/

[GitHub Desktop]: https://desktop.github.com/
[IntelliJ Idea]: https://www.jetbrains.com/idea/
[IntelliJ Idea setup]: https://www.jetbrains.com/help/idea/installation-guide.html
[GitHub Desktop setup]: https://docs.github.com/en/desktop/installing-and-configuring-github-desktop