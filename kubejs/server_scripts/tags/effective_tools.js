(() => {
  const effectiveToolsBlocks = {
    block: {
      "mineable/pickaxe": {
        minecraft: [
          "sea_lantern",
          "glowstone",
          "redstone_lamp",
          "beacon",
          "lever",
        ],
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
        minecraft: [
          "ochre_froglight",
          "verdant_froglight",
          "pearlescent_froglight",
          "cactus",
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
