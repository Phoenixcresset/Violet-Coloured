(() => {
  const registeredJEEDEffects = {
    "minecraft:haste": ["vinery:mead"],
    "minecraft:strength": ["vinery:apple_cider"],
    "minecraft:resistance": ["vinery:apple_wine"],
    "minecraft:instant_health": ["vinery:mellohi_wine"],
    "minecraft:glowing": ["vinery:glowing_wine"],
    "minecraft:health_boost": ["vinery:solaris_wine"],
    "minecraft:jump_boost": ["vinery:noir_wine"],
    "minecraft:slow_falling": ["vinery:red_wine"],
    "minecraft:night_vision": ["vinery:strad_wine"],
    "minecraft:invisibility": ["vinery:cherry_wine"],
    "minecraft:water_breathing": ["vinery:cristel_wine"],
    "vinery:creeper_effect": ["vinery:creepers_crush"],
    "vinery:water_walker": ["vinery:kelp_cider"],
    "vinery:party_effect": ["vinery:lilitu_wine"],
    "vinery:climbing_effect": [
      "vinery:jo_special_mixture",
      "vinery:chenet_wine",
    ],
    "vinery:frosty_armor": ["vinery:eiswein"],
    "vinery:armor_effect": ["vinery:aegis_wine"],
    "vinery:lava_walker": ["vinery:bolvar_wine"],
    "vinery:teleport": ["vinery:chorus_wine"],
    "minecraft:bad_omen": ["vinery:villagers_fright"],
    "vinery:double_jump": ["vinery:clark_wine"],
    "vinery:magnet": ["vinery:magnetic_wine"],
    "vinery:health_effect": ["vinery:stal_wine"],
    "vinery:experience_effect": ["vinery:bottle_mojang_noir"],
    "vinery:jellie": ["vinery:jellie_wine"],
  };

  ServerEvents.recipes((event) => {
    for (const [effect, items] of Object.entries(registeredJEEDEffects)) {
      event.custom({
        type: "jeed:effect_provider",
        effect: effect,
        providers: items.map((item) => ({ item: item })),
      });
    }
  });
})();
