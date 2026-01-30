(() => {
  RecipeViewerEvents.removeEntries("fluid", (event) => {
    global.VineryModule.vineryLiquids.forEach((liquid) => {
      event.remove(`vinery:liquid_${liquid}`);
    });
    event.remove("vinery:liquid_mojang_noir");
  });
})();
