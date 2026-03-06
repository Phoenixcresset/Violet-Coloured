(() => {
  const cheeseRecipes = [
    {
      slice: "hearthandharvest:cheddar_cheese_slice",
      wheel: "hearthandharvest:cheddar_cheese_wheel",
    },
    {
      slice: "hearthandharvest:goat_cheese_slice",
      wheel: "hearthandharvest:goat_cheese_wheel",
    },
  ];

  const bottleRecipes = [
    {
      bottle: "vinery:red_grapejuice",
      crate: "hearthandharvest:red_grape_wine_crate",
    },
    {
      bottle: "vinery:white_grapejuice",
      crate: "hearthandharvest:green_grape_wine_crate",
    },
    {
      bottle: "hearthandharvest:syrup_bottle",
      crate: "hearthandharvest:syrup_crate",
    },
  ];

  const cookingRecipes = [
    {
      ingredients: [
        { item: "vinery:red_grape" },
        { item: "vinery:red_grape" },
        { item: "vinery:red_grape" },
        { item: "minecraft:sugar" },
        { item: "minecraft:sugar" },
        { item: "minecraft:sugar" },
      ],
      result: "hearthandharvest:grape_jam",
      container: "hearthandharvest:jar",
      time: 400,
    },
    {
      ingredients: [
        { item: "vinery:cherry" },
        { item: "vinery:cherry" },
        { item: "vinery:cherry" },
        { item: "minecraft:sugar" },
        { item: "minecraft:sugar" },
        { item: "minecraft:sugar" },
      ],
      result: "hearthandharvest:cherry_jam",
      container: "hearthandharvest:jar",
      time: 400,
    },
    {
      ingredients: [
        { item: "minecraft:cooked_porkchop" },
        { tag: "c:dusts/salt" },
        { tag: "c:foods/milk" },
        { tag: "c:flours" },
      ],
      result: "hearthandharvest:biscuits_and_gravy",
      container: "minecraft:bowl",
    },
  ];

  const removedFermentingRecipesIds = [
    "moonshine",
    "sweet_berry_wine",
    "mead",
    "hard_cider",
    "root_beer",
  ];

  function cheeseSliceToWheelRecipe(event, sliceId, cheeseId) {
    event
      .shaped(cheeseId, ["SS", "SS"], {
        S: sliceId,
      })
      .id(`${cheeseId}_from_wedges`);
  }

  function bottleToCrateRecipe(event, inputBottle, outputCrate) {
    event
      .custom({
        type: "hearthandharvest:bottle_crate",
        category: "building",
        input: {
          item: inputBottle,
        },
        result: {
          id: outputCrate,
          count: 1,
        },
      })
      .id(outputCrate);
  }

  function cookingRecipe(
    event,
    ingredients,
    resultId,
    containerId,
    cookingTime,
    experience
  ) {
    cookingTime = cookingTime !== undefined ? cookingTime : 200;
    experience = experience !== undefined ? experience : 1;
    const [, shortenedResultId] = resultId.split(":");
    event
      .custom({
        type: "farmersdelight:cooking",
        container: {
          count: 1,
          id: containerId,
        },
        cookingtime: cookingTime,
        experience: experience,
        ingredients: ingredients,
        recipe_book_tab: "meals",
        result: {
          count: 1,
          id: resultId,
        },
      })
      .id(`farmersdelight:cooking/${shortenedResultId}`);
  }

  ServerEvents.recipes((event) => {
    for (const cheeseRecipe of cheeseRecipes) {
      cheeseSliceToWheelRecipe(event, cheeseRecipe.slice, cheeseRecipe.wheel);
    }

    for (const bottleRecipe of bottleRecipes) {
      bottleToCrateRecipe(event, bottleRecipe.bottle, bottleRecipe.crate);
    }

    for (const recipe of cookingRecipes) {
      cookingRecipe(
        event,
        recipe.ingredients,
        recipe.result,
        recipe.container,
        recipe.time
      );
    }

    // TODO: Extract shaped and shapeless recipes
    event
      .shaped("hearthandharvest:cotton_candy", [" W ", "SSS", " T "], {
        W: "minecraft:wind_charge",
        S: "minecraft:sugar",
        T: "minecraft:stick",
      })
      .id("hearthandharvest:cotton_candy");
    event
      .shapeless("hearthandharvest:cherry_juice", [
        "vinery:cherry",
        "vinery:cherry",
        "minecraft:sugar",
        "minecraft:glass_bottle",
      ])
      .id("hearthandharvest:cherry_juice");
    for (const recipeId of removedFermentingRecipesIds) {
      let fullRecipeId = `hearthandharvest:integration/brewinandchewin/fermenting/${recipeId}`;
      event.remove({ id: fullRecipeId });
    }
  });
})();
