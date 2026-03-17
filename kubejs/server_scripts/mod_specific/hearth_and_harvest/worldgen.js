(() => {
  ServerEvents.generateData("after_mods", (event) => {
    const biomeModifiersToRemove = [
      "add_mums",
      "blueberry_bush",
      "raspberry_bush",
      "wild_cotton",
      "wild_green_grapes",
      "wild_peanuts",
      "wild_red_grapes",
    ];

    const structureToRemove = "corn_maze";

    for (const path of biomeModifiersToRemove) {
      global.Datagen.removeData(event, {
        dataType: "biome_modifier",
        namespace: "hearthandharvest",
        dataName: path,
      });
    }
    global.Datagen.removeData(event, {
      dataType: "structure_set",
      namespace: "hearthandharvest",
      dataName: structureToRemove,
    });
  });

  LootJS.lootTables((event) => {
    event.getLootTable("hearthandharvest:chests/corn_maze").clear();
  });
})();
