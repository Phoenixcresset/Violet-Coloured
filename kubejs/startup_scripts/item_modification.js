ItemEvents.modification((event) => {
  event.modify("quark:trowel", (item) => {
    item.set("minecraft:unbreakable", { showInTooltip: false });
  });
});
