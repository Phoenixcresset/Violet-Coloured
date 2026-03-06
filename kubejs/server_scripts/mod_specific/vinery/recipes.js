(() => {
  const slabRecipes = [
    {
      ingredient: "minecraft:dirt",
      output: "vinery:dirt_slab",
    },
    {
      ingredient: "minecraft:grass_block",
      output: "vinery:grass_slab",
    },
    {
      ingredient: "minecraft:coarse_dirt",
      output: "vinery:coarse_dirt_slab",
    },
  ];
  function slabRecipe(event, ingredient, output) {
    event
      .shaped(Item.of(output, 6), ["BBB"], {
        B: ingredient,
      })
      .id(output);
  }
  ServerEvents.recipes((event) => {
    for (const recipe of slabRecipes) {
      slabRecipe(event, recipe.ingredient, recipe.output);
    }

    // TODO Extract shaped recipe
    // Replaces the default recipe to avoid overlap with Quark posts
    event
      .shaped("vinery:grapevine_stem", ["S", "S", "S"], {
        S: "minecraft:stick",
      })
      .id("vinery:grapevine_stem");
  });
})();
