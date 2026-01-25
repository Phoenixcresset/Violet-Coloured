(() => {
  const recipeAddingConfig = {
    "emi:world_interaction": [
      {
        left: "item:chimes:bamboo_chimes",
        right: "#item:minecraft:axes",
        output: "item:chimes:carved_bamboo_chimes",
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

  StartupEvents.init(() => {
    for (const [type, recipeAdditions] of Object.entries(recipeAddingConfig)) {
      for (const recipeAddition of recipeAdditions) {
        let shortType = type.split(":")[1];
        let shortOutput = recipeAddition.output.split(":")[1];
        JsonIO.write(
          `kubejs/assets/emi/recipe/additions/${shortType}_${shortOutput}.json`,
          buildRecipe(type, recipeAddition),
        );
      }
    }
  });
})();
