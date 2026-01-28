RecipeViewerEvents.removeEntries("fluid", (event) => {
  event.remove("minecraft:milk");
  event.remove(Fluid.ingredientOf(/brewinandchewin:.*/));
});
