---
pagination_next: null
pagination_prev: null
description: Documentation for the Weapon System
tags:
  - MWC
  - Weapon
  - System
---

# Weapon System

:::warning

The Modern Warfare Cubed documentation is under construction.

Documenting things takes time, like **a lot** of time, so please be patient.

:::

## Version 1

Weapon System One (WS1) was the animation system used for VMW 2.0, and for the guns in VMW 3.0 that were not revamped.

It allows developers to manually animate weapons and their attachments, like so:

```java
new Transition((renderContext) -> { // Reload position
        GL11.glTranslatef(0f, -0.1f, 0f);
                                    GL11.glRotatef(35F, 1f, 0f, 0f);
                                    GL11.glScalef(1f, 1f, 1f);
                                }, 260, 0),

                                        // left hand grabs double-barrel

                                        new Transition((renderContext) -> { // Reload position
        GL11.glTranslatef(0f, -0.1f, 0f);
                                    GL11.glRotatef(35F, 1f, 0f, 0f);
                                    GL11.glScalef(1f, 1f, 1f);
                                }, 260, 0)
```

### Upsides

* Animations are set inside the weapon builder
* Very easy to be extended, supports both basic and complex animations
* Good base for Weapon System 2

### Downsides

* Required to recompile the mod whenever you make any change
* Complex animations are very difficult to read and modify
* Many builder methods required. (Ex: withFirstPersonPositioningReloading, withFirstPersonCustomPositioningReloading,
  and withFirstPersonLeftHandPositioningReloading are all required for a basic animation)

## Version 2

Weapon System Two (WS2) is the animation system used in VMW 3.0 and MWC. It replaced VS1, but you can still use VS1
methods. The process of porting a weapon from WS1 to WS2 is called "revamping."
Animations must be loaded in the format `{gun_name}.animation.json`.

```json
{
  "format_version": "1.8.0",
  "animations": {
    "animation.aug.draw": {
      "loop": true,
      "animation_length": 1.9,
      "bones": {
        "lefthand": {
          "rotation": {
            "0.0": [
              0,
              0,
              0
            ],
            "0.7": [
              0,
              0,
              0
            ]
          },
          "position": {
            "0.0": [
              0,
              0,
              0
            ],
            "0.7": [
              0,
              0,
              0
            ]
          }
        },
        "main": {
          "rotation": {
            "0.0": [
              0.43568,
              -42.55892,
              23.49116
            ],
            "0.4": [
              -0.20904,
              -5.97811,
              7.02
            ],
            "0.5": [
              -0.04065,
              -0.16443,
              7.66646
            ],
            "0.7": [
              0,
              0,
              -2
            ],
            "0.8": [
              0,
              0,
              0
            ]
          },
          "position": {
            "0.0": [
              1.6,
              -17,
              4.8
            ],
            "0.3": [
              0,
              -1.4,
              -4.3
            ],
            "0.5": [
              0,
              -0.28,
              -4.86
            ],
            "0.6": [
              0,
              0,
              0
            ]
          }
        }
      }
    },
```

### Upsides

* Animations are set inside a json file
* Animations can be applied with resource packs and reloaded
* Easier to make more complex animations
* Easier to read and modify
* Supports playing sounds inside animations

### Downsides

* Porting from VS1 is difficult
* Complex animations are still difficult to read and modify
* Currently, does not support Shotguns

### Weapon System 2 Keys

* `format_version` The version of WS2 this animation was written for, Should be `1.8.0`
* `animations` An array containing all the animations. Supported types are `draw`, `inspect`, `load`, `unload`,`reload`,
  `reloadempty`, `reloadtactical`
    * `animation.{gun_name}.{type}`
        * `loop` Should the animation loop?
        * `animation_length` The length of the animation in seconds
        * `bones` The bones that the animation will be applied too. Supported bones are `main`, `lefthand`, `righthand`,
          `magazine`, `magazine_extra`, and `action`
        * `sound_effects` Sounds effect to play during the animation. Sounds must have been registered to
          `UniversalSoundLookup`