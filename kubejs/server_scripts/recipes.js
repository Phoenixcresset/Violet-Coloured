(() => {
  const replacedInputRecipes = [
    {
      filter: { id: "farmersdelight:cooking_pot" },
      old_input: "minecraft:wooden_shovel",
      new_input: "minecraft:stick",
    },
  ];

  ServerEvents.recipes((event) => {
    event.shaped(
      "hearthandharvest:cheddar_cheese_wheel",
      ["AA ", "AA ", "   "],
      { A: "hearthandharvest:cheddar_cheese_slice" }
    ).id("hearthandharvest:cheddar_cheese_wheel_from_wedges");
    event.shaped("hearthandharvest:goat_cheese_wheel", ["AA ", "AA ", "   "], {
      A: "hearthandharvest:goat_cheese_slice",
    });

    for (const recipe of replacedInputRecipes) {
      event.replaceInput(recipe.filter, recipe.old_input, recipe.new_input);
    }
  });
})();
