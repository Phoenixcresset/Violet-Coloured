(() => {
  const pouringRecipesToAdd = [
    {
      fluidId: "vinery:liquid_mojang_noir",
      outputItemId: "vinery:bottle_mojang_noir",
      containerId: "vinery:wine_bottle",
    },
  ];

  for (const liquid of global.VineryModule.vineryLiquids) {
    pouringRecipesToAdd.push({
      fluidId: `vinery:liquid_${liquid}`,
      outputItemId: `vinery:${liquid}`,
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
