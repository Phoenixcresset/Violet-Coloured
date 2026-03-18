(() => {
  const leaves = {
    apple_leaves_stage_2: "apple_leaves_2",
    apple_leaves_stage_3: "apple_leaves_3",
    dark_cherry_leaves_stage_2: "dark_cherry_leaves_2",
    dark_cherry_leaves_stage_3: "dark_cherry_leaves_3",
  };

  ClientEvents.generateAssets("after_mods", (event) => {
    for (const [model, texture] of Object.entries(leaves)) {
      event.json(`vinery:models/block/${model}`, {
        parent: "minecraft:block/cube_all",
        textures: {
          all: `vinery:block/${texture}`,
        },
      });
    }
  });
})();
