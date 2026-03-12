(() => {
  const fermentingRecipesToAdd = [
    {
      baseFluidTag: "#minecraft:water",
      ingredients: [
        { item: "vinery:red_grape" },
        { item: "vinery:red_grape" },
        { item: "vinery:red_grape" },
        { item: "minecraft:nether_wart" },
      ],
      resultFluidId: "violetcoloured:liquid_red_grape_juice",
    },
    {
      baseFluidTag: "#minecraft:water",
      ingredients: [
        { item: "vinery:white_grape" },
        { item: "vinery:white_grape" },
        { item: "vinery:white_grape" },
        { item: "minecraft:nether_wart" },
      ],
      resultFluidId: "violetcoloured:liquid_white_grape_juice",
    },
    {
      baseFluidTag: "#minecraft:water",
      ingredients: [
        { item: "minecraft:apple" },
        { item: "minecraft:apple" },
        { item: "minecraft:apple" },
        { item: "minecraft:nether_wart" },
      ],
      resultFluidId: "violetcoloured:liquid_apple_juice",
    },
    {
      baseFluidTag: "#violetcoloured:apple_juice",
      ingredients: [{ item: "minecraft:apple" }],
      resultFluidId: "vinery:liquid_apple_cider",
    },
    {
      baseFluidTag: "#violetcoloured:apple_juice",
      ingredients: [{ item: "minecraft:sugar" }],
      resultFluidId: "vinery:liquid_apple_wine",
    },
    {
      baseFluidTag: "#violetcoloured:white_grape_juice",
      ingredients: [
        { item: "minecraft:sugar" },
        { item: "minecraft:glowstone_dust" },
      ],
      resultFluidId: "vinery:liquid_mellohi_wine",
    },
    {
      baseFluidTag: "#violetcoloured:white_grape_juice",
      ingredients: [{ item: "minecraft:glow_berries" }],
      resultFluidId: "vinery:liquid_glowing_wine",
    },
    {
      baseFluidTag: "#violetcoloured:white_grape_juice",
      ingredients: [
        { item: "minecraft:glow_berries" },
        { item: "minecraft:honey_bottle" },
      ],
      resultFluidId: "vinery:liquid_solaris_wine",
    },
    {
      baseFluidTag: "#violetcoloured:red_grape_juice",
      ingredients: [{ item: "minecraft:sweet_berries" }],
      resultFluidId: "vinery:liquid_noir_wine",
    },
    {
      baseFluidTag: "#violetcoloured:red_grape_juice",
      ingredients: [{ item: "minecraft:sugar" }],
      resultFluidId: "vinery:liquid_red_wine",
    },
    {
      baseFluidTag: "#violetcoloured:red_grape_juice",
      ingredients: [
        { item: "minecraft:cocoa_beans" },
        { item: "minecraft:sugar" },
      ],
      resultFluidId: "vinery:liquid_strad_wine",
    },
    {
      baseFluidTag: "#violetcoloured:red_grape_juice",
      ingredients: [{ item: "vinery:cherry" }],
      resultFluidId: "vinery:liquid_cherry_wine",
    },
    {
      baseFluidTag: "#violetcoloured:red_grape_juice",
      ingredients: [
        { item: "minecraft:sugar" },
        { item: "minecraft:feather" },
        { item: "minecraft:blaze_rod" },
      ],
      resultFluidId: "vinery:liquid_cristel_wine",
    },
    {
      baseFluidTag: "#violetcoloured:white_grape_juice",
      ingredients: [{ item: "minecraft:gunpowder" }],
      resultFluidId: "vinery:liquid_creepers_crush",
    },
    {
      baseFluidTag: "#violetcoloured:white_grape_juice",
      ingredients: [{ item: "minecraft:kelp" }],
      resultFluidId: "vinery:liquid_kelp_cider",
    },
    {
      baseFluidTag: "#violetcoloured:red_grape_juice",
      ingredients: [
        { item: "minecraft:honey_bottle" },
        { item: "vinery:cherry" },
      ],
      resultFluidId: "vinery:liquid_lilitu_wine",
    },
    {
      baseFluidTag: "#violetcoloured:red_grape_juice",
      ingredients: [{ item: "minecraft:fermented_spider_eye" }],
      resultFluidId: "vinery:liquid_jo_special_mixture",
    },
    {
      baseFluidTag: "#violetcoloured:white_grape_juice",
      ingredients: [{ item: "minecraft:snowball" }],
      resultFluidId: "vinery:liquid_eiswein",
    },
    {
      baseFluidTag: "#violetcoloured:white_grape_juice",
      ingredients: [
        { item: "minecraft:sugar" },
        { item: "minecraft:kelp" },
        { item: "minecraft:iron_ingot" },
      ],
      resultFluidId: "vinery:liquid_aegis_wine",
    },
    {
      baseFluidTag: "#violetcoloured:red_grape_juice",
      ingredients: [
        { item: "minecraft:sugar" },
        { item: "minecraft:blaze_powder" },
        { item: "minecraft:gold_ingot" },
      ],
      resultFluidId: "vinery:liquid_bolvar_wine",
    },
    {
      baseFluidTag: "#violetcoloured:red_grape_juice",
      ingredients: [{ item: "minecraft:chorus_fruit" }],
      resultFluidId: "vinery:liquid_chorus_wine",
    },
    {
      baseFluidTag: "#violetcoloured:white_grape_juice",
      ingredients: [{ item: "minecraft:arrow" }],
      resultFluidId: "vinery:liquid_villagers_fright",
    },
    {
      baseFluidTag: "#violetcoloured:white_grape_juice",
      ingredients: [{ item: "minecraft:sugar" }],
      resultFluidId: "vinery:liquid_clark_wine",
    },
    {
      baseFluidTag: "#violetcoloured:red_grape_juice",
      ingredients: [{ item: "minecraft:iron_ingot" }],
      resultFluidId: "vinery:liquid_magnetic_wine",
    },
    {
      baseFluidTag: "#violetcoloured:red_grape_juice",
      ingredients: [
        { item: "minecraft:glistering_melon_slice" },
        { item: "minecraft:sugar" },
      ],
      resultFluidId: "vinery:liquid_stal_wine",
    },
    {
      baseFluidTag: "#violetcoloured:red_grape_juice",
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
      baseFluidTag: "#violetcoloured:white_grape_juice",
      ingredients: [
        { item: "vinery:apple_wine" },
        { item: "vinery:chenet_wine" },
        { item: "vinery:bolvar_wine" },
      ],
      resultFluidId: "vinery:liquid_jellie_wine",
    },
  ];

  ServerEvents.recipes((event) => {
    global.BrewinAndChewinModule.createFermentingRecipes(
      event,
      fermentingRecipesToAdd
    );
  });
})();
