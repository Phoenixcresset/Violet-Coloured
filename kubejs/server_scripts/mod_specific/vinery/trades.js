(() => {
  const trades = [];

  const grapes = ["vinery:red_grape", "vinery:white_grape"];

  for (const grape of grapes) {
    trades.push({
      profession: "minecraft:farmer",
      level: 1,
      input: grape,
      inputCount: 22,
      output: "minecraft:emerald",
      outputCount: 1,
    });
  }

  MoreJS.villagerTrades((event) => {
    for (const trade of trades) {
      event.addTrade(
        trade.profession,
        trade.level,
        Item.of(trade.input, trade.inputCount),
        Item.of(trade.output, trade.outputCount)
      );
    }

    event.removeModdedTypedTrades(["vinery:winemaker"]);
  });
})();
