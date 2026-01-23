/** @typedef {string} ModId */
/** @typedef {string} ShortTagId */
/** @typedef {string} ItemId */
/** @typedef {string} TagId */
/** @typedef {"item"|"block"|"fluid"|"entity_type"|"worldgen/structure"} TagType */
/** @typedef {Record<ModId, Array<ShortTagId>>} ModToTagsRecord */
/** @typedef {Record<TagId, Record<ShortTagId, Array<ItemId>>>} TagToItemsRecord */

global.TagModule = (function () {
  /** @type {Record<TagType, Array<{tag: TagId, item: ItemId}>>} */
  const _itemsAddition = {};
  /** @type {Record<TagType, Array<FullTagId>>} */
  const _removals = {};
  /** @type {Record<TagType, Array<{tag: TagId, item: ItemId}>>} */
  const __itemsRemoval = {};

  function _formatItemId(modId, itemId) {
    return itemId.startsWith("#")
      ? `#${modId}:${itemId.substring(1)}`
      : `${modId}:${itemId}`;
  }

  function _getOrCreateArrayForTagType(record, tagType) {
    if (!record[tagType]) {
      record[tagType] = [];
    }
    return record[tagType];
  }

  /**
   * @param {Record<TagType, TagToItemsRecord>} tagsToAddToItems
   */
  function registerAddedTagsToItems(tagsToAddToItems) {
    for (const [tagType, tagToItemsMap] of Object.entries(tagsToAddToItems)) {
      // Using a keyed set to avoid duplicates, since _itemsAddition contains objects
      let additionsSet = new Set(
        (_itemsAddition[tagType] || []).map(
          (entry) => `${entry.tag}|${entry.item}`,
        ),
      );

      for (const [tag, mods] of Object.entries(tagToItemsMap)) {
        for (const [modId, items] of Object.entries(mods)) {
          for (const item of items) {
            let formattedItemId = _formatItemId(modId, item);
            if (additionsSet.has(`${tag}|${formattedItemId}`)) {
              continue;
            }
            _getOrCreateArrayForTagType(_itemsAddition, tagType).push({
              tag: tag,
              item: formattedItemId,
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
   * @param {Record<TagType, TagToItemsRecord>} tagsToRemoveFromItems
   */
  function registerRemovedTagsFromItems(tagsToRemoveFromItems) {
    for (const [tagType, tagToItemsMap] of Object.entries(
      tagsToRemoveFromItems,
    )) {
      // Using a keyed set to avoid duplicates, since removalsFromItems contains objects
      let removalsFromItemsSet = new Set(
        (__itemsRemoval[tagType] || []).map(
          (entry) => `${entry.tag}|${entry.item}`,
        ),
      );

      for (const [tag, mods] of Object.entries(tagToItemsMap)) {
        for (const [modId, items] of Object.entries(mods)) {
          for (const item of items) {
            let formattedItemId = _formatItemId(modId, item);
            if (removalsFromItemsSet.has(`${tag}|${formattedItemId}`)) {
              continue;
            }
            _getOrCreateArrayForTagType(__itemsRemoval, tagType).push({
              tag: tag,
              item: formattedItemId,
            });
          }
        }
      }
    }
  }

  function apply(event, tagType) {
    const additions = _itemsAddition[tagType] || [];
    const removals = _removals[tagType] || [];
    const removalsFromItems = __itemsRemoval[tagType] || [];
    for (const tag of removals) {
      event.removeAll(tag);
    }
    for (const entry of removalsFromItems) {
      event.remove(entry.tag, entry.item);
    }
    for (const entry of additions) {
      event.add(entry.tag, entry.item);
    }
  }

  return {
    registerAddedTagsToItems: registerAddedTagsToItems,
    registerRemovedTags: registerRemovedTags,
    registerRemovedTagsFromItems: registerRemovedTagsFromItems,
    apply: apply,
  };
})();
