(() => {
  RecipeViewerEvents.removeEntries("fluid", (event) => {
    for (const fluid of global.Vinery.customFluids) {
      event.remove(`violetcoloured:liquid_${fluid}`);
    }
    for (const fluid of global.Vinery.vineryFluids) {
      event.remove(`vinery:liquid_${fluid}`);
    }
    event.remove("vinery:liquid_mojang_noir");
  });
})();
