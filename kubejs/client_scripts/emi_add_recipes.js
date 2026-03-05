(() => {
  (() => {
    const recipeAddingConfig = {
      "emi:world_interaction": [
        {
          left: "item:chimes:bamboo_chimes",
          right: "#item:minecraft:axes",
          output: "item:chimes:carved_bamboo_chimes",
        },
        {
          left: "item:farmersdelight:roast_chicken_block",
          right: "item:minecraft:bowl",
          output: "item:farmersdelight:roast_chicken",
        },
        {
          left: "item:farmersdelight:stuffed_pumpkin_block",
          right: "item:minecraft:bowl",
          output: "item:farmersdelight:stuffed_pumpkin",
        },
        {
          left: "item:farmersdelight:honey_glazed_ham_block",
          right: "item:minecraft:bowl",
          output: "item:farmersdelight:honey_glazed_ham",
        },
        {
          left: "item:farmersdelight:shepherds_pie_block",
          right: "item:minecraft:bowl",
          output: "item:farmersdelight:shepherds_pie",
        },
      ],
    };

    function buildRecipe(type, recipeAddition) {
      return {
        type: type,
        left: recipeAddition.left,
        right: recipeAddition.right,
        output: recipeAddition.output,
      };
    }

    ClientEvents.generateAssets("after_mods", (event) => {
      for (const [type, recipeAdditions] of Object.entries(
        recipeAddingConfig
      )) {
        for (const recipeAddition of recipeAdditions) {
          let [, shortType] = type.split(":");
          // short output should be the namespace + _ + itemName
          let splitOutputName = recipeAddition.output.split(":");
          let shortOutput = `${splitOutputName[1]}_${splitOutputName[2]}`;
          event.json(
            `emi:recipe/additions/${shortType}_${shortOutput}`,
            buildRecipe(type, recipeAddition)
          );
        }
      }
    });
  })();
})();
