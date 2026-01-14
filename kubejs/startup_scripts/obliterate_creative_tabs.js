global.creativeTabs.forEach((tab) => {
  StartupEvents.modifyCreativeTab(tab, (event) => {
    global.obliteratedItems.forEach((item) => {
      event.remove(item);
    });
  });
});
