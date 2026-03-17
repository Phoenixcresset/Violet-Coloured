(() => {
  const addedTagsToEntries = {
    item: {
      "dummmmmmy:arthropod_heads": ["supplementaries:spider_head"],
      "minecraft:pig_food": ["minecraft:golden_carrot"],
    },
    block: {
      "farmersdelight:heat_sources": ["quark:blaze_lantern"],
    },
  };

  global.Tags.registerAddedTagsToEntries(addedTagsToEntries);
})();
