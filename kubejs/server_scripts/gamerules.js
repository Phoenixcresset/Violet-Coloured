(() => {
  ServerEvents.loaded((event) => {
    event.getServer().getGameRules().set("spawnChunkRadius", 0);
  });
})();
