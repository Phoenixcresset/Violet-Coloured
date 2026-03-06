(() => {
  const surroundedRecipes = [
    {
      ingredient: "minecraft:glass",
      surroundedItem: "supplementaries:ash",
      output: "quark:dirty_glass",
      recipeId: "quark:tweaks/crafting/glass/mixed_dirty_glass",
    },
    {
      ingredient: "minecraft:glass_pane",
      surroundedItem: "supplementaries:ash",
      output: "quark:dirty_glass_pane",
      recipeId: "quark:tweaks/crafting/glass/dirty_glass_pane_from_glass_pane",
    },
  ];

  const dyedRecipes = [
    {
      ingredient: "quark:framed_glass",
      output: "quark:{color}_framed_glass",
      recipeId: "quark:building/crafting/glass/{color}_framed_glass",
    },
    {
      ingredient: "quark:framed_glass_pane",
      output: "quark:{color}_framed_glass_pane",
      recipeId:
        "quark:building/crafting/panes/{color}_framed_glass_pane_from_framed_glass_pane",
    },
  ];

  const removedRecipesIds = [
    // Removed to avoid recipe conflicts
    "quark:building/crafting/chests/mixed_chest",
    "quark:building/crafting/chests/mixed_chest_wood",
    "minecraft:furnace",
  ];

  function surroundWithItemRecipe(
    event,
    ingredient,
    surroundedItem,
    output,
    recipeId
  ) {
    event
      .shaped(Item.of(output, 8), ["III", "ISI", "III"], {
        I: ingredient,
        S: surroundedItem,
      })
      .id(recipeId);
  }

  function dyedRecipe(event, ingredient, output, recipeId) {
    for (const color of Color.DYE.values()) {
      let dyedOutput = output.replace("{color}", color);
      let dyedRecipeId = recipeId.replace("{color}", color);
      let dye = `minecraft:${color}_dye`;
      surroundWithItemRecipe(event, ingredient, dye, dyedOutput, dyedRecipeId);
    }
  }

  ServerEvents.recipes((event) => {
    for (const recipe of surroundedRecipes) {
      surroundWithItemRecipe(
        event,
        recipe.ingredient,
        recipe.surroundedItem,
        recipe.output,
        recipe.recipeId
      );
    }

    for (const recipe of dyedRecipes) {
      dyedRecipe(event, recipe.ingredient, recipe.output, recipe.recipeId);
    }

    for (const recipeId of removedRecipesIds) {
      event.remove({ id: recipeId });
    }
  });
})();
