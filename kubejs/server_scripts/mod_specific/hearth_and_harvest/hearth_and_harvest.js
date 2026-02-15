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
      global
        .DataGenModule()
        .removeData(event, "biome_modifier", "hearthandharvest", path);
    }
    global
      .DataGenModule()
      .removeData(event, "structure_set", "hearthandharvest", structureToRemove);
  });

  LootJS.lootTables((event) => {
    event.getLootTable("hearthandharvest:chests/corn_maze").clear();
  });
})();
