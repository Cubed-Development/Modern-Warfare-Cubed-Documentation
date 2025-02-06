---
pagination_next: null
pagination_prev: null
description: What is Weapon System 2?
tags:
  - Programming
---


# What is Weapon System 2?

:::warning

The Modern Warfare Cubed documentation is under construction.

Documenting things takes time, like **a lot** of time, so please be patient.

:::

Weapon System Two (WS2) is the animation system used in VMW 3.0 and MWC. It replaced VS1, but you can still use VS1 methods.


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
            "0.0": [0, 0, 0],
            "0.7": [0, 0, 0]
          },
          "position": {
            "0.0": [0, 0, 0],
            "0.7": [0, 0, 0]
          }
        },
        "main": {
          "rotation": {
            "0.0": [0.43568, -42.55892, 23.49116],
            "0.4": [-0.20904, -5.97811, 7.02],
            "0.5": [-0.04065, -0.16443, 7.66646],
            "0.7": [0, 0, -2],
            "0.8": [0, 0, 0]
          },
          "position": {
            "0.0": [1.6, -17, 4.8],
            "0.3": [0, -1.4, -4.3],
            "0.5": [0, -0.28, -4.86],
            "0.6": [0, 0, 0]
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

## Weapon System 3?
Another Weapon System version isn't planned, at least right now.  