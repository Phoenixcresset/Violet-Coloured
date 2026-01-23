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
  },
  block: {
    minecraft: ["enderman_holdable"], // Remove enderman griefing
    supplementaries: [
      "frame_block_blacklist",
      "faucet_connection_blacklist",
      "water_holder",
    ],
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

ServerEvents.tags("item", (event) => {
  global.TagModule.apply(event, "item");
});

ServerEvents.tags("block", (event) => {
  global.TagModule.apply(event, "block");
});

ServerEvents.tags("entity_type", (event) => {
  global.TagModule.apply(event, "entity_type");
});

ServerEvents.tags("fluid", (event) => {
  global.TagModule.apply(event, "fluid");
});

ServerEvents.tags("worldgen/structure", (event) => {
  global.TagModule.apply(event, "worldgen/structure");
});
