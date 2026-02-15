(() => {
  const addedTagsToEntries = {
    item: {
      "c:foods/grape": {
        vinery: ["white_grape", "red_grape"],
      },
      "c:foods/fruit": {
        vinery: ["white_grape", "red_grape", "cherry"],
      },
      "c:crops": {
        minecraft: ["apple"], // Becomes a crop because of Vinery's apple tree
        vinery: ["white_grape", "red_grape", "cherry"],
      },
      "c:fruits/cherry": {
        vinery: ["cherry"],
      },
      "c:foods/food_poisoning": {
        vinery: ["rotten_cherry"],
      },
    },
  };
  const removedTagsFromEntries = {
    item: {
      // Grapes are toxic to foxes
      "minecraft:fox_food": {
        vinery: ["white_grape", "red_grape"],
      },
    },
  };

  global.TagModule.registerAddedTagsToEntries(addedTagsToEntries);
  global.TagModule.registerRemovedTagsFromEntries(removedTagsFromEntries);
})();
