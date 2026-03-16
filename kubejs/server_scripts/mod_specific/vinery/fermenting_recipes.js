(() => {
  const fermentingRecipesToAdd = [
    {
      base: "#minecraft:water",
      ingredients: [
        "vinery:red_grape",
        "vinery:red_grape",
        "vinery:red_grape",
        "minecraft:nether_wart",
      ],
      result: "violetcoloured:liquid_red_grape_juice",
    },
    {
      base: "#minecraft:water",
      ingredients: [
        "vinery:white_grape",
        "vinery:white_grape",
        "vinery:white_grape",
        "minecraft:nether_wart",
      ],
      result: "violetcoloured:liquid_white_grape_juice",
    },
    {
      base: "#minecraft:water",
      ingredients: [
        "minecraft:apple",
        "minecraft:apple",
        "minecraft:apple",
        "minecraft:nether_wart",
      ],
      result: "violetcoloured:liquid_apple_juice",
    },
    {
      base: "#violetcoloured:apple_juice",
      ingredients: ["minecraft:apple"],
      result: "vinery:liquid_apple_cider",
    },
    {
      base: "#violetcoloured:apple_juice",
      ingredients: ["minecraft:sugar"],
      result: "vinery:liquid_apple_wine",
    },
    {
      base: "#violetcoloured:white_grape_juice",
      ingredients: ["minecraft:sugar", "minecraft:glowstone_dust"],
      result: "vinery:liquid_mellohi_wine",
    },
    {
      base: "#violetcoloured:white_grape_juice",
      ingredients: ["minecraft:glow_berries"],
      result: "vinery:liquid_glowing_wine",
    },
    {
      base: "#violetcoloured:white_grape_juice",
      ingredients: ["minecraft:glow_berries", "minecraft:honey_bottle"],
      result: "vinery:liquid_solaris_wine",
    },
    {
      base: "#violetcoloured:red_grape_juice",
      ingredients: ["minecraft:sweet_berries"],
      result: "vinery:liquid_noir_wine",
    },
    {
      base: "#violetcoloured:red_grape_juice",
      ingredients: ["minecraft:sugar"],
      result: "vinery:liquid_red_wine",
    },
    {
      base: "#violetcoloured:red_grape_juice",
      ingredients: ["minecraft:cocoa_beans", "minecraft:sugar"],
      result: "vinery:liquid_strad_wine",
    },
    {
      base: "#violetcoloured:red_grape_juice",
      ingredients: ["vinery:cherry"],
      result: "vinery:liquid_cherry_wine",
    },
    {
      base: "#violetcoloured:red_grape_juice",
      ingredients: [
        "minecraft:sugar",
        "minecraft:feather",
        "minecraft:blaze_rod",
      ],
      result: "vinery:liquid_cristel_wine",
    },
    {
      base: "#violetcoloured:white_grape_juice",
      ingredients: ["minecraft:gunpowder"],
      result: "vinery:liquid_creepers_crush",
    },
    {
      base: "#violetcoloured:white_grape_juice",
      ingredients: ["minecraft:kelp"],
      result: "vinery:liquid_kelp_cider",
    },
    {
      base: "#violetcoloured:red_grape_juice",
      ingredients: ["minecraft:honey_bottle", "vinery:cherry"],
      result: "vinery:liquid_lilitu_wine",
    },
    {
      base: "#violetcoloured:red_grape_juice",
      ingredients: ["minecraft:fermented_spider_eye"],
      result: "vinery:liquid_jo_special_mixture",
    },
    {
      base: "#violetcoloured:white_grape_juice",
      ingredients: ["minecraft:snowball"],
      result: "vinery:liquid_eiswein",
    },
    {
      base: "#violetcoloured:white_grape_juice",
      ingredients: [
        "minecraft:sugar",
        "minecraft:kelp",
        "minecraft:iron_ingot",
      ],
      result: "vinery:liquid_aegis_wine",
    },
    {
      base: "#violetcoloured:red_grape_juice",
      ingredients: [
        "minecraft:sugar",
        "minecraft:blaze_powder",
        "minecraft:gold_ingot",
      ],
      result: "vinery:liquid_bolvar_wine",
    },
    {
      base: "#violetcoloured:red_grape_juice",
      ingredients: ["minecraft:chorus_fruit"],
      result: "vinery:liquid_chorus_wine",
    },
    {
      base: "#violetcoloured:white_grape_juice",
      ingredients: ["minecraft:arrow"],
      result: "vinery:liquid_villagers_fright",
    },
    {
      base: "#violetcoloured:white_grape_juice",
      ingredients: ["minecraft:sugar"],
      result: "vinery:liquid_clark_wine",
    },
    {
      base: "#violetcoloured:red_grape_juice",
      ingredients: ["minecraft:iron_ingot"],
      result: "vinery:liquid_magnetic_wine",
    },
    {
      base: "#violetcoloured:red_grape_juice",
      ingredients: ["minecraft:glistering_melon_slice", "minecraft:sugar"],
      result: "vinery:liquid_stal_wine",
    },
    {
      base: "#violetcoloured:red_grape_juice",
      ingredients: ["minecraft:spider_eye", "minecraft:sugar"],
      result: "vinery:liquid_chenet_wine",
    },
    {
      base: "#vinery:red_wine",
      ingredients: ["minecraft:honey_bottle", "vinery:cherry"],
      result: "vinery:liquid_mojang_noir",
    },
    {
      base: "#violetcoloured:white_grape_juice",
      ingredients: [
        "vinery:apple_wine",
        "vinery:chenet_wine",
        "vinery:bolvar_wine",
      ],
      result: "vinery:liquid_jellie_wine",
    },
  ];

  ServerEvents.recipes((event) => {
    for (const recipe of fermentingRecipesToAdd) {
      global.BrewinAndChewinModule.registerFluidFermentingRecipe(event, recipe);
    }
  });
})();
