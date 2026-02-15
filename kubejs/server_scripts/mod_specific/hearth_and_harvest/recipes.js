(() => {
  ServerEvents.recipes((event) => {
    event
      .shaped("hearthandharvest:cotton_candy", [" W ", "SSS", " T "], {
        W: "minecraft:wind_charge",
        S: "minecraft:sugar",
        T: "minecraft:stick",
      })
      .id("hearthandharvest:cotton_candy");
    event
      .shaped("hearthandharvest:cheddar_cheese_wheel", ["AA ", "AA ", "   "], {
        A: "hearthandharvest:cheddar_cheese_slice",
      })
      .id("hearthandharvest:cheddar_cheese_wheel_from_wedges");
    event
      .shaped("hearthandharvest:goat_cheese_wheel", ["AA ", "AA ", "   "], {
        A: "hearthandharvest:goat_cheese_slice",
      })
      .id("hearthandharvest:goat_cheese_wheel_from_wedges");

    event
      .shapeless("hearthandharvest:cherry_juice", [
        "vinery:cherry",
        "vinery:cherry",
        "minecraft:sugar",
        "minecraft:glass_bottle",
      ])
      .id("hearthandharvest:cherry_juice");

    event
      .custom({
        type: "hearthandharvest:bottle_crate",
        category: "building",
        input: {
          item: "vinery:red_grapejuice",
        },
        result: {
          id: "hearthandharvest:red_grape_wine_crate",
          count: 1,
        },
      })
      .id("hearthandharvest:red_grape_wine_crate");

    event
      .custom({
        type: "hearthandharvest:bottle_crate",
        category: "building",
        input: {
          item: "vinery:white_grapejuice",
        },
        result: {
          id: "hearthandharvest:green_grape_wine_crate",
          count: 1,
        },
      })
      .id("hearthandharvest:green_grape_wine_crate");

    event
      .custom({
        type: "hearthandharvest:bottle_crate",
        category: "building",
        input: {
          item: "hearthandharvest:syrup_bottle",
        },
        result: {
          id: "hearthandharvest:syrup_crate",
          count: 1,
        },
      })
      .id("hearthandharvest:syrup_crate");

    event
      .custom({
        type: "farmersdelight:cooking",
        container: {
          count: 1,
          id: "hearthandharvest:jar",
        },
        cookingtime: 400,
        experience: 1.0,
        ingredients: [
          {
            item: "vinery:red_grape",
          },
          {
            item: "vinery:red_grape",
          },
          {
            item: "vinery:red_grape",
          },
          {
            item: "minecraft:sugar",
          },
          {
            item: "minecraft:sugar",
          },
          {
            item: "minecraft:sugar",
          },
        ],
        recipe_book_tab: "meals",
        result: {
          count: 1,
          id: "hearthandharvest:grape_jam",
        },
      })
      .id("farmersdelight:cooking/grape_jam");

    event
      .custom({
        type: "farmersdelight:cooking",
        container: {
          count: 1,
          id: "hearthandharvest:jar",
        },
        cookingtime: 400,
        experience: 1.0,
        ingredients: [
          {
            item: "vinery:cherry",
          },
          {
            item: "vinery:cherry",
          },
          {
            item: "vinery:cherry",
          },
          {
            item: "minecraft:sugar",
          },
          {
            item: "minecraft:sugar",
          },
          {
            item: "minecraft:sugar",
          },
        ],
        recipe_book_tab: "meals",
        result: {
          count: 1,
          id: "hearthandharvest:cherry_jam",
        },
      })
      .id("farmersdelight:cooking/cherry_jam");

    event
      .custom({
        type: "farmersdelight:cooking",
        container: {
          count: 1,
          id: "minecraft:bowl",
        },
        experience: 1.0,
        ingredients: [
          {
            item: "minecraft:cooked_porkchop",
          },
          {
            tag: "c:dusts/salt",
          },
          {
            tag: "c:foods/milk",
          },
          {
            tag: "c:flours",
          },
        ],
        recipe_book_tab: "meals",
        result: {
          count: 1,
          id: "hearthandharvest:biscuits_and_gravy",
        },
      })
      .id("farmersdelight:cooking/biscuits_and_gravy");
  });
})();
