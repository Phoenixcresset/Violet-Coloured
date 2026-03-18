(() => {
  const pouringRecipesToAdd = [
    {
      fluid: "vinery:liquid_mojang_noir",
      result: "vinery:bottle_mojang_noir",
      container: "vinery:wine_bottle",
      fluid_amount: 500,
    },
  ];
  for (const fluid of global.Vinery.customFluids) {
    pouringRecipesToAdd.push({
      fluid: `violetcoloured:liquid_${fluid}`,
      result: `violetcoloured:${fluid}`,
      container: "vinery:wine_bottle",
      fluidAmount: 500,
    });
  }
  for (const fluid of global.Vinery.vineryFluids) {
    pouringRecipesToAdd.push({
      fluid: `vinery:liquid_${fluid}`,
      result: `vinery:${fluid}`,
      container: "vinery:wine_bottle",
      fluidAmount: 500,
    });
  }

  ServerEvents.recipes((event) => {
    for (const recipe of pouringRecipesToAdd) {
      global.BrewinAndChewin.registerPouringRecipe(event, recipe);
    }
  });
})();
