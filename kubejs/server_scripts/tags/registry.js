// priority: 10
/** @typedef {string} ModId */
/** @typedef {string} ShortTagId */
/** @typedef {string} ItemId */
/** @typedef {string} TagId */
/** @typedef {"item"|"block"|"fluid"|"entity_type"|"worldgen/structure"} TagType */
/** @typedef {Record<ModId, Array<ShortTagId>>} ModToTagsRecord */
/** @typedef {Record<TagId, Record<ShortTagId, Array<ItemId>>>} TagToItemsRecord */

global.TagModule = (function () {
  /** @type {Record<TagType, Array<{tag: TagId, item: ItemId}>>} */
  const _additionsToItems = {
    item: [],
    block: [],
    fluid: [],
    entity_type: [],
    "worldgen/structure": [],
  };
  /** @type {Record<TagType, Array<FullTagId>>} */
  const _removals = {
    item: [],
    block: [],
    fluid: [],
    entity_type: [],
    "worldgen/structure": [],
  };
  /** @type {Record<TagType, Array<{tag: TagId, item: ItemId}>>} */
  const _removalsFromItems = {
    item: [],
    block: [],
    fluid: [],
    entity_type: [],
    "worldgen/structure": [],
  };

  /**
   * @param {ModId} modId
   * @returns {boolean}
   */
  function _isModLoaded(modId) {
    if (!Platform.isLoaded(modId)) {
      console.log(`[TagModule] Skipping for ${modId} (mod not loaded)`);
      return false;
    }
    return true;
  }

  function _formatItemId(modId, itemId) {
    return itemId.startsWith("#")
      ? `#${modId}:${itemId.substring(1)}`
      : `${modId}:${itemId}`;
  }

//   function _getOrCreateArrayForTagType(record, tagType) {
//     if (!record[tagType]) {
//       record[tagType] = [];
//     }
//     return record[tagType];
//   }

  /**
   * @param {Record<TagType, TagToItemsRecord>} tagsToAddToItems
   */
  function registerAddedTagsToItems(tagsToAddToItems) {
    console.log("[TagModule] Registering added tags to items");
    for (const [tagType, tagToItemsMap] of Object.entries(tagsToAddToItems)) {
      for (const [tag, mods] of Object.entries(tagToItemsMap)) {
        for (const [modId, items] of Object.entries(mods)) {
          if (!_isModLoaded(modId)) {
            continue;
          }
          for (const item of items) {
            let formattedItemId = _formatItemId(modId, item);
            if (_additionsToItems[tagType] === undefined) {
              _additionsToItems[tagType] = [];
            }
            _additionsToItems[tagType].push({
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
    console.log("[TagModule] Registering removed tags");
    for (const [tagType, modToTagsMap] of Object.entries(tagsToRemove)) {
      for (const [modId, tags] of Object.entries(modToTagsMap)) {
        for (const tag of tags) {
          if (_removals[tagType] === undefined) {
            _removals[tagType] = [];
          }
          _removals[tagType].push(`${modId}:${tag}`);
        }
      }
    }
  }

  /**
   * @param {Record<TagType, TagToItemsRecord>} tagsToRemoveFromItems
   */
  function registerRemovedTagsFromItems(tagsToRemoveFromItems) {
    console.log("[TagModule] Registering removed tags from items");
    for (const [tagType, tagToItemsMap] of Object.entries(
      tagsToRemoveFromItems,
    )) {
      for (const [tag, mods] of Object.entries(tagToItemsMap)) {
        for (const [modId, items] of Object.entries(mods)) {
          if (!_isModLoaded(modId)) {
            continue;
          }
          for (const item of items) {
            let formattedItemId = _formatItemId(modId, item);
            if (_removalsFromItems[tagType] === undefined) {
              _removalsFromItems[tagType] = [];
            }
            _removalsFromItems[tagType].push({
              tag: tag,
              item: formattedItemId,
            });
          }
        }
      }
    }
  }

  function apply(event, tagType) {
    console.log(`[TagModule] Applying changes to ${tagType} tags`);
    const additions = _additionsToItems[tagType] || [];
    const removals = _removals[tagType] || [];
    const removalsFromItems = _removalsFromItems[tagType] || [];
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

global.TagModule.registerRemovedTags({
  item: {
    supplementaries: [
      "blackboard_light_gray",
      "blackboard_gray",
      "blackboard_brown",
      "blackboard_red",
      "blackboard_orange",
      "blackboard_yellow",
      "blackboard_lime",
      "blackboard_green",
      "blackboard_cyan",
      "blackboard_light_blue",
      "blackboard_blue",
      "blackboard_purple",
      "blackboard_magenta",
      "blackboard_pink",
    ],
  },
  block: {
    supplementaries: [
      "frame_block_blacklist",
      "faucet_connection_blacklist",
      "water_holder",
    ],
  },
  entity_type: {
    supplementaries: [
      "cage_catchable",
      "cage_baby_catchable",
      "jar_catchable",
      "jar_baby_catchable",
      "tickable_when_captured",
    ],
  },
});

ServerEvents.tags("item", (event) => {
  global.TagModule.apply(event, "item");
});

ServerEvents.tags("block", (event) => {
  global.TagModule.apply(event, "block");
});

ServerEvents.tags("entity_type", (event) => {
  global.TagModule.apply(event, "entity_type");
});
