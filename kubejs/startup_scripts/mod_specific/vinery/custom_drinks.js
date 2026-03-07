(() => {
  const customDrinks = [
    {
      id: "violetcoloured:red_grape_juice",
      texture: "vinery:item/red_grapejuice",
    },
    {
      id: "violetcoloured:white_grape_juice",
      texture: "vinery:item/white_grapejuice",
    },
    {
      id: "violetcoloured:apple_juice",
      texture: "vinery:item/apple_juice",
    },
  ];
  StartupEvents.registry("item", (event) => {
    for (const drink of customDrinks) {
      event
        .create(drink.id)
        .food((food) => {
          food
            .effect("brewinandchewin:tipsy", 1200, 0, 1)
            .eatSeconds(1.6)
            .alwaysEdible(true)
            .usingConvertsTo("vinery:wine_bottle");
        })
        .useAnimation("drink")
        .texture(drink.texture);
    }
  });
})();
