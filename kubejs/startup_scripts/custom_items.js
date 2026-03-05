(() => {
  StartupEvents.registry("item", (event) => {
    event
      .create("vinery:crushed_red_grapes")
      .texture("violetcoloured:item/crushed_red_grapes")
      .food((food) => {
        food.nutrition(3).saturation(0.3);
      });
    event
      .create("vinery:crushed_white_grapes")
      .texture("violetcoloured:item/crushed_white_grapes")
      .food((food) => {
        food.nutrition(3).saturation(0.3);
      });
  });
})();
