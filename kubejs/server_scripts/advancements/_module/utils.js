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

  /**
   *
   * @param {string[]} lootTables
   * @returns {string[]}
   */
  function mapLootTablesToCriteria(lootTables) {
    return lootTables.map((lootTable) => lootTableToCriteria(lootTable));
  }

  return {
    lootTableToCriteria: lootTableToCriteria,
    mapLootTablesToCriteria: mapLootTablesToCriteria,
  };
})();
