(() => {
  const { removeAdvancements } = _Advancements;

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
    "chalk:adventure": [
      "alone_in_the_darkness",
      "bound_by_bone",
      "home_is_where_the_bed_is",
      "this_way",
      "vandalism",
    ],
    "minecraft:story": [
      "cure_zombie_villager",
      "deflect_arrow",
      "enchant_item",
      "enter_the_end",
      "enter_the_nether",
      "follow_ender_eye",
      "form_obsidian",
      "iron_tools",
      "lava_bucket",
      "mine_diamond",
      "mine_stone",
      "obtain_armor",
      "root",
      "shiny_gear",
      "smelt_iron",
      "upgrade_tools",
    ],
    "quark:content": [
      "apply_color_rune",
      "get_all_corundum",
      "influence",
      "instamine_deepslate",
      "overlevel_enchant",
      "retreive_flamerang",
      "throw_pickarang",
      "wear_full_rainbow",
    ],
    "supplementaries:story": ["unenchanter"],
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
