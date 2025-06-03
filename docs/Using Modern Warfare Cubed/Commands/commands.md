---
pagination_next: null
pagination_prev: null
description: Guide on debugging Modern Warfare Cubed
keywords: 
  - MWC
  - Modern Warfare Cubed
  - Command
---

# Commands

## The MWC Command
The Main Command for MWC, "/mwc"

### Usage
* `/mwc show recipe`
  * Show the recipes for a held weapon
* `/mwc show attachments [page]`
  * Show all compatible attachments for a held weapon 
* `/mwc nosway`
  * Toggles weapon sway for a held weapon

## The Balancepack Command
The Command for working with Balancepacks, "/balancepack"

* `/balancepack info`
  * Displays information about the currently loaded balance pack.
* `/balancepack list`
  * Lists all available balance packs in the local directory.
* `/balancepack load <name>`
  * Loads the specified balance pack by file name.
* `/balancepack unload`
  * Unloads the currently loaded balance pack.
* `/balancepack generate`
  * Generates the default balance pack file (`default_pack.json`).
* `/balancepack download pastebin  <pastebin code>`
  * Download from Pastebin by code (the command will add the raw URL automatically):
* `/balancepack download raw <url>`
  * Download from a direct "raw" URL:
