// oxlint-disable unicorn/no-immediate-mutation
// Needed as Rhino does not support obj = {[param]: ...} declarations

// priority: 1

/** @typedef {{key: string, value: string}} BlockState */

// oxlint-disable-next-line no-redeclare
const _AdvancementsCriteria = (() => {
  const Conditions = _AdvancementsConditions;

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
   * Must be used with a requirements containing the same item IDs (requirements: [[<requirement1>, <requirement2>,...]])
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

  /**
   * Checks for specific blocks within a given radius of base blocks.
   *
   * @param {Object} params - The parameters object.
   * @param {Array} params.baseBlocks - The blocks to use as the center points for the radius check.
   * @param {Array} params.blocksToCheckFor - The blocks to search for within the radius.
   * @param {number} params.range - The radius distance to check around each base block.
   * @param {Function} params.trigger - Callback function triggered when a matching block is found.
   * @param {Object|Function} [params.additionalBaseBlocksConditions] - Optional extra conditions to filter the base blocks.
   * @param {Object|Function} [params.additionalBlocksToCheckForConditions] - Optional extra conditions to filter the blocks being checked for.
   * @returns {void}
   */
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

  function useItemOnEntity(item, entity) {
    return {
      trigger: "minecraft:player_interacted_with_entity",
      conditions: {
        item: {
          items: [item],
        },
        entity: [
          {
            conditions: "minecraft:entity_properties",
            entity: "this",
            predicate: {
              type: entity,
            },
          },
        ],
      },
    };
  }

  function findStructure(structure) {
    const criteria = {};
    criteria[structure] = {
      trigger: "minecraft:location",
      conditions: {
        player: [
          {
            condition: "minecraft:entity_properties",
            entity: "this",
            predicate: {
              location: {
                structures: structure,
              },
            },
          },
        ],
      },
    };
    return criteria;
  }

  function enterDimension(dimension) {
    const [, dimensionShortId] = dimension.split(":");
    const key = `entered_${dimensionShortId}`;
    const criteria = {};
    criteria[key] = {
      conditions: {
        to: dimension,
      },
      trigger: "minecraft:changed_dimension",
    };
    return criteria;
  }

  return {
    hasItem: hasItem,
    hasAllItems: hasAllItems,
    gotAllItems: gotAllItems,
    consume: consume,
    consumeAll: consumeAll,
    blockInRadius: blockInRadius,
    placeBlock: placeBlock,
    useItemOnEntity: useItemOnEntity,
    findStructure: findStructure,
    enterDimension: enterDimension,
  };
})();
