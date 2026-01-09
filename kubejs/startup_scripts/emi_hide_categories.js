const recipeHidingConfig = {
  categories: [
    "ali:plant_loot", // Buggy visual preview
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
    "emi:/grindstone/repairing/.*",
    "emi:/grindstone/disenchanting/.*",
    "supplementaries:/inject/test",
    "minecraft:/shearing/bogged",
    "minecraft:gameplay/cat_morning_gift",
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

const recipeFilters = buildRecipeFilters(recipeHidingConfig);

StartupEvents.init(() => {
  JsonIO.write("kubejs/assets/emi/recipe/filters/filters.json", {
    filters: recipeFilters,
  });
});
