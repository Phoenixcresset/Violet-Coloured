// @ts-check

(() => {
  const { registerRoot, registerAdvancements } = _Advancements;
  const Criteria = _AdvancementsCriteria;

  /** @type {Category} */
  const category = {
    namespace: "violetcoloured",
    name: "story",
  };

  /** @type {Root} */
  const categoryRoot = {
    background: "minecraft:gui/advancements/backgrounds/stone",
    icon: "minecraft:grass_block",
    title: "advancements.story.root.title",
    description: "advancements.story.root.description",
    criteria: {
      welcome: { trigger: "minecraft:inventory_changed" },
    },
  };

  const ironArmor = [
    "minecraft:iron_helmet",
    "minecraft:iron_chestplate",
    "minecraft:iron_leggings",
    "minecraft:iron_boots",
  ];

  const diamondArmor = [
    "minecraft:diamond_helmet",
    "minecraft:diamond_chestplate",
    "minecraft:diamond_leggings",
    "minecraft:diamond_boots",
  ];

  /** @type {Advancement[]} */
  const advancements = [
    {
      id: "obtain_cobblestone",
      parent: "root",
      icon: "minecraft:wooden_pickaxe",
      title: "advancements.story.mine_stone.title",
      description: "advancements.story.mine_stone.description",
      criteria: Criteria.hasItem("minecraft:cobblestone"),
    },
    {
      id: "obtain_stone_pickaxe",
      parent: "obtain_cobblestone",
      icon: "minecraft:stone_pickaxe",
      title: "advancements.story.upgrade_tools.title",
      description: "advancements.story.upgrade_tools.description",
      criteria: Criteria.hasItem("minecraft:stone_pickaxe"),
    },
    {
      id: "obtain_iron_ingot",
      parent: "obtain_stone_pickaxe",
      icon: "minecraft:iron_ingot",
      title: "advancements.story.smelt_iron.title",
      description: "advancements.story.smelt_iron.description",
      criteria: Criteria.hasItem("minecraft:iron_ingot"),
    },
    {
      id: "obtain_lava_bucket",
      parent: "obtain_iron_ingot",
      icon: "minecraft:lava_bucket",
      title: "advancements.story.lava_bucket.title",
      description: "advancements.story.lava_bucket.description",
      criteria: Criteria.hasItem("minecraft:lava_bucket"),
    },
    {
      id: "obtain_iron_pickaxe",
      parent: "obtain_iron_ingot",
      icon: "minecraft:iron_pickaxe",
      title: "advancements.story.iron_tools.title",
      description: "advancements.story.iron_tools.description",
      criteria: Criteria.hasItem("minecraft:iron_pickaxe"),
    },
    {
      id: "obtain_iron_armor",
      parent: "obtain_iron_ingot",
      icon: "minecraft:iron_chestplate",
      title: "advancements.story.obtain_armor.title",
      description: "advancements.story.obtain_armor.description",
      criteria: Criteria.hasItems(ironArmor),
      requirements: [ironArmor],
    },
    {
      id: "obtain_obsidian",
      parent: "obtain_lava_bucket",
      icon: "minecraft:obsidian",
      title: "advancements.story.form_obsidian.title",
      description: "advancements.story.form_obsidian.description",
      criteria: Criteria.hasItem("minecraft:obsidian"),
    },
    {
      id: "obtain_diamond",
      parent: "obtain_iron_pickaxe",
      icon: "minecraft:diamond",
      title: "advancements.story.mine_diamond.title",
      description: "advancements.story.mine_diamond.description",
      criteria: Criteria.hasItem("minecraft:diamond"),
    },
    {
      id: "deflect_arrow",
      parent: "obtain_iron_armor",
      icon: "minecraft:shield",
      title: "advancements.story.deflect_arrow.title",
      description: "advancements.story.deflect_arrow.description",
      criteria: {
        deflected_projectile: {
          conditions: {
            damage: {
              type: {
                tags: [
                  {
                    expected: true,
                    id: "minecraft:is_projectile",
                  },
                ],
              },
              blocked: true,
            },
          },
          trigger: "minecraft:entity_hurt_player",
        },
      },
    },
    {
      id: "enter_the_nether",
      parent: "obtain_obsidian",
      icon: "minecraft:flint_and_steel",
      title: "advancements.story.enter_the_nether.title",
      description: "advancements.story.enter_the_nether.description",
      criteria: Criteria.enterDimension("minecraft:the_nether"),
    },
    {
      id: "obtain_diamond_armor",
      parent: "obtain_diamond",
      icon: "minecraft:diamond_chestplate",
      title: "advancements.story.shiny_gear.title",
      description: "advancements.story.shiny_gear.description",
      criteria: Criteria.hasItems(diamondArmor),
      requirements: [diamondArmor],
    },
    {
      id: "enchant_item",
      parent: "obtain_diamond",
      icon: "minecraft:enchanted_book",
      title: "advancements.story.enchant_item.title",
      description: "advancements.story.enchant_item.description",
      criteria: { enchanted_item: { trigger: "minecraft:enchanted_item" } },
    },
    {
      id: "find_stronghold",
      parent: "enter_the_nether",
      icon: "minecraft:ender_eye",
      title: "advancements.story.follow_ender_eye.title",
      description: "advancements.story.follow_ender_eye.description",
      criteria: Criteria.findStructure("minecraft:stronghold"),
    },
    {
      id: "cure_zombie_villager",
      parent: "enter_the_nether",
      icon: "minecraft:golden_apple",
      title: "advancements.story.cure_zombie_villager.title",
      description: "advancements.story.cure_zombie_villager.description",
      criteria: {
        cured_zombie_villager: { trigger: "minecraft:cured_zombie_villager" },
      },
    },
    {
      id: "enter_the_end",
      parent: "find_stronghold",
      icon: "minecraft:end_stone",
      title: "advancements.story.enter_the_end.title",
      description: "advancements.story.enter_the_end.description",
      criteria: Criteria.enterDimension("minecraft:the_end"),
    },
    {
      id: "use_shears_on_sheep",
      parent: "obtain_iron_ingot",
      icon: "minecraft:shears",
      criteria: Criteria.useItemOnEntity("minecraft:shears", "minecraft:sheep"),
    },
  ];

  registerRoot(category, categoryRoot);
  registerAdvancements(category, advancements);
})();
