ServerEvents.generateData("after_mods", (event) => {
  event.json("minecraft:tags/block/mineable/pickaxe", {
    replace: false,
    values: ["#c:glass_blocks", "#c:glass_panes"],
  });
});

const colors = [
  "white",
  "light_gray",
  "gray",
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "lime",
  "green",
  "cyan",
  "light_blue",
  "blue",
  "purple",
  "magenta",
  "pink",
];

const blocksToSelfDrop = ["minecraft:glass", "minecraft:glass_pane"];

// Adding colored blocs to avoid repetition
for (const color of colors) {
  blocksToSelfDrop.push(`minecraft:${color}_stained_glass`);
  blocksToSelfDrop.push(`minecraft:${color}_stained_glass_pane`);
}

/**
 * @param {import("com.almostreliable.lootjs.loot.LootTableEvent").$LootTableEvent$$Type} event
 * @param {string} blockId
 */
function selfDrop(event, blockId) {
  const [namespace, path] = blockId.split(":");
  event
    .getLootTable(`${namespace}:blocks/${path}`)
    .clear()
    .createPool((pool) => {
      pool.addEntry(LootEntry.of(blockId).survivesExplosion());
    });
}

LootJS.lootTables((event) => {
  for (const blockId of blocksToSelfDrop) {
    selfDrop(event, blockId);
  }
});
