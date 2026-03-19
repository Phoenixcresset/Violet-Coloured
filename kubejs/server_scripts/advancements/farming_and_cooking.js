(() => {
  const categoryPath = "violetcoloured:farming_and_cooking";
  const [namespace, categoryId] = categoryPath.split(":");
  const categoryFullPath = `${namespace}:advancement/${categoryId}`;

  const categoryRoot = {
    id: "root",
    background: "minecraft:block/bricks",
    icon: "minecraft:hay_block",
    criteria: {
      consumed_item: {
        trigger: "minecraft:consume_item",
      },
    },
  };

  const advancements = [
    {
      id: "place_keg",
      parent: "root",
      icon: "brewinandchewin:keg",
      criteria: {
        placed_keg: placeBlockCondition("brewinandchewin:keg"),
      },
    },
  ];

  function buildRoot(root) {
    const [backgroundNamespace, backgroundPath] = root.background.split(":");
    return {
      display: {
        background: `${backgroundNamespace}:textures/${backgroundPath}.png`,
        icon: {
          id: root.icon,
        },
        title: {
          translate: `advancement.${namespace}.${categoryId}.${root.id}.title`,
        },
        description: {
          translate: `advancement.${namespace}.${categoryId}.${root.id}.description`,
        },
        announce_to_chat: false,
        show_toast: false,
      },
      criteria: root.criteria,
    };
  }

  function buildAdvancement(advancement) {
    return {
      parent: `${categoryPath}/${advancement.parent}`,
      display: {
        icon: {
          id: advancement.icon,
        },
        title: {
          translate: `advancement.${namespace}.${categoryId}.${advancement.id}.title`,
        },
        description: {
          translate: `advancement.${namespace}.${categoryId}.${advancement.id}.description`,
        },
      },
      criteria: advancement.criteria,
    };
  }

  /**
   * @param {string | string[]} blocks
   * @returns {{ conditions: { location: {block: string | string[], condition: string}[]} trigger: string }}
   */
  function placeBlockCondition(blocks) {
    return {
      conditions: {
        location: [
          {
            block: blocks,
            condition: "minecraft:block_state_property",
          },
        ],
      },
      trigger: "minecraft:placed_block",
    };
  }

  ServerEvents.generateData("after_mods", (event) => {
    event.json(
      `${categoryFullPath}/${categoryRoot.id}`,
      buildRoot(categoryRoot)
    );
    for (const advancement of advancements) {
      event.json(
        `${categoryFullPath}/${advancement.id}`,
        buildAdvancement(advancement)
      );
    }
  });
})();
