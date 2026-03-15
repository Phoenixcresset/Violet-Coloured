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

  RecipeViewerEvents.addInformation("item", (event) =>
    event.add("measurements:tape_measure", [
      Text.translatable("emi.info.abacus"),
    ])
  );
})();
