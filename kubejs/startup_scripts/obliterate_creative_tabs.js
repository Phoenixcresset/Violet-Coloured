creativeTabs.forEach((tab) => {
  StartupEvents.modifyCreativeTab(tab, (event) => {
    obliteratedItems.forEach((item) => {
      event.remove(item);
    });
  });
});
