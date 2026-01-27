(() => {
  const vineryFluids = [
    {
      id: "apple_juice",
      color: 0xeed4a7,
      name: "Apple Juice",
    },
    {
      id: "white_grape_juice",
      color: 0xb1d4ae,
      name: "White Grape Juice",
    },
    {
      id: "red_grape_juice",
      color: 0x6b3871,
      name: "Red Grape Juice",
    },
    {
      id: "mead",
      color: 0xfbbf67,
      name: "Mead",
    },
    {
      id: "apple_cider",
      color: 0x9c6140,
      name: "Cider",
    },
    {
      id: "apple_wine",
      color: 0xd6d375,
      name: "Apple Wine",
    },
    {
      id: "mellohi_wine",
      color: 0xcfe6cf,
      name: "Mellohi Wine",
    },
    {
      id: "glowing_wine",
      color: 0xfccf54,
      name: "Sun-kissed Wine",
    },
    {
      id: "solaris_wine",
      color: 0x9d5221,
      name: "Solaris Wine",
    },
    {
      id: "noir_wine",
      color: 0x1c193b,
      name: "Noir Wine",
    },
    {
      id: "red_wine",
      color: 0xd55363,
      name: "Red Wine",
    },
    {
      id: "strad_wine",
      color: 0x173443,
      name: "Strad Wine",
    },
    {
      id: "cherry_wine",
      color: 0x7d100f,
      name: "Cherry Wine",
    },
    {
      id: "cristel_wine",
      color: 0xeb7c7c,
      name: "Cristel Wine",
    },
    {
      id: "creepers_crush",
      color: 0x4bb600,
      name: "Creepers Crush",
    },
    {
      id: "kelp_cider",
      color: 0x2cb663,
      name: "Kelp Cider",
    },
    {
      id: "lilitu_wine",
      color: 0xa42838,
      name: "Miss Lilitus Wine",
    },
    {
      id: "jo_special_mixture",
      color: 0xbe0e22,
      name: "Jo's Special Mixture",
    },
    {
      id: "eiswein",
      color: 0x5cbaf8,
      name: "Eiswein",
    },
    {
      id: "aegis_wine",
      color: 0xd19959,
      name: "Aegis Wine",
    },
    {
      id: "bolvar_wine",
      color: 0xe24343,
      name: "Bolvar Wine",
    },
    {
      id: "chorus_wine",
      color: 0xaf1fbf,
      name: "Chorus Wine",
    },
    {
      id: "villagers_fright",
      color: 0xb6cbd5,
      name: "Villager's Fright",
    },
    {
      id: "clark_wine",
      color: 0x7a7a7a,
      name: "Clark Wine",
    },
    {
      id: "magnetic_wine",
      color: 0x641f32,
      name: "Magnetic Wine",
    },
    {
      id: "stal_wine",
      color: 0xdf2424,
      name: "Stal Wine",
    },
    {
      id: "chenet_wine",
      color: 0xb54646,
      name: "Chenet Wine",
    },
    {
      id: "mojang_noir",
      color: 0x4a444c,
      name: "Mojang Noir",
    },
    {
      id: "jellie_wine",
      color: 0xb24571,
      name: "Jellie Wine",
    },
  ];

  function registerVineryFluid(event, fluid) {
    event
      .create(`vinery:liquid_${fluid.id}`, "thin")
      .tint(fluid.color)
      .displayName(fluid.name)
      .tag(`vinery:${fluid.id}`);
  }

  StartupEvents.registry("fluid", (event) => {
    vineryFluids.forEach((fluid) => {
      registerVineryFluid(event, fluid);
    });
  });
})();
