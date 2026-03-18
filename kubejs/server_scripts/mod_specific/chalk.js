(() => {
  ServerEvents.recipes((event) => {
    event
      .shaped("chalk:chalk_box", ["P P", "PPP"], {
        P: "minecraft:paper",
      })
      .id("chalk:chalk_box");
  });
})();
