(() => {
  const modelMappings = [
    {
      source: makeBottleRackPath("hearthandharvest", "red_grape_wine"),
      target: makeBottleRackPath("violetcoloured", "red_grape_juice"),
    },
    {
      source: makeBottleRackPath("hearthandharvest", "green_grape_wine"),
      target: makeBottleRackPath("violetcoloured", "white_grape_juice"),
    },
    {
      source: makeBlockPath("vinery", "solaris_wine"),
      target: makeBottleRackPath("vinery", "solaris_wine"),
    },
    {
      source: makeBlockPath("vinery", "noir_wine"),
      target: makeBottleRackPath("vinery", "noir_wine"),
    },
    {
      source: makeBlockPath("vinery", "red_wine"),
      target: makeBottleRackPath("vinery", "red_wine"),
    },
    {
      source: makeBlockPath("vinery", "cherry_wine"),
      target: makeBottleRackPath("vinery", "cherry_wine"),
    },
    {
      source: makeBlockPath("vinery", "kelp_cider"),
      target: makeBottleRackPath("vinery", "kelp_cider"),
    },
    {
      source: makeBlockPath("vinery", "bolvar_wine"),
      target: makeBottleRackPath("vinery", "bolvar_wine"),
    },
    {
      source: makeBlockPath("vinery", "bad_omen_wine"),
      target: makeBottleRackPath("vinery", "villagers_fright"),
    },
    {
      source: makeBlockPath("vinery", "bottle_mojang_noir"),
      target: makeBottleRackPath("vinery", "bottle_mojang_noir"),
    },
  ];

  const wineBottleModel = {
    credit: "Made with Blockbench",
    textures: {
      0: "violetcoloured:block/wine_bottle",
      particle: "violetcoloured:block/wine_bottle",
    },
    elements: [
      {
        from: [7, 10, 7],
        to: [9, 14, 9],
        rotation: { angle: 0, axis: "y", origin: [7, 10, 7] },
        faces: {
          north: { uv: [5, 5, 7, 9], texture: "#0" },
          east: { uv: [5, 5, 7, 9], texture: "#0" },
          south: { uv: [5, 5, 7, 9], texture: "#0" },
          west: { uv: [5, 5, 7, 9], texture: "#0" },
          up: { uv: [7, 5, 9, 7], texture: "#0" },
          down: { uv: [7, 5, 9, 7], texture: "#0" },
        },
      },
      {
        from: [6, 0, 6],
        to: [10, 10, 10],
        rotation: { angle: 0, axis: "y", origin: [6, 0, 6] },
        faces: {
          north: { uv: [0, 0, 4, 10], texture: "#0" },
          east: { uv: [0, 0, 4, 10], texture: "#0" },
          south: { uv: [0, 0, 4, 10], texture: "#0" },
          west: { uv: [0, 0, 4, 10], texture: "#0" },
          up: { uv: [4, 0, 8, 4], texture: "#0" },
          down: { uv: [8, 0, 12, 4], texture: "#0" },
        },
      },
    ],
  };

  // Necessary because Clark's Wine model is not defined like the other small bottles
  const clarkWineModel = {
    parent: "vinery:block/template_small_wine_bottle",
    textures: {
      small_wine_bottle: "vinery:block/wine/clark_wine",
    },
  };

  function makeBottleRackPath(namespace, name) {
    return `${namespace}:models/bottle_rack/${name}`;
  }

  function makeBlockPath(namespace, name) {
    return `${namespace}:models/block/${name}`;
  }

  ClientEvents.generateAssets("after_mods", (event) => {
    event.json("vinery:models/bottle_rack/wine_bottle", wineBottleModel);
    event.json("vinery:models/bottle_rack/clark_wine", clarkWineModel);
    event.json("vinery:models/block/clark_wine", clarkWineModel);

    for (const modelMapping of modelMappings) {
      let [namespace, path] = modelMapping.source.split(":");
      let model = JSON.parse(KJSTweaks.readJsonFromMod(namespace, path));
      event.json(modelMapping.target, model);
    }
  });
})();
