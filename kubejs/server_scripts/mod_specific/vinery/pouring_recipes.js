(() => {
  const pouringRecipesToAdd = [
    {
      fluidId: "vinery:liquid_mojang_noir",
      outputItemId: "vinery:bottle_mojang_noir",
      containerId: "vinery:wine_bottle",
    },
  ];
  for (const fluid of global.VineryModule.customFluids) {
    pouringRecipesToAdd.push({
      fluidId: `violetcoloured:liquid_${fluid}`,
      outputItemId: `violetcoloured:${fluid}`,
      containerId: "vinery:wine_bottle",
    });
  }
  for (const fluid of global.VineryModule.vineryFluids) {
    pouringRecipesToAdd.push({
      fluidId: `vinery:liquid_${fluid}`,
      outputItemId: `vinery:${fluid}`,
      containerId: "vinery:wine_bottle",
    });
  }

  ServerEvents.recipes((event) => {
    global.BrewinAndChewinModule.createPouringRecipes(
      event,
      pouringRecipesToAdd
    );
  });
})();
