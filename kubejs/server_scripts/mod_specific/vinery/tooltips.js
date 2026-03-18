(() => {
  ItemEvents.modifyTooltips((event) => {
    event.modify(Ingredient.of("#vinery:small_bottle"), (tooltip) => {
      tooltip.removeText(Text.translatable("tooltip.vinery.bottle_size.small"));
    });
    event.modify(Ingredient.of("#vinery:large_bottle"), (tooltip) => {
      tooltip.removeText(Text.translatable("tooltip.vinery.bottle_size.big"));
      // Needed because of Stal Wine
      tooltip.removeText(Text.translatable("tooltip.vinery.bottle_size.small"));
    });
  });
})();
