// priority: -10
(() => {
  const tagsTypes = [
    "item",
    "block",
    "entity_type",
    "fluid",
    "worldgen/structure",
  ];
  // Uses forEach instead of a for of because of issues with the scope of tagType in ServerEvents.tags
  tagsTypes.forEach((tagType) => {
    ServerEvents.tags(tagType, (event) => {
      global.TagModule.apply(event, tagType);
    });
  });
})();
