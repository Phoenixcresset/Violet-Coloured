// @ts-check

(() => {
  const { Criteria, registerRoot, registerAdvancements } = global.Advancements;

  /** @type {Category} */
  const category = {
    namespace: "violetcoloured",
    name: "story",
  };

  /** @type {Root} */
  const categoryRoot = {
    background: "minecraft:gui/advancements/backgrounds/stone",
    icon: "minecraft:grass_block",
    criteria: {
      welcome: {
        trigger: "minecraft:inventory_changed",
      },
    },
  };

  /** @type {Advancement[]} */
  const advancements = [
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
