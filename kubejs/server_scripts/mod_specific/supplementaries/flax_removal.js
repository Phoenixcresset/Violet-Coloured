(() => {
  ServerEvents.recipes((event) => {
    event
      .shaped(Item.of("supplementaries:awning", 2), ["CCC", "S S"], {
        C: "farmersdelight:canvas",
        S: "minecraft:stick",
      })
      .id("supplementaries:awnings/awning");
    event
      .shaped("supplementaries:doormat", ["SS"], {
        S: "farmersdelight:straw",
      })
      .id("supplementaries:doormat_2");

    event
      .shapeless(Item.of("supplementaries:fodder"), [
        "minecraft:hay_block",
        "farmersdelight:straw_bale",
      ])
      .id("supplementaries:fodder");

    event.remove({ id: "supplementaries:rope_2" });

    for (const color of Color.DYE.values()) {
      let awningName = `awning_${color}`;
      event.remove(`supplementaries:awnings/${awningName}_2`);
      event
        .shapeless(`supplementaries:${awningName}`, [
          "supplementaries:awning",
          `minecraft:${color}_dye`,
        ])
        .id(`supplementaries:awnings/${awningName}`);
    }
  });
})();
