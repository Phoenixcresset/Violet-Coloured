(() => {
  const replacedInputRecipes = [
    {
      filter: { id: "farmersdelight:cooking_pot" },
      old_input: "minecraft:wooden_shovel",
      new_input: "minecraft:stick",
    },
  ];

  ServerEvents.recipes((event) => {
    for (const recipe of replacedInputRecipes) {
      event.replaceInput(recipe.filter, recipe.old_input, recipe.new_input);
    }
  });
})();
