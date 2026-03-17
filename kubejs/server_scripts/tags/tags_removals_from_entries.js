(() => {
  const removedTagsFromEntries = {
    item: {
      "curios:belt": ["supplementaries:quiver", "#supplementaries:keys"],
      // Removes the dragon head to count as an arthropod since Supplementaries adds a spider head
      "dummmmmmy:arthropod_heads": ["minecraft:dragon_head"],
      "supplementaries:blackboard_black": [
        "minecraft:charcoal",
        "minecraft:coal",
        "#minecraft:coals",
      ],
      "supplementaries:blackboard_white": [
        "minecraft:quartz",
        "#c:gems/quartz",
      ],
      "trinkets:legs/key": ["supplementaries:key"],
      "trinkets:legs/quiver": ["supplementaries:quiver"],
    },
  };

  for (const color of Color.DYE.values()) {
    removedTagsFromEntries.item[`c:dyes/${color}`] = [`chalk:${color}_chalk`];
  }

  global.Tags.registerRemovedTagsFromEntries(removedTagsFromEntries);
})();
