(() => {
  ItemEvents.entityInteracted("quark:toretoise_spawn_egg", (event) => {
    if (!(event.getTarget().getType() === "quark:toretoise")) {
      return;
    }
    event.cancel();
  });
})();
