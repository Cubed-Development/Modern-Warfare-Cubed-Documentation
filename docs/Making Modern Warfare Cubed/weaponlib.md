---
pagination_next: null
pagination_prev: null
description: Documentation on WeaponLib
sidebar_position: 1
---

# Weaponlib

:::warning

The Modern Warfare Cubed documentation is under construction.

Documenting things takes time, like **a lot** of time, so please be patient.

:::

## Tale of two Sources
When VMW was being developed, the source code was split between two GitHub repositories:

* [modern-warfare], Aka Modern Warfare, the source code for the "frontend" of content you see when you play VMW. Holds the models, textures, and other content specific to VMW
* [weapon-lib], Aka: Modern Warfare Weapon Library, the source code for the "backend" of VMW. Provides the builders and rendering system. 

## The Merger
MWC elected to merge this code together, as working with two sources was difficult. This led us to some other issues:  

* Workarounds that are no longer needed
  * MWC and weaponlib can talk directly
* weaponlib is very disorganized 
  * Being the base of VMW and Contagion, weaponlib was abandoned in a very disorganized and confusing state.

## The Phase-out
MWC will be slowing phasing out everything under the `weaponlib` folder, moving and replacing it. Content that would only be specific an addon will be completely removed, and brought to that addon. (Ex: Props, Vehicles, etc)


[modern-warfare]: https://github.com/vic4games/modern-warfare
[weapon-lib]:https://github.com/vic4games/weaponlib