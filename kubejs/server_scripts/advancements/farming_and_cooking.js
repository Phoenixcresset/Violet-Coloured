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
    {
      id: "brew_drink",
      parent: "place_keg",
      icon: "brewinandchewin:beer",
      criteria: {
        has_drink: itemCondition("#brewinandchewin:fermented_drinks"),
      },
    },
    {
      id: "all_fermented_drinks",
      parent: "brew_drink",
      icon: "vinery:noir_wine",
      type: "challenge",
      criteria: consumeAllCondition(
        Ingredient.of("#brewinandchewin:fermented_drinks").getItemIds()
      ),
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
        frame: advancement.type,
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

  function itemCondition(items) {
    return {
      conditions: {
        items: [
          {
            items: items,
          },
        ],
      },
      trigger: "minecraft:inventory_changed",
    };
  }

  function allItemsCondition(items) {
    let itemConditionMap = {};
    for (const item of items) {
      itemConditionMap[item] = itemCondition(item);
    }
    return itemConditionMap;
  }

  function consumeCondition(items) {
    return {
      conditions: {
        item: {
          items: items,
        },
      },
      trigger: "minecraft:consume_item",
    };
  }

  function consumeAllCondition(items) {
    let consumeConditionMap = {};
    for (const item of items) {
      consumeConditionMap[item] = consumeCondition(item);
    }
    return consumeConditionMap;
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
