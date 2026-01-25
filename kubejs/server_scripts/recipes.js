(() => {
  ServerEvents.recipes((event) => {
    event
      .shaped(Item.of("farmersdelight:safety_net", 1), ["AA ", "AA ", "   "], {
        A: "supplementaries:rope",
      })
      .id("farmersdelight:safety_net");
    event
      .shapeless(Item.of("supplementaries:rope", 4), [
        "farmersdelight:safety_net",
      ])
      .id("farmersdelight:rope_from_safety_net");
    event
      .shaped(Item.of("supplementaries:rope", 4), [" A ", " A ", "   "], {
        A: "farmersdelight:straw",
      })
      .id("farmersdelight:rope");
  });
})();
