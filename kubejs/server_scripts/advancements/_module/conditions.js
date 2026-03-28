// priority: 2
// Needs to be declared before Criteria

// oxlint-disable-next-line no-redeclare
const _AdvancementsConditions = (() => {
  const { toArray } = global.Utils;

  /**
   *
   * @param {Object} conditions
   * @param {Object} additionalConditions
   * @returns {Object[]}
   */
  function combine(conditions, additionalConditions) {
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

  /**
   *
   * @param {string | string[]} blocks
   * @param {Object.<string, string>} [state]
   * @returns {Object}
   */
  function blockCheck(blocks, state) {
    return {
      condition: "minecraft:location_check",
      predicate: {
        block: {
          blocks: blocks,
          state: state,
        },
      },
    };
  }

  function areaBlockCheck(blocks, range, additionalConditions) {
    const terms = combine(blockCheck(blocks), additionalConditions);

    return {
      condition: "brewinandchewin:area_location_check",
      range: range,
      terms: terms,
    };
  }

  /**
   * Creates an optional Block State condition. This condition is always true if the block does not have the given keys
   * @param {BlockState | Array<BlockState>} entries An array of objects with `key` as the blockstate to check and `value` as the expected value of this blockstate
   * @returns {Object}
   */
  function optionalBlockState(entries) {
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

  /**
   * @param {Object<string, any>} predicate
   * @returns {Object}
   */
  function entityProperties(predicate) {
    return {
      condition: "minecraft:entity_properties",
      entity: "this",
      predicate: predicate,
    };
  }

  /**
   * @param {string} entity
   * @returns {Object}
   */
  function entityType(entity) {
    return entityProperties({ type: entity });
  }

  /**
   * @param {string} items
   * @returns {Object}
   */
  function matchTool(items) {
    return {
      condition: "minecraft:match_tool",
      predicate: {
        items: items,
      },
    };
  }

  return {
    combine: combine,
    blockCheck: blockCheck,
    areaBlockCheck: areaBlockCheck,
    optionalBlockState: optionalBlockState,
    entityType: entityType,
    matchTool: matchTool,
  };
})();
