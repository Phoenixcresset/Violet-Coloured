(() => {
  const { Criteria, registerRoot, registerAdvancements } = global.Advancements;

  const category = {
    namespace: "violetcoloured",
    name: "story",
  };

  const categoryRoot = {
    background: "minecraft:gui/advancements/backgrounds/stone",
    icon: "minecraft:grass_block",
    criteria: {
      welcome: {
        trigger: "minecraft:inventory_changed",
      },
    },
  };

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
