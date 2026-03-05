(() => {
  // Rolls back vanilla potions 2D sprite from Hearth and Harvest 3D ones
  ClientEvents.generateAssets("after_mods", (event) => {
    event.json("minecraft:models/item/potion", {
      parent: "item/generated",
      textures: {
        layer0: "item/potion_overlay",
        layer1: "item/potion",
      },
    });
  });
})();
