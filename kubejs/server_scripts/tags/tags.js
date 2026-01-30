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

  const removedTags = {
    item: {
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
    },
    "worldgen/structure": {
      amendments: ["add_potion_cauldron"],
    },
  };

  const removedTagsFromEntries = {
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
      // Removes the dragon head to count as an arthropod since Supplementaries adds a spider head
      "dummmmmmy:arthropod_heads": {
        minecraft: ["dragon_head"],
      },
      "c:dyes/white": {
        chalk: ["white_chalk"],
      },
      "c:dyes/light_gray": {
        chalk: ["light_gray_chalk"],
      },
      "c:dyes/gray": {
        chalk: ["gray_chalk"],
      },
      "c:dyes/black": {
        chalk: ["black_chalk"],
      },
      "c:dyes/brown": {
        chalk: ["brown_chalk"],
      },
      "c:dyes/red": {
        chalk: ["red_chalk"],
      },
      "c:dyes/orange": {
        chalk: ["orange_chalk"],
      },
      "c:dyes/yellow": {
        chalk: ["yellow_chalk"],
      },
      "c:dyes/lime": {
        chalk: ["lime_chalk"],
      },
      "c:dyes/green": {
        chalk: ["green_chalk"],
      },
      "c:dyes/cyan": {
        chalk: ["cyan_chalk"],
      },
      "c:dyes/light_blue": {
        chalk: ["light_blue_chalk"],
      },
      "c:dyes/blue": {
        chalk: ["blue_chalk"],
      },
      "c:dyes/purple": {
        chalk: ["purple_chalk"],
      },
      "c:dyes/magenta": {
        chalk: ["magenta_chalk"],
      },
      "c:dyes/pink": {
        chalk: ["pink_chalk"],
      },
    },
  };

  global.TagModule.registerAddedTagsToEntries(addedTagsToEntries);
  global.TagModule.registerRemovedTags(removedTags);
  global.TagModule.registerRemovedTagsFromEntries(removedTagsFromEntries);
})();
