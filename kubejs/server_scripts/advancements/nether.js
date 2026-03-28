// @ts-check

(() => {
  const { registerRoot, registerAdvancements } = _Advancements;
  const Criteria = _AdvancementsCriteria;
  const { mapLootTablesToCriteria } = _AdvancementsUtils;

  /** @type {Category} */
  const category = {
    namespace: "violetcoloured",
    name: "nether",
  };

  /** @type {Root} */
  const categoryRoot = {
    background: "minecraft:gui/advancements/backgrounds/nether",
    icon: "minecraft:red_nether_bricks",
    title: "advancements.nether.root.title",
    description: "advancements.nether.root.description",
    criteria: Criteria.enterDimension("minecraft:the_nether"),
  };

  const netheriteArmor = [
    "minecraft:netherite_helmet",
    "minecraft:netherite_chestplate",
    "minecraft:netherite_leggings",
    "minecraft:netherite_boots",
  ];

  const bastionLootTables = [
    "minecraft:chests/bastion_bridge",
    "minecraft:chests/bastion_hoglin_stable",
    "minecraft:chests/bastion_treasure",
    "minecraft:chests/bastion_other",
  ];

  /** @type {Advancement[]} */
  const advancements = [
    {
      id: "find_fortress",
      parent: "root",
      icon: "minecraft:nether_bricks",
      title: "advancements.nether.find_fortress.title",
      description: "advancements.nether.find_fortress.description",
      criteria: Criteria.findStructure("minecraft:fortress"),
    },
    {
      id: "find_bastion",
      parent: "root",
      icon: "minecraft:polished_blackstone_bricks",
      title: "advancements.nether.find_bastion.title",
      description: "advancements.nether.find_bastion.description",
      criteria: Criteria.findStructure("minecraft:bastion_remnant"),
    },
    {
      id: "obtain_ancient_debris",
      parent: "root",
      icon: "minecraft:ancient_debris",
      title: "advancements.nether.obtain_ancient_debris.title",
      description: "advancements.nether.obtain_ancient_debris.description",
      criteria: Criteria.hasItem("minecraft:ancient_debris"),
    },
    {
      id: "obtain_crying_obsidian",
      parent: "root",
      icon: "minecraft:crying_obsidian",
      title: "advancements.nether.obtain_crying_obsidian.title",
      description: "advancements.nether.obtain_crying_obsidian.description",
      criteria: Criteria.hasItem("minecraft:crying_obsidian"),
    },
    {
      id: "obtain_wither_skull",
      parent: "find_fortress",
      icon: "minecraft:wither_skeleton_skull",
      title: "advancements.nether.get_wither_skull.title",
      description: "advancements.nether.get_wither_skull.description",
      criteria: Criteria.hasItem("minecraft:wither_skeleton_skull"),
    },
    {
      id: "obtain_blaze_rod",
      parent: "find_fortress",
      icon: "minecraft:blaze_rod",
      title: "advancements.nether.obtain_blaze_rod.title",
      description: "advancements.nether.obtain_blaze_rod.description",
      criteria: Criteria.hasItem("minecraft:blaze_rod"),
    },
    {
      id: "summon_wither",
      parent: "obtain_wither_skull",
      icon: "minecraft:nether_star",
      title: "advancements.nether.summon_wither.title",
      description: "advancements.nether.summon_wither.description",
      criteria: Criteria.summonEntity("minecraft:wither"),
    },
    {
      id: "brew_potion",
      parent: "obtain_blaze_rod",
      icon: "minecraft:potion",
      title: "advancements.nether.brew_potion.title",
      description: "advancements.nether.brew_potion.description",
      criteria: Criteria.raw("potion", "minecraft:brewed_potion"),
    },
    {
      id: "create_beacon",
      parent: "summon_wither",
      icon: "minecraft:beacon",
      title: "advancements.nether.create_beacon.title",
      description: "advancements.nether.create_beacon.description",
      criteria: Criteria.raw("beacon", "minecraft:construct_beacon", {
        level: { min: 1 },
      }),
    },
    {
      id: "create_full_beacon",
      parent: "create_beacon",
      icon: "minecraft:beacon",
      title: "advancements.nether.create_full_beacon.title",
      description: "advancements.nether.create_full_beacon.description",
      criteria: {
        beacon: {
          trigger: "minecraft:construct_beacon",
          conditions: {
            level: 4,
          },
        },
      },
    },
    {
      id: "all_potion_effects",
      parent: "brew_potion",
      icon: "minecraft:milk_bucket",
      title: "advancements.nether.all_potions.title",
      description: "advancements.nether.all_potions.description",
      criteria: Criteria.hasAllPotionEffects(),
      type: "challenge",
    },
    {
      id: "all_effects",
      parent: "all_potion_effects",
      icon: "minecraft:bucket",
      title: "advancements.nether.all_effects.title",
      description: "advancements.nether.all_effects.description",
      criteria: Criteria.hasAllEffects(),
      type: "challenge",
    },
    {
      id: "obtain_all_netherite_armor",
      parent: "obtain_ancient_debris",
      icon: "minecraft:netherite_chestplate",
      title: "advancements.nether.netherite_armor.title",
      description: "advancements.nether.netherite_armor.description",
      criteria: Criteria.hasAllItems("netherite_armor", netheriteArmor),
      type: "challenge",
    },
    {
      id: "charge_respawn_anchor",
      parent: "obtain_crying_obsidian",
      icon: "minecraft:respawn_anchor",
      title: "advancements.nether.charge_respawn_anchor.title",
      description: "advancements.nether.charge_respawn_anchor.description",
      criteria: Criteria.useItemOnBlock(
        "minecraft:glowstone",
        "minecraft:respawn_anchor",
        { charges: "4" }
      ),
    },
    {
      id: "use_lodestone",
      parent: "obtain_ancient_debris",
      icon: "minecraft:lodestone",
      title: "advancements.nether.use_lodestone.title",
      description: "advancements.nether.use_lodestone.description",
      criteria: Criteria.useItemOnBlock(
        "minecraft:compass",
        "minecraft:lodestone"
      ),
    },
    {
      id: "kill_ghast_with_fireball",
      parent: "root",
      icon: "minecraft:fire_charge",
      title: "advancements.nether.return_to_sender.title",
      description: "advancements.nether.return_to_sender.description",
      // TODO Extract into a helper function
      criteria: {
        killed_ghast: {
          conditions: {
            entity: [
              {
                condition: "minecraft:entity_properties",
                entity: "this",
                predicate: {
                  type: "minecraft:ghast",
                },
              },
            ],
            killing_blow: {
              direct_entity: {
                type: "minecraft:fireball",
              },
              tags: [
                {
                  expected: true,
                  id: "minecraft:is_projectile",
                },
              ],
            },
          },
          trigger: "minecraft:player_killed_entity",
        },
      },
      type: "challenge",
    },
    {
      id: "loot_bastion",
      parent: "find_bastion",
      icon: "minecraft:chest",
      title: "advancements.nether.loot_bastion.title",
      description: "advancements.nether.loot_bastion.description",
      criteria: Criteria.lootChest(bastionLootTables),
      requirements: [mapLootTablesToCriteria(bastionLootTables)],
    },
  ];

  registerRoot(category, categoryRoot);
  registerAdvancements(category, advancements);
})();
