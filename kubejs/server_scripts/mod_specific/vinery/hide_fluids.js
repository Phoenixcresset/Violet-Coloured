(() => {
  RecipeViewerEvents.removeEntries("fluid", (event) => {
    for (const liquid of global.VineryModule.vineryLiquids) {
      event.remove(`vinery:liquid_${liquid}`);
    }
    event.remove("vinery:liquid_mojang_noir");
  });
})();
