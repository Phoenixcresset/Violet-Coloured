(() => {
  ServerEvents.recipes((event) => {
    // Replaces the default recipe to avoid overlap with Quark posts
    event
      .shaped("vinery:grapevine_stem", ["S", "S", "S"], {
        S: "minecraft:stick",
      })
      .id("vinery:grapevine_stem");
  });
})();
