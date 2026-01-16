/** @typedef {Object.<string, Array<string>>} TagsToRemove */
const tagsToRemove = {
  supplementaries: [
    // Items
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
    // Blocks
    "frame_block_blacklist",
    "faucet_connection_blacklist",
    "water_holder",
    // Entities
    "cage_catchable",
    "cage_baby_catchable",
    "jar_catchable",
    "jar_baby_catchable",
    "tickable_when_captured",
  ],
  sereneseasons: ["spring_crops"],
};

/** @typedef {Object.<string, TagsToRemove>} TagsToRemoveFromItems */
const tagsToRemoveFromItems = {
  "curios:belt": {
    supplementaries: ["#keys", "quiver"],
  },
  "trinkets:legs/quiver": {
    supplementaries: ["quiver"],
  },
  "trinkets:legs/key": {
    supplementaries: ["key"],
  },
  "supplementaries:blackboard_black": {
    minecraft: ["charcoal", "coal"],
  },
};

/** @type {Array<string>} */
let removedTags = [];

for (const [prefix, tags] of Object.entries(tagsToRemove)) {
  for (const tag of tags) {
    removedTags.push(`${prefix}:${tag}`);
  }
}

/** @type {Array<{tag: string, item: string}>} */
let removedTagsFromItems = [];

for (const [tag, mods] of Object.entries(tagsToRemoveFromItems)) {
  for (const [prefix, items] of Object.entries(mods)) {
    if (!Platform.isLoaded(prefix)) {
      console.log(`[Tags Removal] Skipping for ${prefix} (mod not loaded)`);
      continue;
    }
    for (let item of items) {
      if (item.startsWith("#")) {
        item = item.substring(1);
        removedTagsFromItems.push({
          tag: `${tag}`,
          item: `#${prefix}:${item}`,
        });
        continue;
      }
      removedTagsFromItems.push({
        tag: `${tag}`,
        item: `${prefix}:${item}`,
      });
    }
  }
}

ServerEvents.tags("item", (event) => {
  for (const tag of removedTags) {
    event.removeAll(tag);
  }
  for (const entry of removedTagsFromItems) {
    event.remove(entry.tag, entry.item);
  }
});

ServerEvents.tags("block", (event) => {
  for (const tag of removedTags) {
    event.removeAll(tag);
  }
  for (const entry of removedTagsFromItems) {
    event.remove(entry.tag, entry.item);
  }
});

ServerEvents.tags("entity_type", (event) => {
  for (const tag of removedTags) {
    event.removeAll(tag);
  }
  for (const entry of removedTagsFromItems) {
    event.remove(entry.tag, entry.item);
  }
});
