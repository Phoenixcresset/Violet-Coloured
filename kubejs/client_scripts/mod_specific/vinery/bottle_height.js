// priority: 1
// Loads first so that the HnH Bottle Rack / Crate compat can use the correct model

(() => {
  function lowerModel(model) {
    model.elements[0].from[1] -= 1;
    model.elements[0].to[1] -= 1;
    model.elements[1].to[1] -= 1;
  }

  ClientEvents.generateAssets("after_mods", (event) => {
    let model = JSON.parse(
      KJSTweaks.readJsonFromMod(
        "vinery",
        "models/block/template_small_wine_bottle"
      )
    );
    lowerModel(model);
    event.json("vinery:models/block/template_small_wine_bottle.json", model);
  });
})();
