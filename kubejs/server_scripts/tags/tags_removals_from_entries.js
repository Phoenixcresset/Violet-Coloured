(() => {
  const removedTagsFromEntries = {
    item: {
      "curios:belt": {
        supplementaries: ["#keys", "quiver"],
      },
      "trinkets:legs/quiver": {
        supplementaries: ["quiver"],
      },
      "trinkets:legs/key": {
        supplementaries: ["key"],
      },
      "supplementaries:blackboard_black": {
        minecraft: ["#coals"],
      },
      "supplementaries:blackboard_white": {
        minecraft: ["quartz"],
        c: ["#gems/quartz"],
      },
      // Removes the dragon head to count as an arthropod since Supplementaries adds a spider head
      "dummmmmmy:arthropod_heads": {
        minecraft: ["dragon_head"],
      },
      "minecraft:fox_food": {
        vinery: ["white_grape", "red_grape"],
      },
      "c:dyes/white": {
        chalk: ["white_chalk"],
      },
      "c:dyes/light_gray": {
        chalk: ["light_gray_chalk"],
      },
      "c:dyes/gray": {
        chalk: ["gray_chalk"],
      },
      "c:dyes/black": {
        chalk: ["black_chalk"],
      },
      "c:dyes/brown": {
        chalk: ["brown_chalk"],
      },
      "c:dyes/red": {
        chalk: ["red_chalk"],
      },
      "c:dyes/orange": {
        chalk: ["orange_chalk"],
      },
      "c:dyes/yellow": {
        chalk: ["yellow_chalk"],
      },
      "c:dyes/lime": {
        chalk: ["lime_chalk"],
      },
      "c:dyes/green": {
        chalk: ["green_chalk"],
      },
      "c:dyes/cyan": {
        chalk: ["cyan_chalk"],
      },
      "c:dyes/light_blue": {
        chalk: ["light_blue_chalk"],
      },
      "c:dyes/blue": {
        chalk: ["blue_chalk"],
      },
      "c:dyes/purple": {
        chalk: ["purple_chalk"],
      },
      "c:dyes/magenta": {
        chalk: ["magenta_chalk"],
      },
      "c:dyes/pink": {
        chalk: ["pink_chalk"],
      },
    },
  };

  global.TagModule.registerRemovedTagsFromEntries(removedTagsFromEntries);
})();
