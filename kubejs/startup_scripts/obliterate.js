(() => {
  for (const creativeTab of global.creativeTabs) {
    StartupEvents.modifyCreativeTab(creativeTab, (event) => {
      for (const item of global.obliteratedItems) {
        event.remove(item);
      }
    });
  }

  // Removing food properties prevents obliterated items from showing in JEED
  ItemEvents.modification((event) => {
    for (const obliteratedItem of global.obliteratedItems) {
      event.modify(obliteratedItem, (item) => {
        item.setFood({});
      });
    }
  });
})();
