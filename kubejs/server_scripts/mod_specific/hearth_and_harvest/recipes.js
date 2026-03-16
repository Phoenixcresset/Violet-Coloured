(() => {
  const DEFAULTS = {
    cookingTime: 200,
    experience: 1,
    recipeBookTab: "meals",
    cookingType: "farmersdelight:cooking",
  };

  const COOKING_RECIPES = [
    {
      ingredients: [
        "vinery:red_grape",
        "vinery:red_grape",
        "vinery:red_grape",
        "minecraft:sugar",
        "minecraft:sugar",
        "minecraft:sugar",
      ],
      result: "hearthandharvest:grape_jam",
      container: "hearthandharvest:jar",
      time: 400,
    },
    {
      ingredients: [
        "vinery:cherry",
        "vinery:cherry",
        "vinery:cherry",
        "minecraft:sugar",
        "minecraft:sugar",
        "minecraft:sugar",
      ],
      result: "hearthandharvest:cherry_jam",
      container: "hearthandharvest:jar",
      time: 400,
    },
    {
      ingredients: [
        "minecraft:cooked_porkchop",
        "#c:dusts/salt",
        "#c:foods/milk",
        "#c:flours",
      ],
      result: "hearthandharvest:biscuits_and_gravy",
      container: "minecraft:bowl",
    },
    {
      ingredients: [
        "farmersdelight:raw_pasta",
        "hearthandharvest:salt",
        "#c:drinks/milk",
        "hearthandharvest:butter",
        "#brewinandchewin:foods/cheese_wedge",
      ],
      result: "hearthandharvest:macaroni_and_cheese",
      container: "minecraft:bowl",
    },
    {
      ingredients: [
        "farmersdelight:onion",
        "farmersdelight:onion",
        "#c:drinks/milk",
        "#brewinandchewin:foods/cheese_wedge",
      ],
      result: "hearthandharvest:onion_soup",
      container: "minecraft:bowl",
    },
  ];

  const ITEM_FERMENTING_RECIPES = [];

  const PICKLED_ITEMS = {
    "minecraft:beetroot": "hearthandharvest:pickled_beetroots",
    "farmersdelight:cabbage": "hearthandharvest:pickled_cabbage",
    "minecraft:carrot": "hearthandharvest:pickled_carrots",
    "farmersdelight:onion": "hearthandharvest:pickled_onions",
    "minecraft:potato": "hearthandharvest:pickled_potatoes",
  };

  for (const [baseItem, pickledItem] of Object.entries(PICKLED_ITEMS)) {
    ITEM_FERMENTING_RECIPES.push({
      result: pickledItem,
      ingredients: [
        baseItem,
        baseItem,
        "hearthandharvest:salt",
        "hearthandharvest:jar",
      ],
    });
  }

  const SHAPELESS_RECIPES = [
    {
      result: "hearthandharvest:taco",
      ingredients: [
        "hearthandharvest:tortilla",
        "farmersdelight:beef_patty",
        "#brewinandchewin:foods/cheese_wedge",
        "farmersdelight:tomato",
        "#c:foods/cabbage",
      ],
    },
    {
      result: "hearthandharvest:cherry_juice",
      ingredients: [
        "vinery:cherry",
        "vinery:cherry",
        "minecraft:sugar",
        "minecraft:glass_bottle",
      ],
    },
  ];

  const SHAPED_RECIPES = [
    {
      result: "hearthandharvest:cotton_candy",
      pattern: [" W ", "SSS", " T "],
      key: {
        W: "minecraft:wind_charge",
        S: "minecraft:sugar",
        T: "minecraft:stick",
      },
    },
    {
      result: Item.of("hearthandharvest:jar", 10),
      pattern: ["GCG", "G G", "GGG"],
      key: {
        G: "minecraft:glass",
        C: "farmersdelight:canvas",
      },
    },
  ];

  const REMOVED_FERMENTING_RECIPE_IDS = [
    "moonshine",
    "sweet_berry_wine",
    "mead",
    "hard_cider",
    "root_beer",
  ];

  function toIngredientObject(ingredient) {
    return ingredient.startsWith("#")
      ? { tag: ingredient.slice(1) }
      : { item: ingredient };
  }

  function cookingRecipeId(resultId) {
    const [, shortId] = resultId.split(":");
    return `${DEFAULTS.cookingType}/${shortId}`;
  }

  function registerCookingRecipe(
    event,
    { result, container, ingredients, cookingTime, experience }
  ) {
    event
      .custom({
        type: DEFAULTS.cookingType,
        result: { count: 1, id: result },
        container: { count: 1, id: container },
        ingredients: ingredients.map((ingredient) =>
          toIngredientObject(ingredient)
        ),
        cookingTime: cookingTime ?? DEFAULTS.cookingTime,
        experience: experience ?? DEFAULTS.experience,
        recipe_book_tab: DEFAULTS.recipeBookTab,
      })
      .id(cookingRecipeId(result));
  }

  function registerShapelessRecipe(event, { result, ingredients }) {
    event.shapeless(result, ingredients).id(result);
  }

  function registerShapedRecipe(event, { result, pattern, key }) {
    event.shaped(result, pattern, key).id(result);
  }

  function removeBnCFermentingRecipeIntegration(event, recipeId) {
    event.remove(
      `hearthandharvest:integration/brewinandchewin/fermenting/${recipeId}`
    );
  }

  ServerEvents.recipes((event) => {
    for (const recipe of COOKING_RECIPES) {
      registerCookingRecipe(event, recipe);
    }

    for (const recipe of ITEM_FERMENTING_RECIPES) {
      global.BrewinAndChewinModule.registerItemFermentingRecipe(event, recipe);
    }

    for (const recipe of SHAPELESS_RECIPES) {
      registerShapelessRecipe(event, recipe);
    }

    for (const recipe of SHAPED_RECIPES) {
      registerShapedRecipe(event, recipe);
    }

    event.remove({ type: "hearthandharvest:aging" });

    for (const recipeId of REMOVED_FERMENTING_RECIPE_IDS) {
      removeBnCFermentingRecipeIntegration(event, recipeId);
    }
  });
})();
