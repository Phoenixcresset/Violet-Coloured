(() => {
  const addedTagsToEntries = {
    item: {
      "brewinandchewin:cheese_wheels/unripe": {
        hearthandharvest: ["unripe_cheddar_cheese_wheel", "unripe_goat_cheese_wheel"],
      },
      "brewinandchewin:cheese_wheels/ripe": {
        hearthandharvest: ["cheddar_cheese_wheel", "goat_cheese_wheel"],
      },
      "c:foods/edible_when_placed": {
        hearthandharvest: ["cheddar_cheese_wheel", "goat_cheese_wheel"],
      },
    },
    block: {
      "brewinandchewin:cheese_wheels/unripe": {
        hearthandharvest: ["unripe_cheddar_cheese_wheel", "unripe_goat_cheese_wheel"],
      },
      "brewinandchewin:cheese_wheels/ripe": {
        hearthandharvest: ["cheddar_cheese_wheel", "goat_cheese_wheel"],
      },
    },
  };

  const removedTagsFromEntries = {
    block: {
      "hearthandharvest:tappable": {
        biomesoplenty: ["fir_log", "maple_log", "pine_log"],
        autumnity: ["maple_log", "sappy_maple_log"], // TODO: remove if/when Autumnity is added to the modpack, but for now this is needed to prevent errors from the missing tag
      },
    },
  };

  global.TagModule.registerAddedTagsToEntries(addedTagsToEntries);
  global.TagModule.registerRemovedTagsFromEntries(removedTagsFromEntries);
})();
