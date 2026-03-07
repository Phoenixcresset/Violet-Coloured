(() => {
  const replacedInputRecipes = [
    {
      filter: { id: "farmersdelight:cooking_pot" },
      old_input: "minecraft:wooden_shovel",
      new_input: "minecraft:stick",
    },
  ];

  const shapelessRecipes = [
    {
      ingredients: [
        "minecraft:cocoa_beans",
        "minecraft:wheat",
        "minecraft:wheat",
      ],
      output: "minecraft:cookie",
      outputCount: 8,
      recipeId: "minecraft:cookie",
    },
    {
      ingredients: ["minecraft:wheat", "minecraft:wheat", "minecraft:wheat"],
      output: "minecraft:bread",
      outputCount: 1,
      recipeId: "minecraft:bread",
    },
    {
      ingredients: [
        "minecraft:sugar_cane",
        "minecraft:sugar_cane",
        "minecraft:sugar_cane",
      ],
      output: "minecraft:paper",
      outputCount: 3,
      recipeId: "minecraft:paper",
    },
  ];

  ServerEvents.recipes((event) => {
    for (const recipe of replacedInputRecipes) {
      event.replaceInput(recipe.filter, recipe.old_input, recipe.new_input);
    }
    for (const recipe of shapelessRecipes) {
      event
        .shapeless(
          Item.of(recipe.output, recipe.outputCount),
          recipe.ingredients
        )
        .id(recipe.recipeId);
    }
  });
})();
