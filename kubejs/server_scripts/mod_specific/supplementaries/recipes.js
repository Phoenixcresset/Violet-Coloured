(() => {
  ServerEvents.recipes((event) => {
    event.replaceInput(
      { id: "supplementaries:soap" },
      "minecraft:porkchop",
      "minecraft:sunflower"
    );
  });
})();
