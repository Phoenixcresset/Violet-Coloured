// priority: 10
// Allows other food modification scripts to take place after this script
(() => {
  const $FoodBuilder = Java.loadClass(
    "dev.latvian.mods.kubejs.item.FoodBuilder"
  );

  const DURATION = {
    SLOW: 2.4,
    NORMAL: 1.6,
    FAST: 0.8,
  };

  const foodsToRemoveEffectsFrom = [
    "hearthandharvest:pickled_beetroots",
    "hearthandharvest:pickled_cabbage",
    "hearthandharvest:pickled_carrots",
    "hearthandharvest:pickled_onions",
    "hearthandharvest:pickled_potatoes",
    "hearthandharvest:onion_soup",
  ];

  const foodsToEdit = [
    // Makes it more in line with other fruits/berries
    {
      id: "minecraft:apple",
      nutrition: 2,
    },
    // Make the jams a little more worth to make
    {
      id: "hearthandharvest:apple_jam",
      nutrition: 7,
    },
    {
      id: "hearthandharvest:cherry_jam",
      nutrition: 7,
    },
    {
      id: "hearthandharvest:glow_berry_jam",
      nutrition: 7,
    },
    {
      id: "hearthandharvest:grape_jam",
      nutrition: 7,
    },
    {
      id: "hearthandharvest:melon_jam",
      nutrition: 7,
    },
    {
      id: "hearthandharvest:sweet_berry_jam",
      nutrition: 7,
    },
  ];

  function effectConfig({ id, duration, amplifier, probability }) {
    if (amplifier === undefined) {
      amplifier = 0;
    }
    if (probability === undefined) {
      probability = 1;
    }
    return {
      id: id,
      duration: duration,
      amplifier: amplifier,
      probability: probability,
    };
  }

  function getSaturationModifier(rawSaturation, nutrition) {
    return rawSaturation / nutrition / 2;
  }

  function getLeftover(food) {
    const leftover = food.usingConvertsTo();
    return leftover.isPresent() ? leftover.get() : undefined;
  }

  function buildFoodproperties(food, originalFood) {
    const builder = food.keepOldEffects
      ? new $FoodBuilder(originalFood)
      : new $FoodBuilder();

    const saturationModifier =
      food.saturation !== undefined
        ? food.saturation
        : getSaturationModifier(
            originalFood.saturation(),
            originalFood.nutrition()
          );

    builder
      .nutrition(
        food.nutrition !== undefined ? food.nutrition : originalFood.nutrition()
      )
      .saturation(saturationModifier)
      .alwaysEdible(
        food.alwaysEdible !== undefined
          ? food.alwaysEdible
          : originalFood.canAlwaysEat()
      )
      .eatSeconds(
        food.timeToEatInSeconds !== undefined
          ? food.timeToEatInSeconds
          : originalFood.eatSeconds()
      );

    const leftOver =
      food.leftOverItem !== undefined
        ? food.leftOverItem
        : getLeftover(originalFood);
    if (leftOver) {
      builder.usingConvertsTo(leftOver);
    }

    if (food.effectsToAdd !== undefined) {
      for (const effect of food.effectsToAdd) {
        builder.effect(
          effect.id,
          effect.duration,
          effect.amplifier,
          effect.probability
        );
      }
    }

    return builder.build();
  }

  ItemEvents.modification((event) => {
    for (const foodId of foodsToRemoveEffectsFrom) {
      event.modify(foodId, (item) => {
        let originalFood = item.get("food");
        if (!originalFood) {
          return;
        }
        let food = {
          id: foodId,
          keepOldEffects: false,
        };
        item.setFood(buildFoodproperties(food, originalFood));
      });
    }

    for (const food of foodsToEdit) {
      event.modify(food.id, (item) => {
        let originalFood = item.get("food");
        if (!originalFood) {
          return;
        }
        item.setFood(buildFoodproperties(food, originalFood));
      });
    }
  });
})();
