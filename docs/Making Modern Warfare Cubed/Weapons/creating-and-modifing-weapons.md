---
pagination_next: null
pagination_prev: null
description: How to create a new gun for Modern Warfare Cubed
---

# Creating and Modifying Weapons 

Before we begin, you should make sure you understand the basics of [Builders](https://www.baeldung.com/intellij-idea-java-builders) in Java.

## Making a new weapon

Each type of weapon uses its own builder:

* Guns use Weapon.Builder() and should be placed in a file that [implements](https://www.w3schools.com/java/ref_keyword_implements.asp) GunFactory 
* Melee weapons use ItemMelee.Builder() and should be placed in a file that implements MeleeFactory
* Grenades use ItemGrenade.Builder() and should be placed in a file that implements GrenadeFactory 

For the sake of brevity, I will only be going over how to make Guns, but many overlap between builders. 

## Creating a new gun
The [AK47 Factory](https://github.com/Cubed-Development/Modern-Warfare-Cubed/blob/next/src/main/java/com/paneedah/mwc/items/guns/AK47Factory.java) was used as an example for this page

### .withName("ak47")
The "ID" that will be used by Minecraft internally. This becomes: mwc:ak47

### .withFireRate(0.6f)
The max rate of fire (full auto or otherwise)

### .withRecoil(4f)
The "basic" amount of recoil the gun will have when firing. You should still use a RecoilParam() for more complex recoil.

### .withZoom(0.9f)
The amount to zoom in-out when ADSing

### .withConfigGroup(GunConfigurationGroup.RIFLES)
The Gun Configuration group this gun should use. 

Options are:  NONE, HANDGUN, LONG_GUN, RIFLE, SHOTGUN, CARBINE, ASSAULT_RIFLE, BATTLE_RIFLE, SNIPER_RIFLE, MACHINE_GUN, SUBMACHINE_GUN,

### .hasFlashPedals()
If the gun should show the "flash" images when it is firing

### .withShootSound("ak47")
The sound file used when the weapon is fired

### .withSilencedShootSound("ak15_silenced")
The sound file used when the weapon is fired and a suppressor is attached 

### .withReloadSound("ak_reload")
The sound file used when the weapon is reloaded

### .withUnloadSound("ak_unload")
The sound file used when the weapon is unloaded

### .withInspectSound("inspection")
The sound file used when the weapon is being inspected.  
Most weapons do not need a custom inspect sound 

### .withEndOfShootSound("gun_click")
The sound file used when the weapon is empty, and you try to fire it  
Most weapons do not need a custom end of shoot sound

### .withDrawSound("ak_draw")
The sound played when the weapon is held for the first time

### .withReloadingTime(45)
Weapon reloading time (in Ticks)

### .withCreativeTab(MWC.WEAPONS_TAB)
The creative tab to place this weapon under 

### .useNewSystem()
Use WS2 (TODO Document WS1 vs WS2)

### .withMaxShots(1, Integer.MAX_VALUE)
Controls the fire modes for this weapon. 

“1” For Semi-automatic shooting, “3” for burst shooting. and “Integer.MAX_VALUE” for automatic shooting