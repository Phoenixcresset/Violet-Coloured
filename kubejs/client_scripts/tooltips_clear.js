const tooltipClearingConfig = [
  {
    itemId: "supplementaries:sack",
    linesToClear: 6,
  },
  {
    itemId: /suppsquared:sack_.*/,
    linesToClear: 6,
  },
];

tooltipClearingConfig.forEach((itemConfig) => {
  ItemEvents.modifyTooltips((event) => {
    console.log("Obliterated Items", global.obliteratedItems);
    console.log("Clearing tooltips for item:", itemConfig);
    console.log("Matching Items", Ingredient.of(itemConfig.itemId));
    event.modify(itemConfig.itemId, (tooltip) => {
      for (let i = 0; i < itemConfig.linesToClear; i++) {
        tooltip.removeLine(1);
      }
    });
  });
});
