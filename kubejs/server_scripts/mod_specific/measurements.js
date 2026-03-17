(() => {
  ServerEvents.recipes((event) => {
    event
      .shaped("measurements:tape_measure", ["PSP", "PIP", "PSP"], {
        P: "#minecraft:planks",
        S: "minecraft:stick",
        I: "minecraft:iron_ingot",
      })
      .id("measurements:tape_measure");
  });
})();
