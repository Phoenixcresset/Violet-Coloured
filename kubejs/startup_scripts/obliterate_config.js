// priority: 10

(() => {
  /** @typedef {Object.<string, Array<string|RegExp>>} ObliteratedPatterns */
  const obliteratedPatterns = {
    brewinandchewin: [
      "sweet_berry_jam",
      "kombucha", // Disabled normally, but still appears in some places
    ],
    cratedelight: [
      // Replaced by Quark and Hearth and Harvest
      "egg_crate",
      "berry_crate",
      "glowberry_crate",
      "red_mushroom_crate",
      "brown_mushroom_crate",
      "gunpowder_bag",
    ],
    farmersdelight: ["rope", "tree_bark"],
    hearthandharvest: [
      /.*cleaver/,
      /.*sausage/,
      "universal_feed",
      "cooking_oil",
      "elote",
      "tamale",
      "trail_mix",
      "sunflower_seeds",
      // Vinery overlap and removed beverages
      "cherry",
      /(?!.*(red|green)_grape_wine_crate$).*wine.*/,
      /(wild_)?(?:green|red)_grapes/,
      // /(?:green|red)_grape_crate/,
      /.*grape_juice/,
      /hard_cider.*/,
      /mead.*/,
      /root_beer.*/,
      "moonshine",
      // Removed plants and associated items
      /corn_husk.*/,
      /.*cotton(?!_candy).*/,
      "raisins",
      /raspberry.*/,
      /.*peanut.*/,
      /blueberr.*/,
      /.*mum/,
      // Storage blocks replaced by Crate Delight
      "apple_crate",
      "cocoa_bean_bag",
      "glow_berry_crate",
      "golden_apple_crate",
      "golden_carrot_crate",
      "gunpowder_bag",
      "poisonous_potato_crate",
      "sugar_bag",
      "sweet_berry_crate",
      "turtle_egg_crate", // Removed because Turtle Eggs are not food
      // Deprecated Crates
      "egg_crate",
      "milk_crate",
      "goat_milk_crate",
      "red_grape_wine_crate",
      "green_grape_wine_crate",
      "water_crate",
      "honey_crate",
      "syrup_crate",
    ],
    horseman: ["copper_horn"],
    quark: [
      // Automation
      "chute",
      "ender_watcher",
      // Building
      "stone_lamp",
      "stone_brick_lamp",
      "bonded_leather",
      "bonded_rabbit_hide",
      "gold_bars",
      "bamboo_mat",
      "bamboo_mat_carpet",
      "rope",
      "sturdy_stone",
      /blackstone_bricks.*/,
      // Building - Storage Blocks
      // Replaced by Crate Delight
      "apple_crate",
      "golden_apple_crate",
      "potato_crate",
      "carrot_crate",
      "golden_carrot_crate",
      "beetroot_crate",
      "cocoa_beans_sack",
      // Tweaks
      /.*shard/, // Glass shards
      // Mobs
      "crab_spawn_egg",
      "crab_bucket",
      "crab_leg",
      "cooked_crab_leg",
      "crab_shell",
      "foxhound_spawn_egg",
      "stoneling_spawn_egg",
      "diamond_heart",
      // Oddities
      "backpack",
      "ravager_hide",
      "bonded_ravager_hide",
      "crate",
      "pipe",
      "encased_pipe",
    ],
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
      "apple_log",
      "apple_press",
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
      "mead",
      "storage_pot",
      "straw_hat",
      "vinery_standard",
      /.*jungle_grape.*/,
      /.*lattice/,
      /.*savanna_grape.*/,
      /.*taiga_grape.*/,
      /window.*/,
      /winemaker.*/,
      /.*_grapejuice/,
      "apple_juice",
      "wandering_winemaker_spawn_egg",
      "mule_spawn_egg",
      /.*_wine_rack_.*/, // Replaced by HnH Bottle Rack / Crate or just placing the bottle
      // Storage blocks replaced by Crate Delight or Hearth and Harvest
      "apple_bag",
      "cherry_bag",
      /.*grape_bag/,
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
    "hearthandharvest:hearthandharvest",
    "hearthandharvest:hearthandharvest_blocks",
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
      if (typeof id === "string") {
        if (itemId === id) {
          return true;
        }
      } else if (id instanceof RegExp && id.test(itemId)) {
        return true;
      }
    }
    return false;
  };
})();
