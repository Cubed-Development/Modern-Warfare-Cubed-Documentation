---
pagination_next: null
pagination_prev: null
description: List of common issues with Modern Warfare Cubed
keywords: 
  - Crash
  - Issue
  - Bug
  - Debug
sidebar_class_name: debug
sidebar_position: 3
---

# Common Issues
Here is where you can find all commonly reported issues that we know you're probably experiencing.

## White Screen 
If your screen turns white when you aim, join a game, or basically do anything at all. Existing happens to be a reason, try one of the following solutions (try doing them in this order):
* Disable `Fast Render` in your OptiFine settings.
* Ensure that all shaders are disabled, this includes Internal OptiFine shaders.
  * If you are using OptiFine for its shaders, make sure to disable the ones MWC adds in `mwc.cfg`
* Delete .minecraft/optionsof.txt, and run the game again. 
* Consider just removing OptiFine

## Black Screen
Commonly happens on the newer M1 Mac's, due to Apple gradually phasing out OpenGL in favor of Metal, its own graphics API.
Disable all shaders MWC adds in `mwc.cfg`, there is unfortunately nothing we can do to fix this.

## Unable to Reload 
Minecraft (And by extension Forge's) keybinding system sucks. If a key is set to do more than one thing, nothing will happen when it is pressed. 

You can fix this by:
* Changing/unbinding all keys bound to `R`, or bind Reload to another (unused) key.
  * JEI/HEI is special, you can leave it bound to `R` and it will still work
* Install [NonConflictKeys](https://www.curseforge.com/minecraft/mc-mods/nonconflictkeys/files/4547892), this will allow all keybindings with the same key to be activated when pressed.
* Use [CleanroomLoader](https://github.com/CleanroomMC/Cleanroom). Fork of Forge, it contains a patch implementation of NonConflictKeys.

### Reloading Magazines 
Some people have issues reloading magazines. Make sure you followed the steps above and have the correct ammo for the mag, then hold the mag in your inventory and press Reload 

## Crash on Startup
Make sure you have [MixinBooter](https://www.curseforge.com/minecraft/mc-mods/mixin-booter/files) and 
[RedCore](https://www.curseforge.com/minecraft/mc-mods/red-core/files) installed.

## Does MWC have an official server?
As of right now no, but you can join our discord and check out the `#partner-servers` channel where we link servers running MWC.

