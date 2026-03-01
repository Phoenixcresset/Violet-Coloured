// priority: -10
// Ensures other scripts' tag registrations are properly finished

(() => {
  // TODO: Add to TagModule instead
  // Uses forEach instead of a for of because of issues with the scope of tagType in ServerEvents.tags
  const tagTypes = [
    "item",
    "block",
    "entity_type",
    "fluid",
    "worldgen/structure",
  ];
  for (const tagType of tagTypes) {
    // IIFE needed here; otherwise, the following function call will only apply to the last element of tagTypes due to asynchronous registration.
    ((type) => {
      ServerEvents.tags(type, (event) => {
        global.TagModule.apply(event, type);
      });
    })(tagType);
  }
})();
