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
      "minecraft:hanging_signs": {
        vinery: ["dark_cherry_hanging_sign"],
      },
      "minecraft:slabs": {
        vinery: [
          "dirt_slab",
          "grass_slab",
          "dirt_path_slab",
          "coarse_dirt_slab",
        ],
      },
      "c:stripped_logs": {
        vinery: ["stripped_dark_cherry_log"],
      },
      "c:stripped_woods": {
        vinery: ["stripped_dark_cherry_wood"],
      },
      "c:fence_gates/wooden": {
        vinery: ["dark_cherry_fence_gate"],
      },
      "minecraft:fence_gates": {
        vinery: ["dark_cherry_fence_gate"],
      },
      "farmersdelight:cabinets/wooden": {
        vinery: ["dark_cherry_cabinet"],
      },
      "c:seeds": {
        vinery: ["red_grape_seeds", "white_grape_seeds"],
      },
    },
    block: {
      "minecraft:ceiling_hanging_signs": {
        vinery: ["dark_cherry_hanging_sign"],
      },
      "minecraft:wall_hanging_signs": {
        vinery: ["dark_cherry_wall_hanging_sign"],
      },
      "minecraft:standing_signs": {
        vinery: ["dark_cherry_sign"],
      },
      "minecraft:wall_signs": {
        vinery: ["dark_cherry_wall_sign"],
      },
      "minecraft:slabs": {
        vinery: [
          "dirt_slab",
          "grass_slab",
          "dirt_path_slab",
          "coarse_dirt_slab",
        ],
      },
      "c:stripped_logs": {
        vinery: ["stripped_dark_cherry_log"],
      },
      "c:stripped_woods": {
        vinery: ["stripped_dark_cherry_wood"],
      },
      "minecraft:overworld_natural_logs": {
        vinery: ["dark_cherry_log"],
      },
      "minecraft:snaps_goat_horn": {
        vinery: ["dark_cherry_log"],
      },
      "c:fence_gates/wooden": {
        vinery: ["dark_cherry_fence_gate"],
      },
      "minecraft:fence_gates": {
        vinery: ["dark_cherry_fence_gate"],
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
    block: {
      "minecraft:wall_signs": {
        vinery: ["dark_cherry_sign"],
      },
    },
  };

  const removedTags = {
    item: {
      vinery: [
        "ignore_block_item",
        "white_wine",
        "red_wine",
        "hanging_signs",
        "grape_seeds",
        "red_grape",
        "white_grape",
      ],
    },
    block: {
      vinery: [
        "ceiling_hanging_signs",
        "wall_hanging_signs",
        "all_hanging_signs",
        "can_not_connect",
      ],
    },
  };

  global.TagModule.registerAddedTagsToEntries(addedTagsToEntries);
  global.TagModule.registerRemovedTagsFromEntries(removedTagsFromEntries);
  global.TagModule.registerRemovedTags(removedTags);
})();
