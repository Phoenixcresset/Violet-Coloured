(() => {
  const shapelessRecipes = [
    {
      ingredients: ["minecraft:nether_bricks", "minecraft:nether_wart_block"],
      output: "minecraft:red_nether_bricks",
      outputCount: 2,
      recipeId: "minecraft:red_nether_bricks",
    },
  ];
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

  const bricksRecipes = [
    {
      ingredient: "minecraft:dirt",
      output: "quark:dirt_bricks",
      recipeId: "quark:building/crafting/dirt_bricks",
    },
    {
      ingredient: "minecraft:netherrack",
      output: "quark:netherrack_bricks",
      recipeId: "quark:building/crafting/netherrack_bricks",
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
    { ingredient, surroundedItem, output, recipeId }
  ) {
    event
      .shaped(Item.of(output, 8), ["III", "ISI", "III"], {
        I: ingredient,
        S: surroundedItem,
      })
      .id(recipeId);
  }

  function dyedRecipe(event, { ingredient, output, recipeId }) {
    for (const color of Color.DYE.values()) {
      let dyedOutput = output.replace("{color}", color);
      let dyedRecipeId = recipeId.replace("{color}", color);
      let dye = `minecraft:${color}_dye`;
      surroundWithItemRecipe(event, {
        ingredient: ingredient,
        surroundedItem: dye,
        output: dyedOutput,
        recipeId: dyedRecipeId,
      });
    }
  }

  function bricksRecipe(event, { ingredient, output, recipeId }) {
    event
      .shaped(Item.of(output, 4), ["II", "II"], {
        I: ingredient,
      })
      .id(recipeId);
  }

  ServerEvents.recipes((event) => {
    for (const recipe of shapelessRecipes) {
      event
        .shapeless(
          Item.of(recipe.output, recipe.outputCount),
          recipe.ingredients
        )
        .id(recipe.recipeId);
    }

    for (const recipe of surroundedRecipes) {
      console.log(recipe);
      surroundWithItemRecipe(event, recipe);
    }

    for (const recipe of dyedRecipes) {
      dyedRecipe(event, recipe);
    }

    for (const recipe of bricksRecipes) {
      bricksRecipe(event, recipe);
    }

    for (const recipeId of removedRecipesIds) {
      event.remove({ id: recipeId });
    }
  });
})();
