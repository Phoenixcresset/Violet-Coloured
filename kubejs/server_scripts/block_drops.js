/** @typedef {import("com.almostreliable.lootjs.loot.LootTableEvent").$LootTableEvent$$Type} LootTableEvent */

(() => {
  /** @type {Array<string>} */
  const blocksToSelfDrop = ["minecraft:glass", "minecraft:glass_pane"];

  // Adding colored blocs to avoid repetition
  Color.DYE.forEach((color) => {
    blocksToSelfDrop.push(`minecraft:${color}_stained_glass`);
    blocksToSelfDrop.push(`minecraft:${color}_stained_glass_pane`);
  });

  const silkTouchBlocks = [
    {
      id: "vinery:grass_slab",
      defaultDropId: "vinery:dirt_slab",
    },
  ];

  /**
   * @param {LootTableEvent} event
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

  /**
   * @param {LootTableEvent} event
   * @param {string} blockId
   * @param {string} defaultDropId
   */
  function silkTouchDrop(event, blockId, defaultDropId) {
    const [namespace, path] = blockId.split(":");
    event
      .getLootTable(`${namespace}:blocks/${path}`)
      .clear()
      .createPool((pool) => {
        pool.addEntry(
          LootEntry.alternative(
            LootEntry.of(blockId).matchTool(
              ItemFilter.hasEnchantment("minecraft:silk_touch")
            ),
            LootEntry.of(defaultDropId)
          )
        );
      });
  }

  LootJS.lootTables((event) => {
    for (const blockId of blocksToSelfDrop) {
      selfDrop(event, blockId);
    }

    for (const { id, defaultDropId } of silkTouchBlocks) {
      silkTouchDrop(event, id, defaultDropId);
    }
  });
})();
