/** @typedef {string} FluidTag */
/** @typedef {import("net.minecraft.world.item.crafting.Ingredient").$Ingredient$$Type} Ingredient */
/** @typedef {string} FluidId */
/** @typedef {string} ItemId */
/** @typedef {number} Temperature */
/** @typedef {number} Experience */
/** @typedef {number} FluidAmount */
/** @typedef {import("dev.latvian.mods.kubejs.recipe.RecipesKubeEvent").$RecipesKubeEvent$$Type} RecipeEvent */
/** @typedef {Object} FermentingRecipe */
/** @typedef {Object} PouringRecipe */

global.BrewinAndChewinModule = (function () {
  /**
   * Startup Script - To use at init
   * @param {string} jsonFileName
   * @param {Record<FluidTag, ItemId>} displays
   */
  function registerFluidItemDisplays(jsonFileName, displays) {
    JsonIO.write(
      `kubejs/assets/brewinandchewin/brewinandchewin/fluid_item_displays/${jsonFileName}.json`,
      displays
    );
  }

  /**
   *
   * @param {FluidTag} baseFluidTag
   * @param {Ingredient[]} ingredients
   * @param {FluidId} resultFluidId
   * @param {Temperature} temperature
   * @param {Experience} experience
   * @param {FluidAmount} baseFluidAmount
   * @param {FluidAmount} resultFluidAmount
   * @returns {FermentingRecipe}
   */
  function _createFluidFermentingRecipe(
    baseFluidTag,
    ingredients,
    resultFluidId,
    temperature,
    experience,
    baseFluidAmount,
    resultFluidAmount
  ) {
    if (experience === undefined) {
      experience = 1.0;
    }
    if (baseFluidAmount === undefined) {
      baseFluidAmount = 1000;
    }
    if (resultFluidAmount === undefined) {
      resultFluidAmount = 1000;
    }

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

  /**
   *
   * @param {FluidId} fluidId
   * @param {ItemId} outputItemId
   * @param {ItemId} containerId
   * @param {FluidAmount} fluidAmount
   * @param {number} outputItemAmount
   * @returns {PouringRecipe}
   */
  function _createPouringRecipe(
    fluidId,
    outputItemId,
    containerId,
    fluidAmount,
    outputItemAmount
  ) {
    if (outputItemAmount === undefined) {
      outputItemAmount = 1;
    }
    if (fluidAmount === undefined) {
      fluidAmount = 250;
    }

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

  /**
   * @param {RecipeEvent} event
   * @param {{
   * fluidId: FluidId,
   * outputItemId: ItemId,
   * containerId?: ItemId,
   * fluidAmount?: FluidAmount,
   * outputItemAmount?: number
   * }[]} recipes
   */
  function createPouringRecipes(event, recipes) {
    recipes.forEach((recipe) => {
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
    });
  }

  /**
   * @param {RecipeEvent} event
   * @param {{
   * baseFluidTag: FluidTag,
   * ingredients: Ingredient[],
   * resultFluidId: FluidId,
   * }[]} recipes
   */
  function createFermentingRecipes(event, recipes) {
    recipes.forEach((recipe) => {
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
    });
  }

  return {
    registerFluidItemDisplays: registerFluidItemDisplays,
    createPouringRecipes: createPouringRecipes,
    createFermentingRecipes: createFermentingRecipes,
  };
})();
