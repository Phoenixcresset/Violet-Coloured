/** @typedef {string} ModId */
/** @typedef {string} ShortTagId */
/** @typedef {string} EntryId */
/** @typedef {string} TagId */
/** @typedef {"item"|"block"|"fluid"|"entity_type"|"worldgen/structure"} TagType */
/** @typedef {Record<ModId, Array<ShortTagId>>} ModToTagsRecord */
/** @typedef {Record<TagId, Record<ShortTagId, Array<EntryId>>>} TagToEntriesRecord */
global.TagModule = (function () {
  /** @type {Record<TagType, Array<{tag: TagId, entry: EntryId}>>} */
  const _additionToEntries = {};
  /** @type {Record<TagType, Array<FullTagId>>} */
  const _removals = {};
  /** @type {Record<TagType, Array<{tag: TagId, entry: EntryId}>>} */
  const __removalsFromEntries = {};

  function _formatEntryId(modId, entryId) {
    return entryId.startsWith("#")
      ? `#${modId}:${entryId.substring(1)}`
      : `${modId}:${entryId}`;
  }

  function _getOrCreateArrayForTagType(record, tagType) {
    if (!record[tagType]) {
      record[tagType] = [];
    }
    return record[tagType];
  }

  /**
   * @param {Record<TagType, TagToEntriesRecord>} tagsToAddToEntries
   */
  function registerAddedTagsToEntries(tagsToAddToEntries) {
    for (const [tagType, tagToEntriesMap] of Object.entries(
      tagsToAddToEntries,
    )) {
      // Using a keyed set to avoid duplicates, since _additionToEntries contains objects
      let additionsSet = new Set(
        (_additionToEntries[tagType] || []).map(
          (entry) => `${entry.tag}|${entry.entry}`,
        ),
      );

      for (const [tag, mods] of Object.entries(tagToEntriesMap)) {
        for (const [modId, entries] of Object.entries(mods)) {
          for (const entry of entries) {
            let formattedEntryId = _formatEntryId(modId, entry);
            if (additionsSet.has(`${tag}|${formattedEntryId}`)) {
              continue;
            }
            _getOrCreateArrayForTagType(_additionToEntries, tagType).push({
              tag: tag,
              entry: formattedEntryId,
            });
          }
        }
      }
    }
  }

  /**
   * @param {Record<TagType, ModToTagsRecord>} tagsToRemove
   */
  function registerRemovedTags(tagsToRemove) {
    for (const [tagType, modToTagsMap] of Object.entries(tagsToRemove)) {
      let removalsSet = new Set(_removals[tagType] || []);

      for (const [modId, tags] of Object.entries(modToTagsMap)) {
        for (const tag of tags) {
          let fullTagId = `${modId}:${tag}`;
          if (removalsSet.has(fullTagId)) {
            continue;
          }
          _getOrCreateArrayForTagType(_removals, tagType).push(fullTagId);
        }
      }
    }
  }

  /**
   * @param {Record<TagType, TagToEntriesRecord>} tagsToRemoveFromEntries
   */
  function registerRemovedTagsFromEntries(tagsToRemoveFromEntries) {
    for (const [tagType, tagToEntriesMap] of Object.entries(
      tagsToRemoveFromEntries,
    )) {
      // Using a keyed set to avoid duplicates, since removalsFromEntries contains objects
      let removalsFromEntriesSet = new Set(
        (__removalsFromEntries[tagType] || []).map(
          (entry) => `${entry.tag}|${entry.entry}`,
        ),
      );

      for (const [tag, mods] of Object.entries(tagToEntriesMap)) {
        for (const [modId, entries] of Object.entries(mods)) {
          for (const entry of entries) {
            let formattedEntryId = _formatEntryId(modId, entry);
            if (removalsFromEntriesSet.has(`${tag}|${formattedEntryId}`)) {
              continue;
            }
            _getOrCreateArrayForTagType(__removalsFromEntries, tagType).push({
              tag: tag,
              entry: formattedEntryId,
            });
          }
        }
      }
    }
  }

  function apply(event, tagType) {
    const additions = _additionToEntries[tagType] || [];
    const removals = _removals[tagType] || [];
    const removalsFromEntries = __removalsFromEntries[tagType] || [];
    for (const tag of removals) {
      event.removeAll(tag);
    }
    for (const entry of removalsFromEntries) {
      event.remove(entry.tag, entry.entry);
    }
    for (const entry of additions) {
      event.add(entry.tag, entry.entry);
    }
  }

  return {
    registerAddedTagsToEntries: registerAddedTagsToEntries,
    registerRemovedTags: registerRemovedTags,
    registerRemovedTagsFromEntries: registerRemovedTagsFromEntries,
    apply: apply,
  };
})();
