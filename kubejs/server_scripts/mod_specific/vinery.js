(() => {
  const fermentingRecipesToAdd = [
    {
      baseFluidTag: "#minecraft:water",
      ingredients: [
        { item: "minecraft:honey_bottle" },
        { item: "minecraft:sugar" },
      ],
      resultFluidId: "vinery:liquid_mead",
    },
    {
      baseFluidTag: "#vinery:apple_juice",
      ingredients: [{ item: "minecraft:apple" }],
      resultFluidId: "vinery:liquid_apple_cider",
    },
    {
      baseFluidTag: "#vinery:apple_juice",
      ingredients: [{ item: "minecraft:sugar" }],
      resultFluidId: "vinery:liquid_apple_wine",
    },
    {
      baseFluidTag: "#vinery:white_grapejuice",
      ingredients: [
        { item: "minecraft:sugar" },
        { item: "minecraft:glowstone_dust" },
      ],
      resultFluidId: "vinery:liquid_mellohi_wine",
    },
    {
      baseFluidTag: "#vinery:white_grapejuice",
      ingredients: [{ item: "minecraft:glow_berries" }],
      resultFluidId: "vinery:liquid_glowing_wine",
    },
    {
      baseFluidTag: "#vinery:white_grapejuice",
      ingredients: [
        { item: "minecraft:glow_berries" },
        { item: "minecraft:honey_bottle" },
      ],
      resultFluidId: "vinery:liquid_solaris_wine",
    },
    {
      baseFluidTag: "#vinery:red_grapejuice",
      ingredients: [{ item: "minecraft:sweet_berries" }],
      resultFluidId: "vinery:liquid_noir_wine",
    },
    {
      baseFluidTag: "#vinery:red_grapejuice",
      ingredients: [{ item: "minecraft:sugar" }],
      resultFluidId: "vinery:liquid_red_wine",
    },
    {
      baseFluidTag: "#vinery:red_grapejuice",
      ingredients: [
        { item: "minecraft:cocoa_beans" },
        { item: "minecraft:sugar" },
      ],
      resultFluidId: "vinery:liquid_strad_wine",
    },
    {
      baseFluidTag: "#vinery:red_grapejuice",
      ingredients: [{ item: "vinery:cherry" }],
      resultFluidId: "vinery:liquid_cherry_wine",
    },
    {
      baseFluidTag: "#vinery:red_grapejuice",
      ingredients: [
        { item: "minecraft:sugar" },
        { item: "minecraft:feather" },
        { item: "minecraft:blaze_rod" },
      ],
      resultFluidId: "vinery:liquid_cristel_wine",
    },
    {
      baseFluidTag: "#vinery:white_grapejuice",
      ingredients: [{ item: "minecraft:gunpowder" }],
      resultFluidId: "vinery:liquid_creepers_crush",
    },
    {
      baseFluidTag: "#vinery:white_grapejuice",
      ingredients: [{ item: "minecraft:kelp" }],
      resultFluidId: "vinery:liquid_kelp_cider",
    },
    {
      baseFluidTag: "#vinery:red_grapejuice",
      ingredients: [
        { item: "minecraft:honey_bottle" },
        { item: "vinery:cherry" },
      ],
      resultFluidId: "vinery:liquid_lilitu_wine",
    },
    {
      baseFluidTag: "#vinery:red_grapejuice",
      ingredients: [{ item: "minecraft:fermented_spider_eye" }],
      resultFluidId: "vinery:liquid_jo_special_mixture",
    },
    {
      baseFluidTag: "#vinery:white_grapejuice",
      ingredients: [{ item: "minecraft:snowball" }],
      resultFluidId: "vinery:liquid_eiswein",
    },
    {
      baseFluidTag: "#vinery:white_grapejuice",
      ingredients: [
        { item: "minecraft:sugar" },
        { item: "minecraft:kelp" },
        { item: "minecraft:iron_ingot" },
      ],
      resultFluidId: "vinery:liquid_aegis_wine",
    },
    {
      baseFluidTag: "#vinery:red_grapejuice",
      ingredients: [
        { item: "minecraft:sugar" },
        { item: "minecraft:blaze_powder" },
        { item: "minecraft:gold_ingot" },
      ],
      resultFluidId: "vinery:liquid_bolvar_wine",
    },
    {
      baseFluidTag: "#vinery:red_grapejuice",
      ingredients: [{ item: "minecraft:chorus_fruit" }],
      resultFluidId: "vinery:liquid_chorus_wine",
    },
    {
      baseFluidTag: "#vinery:white_grapejuice",
      ingredients: [{ item: "minecraft:arrow" }],
      resultFluidId: "vinery:liquid_villagers_fright",
    },
    {
      baseFluidTag: "#vinery:white_grapejuice",
      ingredients: [{ item: "minecraft:sugar" }],
      resultFluidId: "vinery:liquid_clark_wine",
    },
    {
      baseFluidTag: "#vinery:red_grapejuice",
      ingredients: [{ item: "minecraft:iron_ingot" }],
      resultFluidId: "vinery:liquid_magnetic_wine",
    },
    {
      baseFluidTag: "#vinery:red_grapejuice",
      ingredients: [
        { item: "minecraft:glistering_melon_slice" },
        { item: "minecraft:sugar" },
      ],
      resultFluidId: "vinery:liquid_stal_wine",
    },
    {
      baseFluidTag: "#vinery:red_grapejuice",
      ingredients: [
        { item: "minecraft:spider_eye" },
        { item: "minecraft:sugar" },
      ],
      resultFluidId: "vinery:liquid_chenet_wine",
    },
    {
      baseFluidTag: "#vinery:red_wine",
      ingredients: [
        { item: "minecraft:honey_bottle" },
        { item: "vinery:cherry" },
      ],
      resultFluidId: "vinery:liquid_mojang_noir",
    },
    {
      baseFluidTag: "#vinery:white_grapejuice",
      ingredients: [
        { item: "vinery:apple_wine" },
        { item: "vinery:chenet_wine" },
        { item: "vinery:bolvar_wine" },
      ],
      resultFluidId: "vinery:liquid_jellie_wine",
    },
  ];

  const pouringRecipesToAdd = [
    {
      fluidId: "vinery:liquid_mojang_noir",
      outputItemId: "vinery:bottle_mojang_noir",
      containerId: "vinery:wine_bottle",
    },
  ];

  const vineryLiquids = [
    "red_grapejuice",
    "white_grapejuice",
    "apple_juice",
    "mead",
    "apple_cider",
    "apple_wine",
    "mellohi_wine",
    "glowing_wine",
    "solaris_wine",
    "noir_wine",
    "red_wine",
    "strad_wine",
    "cherry_wine",
    "cristel_wine",
    "creepers_crush",
    "kelp_cider",
    "lilitu_wine",
    "jo_special_mixture",
    "eiswein",
    "aegis_wine",
    "bolvar_wine",
    "chorus_wine",
    "villagers_fright",
    "clark_wine",
    "magnetic_wine",
    "stal_wine",
    "chenet_wine",
    "jellie_wine",
  ];

  for (const liquid of vineryLiquids) {
    pouringRecipesToAdd.push({
      fluidId: `vinery:liquid_${liquid}`,
      outputItemId: `vinery:${liquid}`,
      containerId: "vinery:wine_bottle",
    });
  }

  ServerEvents.recipes((event) => {
    global.BrewinAndChewinModule.createFermentingRecipes(
      event,
      fermentingRecipesToAdd
    );
    global.BrewinAndChewinModule.createPouringRecipes(
      event,
      pouringRecipesToAdd
    );
  });

  RecipeViewerEvents.removeEntries("fluid", (event) => {
    vineryLiquids.forEach((liquid) => {
      event.remove(`vinery:liquid_${liquid}`);
    });
    event.remove("vinery:liquid_mojang_noir");
  });

  ServerEvents.generateData("after_mods", (event) => {
    const placedFeaturesToRemove = [
      "jungle_red_grape_bush__chance",
      "jungle_white_grape_bush__chance",
      "savanna_red_grape_bush__chance",
      "savanna_white_grape_bush__chance",
      "taiga_red_grape_bush__chance",
      "taiga_white_grape_bush__chance",
    ];
    
    for (const path of placedFeaturesToRemove) {
      global
        .DataGenModule()
        .removeData(event, "placed_feature", "vinery", path);
    }

    const replacedAppleTreeWithOakLog = {
      type: "minecraft:tree",
      config: {
        dirt_provider: {
          type: "minecraft:simple_state_provider",
          state: {
            Name: "minecraft:rooted_dirt",
          },
        },
        trunk_provider: {
          type: "minecraft:simple_state_provider",
          state: {
            Name: "minecraft:oak_log",
            Properties: {
              axis: "y",
            },
          },
        },
        foliage_provider: {
          type: "minecraft:weighted_state_provider",
          entries: [
            {
              data: {
                Name: "vinery:apple_leaves",
                Properties: {
                  can_grow_apples: "false",
                  age: "0",
                  has_apples: "false",
                  distance: "7",
                  persistent: "false",
                  waterlogged: "false",
                },
              },
              weight: 9,
            },
            {
              data: {
                Name: "vinery:apple_leaves",
                Properties: {
                  can_grow_apples: "false",
                  age: "1",
                  has_apples: "false",
                  distance: "7",
                  persistent: "false",
                  waterlogged: "false",
                },
              },
              weight: 1,
            },
            {
              data: {
                Name: "vinery:apple_leaves",
                Properties: {
                  can_grow_apples: "true",
                  age: "0",
                  has_apples: "false",
                  distance: "7",
                  persistent: "false",
                  waterlogged: "false",
                },
              },
              weight: 3,
            },
          ],
        },
        trunk_placer: {
          type: "minecraft:fancy_trunk_placer",
          base_height: 13,
          height_rand_a: 1,
          height_rand_b: 6,
        },
        foliage_placer: {
          type: "minecraft:cherry_foliage_placer",
          corner_hole_chance: 1,
          hanging_leaves_chance: 0.2,
          hanging_leaves_extension_chance: 0.9,
          height: 4,
          offset: 2,
          radius: 4,
          wide_bottom_layer_hole_chance: 0.25,
        },
        ignore_vines: true,
        force_dirt: false,
        minimum_size: {
          type: "minecraft:two_layers_feature_size",
          min_clipped_height: 4,
          limit: 0,
          lower_size: 0,
          upper_size: 0,
        },
        sapling_provider: {
          type: "minecraft:simple_state_provider",
          state: {
            Name: "vinery:apple_sapling",
            Properties: {
              stage: "0",
            },
          },
        },
        decorators: [],
      },
    };

    const appleTreeFileNames = ["apple", "apple_variant"];
    appleTreeFileNames.forEach((fileName) => {
      global
        .DataGenModule()
        .replaceData(
          event,
          "configured_feature",
          "vinery",
          `${fileName}`,
          replacedAppleTreeWithOakLog
        );
    });
  });
})();
