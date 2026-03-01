(() => {
  const removedRecipesIds = [
    "supplementaries:cannon_boat_bamboo",
    "minecraft:cake",
    "hearthandharvest:cake_from_batter",
    "hearthandharvest:carrot_cake_from_batter",
    "farmersdelight:cooking/unripe_cheddar_cheese_wheel",
    "farmersdelight:cooking/unripe_goat_cheese_wheel",
  ];

  const removedRecipesTypes = ["vinery:wine_fermentation"];

  ServerEvents.recipes((event) => {
    for (const recipeId of removedRecipesIds) {
      event.remove({ id: recipeId });
    }
    for (const recipeType of removedRecipesTypes) {
      event.remove({ type: recipeType });
    }
  });
})();
