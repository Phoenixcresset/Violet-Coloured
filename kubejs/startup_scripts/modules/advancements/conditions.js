// priority: -1
// Needs Advancements to be declared first

global.Advancements.Conditions = (function Conditions() {
  const { toArray } = global.Utils;

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

  function blockCheck(blocks) {
    return {
      condition: "minecraft:location_check",
      predicate: {
        block: {
          blocks: blocks,
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

  return {
    combine: combine,
    blockCheck: blockCheck,
    areaBlockCheck: areaBlockCheck,
    optionalBlockState: optionalBlockState,
  };
})();
