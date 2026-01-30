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
  removedRecipesIds.forEach((recipeId) => {
    event.remove({ id: recipeId });
  });
  removedRecipesTypes.forEach((recipeType) => {
    event.remove({ type: recipeType });
  });
});
