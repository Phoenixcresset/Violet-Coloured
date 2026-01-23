(() => {
  global.TagModule.registerRemovedTags({
    item: {
      supplementaries: [
        "blackboard_light_gray",
        "blackboard_gray",
        "blackboard_brown",
        "blackboard_red",
        "blackboard_orange",
        "blackboard_yellow",
        "blackboard_lime",
        "blackboard_green",
        "blackboard_cyan",
        "blackboard_light_blue",
        "blackboard_blue",
        "blackboard_purple",
        "blackboard_magenta",
        "blackboard_pink",
      ],
      sereneseasons: ["spring_crops"],
    },
    block: {
      minecraft: ["enderman_holdable"], // Remove enderman griefing
      supplementaries: [
        "frame_block_blacklist",
        "faucet_connection_blacklist",
        "water_holder",
      ],
      sereneseasons: ["spring_crops"],
    },
    entity_type: {
      supplementaries: [
        "cage_catchable",
        "cage_baby_catchable",
        "jar_catchable",
        "jar_baby_catchable",
        "tickable_when_captured",
      ],
    },
    "worldgen/structure": {
      amendments: ["add_potion_cauldron"],
    },
  });

  global.TagModule.registerRemovedTagsFromItems({
    item: {
      "curios:belt": {
        supplementaries: ["#keys", "quiver"],
      },
      "trinkets:legs/quiver": {
        supplementaries: ["quiver"],
      },
      "trinkets:legs/key": {
        supplementaries: ["key"],
      },
      "supplementaries:blackboard_black": {
        minecraft: ["charcoal", "coal", "#coals"],
      },
      "supplementaries:blackboard_white": {
        minecraft: ["quartz"],
        c: ["#gems/quartz"],
      },
    },
  });

  const tagsTypes = [
    "item",
    "block",
    "entity_type",
    "fluid",
    "worldgen/structure",
  ];
  // Uses forEach instead of a for of because of issues with the scope of tagType in ServerEvents.tags
  tagsTypes.forEach((tagType) => {
    ServerEvents.tags(tagType, (event) => {
      global.TagModule.apply(event, tagType);
    });
  });
})();
