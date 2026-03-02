(() => {
  const addedTagsToEntries = {
    item: {
      "dummmmmmy:arthropod_heads": {
        supplementaries: ["spider_head"],
      },
      "hearthandharvest:cheese_slices": {
        brewinandchewin: ["flaxen_cheese_wedge", "scarlet_cheese_wedge"],
      },
      "brewinandchewin:foods/cheese_wedge": {
        hearthandharvest: ["cheddar_cheese_slice", "goat_cheese_slice"],
      },
    },
  };

  global.TagModule.registerAddedTagsToEntries(addedTagsToEntries);
})();
