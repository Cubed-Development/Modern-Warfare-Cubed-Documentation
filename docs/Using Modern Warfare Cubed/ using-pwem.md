---
pagination_next: null
pagination_prev: null
description: Documentation using PWEM Modern Warfare Cubed
keywords:
  - Modern Warfare Cubed
  - Panda's Weapon Editor
  - PWEM
sidebar_position: 2
---

# Using PWEM

Panda's Weapon Editor (Aka PWEM) is an open-source weapon editor for Modern Warfare: Cubed. It allows you to modify
existing weapons from MWC.

It will create a new folder in the `config/mwc` directory named `pwem` where all of your changes will be stored. Each
weapon will have its own `.json` file, which you can edit to your liking.

## Editable Statistics

- `damage` - The amount of damage the weapon will do.
- `fireRate` - The rate of fire for the weapon.
- `recoil` - The amount of recoil the weapon will have.
- `gravity` - The amount of gravity the bullet will have while in the air (the higher the number, the more gravity).
- `zoom` - The amount of zoom the weapon will have when aiming down sights.
- `group` - The group the weapon will be in. This is shown in the gun's tooltip.
- `pellets` - Number of pellets shot out of a shotgun.
- `ammoCapacity` - Number of bullets that a gun can store (only applicable to guns that do not use mags).
- `bulletsPerReload` - Number of bullets loaded when a player reloads.

### Shooting Configuration

- `single` - Whether the weapon can shoot in single fire mode.
- `burst` - The amount of bullets the weapon will shoot in burst fire mode (0 to disable).
- `auto` - Whether the weapon can shoot in automatic fire mode.

### Sound Configuration

- `shoot` - The sound the weapon will make when shooting.
- `silencedShoot` - The sound the weapon will make when shooting with a silencer.
- `reload` - The sound the weapon will make when reloading.
- `unload` - The sound the weapon will make when unloading.
- `endOfShootSound` - The sound the weapon will make when it's out of ammo.
- `inspect` - The sound the weapon will make when inspecting.
- `draw` - The sound the weapon will make when drawing.