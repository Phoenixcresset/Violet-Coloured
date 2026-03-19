(() => {
  const CONFIG = {
    namespace: "violetcoloured",
    category: "farming_and_cooking",
    get categoryPath() {
      return `${this.namespace}:${this.category}`;
    },
    get fullCategoryPath() {
      return `${CONFIG.namespace}:advancement/${CONFIG.category}`;
    },
  };

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
        has_drink: itemCriteria("#brewinandchewin:fermented_drinks"),
      },
    },
    {
      id: "all_fermented_drinks",
      parent: "brew_drink",
      icon: "vinery:noir_wine",
      type: "challenge",
      criteria: consumeAllCriteria(
        Ingredient.of("#brewinandchewin:fermented_drinks").getItemIds()
      ),
    },
    {
      id: "ferment_cheese",
      parent: "place_keg",
      icon: "brewinandchewin:unripe_flaxen_cheese_wheel",
      criteria: {
        unripe_cheese_wheel: itemCriteria(
          "#brewinandchewin:cheese_wheels/unripe"
        ),
      },
    },
    {
      id: "place_temperature_source_near_keg",
      parent: "place_keg",
      icon: "brewinandchewin:ice_crate",
      criteria: {
        placed_temperature_source_near_keg: {
          conditions: blockInRadiusCondition({
            baseBlocks: "#brewinandchewin:temperature_sources",
            blocksToCheckFor: "brewinandchewin:keg",
            range: 2,
            additionalBaseBlocksConditions: optionalBlockStateCondition({
              key: "lit",
              value: "true",
            }),
          }),
          trigger: "minecraft:placed_block",
        },
        placed_keg_near_temperature_source: {
          conditions: blockInRadiusCondition({
            baseBlocks: "brewinandchewin:keg",
            blocksToCheckFor: "#brewinandchewin:temperature_sources",
            range: 2,
            additionalBlocksToCheckForConditions: optionalBlockStateCondition({
              key: "lit",
              value: "true",
            }),
          }),
          trigger: "minecraft:placed_block",
        },
        updated_temperature_source_near_keg: {
          conditions: blockInRadiusCondition({
            baseBlocks: "#brewinandchewin:temperature_sources",
            blocksToCheckFor: "brewinandchewin:keg",
            range: 2,
            additionalBaseBlocksConditions: optionalBlockStateCondition({
              key: "lit",
              value: "true",
            }),
          }),
          trigger: "minecraft:item_used_on_block",
        },
      },
      requirements: [
        [
          "placed_temperature_source_near_keg",
          "placed_keg_near_temperature_source",
          "updated_temperature_source_near_keg",
        ],
      ],
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
          translate: `advancement.${CONFIG.namespace}.${CONFIG.category}.${root.id}.title`,
        },
        description: {
          translate: `advancement.${CONFIG.namespace}.${CONFIG.category}.${root.id}.description`,
        },
        announce_to_chat: false,
        show_toast: false,
      },
      criteria: root.criteria,
    };
  }

  /**
   * Description placeholder
   *
   * @param {*} advancement
   * @returns {Object}
   */
  function buildAdvancement(advancement) {
    return {
      parent: `${CONFIG.categoryPath}/${advancement.parent}`,
      display: {
        icon: {
          id: advancement.icon,
        },
        frame: advancement.type,
        title: {
          translate: `advancement.${CONFIG.namespace}.${CONFIG.category}.${advancement.id}.title`,
        },
        description: {
          translate: `advancement.${CONFIG.namespace}.${CONFIG.category}.${advancement.id}.description`,
        },
      },
      criteria: advancement.criteria,
      requirements: advancement.requirements,
    };
  }

  /**
   * @param {string | string[]} items // An ID, a tag with #, or an array containing IDs
   * @returns {Object}
   */
  function itemCriteria(items) {
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

  /**
   * @param {string | string[]} items // An ID, a tag with #, or an array containing IDs
   * @returns {Object}
   */
  function allItemsCriteria(items) {
    let itemConditionMap = {};
    for (const item of items) {
      itemConditionMap[item] = itemCriteria(item);
    }
    return itemConditionMap;
  }

  /**
   * @param {string | string[]} items // An ID, a tag with #, or an array containing IDs
   * @returns {Object}
   */
  function consumeCriteria(items) {
    return {
      conditions: {
        item: {
          items: items,
        },
      },
      trigger: "minecraft:consume_item",
    };
  }

  /**
   * @param {string | string[]} items An ID, a tag with `#`, or an array containing IDs
   * @returns {Object}
   */
  function consumeAllCriteria(items) {
    let consumeConditionMap = {};
    for (const item of items) {
      consumeConditionMap[item] = consumeCriteria(item);
    }
    return consumeConditionMap;
  }

  function blockInRadiusCondition({
    baseBlocks,
    blocksToCheckFor,
    range,
    additionalBaseBlocksConditions,
    additionalBlocksToCheckForConditions,
  }) {
    if (!Array.isArray(additionalBaseBlocksConditions)) {
      additionalBaseBlocksConditions = [additionalBaseBlocksConditions];
    }
    if (!Array.isArray(additionalBlocksToCheckForConditions)) {
      additionalBlocksToCheckForConditions = [
        additionalBlocksToCheckForConditions,
      ];
    }
    const conditions = {
      location: [
        {
          condition: "minecraft:location_check",
          predicate: {
            block: {
              blocks: baseBlocks,
            },
          },
        },
        {
          condition: "brewinandchewin:area_location_check",
          range: range,
          terms: [
            {
              condition: "minecraft:location_check",
              predicate: {
                block: {
                  blocks: blocksToCheckFor,
                },
              },
            },
          ],
        },
      ],
    };
    if (additionalBaseBlocksConditions) {
      for (const condition of additionalBaseBlocksConditions) {
        conditions.location.push(condition);
      }
    }
    if (additionalBlocksToCheckForConditions) {
      for (const condition of additionalBlocksToCheckForConditions) {
        conditions.location[1].terms.push(condition);
      }
    }
    return conditions;
  }

  /**
   * @param {string | string[]} blocks An ID, a tag with `#`, or an array containing IDs
   * @returns {{ conditions: { location: {block: string | string[], condition: string}[]} trigger: string }}
   */
  function placeBlockCondition(blocks) {
    return {
      conditions: {
        location: [
          {
            condition: "minecraft:location_check",
            predicate: { block: { blocks: blocks } },
          },
        ],
      },
      trigger: "minecraft:placed_block",
    };
  }

  /**
   * Creates an optional Block State condition. This condition is always true if the block does not have the given keys
   * @param {Array<{key: string, value: string}>} entries An array of objects with `key` as the blockstate to check and `value` as the expected value of this blockstate
   * @returns {Object}
   */
  function optionalBlockStateCondition(entries) {
    if (!Array.isArray(entries)) {
      entries = [entries];
    }
    const states = {};
    for (const entry of entries) {
      states[entry.key] = entry.value;
    }
    return {
      condition: "brewinandchewin:null_true_block_state",
      state: states,
    };
  }

  ServerEvents.generateData("after_mods", (event) => {
    event.json(
      `${CONFIG.fullCategoryPath}/${categoryRoot.id}`,
      buildRoot(categoryRoot)
    );
    for (const advancement of advancements) {
      console.log("Advancement", advancement.id, ":", advancement);
      event.json(
        `${CONFIG.fullCategoryPath}/${advancement.id}`,
        buildAdvancement(advancement)
      );
    }
  });
})();
