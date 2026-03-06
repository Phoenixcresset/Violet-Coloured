(() => {
  ClientEvents.generateAssets("after_mods", (event) => {
    event.json("emi:index/stacks/hearth_and_harvest_potion_effects", {
      filters: ["hearthandharvest:pungent", "hearthandharvest:tempting"],
    });
  });
})();
