(() => {
  ServerEvents.recipes((event) => {
    for (const color of Color.DYE.values()) {
      event
        .shaped(
          Item.of(`quark:${color}_framed_glass`, 8),
          ["GGG", "GDG", "GGG"],
          {
            G: "quark:framed_glass",

            D: `minecraft:${color}_dye`,
          }
        )
        .id(`quark:building/crafting/glass/${color}_framed_glass`);
      event
        .shaped(
          Item.of(`quark:${color}_framed_glass_pane`, 8),
          ["PPP", "PDP", "PPP"],
          {
            P: "quark:framed_glass_pane",
            D: `minecraft:${color}_dye`,
          }
        )
        .id(
          `quark:building/crafting/panes/${color}_framed_glass_pane_from_framed_glass_pane`
        );
    }

    // Removed to avoid recipe conflicts
    event.remove({ id: "quark:building/crafting/chests/mixed_chest" });
    event.remove({ id: "quark:building/crafting/chests/mixed_chest_wood" });
    event.remove({ id: "minecraft:furnace" });

    event
      .shaped("quark:dirty_glass", ["GGG", "GAG", "GGG"], {
        G: "minecraft:glass",
        A: "supplementaries:ash",
      })
      .id("quark:tweaks/crafting/glass/mixed_dirty_glass");

    event
      .shaped("quark:dirty_glass_pane", ["PPP", "PAP", "PPP"], {
        P: "minecraft:glass_pane",
        A: "supplementaries:ash",
      })
      .id("quark:tweaks/crafting/glass/dirty_glass_pane_from_glass_pane");
  });
})();
