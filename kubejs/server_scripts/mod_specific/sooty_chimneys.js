(() => {
  function createScrapingConfig(chimneyId, chance) {
    return {
      type: "sootychimneys:soot_scraping",
      chimney: {
        item: `sootychimneys:${chimneyId}`,
      },
      results: [
        {
          chance: chance,
          item: {
            id: SCRAPING_OUTPUT,
          },
        },
      ],
    };
  }

  const SCRAPING_OUTPUT = "supplementaries:ash";

  const CHIMNEYS = {
    dirty_brick_chimney: 0.75,
    dirty_cobblestone_chimney: 0.75,
    dirty_copper_chimney: 0.5,
    dirty_iron_chimney: 0.5,
    dirty_mud_brick_chimney: 0.5,
    dirty_stone_brick_chimney: 0.75,
    dirty_terracotta_chimney: 0.5,
  };

  ServerEvents.generateData("after_mods", (event) => {
    for (const [chimney, ashChance] of Object.entries(CHIMNEYS)) {
      let config = createScrapingConfig(chimney, ashChance);
      event.json(`sootychimneys:recipe/soot_scraping/${chimney}`, config);
    }
  });
})();
