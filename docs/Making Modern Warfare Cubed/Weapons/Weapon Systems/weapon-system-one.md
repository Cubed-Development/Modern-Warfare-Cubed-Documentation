---
pagination_next: null
pagination_prev: null
description: What is Weapon System 1?
---


# What is Weapon System 1?

:::warning

The Modern Warfare Cubed documentation is under construction.

Documenting things takes time, like **a lot** of time, so please be patient.

:::

Weapon System One or (WS1) was the animation system used for VMW 2.0, and for guns in 3.0 that were not revamped.

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
* Many builder methods required. (Ex: withFirstPersonPositioningReloading, withFirstPersonCustomPositioningReloading, and withFirstPersonLeftHandPositioningReloading are all required for a basic animation)


