(() => {
  ItemEvents.modification((event) => {
    event.modify("measurements:tape_measure", (item) =>
      item.setMaxStackSize(1)
    );
  });
})();
