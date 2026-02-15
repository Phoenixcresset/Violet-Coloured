(() => {
  const removedTagsFromEntries = {
    block: {
      "hearthandharvest:tappable": {
        biomesoplenty: ["fir_log", "maple_log", "pine_log"],
        autumnity: ["maple_log", "sappy_maple_log"], // TODO: remove if/when Autumnity is added to the modpack, but for now this is needed to prevent errors from the missing tag
      },
    },
  };

  global.TagModule.registerRemovedTagsFromEntries(removedTagsFromEntries);
})();
