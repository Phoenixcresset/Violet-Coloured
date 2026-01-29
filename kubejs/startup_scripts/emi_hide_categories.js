/**
 * @typedef {Object} RecipeHidingConfig
 * @property {Array<string>} categories
 * @property {Array<string>} recipeIds
 * @property {Object.<string, Array<string>>} categorizedIds
 */
const recipeHidingConfig = {
  categories: [
    "ali:plant_loot",
    "ali:block_loot",
    "ali:hero_loot",
    "emixx:villager_trades",
  ],
  recipeIds: [
    "minecraft:/chests/spawn_bonus_chest",
    "minecraft:/chests/village/*",
    "minecraft:/chests/jungle_temple_dispenser",
    "emi:/anvil/enchanting/.*",
    "emi:/crafting/repairing/.*",
    "emi:/anvil/repairing/tool/.*",
    "emi:/anvil/repairing/material/vinery/.*",
    "emi:/grindstone/repairing/.*",
    "emi:/grindstone/disenchanting/.*",
    "supplementaries:/tipped_spikes.*",
    "supplementaries:/inject/test",
    "vinery:/blocks/potted_dark_cherry_sapling",
    "minecraft:/shearing/bogged",
    "minecraft:/gameplay/cat_morning_gift",
  ],
  categorizedIds: {
    "ali:trial_chambers": [
      "minecraft:/dispensers/.*",
      "minecraft:/chests/trial_chambers/reward(?:_ominous)?_(?:common|rare|unique)",
      "minecraft:/equipment/.*",
    ],
    "supplementaries:galleons": [
      "supplementaries:/loot/galleon/cannon",
      "supplementaries:/loot/galleon/key",
    ],
    "supplementaries:urn_loot": [
      "supplementaries:/loot/urn_loot/(?!urn_loot$).*",
    ],
    "ali:fishing_loot": ["minecraft:/gameplay/fishing/(junk|treasure|fish)"],
    "minecraft:smithing": [".*armor_trim.*"],
  },
};

/**
 * @param {RecipeHidingConfig} recipeHidingConfig Categories, recipe IDs, and categorized IDs to hide
 * @returns {Array<Object>} Array of recipe filter objects
 */
function buildRecipeFilters(recipeHidingConfig) {
  const filters = [];

  for (const category of recipeHidingConfig.categories) {
    filters.push({
      category: category,
    });
  }

  for (const id of recipeHidingConfig.recipeIds) {
    filters.push({
      id: `/${id}/`,
    });
  }

  for (const [category, ids] of Object.entries(
    recipeHidingConfig.categorizedIds
  )) {
    for (const id of ids) {
      filters.push({
        category: category,
        id: `/${id}/`,
      });
    }
  }
  return filters;
}

/** @type {Array<Object.<string, string>>} */
const recipeFilters = buildRecipeFilters(recipeHidingConfig);

StartupEvents.init(() => {
  JsonIO.write("kubejs/assets/emi/recipe/filters/filters.json", {
    filters: recipeFilters,
  });
});
