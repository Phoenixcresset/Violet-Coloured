(() => {
  const fruitPressMashingRecipesToAdd = [
    {
      inputId: "vinery:red_grape",
      outputId: "vinery:crushed_red_grapes",
    },
    {
      inputId: "vinery:white_grape",
      outputId: "vinery:crushed_white_grapes",
    },
  ];

  ServerEvents.recipes((event) => {
    for (const recipe of fruitPressMashingRecipesToAdd) {
      event
        .custom({
          type: "vinery:apple_mashing",
          input: {
            item: recipe.inputId,
          },
          output: {
            id: recipe.outputId,
            count: 1,
          },
        })
        .id(`vinery:apple_mashing/${recipe.outputId.split(":")[1]}`);
    }
  });
})();
