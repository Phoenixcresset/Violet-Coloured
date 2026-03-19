// priority: -10

/** @typedef {{key: string, value: string}} BlockState */

global.Advancements.Criteria = (function Criteria() {
  const { toArray } = global.Utils;

  /**
   * @param {string | string[]} items // An ID, a tag with #, or an array containing IDs
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
   * @param {string | string[]} items // An ID, a tag with #, or an array containing IDs
   * @returns {Object}
   */
  function hasAllItems(items) {
    let itemConditionMap = {};
    for (const item of items) {
      itemConditionMap[item] = hasItem(item);
    }
    return itemConditionMap;
  }

  /**
   * @param {string | string[]} items // An ID, a tag with #, or an array containing IDs
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

  function _areaLocationCheck(blocks, range, additionalConditions) {
    const terms = _combineConditions(_blockCheck(blocks), additionalConditions);

    return {
      condition: "brewinandchewin:area_location_check",
      range: range,
      terms: terms,
    };
  }

  function _combineConditions(conditions, additionalConditions) {
    const result = [];

    conditions = toArray(conditions);
    additionalConditions = toArray(additionalConditions);

    for (const condition of conditions) {
      result.push(condition);
    }

    for (const condition of additionalConditions) {
      result.push(condition);
    }

    return result;
  }

  function _blockCheck(blocks) {
    return {
      condition: "minecraft:location_check",
      predicate: {
        block: {
          blocks: blocks,
        },
      },
    };
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

    const baseBlockConditions = _combineConditions(
      _blockCheck(baseBlocks),
      additionalBaseBlocksConditions
    );

    for (const condition of baseBlockConditions) {
      location.push(condition);
    }

    location.push(
      _areaLocationCheck(
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
        location: [_blockCheck(blocks)],
      },
      trigger: "minecraft:placed_block",
    };
  }

  /**
   * Creates an optional Block State condition. This condition is always true if the block does not have the given keys
   * @param {BlockState | Array<BlockState>} entries An array of objects with `key` as the blockstate to check and `value` as the expected value of this blockstate
   * @returns {Object}
   */
  function optionalBlockStateCondition(entries) {
    entries = toArray(entries);

    const states = {};
    for (const entry of entries) {
      states[entry.key] = entry.value;
    }
    return {
      condition: "brewinandchewin:null_true_block_state",
      state: states,
    };
  }

  return {
    hasItem: hasItem,
    hasAllItems: hasAllItems,
    consume: consume,
    consumeAll: consumeAll,
    blockInRadius: blockInRadius,
    placeBlock: placeBlock,
    optionalBlockStateCondition: optionalBlockStateCondition,
  };
})();
