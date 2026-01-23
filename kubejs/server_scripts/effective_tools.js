/** @type {Array<string>} */
const pickaxeBreakableBlocks = [
  "#c:glass_blocks",
  "#c:glass_panes",
  "minecraft:sea_lantern",
  "minecraft:glowstone",
  "minecraft:redstone_lamp",
  "minecraft:beacon",
  "minecraft:sea_lantern",
  "minecraft:lever",
];

/** @type {Array<string>} */
const axeBreakableBlocks = [
  "#minecraft:beds",
  "#c:skulls",
  // TODO : Glass ?
];

/** @type {Array<string>} */
const hoeBreakableBlocks = [
  "minecraft:ochre_froglight",
  "minecraft:verdant_froglight",
  "minecraft:pearlescent_froglight",
  "minecraft:cactus",
];

ServerEvents.generateData("after_mods", (event) => {
  event.json("minecraft:tags/block/mineable/pickaxe", {
    replace: false,
    values: pickaxeBreakableBlocks,
  });
  event.json("minecraft:tags/block/mineable/axe", {
    replace: false,
    values: axeBreakableBlocks,
  });
  event.json("minecraft:tags/block/mineable/hoe", {
    replace: false,
    values: hoeBreakableBlocks,
  });
});
