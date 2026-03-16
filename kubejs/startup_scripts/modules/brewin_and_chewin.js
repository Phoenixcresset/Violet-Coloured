global.BrewinAndChewinModule = (function BrewinAndChewinModule() {
  const DEFAULTS = {
    fluidAmount: 1000,
    experience: 1,
    fermentingMealsCategory: "meals",
    fermentingType: "brewinandchewin:fermenting",
    temperature: 3,
  };

  function registerFluidItemDisplays(event, registryName, displays) {
    event.json(
      `violetcoloured:brewinandchewin/fluid_item_displays/${registryName}`,
      displays
    );
  }

  function _createFluidFermentingRecipe(
    baseFluidTag,
    ingredients,
    resultFluidId,
    temperature,
    experience,
    baseFluidAmount,
    resultFluidAmount
  ) {
    experience = experience !== undefined ? experience : 1;
    baseFluidAmount = baseFluidAmount !== undefined ? baseFluidAmount : 1000;
    resultFluidAmount =
      resultFluidAmount !== undefined ? resultFluidAmount : 1000;

    const recipe = {
      type: "brewinandchewin:fermenting",
      base_fluid: {
        amount: baseFluidAmount,
        ingredient: {
          tag: baseFluidTag,
        },
        unit: "millibuckets",
      },
      experience: experience,
      ingredients: ingredients,
      result: {
        amount: resultFluidAmount,
        id: resultFluidId,
      },
    };
    if (temperature !== undefined) {
      recipe.temperature = temperature;
    }
    return recipe;
  }

  function _createPouringRecipe(
    fluidId,
    outputItemId,
    containerId,
    fluidAmount,
    outputItemAmount
  ) {
    outputItemAmount = outputItemAmount !== undefined ? outputItemAmount : 1;
    fluidAmount = fluidAmount !== undefined ? fluidAmount : 250;

    const recipe = {
      type: "brewinandchewin:keg_pouring",
      fluid: {
        amount: fluidAmount,
        id: fluidId,
      },
      output: {
        count: outputItemAmount,
        id: outputItemId,
      },
      unit: "millibuckets",
    };
    if (containerId !== undefined) {
      recipe.container = {
        count: 1,
        id: containerId,
      };
    }
    return recipe;
  }

  function createPouringRecipes(event, recipes) {
    for (const recipe of recipes) {
      event
        .custom(
          _createPouringRecipe(
            recipe.fluidId,
            recipe.outputItemId,
            recipe.containerId,
            recipe.fluidAmount,
            recipe.outputItemAmount
          )
        )
        .id(`vinery:pouring/${recipe.outputItemId.split(":")[1]}`);
    }
  }

  function createFermentingRecipes(event, recipes) {
    for (const recipe of recipes) {
      event
        .custom(
          _createFluidFermentingRecipe(
            recipe.baseFluidTag,
            recipe.ingredients,
            recipe.resultFluidId,
            recipe.temperature,
            recipe.experience,
            recipe.baseFluidAmount,
            recipe.resultFluidAmount
          )
        )
        .id(
          `vinery:fermenting/${recipe.resultFluidId.split(":")[1]}_from_${recipe.baseFluidTag.split(":")[1]}`
        );
    }
  }
  function toIngredientObject(ingredient) {
    return ingredient.startsWith("#")
      ? { tag: ingredient.slice(1) }
      : { item: ingredient };
  }

  function fermentingRecipeId(resultId) {
    const [, shortId] = resultId.split(":");
    return `${DEFAULTS.fermentingType}/${shortId}`;
  }

  function registerItemFermentingRecipe(
    event,
    { result, resultCount, ingredients, temperature, experience }
  ) {
    event
      .custom({
        type: DEFAULTS.fermentingType,
        result: { count: resultCount ?? 1, id: result },
        category: DEFAULTS.fermentingMealsCategory,
        ingredients: ingredients.map((ingredient) =>
          toIngredientObject(ingredient)
        ),
        temperature: temperature ?? DEFAULTS.temperature,
        experience: experience ?? DEFAULTS.experience,
      })
      .id(fermentingRecipeId(result));
  }

  return {
    registerFluidItemDisplays: registerFluidItemDisplays,
    createPouringRecipes: createPouringRecipes,
    createFermentingRecipes: createFermentingRecipes,
    registerItemFermentingRecipe: registerItemFermentingRecipe,
  };
})();
