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
