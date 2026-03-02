(() => {
  RecipeViewerEvents.removeEntries("fluid", (event) => {
    event.remove("hearthandharvest:sap");
    event.remove("hearthandharvest:syrup");
  });
})();
