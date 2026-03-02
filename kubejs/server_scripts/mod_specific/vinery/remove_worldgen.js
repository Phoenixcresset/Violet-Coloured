(() => {
  ServerEvents.generateData("after_mods", (event) => {
    const placedFeaturesToRemove = [
      "jungle_red_grape_bush__chance",
      "jungle_white_grape_bush__chance",
      "savanna_red_grape_bush__chance",
      "savanna_white_grape_bush__chance",
      "taiga_red_grape_bush__chance",
      "taiga_white_grape_bush__chance",
    ];

    for (const path of placedFeaturesToRemove) {
      global
        .DataGenModule()
        .removeData(event, "placed_feature", "vinery", path);
    }
  });
})();
