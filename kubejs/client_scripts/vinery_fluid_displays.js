(() => {
  const vineryFluidItemDisplays = {
    "#vinery:red_grapejuice": "vinery:red_grapejuice",
    "#vinery:white_grapejuice": "vinery:white_grapejuice",
    "#vinery:apple_juice": "vinery:apple_juice",
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

  ClientEvents.generateAssets("after_mods", (event) => {
    global.BrewinAndChewinModule.registerFluidItemDisplays(
      event,
      "vinery_displays",
      vineryFluidItemDisplays
    );
  });
})();
