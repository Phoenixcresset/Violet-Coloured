(() => {
  const removedTags = {
    item: {
      quark: [
        "stone_tool_materials",
        "crab_tempt_items",
        "glow_shroom_feedables", // Stoneling tempt items
      ],
      sereneseasons: [
        "winter_crops",
        "spring_crops",
        "summer_crops",
        "autumn_crops",
      ],
      createaddition: ["plants", "plant_foods"],
      origins: ["meat"],
      tconstruct: ["seeds"],
      brewinandchewin: ["foods/horror_meat"],
    },
    block: {
      minecraft: ["enderman_holdable"], // Remove enderman griefing
      quark: ["crab_spawnable", "foxhound_spawnable"],
      supplementaries: [
        "frame_block_blacklist",
        "faucet_connection_blacklist",
        "water_holder",
        "barnacles_blacklist",
      ],
      sereneseasons: [
        "winter_crops",
        "spring_crops",
        "summer_crops",
        "autumn_crops",
        "unbreakable_infertile_crops",
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
      hearthandharvest: ["can_be_butchered"],
      horseman: ["cannot_swim"],
    },
    "worldgen/structure": {
      amendments: ["add_potion_cauldron"],
    },
  };

  global.TagModule.registerRemovedTags(removedTags);
})();
