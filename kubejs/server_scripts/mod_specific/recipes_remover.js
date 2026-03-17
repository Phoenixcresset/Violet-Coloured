(() => {
  const removedRecipesIds = [
    "supplementaries:cannon_boat_bamboo",
    "minecraft:cake",
    "hearthandharvest:cake_from_batter",
    "hearthandharvest:carrot_cake_from_batter",
  ];

  const removedRecipesTypes = [
    "vinery:wine_fermentation",
    "vinery:apple_fermenting",
    "vinery:apple_mashing",
  ];

  ServerEvents.recipes((event) => {
    for (const recipeId of removedRecipesIds) {
      event.remove({ id: recipeId });
    }
    for (const recipeType of removedRecipesTypes) {
      event.remove({ type: recipeType });
    }
  });
})();
