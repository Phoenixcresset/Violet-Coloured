(() => {
  const informations = [
    {
      stacks: [
        "item:farmersdelight:red_mushroom_colony",
        "item:farmersdelight:brown_mushroom_colony",
      ],
      translationKey: "emi.info.mushroom_colony",
    },
    {
      stacks: ["item:farmersdelight:tomato"],
      translationKey: "emi.info.tomatoes",
    },
    {
      stacks: ["item:vinery:red_grape", "item:vinery:white_grape"],
      translationKey: "hearthandharvest.jei.info.wild_grapes",
    },
    {
      stacks: ["item:measurements:tape_measure"],
      translationKey: "emi.info.abacus",
    },
  ];

  ClientEvents.generateAssets("after_mods", (event) => {
    for (const information of informations) {
      let informationRecipe = {
        type: "emi:info",
        stacks: information.stacks,
        text: information.translationKey,
      };
      let recipeId = information.translationKey.replace(/\./g, "_");
      event.json(`emi:recipe/additions/${recipeId}`, informationRecipe);
    }
  });
})();
