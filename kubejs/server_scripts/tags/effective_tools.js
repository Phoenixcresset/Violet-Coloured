// priority:10

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
      },
      "mineable/axe": {
        minecraft: ["#beds"],
        c: ["#skulls"],
        // TODO: Glass ?
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
  global.TagModule.registerAddedTagsToEntries(effectiveToolsBlocks);
})();
