MoreJS.structureLoad((event) => {
  if (!String(event.id).startsWith("village_taverns:")) {
    return;
  }
  console.log("Structure load :");
  console.log(event.id);
  console.log("Replacing village_taverns:barrel with brewinandchewin:keg");
  const palette = event.getPalette(0);
  palette.forEach((blockData) => {
    if (blockData.getId() === "village_taverns:barrel") {
      blockData.setBlock("brewinandchewin:keg");
    }
  });
});
