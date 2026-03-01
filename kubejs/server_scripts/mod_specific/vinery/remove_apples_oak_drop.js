(() => {
  // Removes apple from oak leaves drop table, since Vinery adds apple trees
  LootJS.lootTables((event) => {
    event.modifyLootTables(/minecraft:blocks\/.*oak_leaves/).removeItem("minecraft:apple");
  });
})();
