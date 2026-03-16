(() => {
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
    {
      ingredients: [
        { item: "farmersdelight:raw_pasta" },
        { item: "hearthandharvest:salt" },
        { tag: "c:drinks/milk" },
        { item: "hearthandharvest:butter" },
        { tag: "brewinandchewin:foods/cheese_wedge" },
      ],
      result: "hearthandharvest:macaroni_and_cheese",
      container: "minecraft:bowl",
    },
    {
      ingredients: [
        {
          item: "farmersdelight:onion",
        },
        {
          item: "farmersdelight:onion",
        },
        {
          tag: "c:drinks/milk",
        },
        {
          tag: "brewinandchewin:foods/cheese_wedge",
        },
      ],
      result: "hearthandharvest:onion_soup",
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
    event
      .shapeless("hearthandharvest:taco", [
        "hearthandharvest:tortilla",
        "farmersdelight:beef_patty",
        "#brewinandchewin:foods/cheese_wedge",
        "farmersdelight:tomato",
        "#c:foods/cabbage",
      ])
      .id("hearthandharvest:taco");

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
