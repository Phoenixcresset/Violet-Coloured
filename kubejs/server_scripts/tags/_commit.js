// priority: -1
// Ensures other scripts' tag registrations are properly finished

(() => {
  for (const tagType of Object.values(global.Tags.TYPES)) {
    // IIFE needed here; otherwise, the following function call will only apply to the last element of tagTypes due to asynchronous registration.
    ((type) => {
      ServerEvents.tags(type, (event) => {
        global.Tags.commit(event, type);
      });
    })(tagType);
  }
})();
