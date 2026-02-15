// priority: 10

/** @typedef {Object.<string, Array<string|RegExp>>} ObliteratedPatterns */
const obliteratedPatterns = {
  brewinandchewin: ["sweet_berry_jam"],
  cratedelight: ["egg_crate"],
  farmersdelight: ["rope", "tree_bark"],
  hearthandharvest: [
    "universal_feed",
    "cooking_oil",
    "elote",
    "raisins",
    "tamale",
    "trail_mix",
    "apple_crate",
    "brown_mushroom_crate",
    "cocoa_bean_bag",
    "glow_berry_crate",
    "golden_apple_crate",
    "golden_carrot_crate",
    "gunpowder_bag",
    "moonshine",
    "poisonous_potato_crate",
    "red_mushroom_crate",
    "sugar_bag",
    "sweet_berry_crate",
    "turtle_egg_crate",
    /blueberr.*/,
    /cherry(?!_half_cabinet).*/,
    /.*cleaver/,
    /corn_husk.*/,
    /.*cotton(?!_candy).*/,
    /.*grape_juice/,
    /hard_cider.*/,
    /mead.*/,
    /.*mum/,
    /.*peanut.*/,
    /raspberry.*/,
    /root_beer.*/,
    /.*sausage/,
    /.*wine_rack/,
    /(?!.*(red|green)_grape_wine_crate$).*wine.*/,
    /(wild_)?(?:green|red)_grapes/,
    /(?:green|red)_grape_crate/,
  ],
  horseman: ["copper_horn"],
  supplementaries: [
    "bamboo_spikes_tipped",
    "barnacles",
    "cage",
    "faucet",
    "sugar_cube",
    /.*gravel_bricks/,
    /lapis_bricks.*/,
    /timber_.*/,
  ],
  suppsquared: ["heavy_key", /metal_.*/],
  village_taverns: ["barrel"],
  vinery: [
    "apple_bag",
    "apple_log",
    "apple_wood",
    "dark_cherry_beam",
    "dark_cherry_floorboard",
    "dark_cherry_big_table",
    "dark_cherry_shelf",
    "dark_cherry_drawer",
    "dark_cherry_table",
    "dark_cherry_chair",
    "dark_cherry_barrel",
    "fermentation_barrel",
    "grapevine_pot",
    "storage_pot",
    "straw_hat",
    "vinery_standard",
    /.*jungle_grape.*/,
    /.*lattice/,
    /.*savanna_grape.*/,
    /.*taiga_grape.*/,
    /window.*/,
    /winemaker.*/,
  ],
};

/** @type {Array<string>} */
global.creativeTabs = [
  "minecraft:building_blocks",
  "minecraft:colored_blocks",
  "minecraft:natural_blocks",
  "minecraft:functional_blocks",
  "minecraft:redstone_blocks",
  "minecraft:tools_and_utilities",
  "minecraft:combat",
  "minecraft:food_and_drinks",
  "minecraft:ingredients",
  "minecraft:spawn_eggs",
  "farmersdelight:farmersdelight",
  "vinery:vinery",
  "cratedelight:cratedelight_tab",
  "brewinandchewin:brewinandchewin",
];

/** @type {Array<string|RegExp>} */
let obliteratedItems = [];

for (const [prefix, items] of Object.entries(obliteratedPatterns)) {
  if (!Platform.isLoaded(prefix)) {
    console.log(`[Obliterate Items] Skipping for ${prefix} (mod not loaded)`);
    continue;
  }
  for (const item of items) {
    if (typeof item === "string") {
      obliteratedItems.push(`${prefix}:${item}`);
    } else if (item instanceof RegExp) {
      obliteratedItems.push(new RegExp(`^${prefix}:${item.source}$`));
    }
  }
}

global.obliteratedItems = obliteratedItems;

/**
 * Checks if an itemId is obliterated
 * @param {string} itemId
 * @returns {boolean} True if itemId is obliterated, false otherwise
 */
global.isObliterated = (itemId) => {
  for (let i = 0; i < obliteratedItems.length; i++) {
    let id = obliteratedItems[i];
    if (typeof id == "string") {
      if (itemId == id) return true;
    } else if (id instanceof RegExp) {
      if (id.test(itemId)) return true;
    }
  }
  return false;
};
