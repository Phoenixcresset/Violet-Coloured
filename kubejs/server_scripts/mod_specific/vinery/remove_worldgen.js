(() => {
  ServerEvents.generateData("after_mods", (event) => {
    const biomeModifiersToRemove = [
      "add_jungle_red_grape",
      "add_jungle_white_grape",
      "add_savanna_red_grape",
      "add_savanna_white_grape",
      "add_taiga_red_grape",
      "add_taiga_white_grape",
    ];

    for (const path of biomeModifiersToRemove) {
      global.Datagen.removeData(event, {
        dataType: "biome_modifier",
        namespace: "vinery",
        dataName: path,
      });
    }
  });
})();
