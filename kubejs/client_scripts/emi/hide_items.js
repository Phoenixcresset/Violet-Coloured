(() => {
  const itemsToHide = ["moonlight:spawn_box"];

  RecipeViewerEvents.removeEntries("item", (event) => {
    for (const item of itemsToHide) {
      event.remove(item);
    }
  });
})();
