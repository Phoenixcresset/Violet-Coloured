(() => {
  const removedTagsFromEntries = {
    block: {
      "minecraft:infiniburn_overworld": [
        "quark:blaze_lantern",
        "quark:charcoal_block",
      ],
      "minecraft:infiniburn_nether": [
        "quark:blaze_lantern",
        "quark:charcoal_block",
      ],
      "minecraft:infiniburn_end": [
        "quark:blaze_lantern",
        "quark:charcoal_block",
      ],
    },
  };

  global.Tags.registerRemovedTagsFromEntries(removedTagsFromEntries);
})();
