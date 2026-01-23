/** @type {Object.<string, Array<string>>} */
const effectiveToolsBlocks = {
  pickaxe: [
    "#c:glass_blocks",
    "#c:glass_panes",
    "minecraft:sea_lantern",
    "minecraft:glowstone",
    "minecraft:redstone_lamp",
    "minecraft:beacon",
    "minecraft:lever",
  ],
  axe: [
    "#minecraft:beds",
    "#c:skulls",
    // TODO : Glass ?
  ],
  hoe: [
    "minecraft:ochre_froglight",
    "minecraft:verdant_froglight",
    "minecraft:pearlescent_froglight",
    "minecraft:cactus",
  ],
};

/**
 * @param {import("dev.latvian.mods.kubejs.generator.KubeDataGenerator").$KubeDataGenerator$$Type} event
 * @param {string} tool
 * @param {Array<string>} values
 */
function addMineableTag(event, tool, values) {
  event.json(`minecraft:tags/block/mineable/${tool}`, {
    replace: false,
    values: values,
  });
}

ServerEvents.generateData("after_mods", (event) => {
  for (const [tool, values] of Object.entries(effectiveToolsBlocks)) {
    addMineableTag(event, tool, values);
  }
});
