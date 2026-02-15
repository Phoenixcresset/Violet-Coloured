RecipeViewerEvents.removeEntries("fluid", (event) => {
  event.remove("minecraft:milk");
  event.remove(Fluid.ingredientOf(/brewinandchewin:.*/));
});

ServerEvents.recipes((event) => {
  event
    .custom({
      type: "brewinandchewin:fermenting",
      base_fluid: {
        amount: 1000,
        ingredient: {
          tag: "#brewinandchewin:egg_grog",
        },
        unit: "millibuckets",
      },
      experience: 1.0,
      fermenting_time: 4800,
      ingredients: [
        {
          item: "minecraft:ominous_bottle",
        },
        {
          item: "minecraft:phantom_membrane",
        },
        {
          item: "minecraft:fermented_spider_eye",
        },
        [],
      ],
      result: {
        amount: 1000,
        id: "brewinandchewin:dread_nog",
      },
      temperature: 1,
      unit: "millibuckets",
    })
    .id("brewinandchewin:fermenting/dread_nog_from_egg_grog");
});
