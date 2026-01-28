const removedRecipesIds = [
  "supplementaries:cannon_boat_bamboo",
  "minecraft:cake",
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
