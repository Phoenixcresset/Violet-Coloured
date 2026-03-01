(() => {
  RecipeViewerEvents.addInformation("item", (event) => {
    event.add(
      [
        "farmersdelight:red_mushroom_colony",
        "farmersdelight:brown_mushroom_colony",
      ],
      [Text.translatable("emi.info.mushroom_colony")]
    );
    event.add("farmersdelight:tomato", [
      Text.translatable("emi.info.tomatoes"),
    ]);
  });
})();
