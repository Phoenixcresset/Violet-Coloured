(() => {
  ClientEvents.generateAssets("after_mods", (event) => {
    event.json("violetcoloured:jade_themes/immersive", {
      version: 100,
      tooltipStyle: {
        sprite: "violetcoloured:jade_immersive",
        padding: [5, 5, 5, 5],
        boxProgressOffset: [0, 0, 2, -2],
      },
      text: {
        colors: {
          warning: "#FFFF55",
          failure: "#FF5555",
        },
        modNameStyle: {
          color: "#555555",
        },
      },
      changeRoundCorner: false,
      autoEnable: true,
      lightColorScheme: false,
    });
  });

  ClientEvents.lang("en_us", (event) => {
    event.add("jade.theme.violetcoloured.immersive", "Immersive");
  });
})();
