(() => {
  StartupEvents.registry("minecraft:point_of_interest_type", (event) => {
    event
      .create("village_taverns:bartender")
      .block("brewinandchewin:keg")
      // Increases base range since the keg cannot be directly accessed by the villager because of the slab and the lantern above
      .validRange(2);
  });
})();
