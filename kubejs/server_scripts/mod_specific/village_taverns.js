(() => {
  MoreJS.structureLoad((event) => {
    if (!String(event.id).startsWith("village_taverns:")) {
      return;
    }
    const palette = event.getPalette(0);
    // palette is a $PaletteWrapper, that exposes a forEach function, but does not implement the iterable protocol
    // oxlint-disable-next-line unicorn/no-array-for-each
    palette.forEach((blockData) => {
      if (blockData.getId() === "village_taverns:barrel") {
        blockData.setBlock("brewinandchewin:keg");
      }
    });
  });
})();
