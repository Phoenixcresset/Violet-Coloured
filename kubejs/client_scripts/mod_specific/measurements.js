(() => {
  ClientEvents.generateAssets("after_mods", (event) => {
    const model = KJSTweaks.readJsonFromMod(
      "quark",
      "models/item/abacus_unset"
    );
    event.json("measurements:models/item/tape_measure", model);
  });
})();
