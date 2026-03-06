(() => {
  const blacklistedSeeds = new Set([
    "vinery:red_grape_seeds",
    "vinery:white_grape_seeds",
  ]);
  BlockEvents.rightClicked((event) => {
    let blockId = String(event.getBlock().getId());
    let itemId = String(event.getItem().getId());

    if (blockId === "vinery:grapevine_stem") {
      if (itemId === "minecraft:shears") {
        event.cancel();
      }
    } else if (blacklistedSeeds.has(itemId)) {
      event.cancel();
    }
  });
})();
