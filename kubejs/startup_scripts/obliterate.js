global.creativeTabs.forEach((tab) => {
  StartupEvents.modifyCreativeTab(tab, (event) => {
    global.obliteratedItems.forEach((item) => {
      event.remove(item);
    });
  });
});

// Removing food properties prevents obliterated items from showing in JEED
ItemEvents.modification((event) => {
  global.obliteratedItems.forEach((obliteratedItem) => {
    event.modify(obliteratedItem, (item) => {
      item.setFood({});
    });
  });
});
