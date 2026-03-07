(() => {
  RecipeViewerEvents.removeEntries("fluid", (event) => {
    for (const fluid of global.VineryModule.customFluids) {
      event.remove(`violetcoloured:liquid_${fluid}`);
    }
    for (const fluid of global.VineryModule.vineryFluids) {
      event.remove(`vinery:liquid_${fluid}`);
    }
    event.remove("vinery:liquid_mojang_noir");
  });
})();
