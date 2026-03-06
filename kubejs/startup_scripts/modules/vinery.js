global.VineryModule = (function VineryModule() {
  // Every Vinery liquid, except for mojang_noir, which is a special case and needs to be handled separately
  const vineryLiquids = [
    "red_grapejuice",
    "white_grapejuice",
    "apple_juice",
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
  return {
    vineryLiquids: vineryLiquids,
  };
})();
