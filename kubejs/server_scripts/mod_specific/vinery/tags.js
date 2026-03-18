(() => {
  const addedTagsToEntries = {
    item: {
      "c:crops": [
        "minecraft:apple", // Becomes a crop because of Vinery's apple tree
        "vinery:cherry",
        "vinery:red_grape",
        "vinery:white_grape",
      ],
      "c:fence_gates/wooden": ["vinery:dark_cherry_fence_gate"],
      "c:foods/food_poisoning": ["vinery:rotten_cherry"],
      "c:foods/fruit": [
        "vinery:cherry",
        "vinery:red_grape",
        "vinery:white_grape",
      ],
      "c:foods/grape": ["vinery:red_grape", "vinery:white_grape"],
      "c:fruits/cherry": ["vinery:cherry"],
      "c:seeds": ["vinery:red_grape_seeds", "vinery:white_grape_seeds"],
      "c:stripped_logs": ["vinery:stripped_dark_cherry_log"],
      "c:stripped_woods": ["vinery:stripped_dark_cherry_wood"],
      "farmersdelight:cabinets/wooden": ["vinery:dark_cherry_cabinet"],
      "minecraft:fence_gates": ["vinery:dark_cherry_fence_gate"],
      "minecraft:hanging_signs": ["vinery:dark_cherry_hanging_sign"],
      "minecraft:slabs": [
        "vinery:coarse_dirt_slab",
        "vinery:dirt_path_slab",
        "vinery:dirt_slab",
        "vinery:grass_slab",
      ],
    },
    block: {
      "c:fence_gates/wooden": ["vinery:dark_cherry_fence_gate"],
      "c:stripped_logs": ["vinery:stripped_dark_cherry_log"],
      "c:stripped_woods": ["vinery:stripped_dark_cherry_wood"],
      "minecraft:ceiling_hanging_signs": ["vinery:dark_cherry_hanging_sign"],
      "minecraft:fence_gates": ["vinery:dark_cherry_fence_gate"],
      "minecraft:overworld_natural_logs": ["vinery:dark_cherry_log"],
      "minecraft:slabs": [
        "vinery:coarse_dirt_slab",
        "vinery:dirt_path_slab",
        "vinery:dirt_slab",
        "vinery:grass_slab",
      ],
      "minecraft:snaps_goat_horn": ["vinery:dark_cherry_log"],
      "minecraft:standing_signs": ["vinery:dark_cherry_sign"],
      "minecraft:wall_hanging_signs": ["vinery:dark_cherry_wall_hanging_sign"],
      "minecraft:wall_signs": ["vinery:dark_cherry_wall_sign"],
    },
  };
  const removedTagsFromEntries = {
    item: {
      // Grapes are toxic to foxes
      "minecraft:fox_food": ["vinery:red_grape", "vinery:white_grape"],
    },
    block: {
      "minecraft:wall_signs": ["vinery:dark_cherry_sign"],
    },
  };

  const removedTags = {
    item: [
      "vinery:ignore_block_item",
      "vinery:white_wine",
      "vinery:red_wine",
      "vinery:hanging_signs",
      "vinery:grape_seeds",
      "vinery:red_grape",
      "vinery:white_grape",
    ],
    block: [
      "vinery:ceiling_hanging_signs",
      "vinery:wall_hanging_signs",
      "vinery:all_hanging_signs",
      "vinery:can_not_connect",
    ],
  };
  global.Tags.registerAddedTagsToEntries(addedTagsToEntries);
  global.Tags.registerRemovedTagsFromEntries(removedTagsFromEntries);
  global.Tags.registerRemovedTags(removedTags);
})();
