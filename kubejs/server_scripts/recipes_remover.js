const removedRecipesIds = ["supplementaries:cannon_boat_bamboo"];

ServerEvents.recipes((event) => {
  removedRecipesIds.forEach((recipeId) => {
    event.remove({ id: recipeId });
  });
});
