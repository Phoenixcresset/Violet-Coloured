// priority: -1
// Advancements need to be declared first

(() => {
  ServerEvents.generateData("after_mods", (event) => {
    _Advancements.commit(event);
  });
})();
