(() => {
  const recipeHidingConfig = {
    categories: [
      "ali:plant_loot",
      // "ali:block_loot", // TODO: uncomment when modpack will be made public
      "ali:hero_loot",
      "emixx:villager_trades",
    ],
    recipeIds: [
      "minecraft:/chests/spawn_bonus_chest",
      "minecraft:/chests/village/*",
      "minecraft:/chests/jungle_temple_dispenser",
      // "emi:/anvil/enchanting/.*", // TODO: uncomment when modpack will be made public
      "emi:/crafting/repairing/.*",
      "emi:/anvil/repairing/tool/.*",
      "emi:/anvil/repairing/material/vinery/.*",
      "emi:/grindstone/repairing/.*",
      "emi:/grindstone/disenchanting/.*",
      "supplementaries:ash_burn",
      "supplementaries:/tipped_spikes.*",
      "supplementaries:/inject/test",
      "vinery:/blocks/potted_dark_cherry_sapling",
      "minecraft:/shearing/bogged",
      "minecraft:/gameplay/cat_morning_gift",
      "minecraft:/gameplay/panda_sneeze",
      "quark:/inject/gameplay/sniffer_digging",
      "quark:/misc/monster_box_spawns",
    ],
    categorizedIds: {
      "minecraft:brewing": [".*/hearthandharvest/.*"],
      "ali:entity_loot": [
        "quark:/entities/crab",
        "quark:/entities/foxhound",
        "quark:/entities/stoneling",
      ],
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
      "emi:world_interaction": [".*flower_duping.*"],
      // "emi:info": ["null"], // Uncomment to remove all info except for the ones added by the modpack
    },
  };

  /**
   * @param {{categories: Array<string>, recipeIds: Array<string>, categorizedIds: Record<string, Array<string>>}} config Categories, recipe IDs, and categorized IDs to hide
   * @returns {Array<{id?: string, category?: string}>} Array of recipe filter objects
   */
  function buildRecipeFilters(config) {
    const filters = [];

    for (const category of config.categories) {
      filters.push({
        category: category,
      });
    }

    for (const id of config.recipeIds) {
      filters.push({
        id: `/${id}/`,
      });
    }

    for (const [category, ids] of Object.entries(config.categorizedIds)) {
      for (const id of ids) {
        filters.push({
          category: category,
          id: `/${id}/`,
        });
      }
    }
    return filters;
  }

  /** @type {Array<Record<string, string>>} */
  const recipeFilters = buildRecipeFilters(recipeHidingConfig);

  ClientEvents.generateAssets("after_mods", (event) => {
    event.json("emi:recipe/filters/filters", {
      filters: recipeFilters,
    });
  });
})();
