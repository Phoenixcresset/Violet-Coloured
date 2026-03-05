(() => {
  ClientEvents.generateAssets("after_mods", (event) => {
    event.json("violet_coloured:jade_themes/immersive", {
      version: 100,
      tooltipStyle: {
        sprite: "violet_coloured:jade_immersive",
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
    event.add("jade.theme.violet_coloured.immersive", "Immersive");
  });
})();
