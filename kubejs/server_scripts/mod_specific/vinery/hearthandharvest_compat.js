(() => {
  const largeBottles = [
    "violetcoloured:red_grape_juice",
    "violetcoloured:white_grape_juice",
    "vinery:wine_bottle",
    "vinery:solaris_wine",
    "vinery:noir_wine",
    "vinery:red_wine",
    "vinery:cherry_wine",
    "vinery:kelp_cider",
    "vinery:bolvar_wine",
    "vinery:villagers_fright",
    "vinery:clark_wine",
    "vinery:bottle_mojang_noir",
  ];

  global.Tags.registerAddedTagsToEntries({
    item: {
      "hearthandharvest:tall_bottles": largeBottles,
    },
  });
})();
