(() => {
  const vineryFluids = [
    {
      id: "red_grapejuice",
      color: 0x6b3871,
    },
    {
      id: "white_grapejuice",
      color: 0xb1d4ae,
    },
    {
      id: "apple_juice",
      color: 0xeed4a7,
    },
    {
      id: "mead",
      color: 0xfbbf67,
    },
    {
      id: "apple_cider",
      color: 0x9c6140,
    },
    {
      id: "apple_wine",
      color: 0xd6d375,
    },
    {
      id: "mellohi_wine",
      color: 0xcfe6cf,
    },
    {
      id: "glowing_wine",
      color: 0xfccf54,
    },
    {
      id: "solaris_wine",
      color: 0x9d5221,
    },
    {
      id: "noir_wine",
      color: 0x1c193b,
    },
    {
      id: "red_wine",
      color: 0xd55363,
    },
    {
      id: "strad_wine",
      color: 0x173443,
    },
    {
      id: "cherry_wine",
      color: 0x7d100f,
    },
    {
      id: "cristel_wine",
      color: 0xeb7c7c,
    },
    {
      id: "creepers_crush",
      color: 0x4bb600,
    },
    {
      id: "kelp_cider",
      color: 0x2cb663,
    },
    {
      id: "lilitu_wine",
      color: 0xa42838,
    },
    {
      id: "jo_special_mixture",
      color: 0xbe0e22,
    },
    {
      id: "eiswein",
      color: 0x5cbaf8,
    },
    {
      id: "aegis_wine",
      color: 0xd19959,
    },
    {
      id: "bolvar_wine",
      color: 0xe24343,
    },
    {
      id: "chorus_wine",
      color: 0xaf1fbf,
    },
    {
      id: "villagers_fright",
      color: 0xb6cbd5,
    },
    {
      id: "clark_wine",
      color: 0x7a7a7a,
    },
    {
      id: "magnetic_wine",
      color: 0x641f32,
    },
    {
      id: "stal_wine",
      color: 0xdf2424,
    },
    {
      id: "chenet_wine",
      color: 0xb54646,
    },
    {
      id: "mojang_noir",
      color: 0x4a444c,
    },
    {
      id: "jellie_wine",
      color: 0xb24571,
    },
  ];

  const vineryFluidItemDisplays = {
    "#vinery:red_grapejuice": "vinery:red_grapejuice",
    "#vinery:white_grapejuice": "vinery:white_grapejuice",
    "#vinery:apple_juice": "vinery:apple_juice",
    "#vinery:mead": "vinery:mead",
    "#vinery:apple_cider": "vinery:apple_cider",
    "#vinery:apple_wine": "vinery:apple_wine",
    "#vinery:mellohi_wine": "vinery:mellohi_wine",
    "#vinery:glowing_wine": "vinery:glowing_wine",
    "#vinery:solaris_wine": "vinery:solaris_wine",
    "#vinery:noir_wine": "vinery:noir_wine",
    "#vinery:red_wine": "vinery:red_wine",
    "#vinery:strad_wine": "vinery:strad_wine",
    "#vinery:cherry_wine": "vinery:cherry_wine",
    "#vinery:cristel_wine": "vinery:cristel_wine",
    "#vinery:creepers_crush": "vinery:creepers_crush",
    "#vinery:kelp_cider": "vinery:kelp_cider",
    "#vinery:lilitu_wine": "vinery:lilitu_wine",
    "#vinery:jo_special_mixture": "vinery:jo_special_mixture",
    "#vinery:eiswein": "vinery:eiswein",
    "#vinery:aegis_wine": "vinery:aegis_wine",
    "#vinery:bolvar_wine": "vinery:bolvar_wine",
    "#vinery:chorus_wine": "vinery:chorus_wine",
    "#vinery:villagers_fright": "vinery:villagers_fright",
    "#vinery:clark_wine": "vinery:clark_wine",
    "#vinery:magnetic_wine": "vinery:magnetic_wine",
    "#vinery:stal_wine": "vinery:stal_wine",
    "#vinery:chenet_wine": "vinery:chenet_wine",
    "#vinery:mojang_noir": "vinery:bottle_mojang_noir",
    "#vinery:jellie_wine": "vinery:jellie_wine",
  };

  StartupEvents.registry("fluid", (event) => {
    global.FluidModule.registerVineryFluids(event, vineryFluids);
  });

  StartupEvents.init(() => {
    global.BrewinAndChewinModule.registerFluidItemDisplays(
      "vinery_displays",
      vineryFluidItemDisplays
    );
  });
})();
