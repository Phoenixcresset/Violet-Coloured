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
      welcome: {
        trigger: "minecraft:inventory_changed",
      },
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
      id: "mine_stone",
      parent: "root",
      icon: "minecraft:wooden_pickaxe",
      title: "advancements.story.mine_stone.title",
      description: "advancements.story.mine_stone.description",
      criteria: {
        wooden_pickaxe: Criteria.hasItem("minecraft:wooden_pickaxe"),
      },
    },
    {
      id: "stone_pickaxe",
      parent: "mine_stone",
      icon: "minecraft:stone_pickaxe",
      title: "advancements.story.upgrade_tools.title",
      description: "advancements.story.upgrade_tools.description",
      criteria: {
        stone_pickaxe: Criteria.hasItem("minecraft:stone_pickaxe"),
      },
    },
    {
      id: "smelt_iron",
      parent: "stone_pickaxe",
      icon: "minecraft:iron_ingot",
      title: "advancements.story.smelt_iron.title",
      description: "advancements.story.smelt_iron.description",
      criteria: {
        iron_ingot: Criteria.hasItem("minecraft:iron_ingot"),
      },
    },
    {
      id: "lava_bucket",
      parent: "smelt_iron",
      icon: "minecraft:lava_bucket",
      title: "advancements.story.lava_bucket.title",
      description: "advancements.story.lava_bucket.description",
      criteria: {
        lava_bucket: Criteria.hasItem("minecraft:lava_bucket"),
      },
    },
    {
      id: "iron_pickaxe",
      parent: "smelt_iron",
      icon: "minecraft:iron_pickaxe",
      title: "advancements.story.iron_tools.title",
      description: "advancements.story.iron_tools.description",
      criteria: {
        iron_pickaxe: Criteria.hasItem("minecraft:iron_pickaxe"),
      },
    },
    {
      id: "obtain_armor",
      parent: "smelt_iron",
      icon: "minecraft:iron_chestplate",
      title: "advancements.story.obtain_armor.title",
      description: "advancements.story.obtain_armor.description",
      criteria: {
        iron_armor: Criteria.hasItem(ironArmor),
      },
    },
    {
      id: "form_obsidian",
      parent: "lava_bucket",
      icon: "minecraft:obsidian",
      title: "advancements.story.form_obsidian.title",
      description: "advancements.story.form_obsidian.description",
      criteria: {
        obsidian: Criteria.hasItem("minecraft:obsidian"),
      },
    },
    {
      id: "mine_diamond",
      parent: "iron_pickaxe",
      icon: "minecraft:diamond",
      title: "advancements.story.mine_diamond.title",
      description: "advancements.story.mine_diamond.description",
      criteria: {
        diamond: Criteria.hasItem("minecraft:diamond"),
      },
    },
    {
      id: "deflect_arrow",
      parent: "obtain_armor",
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
      parent: "form_obsidian",
      icon: "minecraft:flint_and_steel",
      title: "advancements.story.enter_the_nether.title",
      description: "advancements.story.enter_the_nether.description",
      criteria: {
        entered_nether: {
          conditions: {
            to: "minecraft:the_nether",
          },
          trigger: "minecraft:changed_dimension",
        },
      },
    },
    {
      id: "diamond_armor",
      parent: "mine_diamond",
      icon: "minecraft:diamond_chestplate",
      title: "advancements.story.shiny_gear.title",
      description: "advancements.story.shiny_gear.description",
      criteria: {
        diamond_armor: Criteria.hasItem(diamondArmor),
      },
    },
    {
      id: "enchant_item",
      parent: "mine_diamond",
      icon: "minecraft:enchanted_book",
      title: "advancements.story.enchant_item.title",
      description: "advancements.story.enchant_item.description",
      criteria: {
        enchanted_item: {
          trigger: "minecraft:enchanted_item",
        },
      },
    },
    {
      id: "follow_ender_eye",
      parent: "enter_the_nether",
      icon: "minecraft:ender_eye",
      title: "advancements.story.follow_ender_eye.title",
      description: "advancements.story.follow_ender_eye.description",
      criteria: {
        in_stronghold: {
          conditions: {
            player: [
              {
                condition: "minecraft:entity_properties",
                entity: "this",
                predicate: {
                  location: {
                    structures: "minecraft:stronghold",
                  },
                },
              },
            ],
          },
          trigger: "minecraft:location",
        },
      },
    },
    {
      id: "cure_zombie_villager",
      parent: "enter_the_nether",
      icon: "minecraft:golden_apple",
      title: "advancements.story.cure_zombie_villager.title",
      description: "advancements.story.cure_zombie_villager.description",
      criteria: {
        cured_zombie: {
          trigger: "minecraft:cured_zombie_villager",
        },
      },
    },
    {
      id: "enter_the_end",
      parent: "follow_ender_eye",
      icon: "minecraft:end_stone",
      title: "advancements.story.enter_the_end.title",
      description: "advancements.story.enter_the_end.description",
      criteria: {
        entered_end: {
          conditions: {
            to: "minecraft:the_end",
          },
          trigger: "minecraft:changed_dimension",
        },
      },
    },
    {
      id: "use_shears_on_sheep",
      parent: "root",
      icon: "minecraft:shears",
      criteria: {
        sheared_sheep: Criteria.useItemOnEntity(
          "minecraft:shears",
          "minecraft:sheep"
        ),
      },
    },
  ];

  registerRoot(category, categoryRoot);
  registerAdvancements(category, advancements);
})();
