const removedRecipesIds = [
  "supplementaries:cannon_boat_bamboo",
  "minecraft:cake",
];

ServerEvents.recipes((event) => {
  removedRecipesIds.forEach((recipeId) => {
    event.remove({ id: recipeId });
  });
});
