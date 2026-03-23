// @ts-check

(() => {
  const { registerRoot, registerAdvancements } = _Advancements;
  const Criteria = _AdvancementsCriteria;

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
    criteria: {
      entered_nether: {
        conditions: {
          to: "minecraft:the_nether",
        },
        trigger: "minecraft:changed_dimension",
      },
    },
  };

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
      criteria: {
        ancient_debris: Criteria.hasItem("minecraft:ancient_debris"),
      },
    },
    {
      id: "obtain_crying_obsidian",
      parent: "root",
      icon: "minecraft:crying_obsidian",
      title: "advancements.nether.obtain_crying_obsidian.title",
      description: "advancements.nether.obtain_crying_obsidian.description",
      criteria: {
        crying_obsidian: Criteria.hasItem("minecraft:crying_obsidian"),
      },
    },
    // {
    //   id:
    // }
  ];

  registerRoot(category, categoryRoot);
  registerAdvancements(category, advancements);
})();
