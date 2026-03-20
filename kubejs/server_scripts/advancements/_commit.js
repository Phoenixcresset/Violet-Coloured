// priority: -1
// Advancements need to be registered first

(() => {
  ServerEvents.generateData("after_mods", (event) => {
    global.Advancements.commit(event);
  });
})();
