const itemsToHide = ["moonlight:spawn_box"];

RecipeViewerEvents.removeEntries("item", (event) => {
  itemsToHide.forEach((item) => {
    event.remove(item);
  });
});
