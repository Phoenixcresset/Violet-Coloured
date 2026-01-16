/** @typedef {Object.<string, Array<string|RegExp>>} ObliteratedPatterns */
const obliteratedPatterns = {
  supplementaries: [
    "bamboo_spikes_tipped",
    "cage",
    "faucet",
    /.*gravel_bricks/,
    /lapis_bricks.*/,
    /timber_.*/,
  ],
  suppsquared: ["heavy_key", /metal_.*/],
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
