(() => {
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

  /**
   * Remove advancement(s) with the given ID(s)
   * @param {import("dev.latvian.mods.kubejs.generator.KubeDataGenerator").$KubeDataGenerator$$Type} event The event from ServerEvents.generateData(...)
   * @param {string | Array<string>} advancementIds - The ID(s) of the advancement(s). Can easily be found through /advancement command or GitHub
   */
  function removeAdvancement(event, advancementIds) {
    if (typeof advancementIds === "string") {
      advancementIds = [advancementIds];
    }

    for (const advancementId of advancementIds) {
      let [namespace, path] = advancementId.split(":");
      let fullPath = `${namespace}:advancement/${path}`;

      event.json(`${fullPath}`, {
        display: { hidden: true },
        criteria: {
          impossible: {
            trigger: "minecraft:impossible",
          },
        },
      });
    }
  }

  ServerEvents.generateData("after_mods", (event) => {
    removeAdvancement(event, removedAdvancements);
  });
})();
