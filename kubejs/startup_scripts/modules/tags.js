/** @typedef {"item"|"block"|"fluid"|"entity_type"|"worldgen/structure"} TagType */

global.Tags = (function Tags() {
  const TYPES = {
    ITEM: "item",
    BLOCK: "block",
    ENTITY: "entity_type",
    FLUID: "fluid",
    STRUCTURE: "worldgen/structure",
  };

  /** @type {Record<TagType, Map<string, Set<string>>>} */
  const _entryAdditions = {};

  /** @type {Record<TagType, Set<string>>} */
  const _removals = {};

  /** @type {Record<TagType, Map<string, Set<string>>>} */
  const _entryRemovals = {};

  function _getMap(record, tagType) {
    if (!record[tagType]) {
      record[tagType] = new Map();
    }
    return record[tagType];
  }

  function _getSet(map, key) {
    if (!map.has(key)) {
      map.set(key, new Set());
    }
    return map.get(key);
  }

  function _getTagSet(record, tagType) {
    if (!record[tagType]) {
      record[tagType] = new Set();
    }
    return record[tagType];
  }

  /**
   * @param {Record<TagType, string[]>} data
   */
  function registerRemovedTags(data) {
    for (const [tagType, tags] of Object.entries(data)) {
      let set = _getTagSet(_removals, tagType);

      for (const tag of tags) {
        set.add(tag);
      }
    }
  }

  function _registerTagEntries(storage, data) {
    for (const [tagType, tagToEntries] of Object.entries(data)) {
      let map = _getMap(storage, tagType);

      for (const [tag, entries] of Object.entries(tagToEntries)) {
        let set = _getSet(map, tag);

        for (const entry of entries) {
          set.add(entry);
        }
      }
    }
  }

  /**
   * @param {Record<TagType, Record<string, string[]>>} data
   */
  function registerRemovedTagsFromEntries(data) {
    _registerTagEntries(_entryRemovals, data);
  }

  /**
   * @param {Record<TagType, Record<string, string[]>>} data
   */
  function registerAddedTagsToEntries(data) {
    _registerTagEntries(_entryAdditions, data);
  }

  function commit(event, tagType) {
    const removals = _removals[tagType];
    if (removals) {
      for (const tag of removals) {
        event.removeAll(tag);
      }
    }

    const entryRemovals = _entryRemovals[tagType];
    if (entryRemovals) {
      for (const [tag, entries] of entryRemovals) {
        for (const entry of entries) {
          event.remove(tag, entry);
        }
      }
    }

    const entryAdditions = _entryAdditions[tagType];
    if (entryAdditions) {
      for (const [tag, entries] of entryAdditions) {
        for (const entry of entries) {
          event.add(tag, entry);
        }
      }
    }
  }

  return {
    TYPES: TYPES,
    registerAddedTagsToEntries: registerAddedTagsToEntries,
    registerRemovedTags: registerRemovedTags,
    registerRemovedTagsFromEntries: registerRemovedTagsFromEntries,
    commit: commit,
  };
})();
