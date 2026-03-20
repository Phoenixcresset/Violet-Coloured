// priority: -2
// Needs Advancements and Conditions to be declared first

/** @typedef {{key: string, value: string}} BlockState */

global.Advancements.Criteria = (function Criteria() {
  const { Conditions } = global.Advancements;

  /**
   * @param {string | string[]} items An ID, a tag with #, or an array containing IDs
   * @returns {Object}
   */
  function hasItem(items) {
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
   * Checks if every item is in the player inventory at the same time
   * @param {string | string[]} items An ID, a tag with #, or an array containing IDs or tags
   * @returns {Object}
   */
  function hasAllItems(items) {
    const neededItems = [];

    for (const item of items) {
      neededItems.push({ items: item });
    }

    return {
      conditions: {
        items: neededItems,
      },
      trigger: "minecraft:inventory_changed",
    };
  }

  /**
   * Tracks if the player had each item at least one
   * @param {string | string[]} items An ID, a tag with #, or an array containing IDs
   * @returns {Object}
   */
  function gotAllItems(items) {
    let itemConditionMap = {};
    for (const item of items) {
      itemConditionMap[item] = hasItem(item);
    }
    return itemConditionMap;
  }

  /**
   * @param {string | string[]} items An ID, a tag with #, or an array containing IDs
   * @returns {Object}
   */
  function consume(items) {
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
  function consumeAll(items) {
    let consumeConditionMap = {};
    for (const item of items) {
      consumeConditionMap[item] = consume(item);
    }
    return consumeConditionMap;
  }

  function blockInRadius({
    baseBlocks,
    blocksToCheckFor,
    range,
    trigger,
    additionalBaseBlocksConditions,
    additionalBlocksToCheckForConditions,
  }) {
    const location = [];

    const baseBlockConditions = Conditions.combine(
      Conditions.blockCheck(baseBlocks),
      additionalBaseBlocksConditions
    );

    for (const condition of baseBlockConditions) {
      location.push(condition);
    }

    location.push(
      Conditions.areaBlockCheck(
        blocksToCheckFor,
        range,
        additionalBlocksToCheckForConditions
      )
    );

    const criteria = {
      conditions: {
        location: location,
      },
      trigger: trigger,
    };

    return criteria;
  }

  /**
   * @param {string | string[]} blocks An ID, a tag with `#`, or an array containing IDs
   * @returns {{
   *   conditions: {
   *     location: {
   *       condition: "minecraft:location_check",
   *       predicate: { block: { blocks: string | string[] } }
   *     }[]
   *   },
   *   trigger: "minecraft:placed_block"
   * }}
   */
  function placeBlock(blocks) {
    return {
      conditions: {
        location: [Conditions.blockCheck(blocks)],
      },
      trigger: "minecraft:placed_block",
    };
  }

  return {
    hasItem: hasItem,
    hasAllItems: hasAllItems,
    gotAllItems: gotAllItems,
    consume: consume,
    consumeAll: consumeAll,
    blockInRadius: blockInRadius,
    placeBlock: placeBlock,
  };
})();
