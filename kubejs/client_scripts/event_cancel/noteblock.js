// Necessary to cancel the event on the client side as well, to avoid visual bugs
BlockEvents.rightClicked("minecraft:note_block", (event) => {
  let player = event.getPlayer();
  let item = event.getItem();
  if (!player.isCrouching()) return;

  // Allows placing heads on note blocks
  for (let tag of item.getTags()) {
    if (tag === "minecraft:noteblock_top_instruments") {
      return;
    }
  }
  event.cancel();
});
