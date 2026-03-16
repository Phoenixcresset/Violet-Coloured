global.BrewinAndChewinModule = (function BrewinAndChewinModule() {
  const DEFAULTS = {
    fluidAmount: 1000,
    pouringFluidAmount: 250,
    experience: 1,
    fermentingMealsCategory: "meals",
    fermentingType: "brewinandchewin:fermenting",
    pouringType: "brewinandchewin:keg_pouring",
    pouringRecipePrefix: "brewinandchewin:pouring",
    temperature: 3,
    unit: "millibuckets",
  };

  function toIngredientObject(ingredient) {
    return ingredient.startsWith("#")
      ? { tag: ingredient.slice(1) }
      : { item: ingredient };
  }

  function itemFermentingRecipeId(resultId) {
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
      .id(itemFermentingRecipeId(result));
  }

  function fluidFermentingRecipeId(resultId, baseId) {
    const [, shortResultId] = resultId.split(":");
    const [, shortBaseId] = baseId.split(":");
    return `${DEFAULTS.fermentingType}/${shortResultId}_from_${shortBaseId}`;
  }

  function registerFluidFermentingRecipe(
    event,
    {
      base,
      ingredients,
      result,
      temperature,
      experience,
      baseAmount,
      resultAmount,
    }
  ) {
    event
      .custom({
        type: DEFAULTS.fermentingType,
        base_fluid: {
          amount: baseAmount ?? DEFAULTS.fluidAmount,
          ingredient: toIngredientObject(base),
          unit: DEFAULTS.unit,
        },
        experience: experience ?? DEFAULTS.experience,
        ingredients: ingredients.map((ingredient) =>
          toIngredientObject(ingredient)
        ),
        result: {
          amount: resultAmount ?? DEFAULTS.fluidAmount,
          id: result,
        },
        temperature: temperature ?? DEFAULTS.temperature,
      })
      .id(fluidFermentingRecipeId(result, base));
  }

  function pouringRecipeId(resultId) {
    const [, shortId] = resultId.split(":");
    return `${DEFAULTS.pouringRecipePrefix}/${shortId}`;
  }

  function registerPouringRecipe(
    event,
    { fluid, result, container, fluidAmount, outputAmount }
  ) {
    event
      .custom({
        type: DEFAULTS.pouringType,
        fluid: {
          amount: fluidAmount ?? DEFAULTS.pouringFluidAmount,
          id: fluid,
        },
        output: {
          count: outputAmount ?? 1,
          id: result,
        },
        unit: DEFAULTS.unit,
        container:
          container !== undefined ? { count: 1, id: container } : undefined,
      })
      .id(pouringRecipeId(result));
  }

  function registerFluidItemDisplays(event, registryName, displays) {
    event.json(
      `violetcoloured:brewinandchewin/fluid_item_displays/${registryName}`,
      displays
    );
  }

  return {
    registerItemFermentingRecipe: registerItemFermentingRecipe,
    registerFluidFermentingRecipe: registerFluidFermentingRecipe,
    registerPouringRecipe: registerPouringRecipe,
    registerFluidItemDisplays: registerFluidItemDisplays,
  };
})();
