(() => {
  const addedTagsToEntries = {
    item: {
      "brewinandchewin:cheese_wheels/unripe": {
        hearthandharvest: [
          "unripe_cheddar_cheese_wheel",
          "unripe_goat_cheese_wheel",
        ],
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
        hearthandharvest: [
          "unripe_cheddar_cheese_wheel",
          "unripe_goat_cheese_wheel",
        ],
      },
      "brewinandchewin:cheese_wheels/ripe": {
        hearthandharvest: ["cheddar_cheese_wheel", "goat_cheese_wheel"],
      },
    },
  };

  global.TagModule.registerAddedTagsToEntries(addedTagsToEntries);
})();
