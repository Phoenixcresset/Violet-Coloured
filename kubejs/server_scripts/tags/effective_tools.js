(() => {
  const effectiveToolsBlocks = {
    block: {
      "mineable/pickaxe": {
        minecraft: ["sea_lantern", "glowstone", "redstone_lamp", "beacon", "lever"],
        c: ["#glass_blocks", "#glass_panes"],
        chimes: ["glass_bells"],
      },
      "mineable/axe": {
        minecraft: ["#beds"],
        c: ["#skulls"],
        supplementaries: ["#flags"],
        // TODO: Glass ?
      },
      "mineable/shovel": {
        vinery: ["dirt_path_slab"],
      },
      "mineable/hoe": {
        minecraft: ["ochre_froglight", "verdant_froglight", "pearlescent_froglight", "cactus"],
      },
      "farmersdelight:mineable/knife": {
        hearthandharvest: [
          "unripe_cheddar_cheese_wheel",
          "unripe_goat_cheese_wheel",
          "cheddar_cheese_wheel",
          "goat_cheese_wheel",
        ],
      },
    },
  };

  const removedEffectiveToolsBlocks = {
    block: {
      "farmersdelight:mineable/knife": {
        supplementaries: ["#flags"],
      },
    },
  };

  global.TagModule.registerAddedTagsToEntries(effectiveToolsBlocks);
  global.TagModule.registerRemovedTagsFromEntries(removedEffectiveToolsBlocks);
})();
