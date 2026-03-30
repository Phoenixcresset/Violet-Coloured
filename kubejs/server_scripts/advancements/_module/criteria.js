// @ts-check

// priority: 1

// oxlint-disable unicorn/no-immediate-mutation
// Needed as Rhino does not support obj = {[param]: ...} declarations

// oxlint-disable max-lines

/** @typedef {{key: string, value: string}} BlockState */

// oxlint-disable-next-line no-redeclare
const _AdvancementsCriteria = (() => {
  const Conditions = _AdvancementsConditions;
  const { lootTableToCriteria } = _AdvancementsUtils;

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
   * @param {string} name The criteria name
   * @param {string[]} items An array containing IDs or tags (starting with #)
   * @returns {Object}
   */
  function hasAllItems(name, items) {
    const criteria = {};
    const neededItems = [];

    for (const item of items) {
      neededItems.push({ items: item });
    }

    criteria[name] = {
      conditions: {
        items: neededItems,
      },
      trigger: "minecraft:inventory_changed",
    };

    return criteria;
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
        entity: [Conditions.entityType(entity)],
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
        player: [Conditions.entityInStructure(structure)],
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

  /**
   * @returns {Object}
   */
  function hasAllPotionEffects() {
    const effects = {};
    for (const effect of global.Registry.potionEffects) {
      effects[effect] = {};
    }
    return {
      all_effects: {
        trigger: "minecraft:effects_changed",
        conditions: {
          effects: effects,
        },
      },
    };
  }

  /**
   * @returns {Object}
   */
  function hasAllEffects() {
    const effects = {};
    for (const effect of global.Registry.potionEffects) {
      effects[effect] = {};
    }
    for (const effect of global.Registry.otherEffects) {
      effects[effect] = {};
    }
    return {
      all_effects: {
        trigger: "minecraft:effects_changed",
        conditions: {
          effects: effects,
        },
      },
    };
  }

  /**
   * @param {string} item
   * @param {string} block
   * @param {Object.<string, string>} [blockState]
   * @returns {Object}
   */
  function useItemOnBlock(item, block, blockState) {
    const [, shortItemId] = item.split(":");
    const [, shortBlockId] = block.split(":");
    const key = `use_${shortItemId}_on_${shortBlockId}`;

    const conditions = [];
    conditions.push(Conditions.matchTool(item));
    conditions.push(Conditions.blockCheck(block, blockState));

    const criteria = {};
    criteria[key] = {
      trigger: "minecraft:item_used_on_block",
      conditions: {
        location: conditions,
      },
    };
    return criteria;
  }

  /**
   * Triggers when the player open a container with the designated loot tables
   * @param {string[]} lootTables
   * @returns {Object}
   */
  function lootChest(lootTables) {
    const criteria = {};
    for (const lootTable of lootTables) {
      let key = lootTableToCriteria(lootTable);
      criteria[key] = {
        conditions: {
          loot_table: lootTable,
        },
        trigger: "minecraft:player_generates_container_loot",
      };
    }
    return criteria;
  }

  /**
   * @param {string} name
   * @param {string} trigger
   * @param {Object<string, any>} [conditions]
   * @returns {Object}
   */
  function raw(name, trigger, conditions) {
    const criteria = {};
    criteria[name] = {
      trigger: trigger,
      conditions: conditions,
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
    hasAllPotionEffects: hasAllPotionEffects,
    hasAllEffects: hasAllEffects,
    useItemOnBlock: useItemOnBlock,
    lootChest: lootChest,
    raw: raw,
  };
})();
