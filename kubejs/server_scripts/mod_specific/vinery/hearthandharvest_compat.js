(() => {
  const largeBottles = {
    violetcoloured: ["red_grape_juice", "white_grape_juice"],
    vinery: [
      "wine_bottle",
      "solaris_wine",
      "noir_wine",
      "red_wine",
      "cherry_wine",
      "kelp_cider",
      "bolvar_wine",
      "villagers_fright",
      "clark_wine",
      "bottle_mojang_noir",
    ],
  };
  global.TagModule.registerAddedTagsToEntries({
    item: {
      "hearthandharvest:tall_bottles": largeBottles,
    },
  });
})();
