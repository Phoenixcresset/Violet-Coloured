// oxlint-disable unicorn/no-immediate-mutation
// Needed as Rhino does not support obj = {[param]: ...} declarations

// priority: 1

/** @typedef {{key: string, value: string}} BlockState */

// oxlint-disable-next-line no-redeclare
const _AdvancementsCriteria = (() => {
  const Conditions = _AdvancementsConditions;

  /**
   * @param {string} item An ID or a tag (starting with `#`)
   * @returns {Object}
   */
  function hasItem(item) {
    const criteria = {};
    const key = item.replace("#", "");
    criteria[key] = {
      conditions: {
        items: [
          {
            items: item,
          },
        ],
      },
      trigger: "minecraft:inventory_changed",
    };
    return criteria;
  }

  /**
   * Checks if every item is in the player inventory at the same time
   * @param {string[]} items An array containing IDs or tags (starting with #)
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
   *
   * Setting a requirements containing an array of the items (requirements: [["item1", "item2",..."]]) alongside this criteria will instead check if the player has only one item amongst all the items
   * @param {string[]} items An array containing IDs or tags (starting with #)
   * @returns {Object}
   */
  function hasItems(items) {
    let itemConditionMap = {};
    for (const item of items) {
      Object.assign(itemConditionMap, hasItem(item));
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
   * @param {Object} params The parameters object.
   * @param {string | string[]} params.baseBlocks The blocks to use as the center points for the radius check.
   * @param {string | string[]} params.blocksToCheckFor The blocks to search for within the radius.
   * @param {number} params.range The radius distance to check around each base block.
   * @param {string} params.trigger When to do the check.
   * @param {Object|Function} [params.additionalBaseBlocksConditions] Optional extra conditions to filter the base blocks.
   * @param {Object|Function} [params.additionalBlocksToCheckForConditions] Optional extra conditions to filter the blocks being checked for.
   * @returns {Object}
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
   * @param {string} block An ID or a tag (starting with `#`)
   * @returns {Object}
   */
  function placeBlock(block) {
    const [, shortBlockId] = block.split(":");
    const key = `placed_${shortBlockId}`;
    const criteria = {};
    criteria[key] = {
      conditions: {
        location: [Conditions.blockCheck(block)],
      },
      trigger: "minecraft:placed_block",
    };
    return criteria;
  }

  /**
   * @param {string} item
   * @param {string} entity
   * @returns {Object}
   */
  function useItemOnEntity(item, entity) {
    const [, shortItemId] = item.split(":");
    const [, shortEntityId] = entity.split(":");
    const key = `used_${shortItemId}_on_${shortEntityId}`;
    const criteria = {};
    criteria[key] = {
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
    return criteria;
  }

  /**
   *
   * @param {string} structure
   * @returns {Object}
   */
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

  /**
   * @param {string} dimension
   * @returns {Object}
   */
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

  /**
   * @param {string} entity
   * @returns {Object}
   */
  function summonEntity(entity) {
    const [, shortEntityId] = entity.split(":");
    const key = `summoned_${shortEntityId}`;
    const criteria = {};
    criteria[key] = {
      conditions: {
        entity: Conditions.entityType(entity),
      },
      trigger: "minecraft:summoned_entity",
    };
    return criteria;
  }

  return {
    hasItem: hasItem,
    hasAllItems: hasAllItems,
    hasItems: hasItems,
    consume: consume,
    consumeAll: consumeAll,
    blockInRadius: blockInRadius,
    placeBlock: placeBlock,
    useItemOnEntity: useItemOnEntity,
    findStructure: findStructure,
    enterDimension: enterDimension,
    summonEntity: summonEntity,
  };
})();
