(() => {
  const removedTagsFromEntries = {
    item: {
      // Turtle eggs are not food
      "hearthandharvest:crateable_items": ["minecraft:turtle_egg"],
    },
  };

  global.Tags.registerRemovedTagsFromEntries(removedTagsFromEntries);
})();
