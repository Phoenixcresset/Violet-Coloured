(() => {
  const { removeAdvancements } = global.Advancements;

  const mappedRemovedAdvancements = {
    "brewinandchewin:main": [
      "brew_drink",
      "chef_of_the_ages",
      "cook_fiery_fondue",
      "crafting_problem",
      "ferment_cheese",
      "place_keg",
      "place_temperature_block_near_keg",
      "root",
    ],
    "vinery:main": [
      "budding_grapes",
      "cherry_picker",
      "forbidden_fruit",
      "fruits_of_the_field",
      "grape_picker",
      "juice_it_up",
      "juicy_success",
      "mashy_success",
      "nectar_of_life",
      "overgrown_lattices",
      "purely_apple",
      "root",
      "sowing_the_future",
      "the_first_press",
      "the_magic_of_the_barrel",
      "the_noble_drop",
      "vineyard_visionary",
      "vintage_perfection",
      "wild_harvest",
      "wine_somelier",
    ],
  };
  const removedAdvancements = [];

  for (const [path, ids] of Object.entries(mappedRemovedAdvancements)) {
    for (const id of ids) {
      removedAdvancements.push(`${path}/${id}`);
    }
  }

  removeAdvancements(removedAdvancements);
})();
