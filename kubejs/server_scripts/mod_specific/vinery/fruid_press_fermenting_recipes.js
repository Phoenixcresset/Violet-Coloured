(() => {
  const fruitPressFermentingRecipesToAdd = [
    {
      inputId: "vinery:crushed_red_grapes",
      outputId: "vinery:red_grapejuice",
    },
    {
      inputId: "vinery:crushed_white_grapes",
      outputId: "vinery:white_grapejuice",
    },
  ];
  ServerEvents.recipes((event) => {
    for (const recipe of fruitPressFermentingRecipesToAdd) {
      event
        .custom({
          type: "vinery:apple_fermenting",
          input: {
            item: recipe.inputId,
          },
          wine_bottle: {
            required: true,
          },
          output: {
            id: recipe.outputId,
            count: 1,
          },
        })
        .id(`vinery:apple_fermenting/${recipe.outputId.split(":")[1]}`);
    }
  });
})();
