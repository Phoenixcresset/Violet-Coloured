// priority: 3
// Declared before other advancement scripts

// oxlint-disable-next-line no-redeclare
const _AdvancementsUtils = (() => {
  /**
   * @param {string} lootTable
   * @returns {string}
   */
  function lootTableToCriteria(lootTable) {
    let shortLootTableId = lootTable
      .slice(lootTable.indexOf("/") + 1)
      .replace(/\//g, "_");
    let key = `loot_${shortLootTableId}`;
    return key;
  }
  return { lootTableToCriteria: lootTableToCriteria };
})();
