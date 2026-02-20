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
      "minecraft:pig_food": {
        minecraft: ["golden_carrot"],
      },
    },
    block: {
      "farmersdelight:heat_sources": {
        quark: ["blaze_lantern"],
      },
    },
  };

  global.TagModule.registerAddedTagsToEntries(addedTagsToEntries);
})();
