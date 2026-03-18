(() => {
  let noteblockInteractionPossible = true;

  // This script will break Vanilla parity, they won't be able to place blocks on note blocks
  BlockEvents.rightClicked("minecraft:note_block", (event) => {
    let player = event.getPlayer();
    let item = event.getItem();
    let block = event.getBlock();
    let level = event.getLevel();
    let server = event.getServer();

    if (!player.isCrouching()) {
      return;
    }
    if (item.getId() === "minecraft:note_block") {
      return;
    }
    // Allows placing heads on note blocks
    for (let tag of item.getTags()) {
      if (tag === "minecraft:noteblock_top_instruments") {
        return;
      }
    }

    // Necessary, since cancelling the client script event now triggers twice the event (both hands)
    noteblockInteractionPossible = !noteblockInteractionPossible;
    if (!noteblockInteractionPossible) {
      event.cancel();
      return;
    }

    // Set the block note to the previous note
    const blockProperties = block.getProperties();
    const newNote =
      (Number.parseInt(blockProperties.getOrDefault("note", "0"), 10) + 24) %
      25;
    const instrument = blockProperties.getOrDefault("instrument", "harp");
    block.set(block.getId(), {
      instrument: String(instrument),
      note: String(newNote),
      powered: String(blockProperties.getOrDefault("powered", "false")),
    });

    playNoteSound(server, block, {
      newNote: newNote,
      instrument: instrument,
    });

    spawnNoteParticle(level, block, newNote);
    player.swing();

    // Cancel the default sound event
    event.cancel();
  });

  function playNoteSound(server, block, { newNote, instrument }) {
    // Play the note sound manually
    const soundEvent = `block.note_block.${instrument}`;
    const pitch = 2 ** ((newNote - 12) / 12);
    // 3 Volume to match normal note block range (48 blocks = 16 * 3 (volume) max range)
    const volume = 3;
    server.runCommandSilent(
      `playsound ${soundEvent} block @a ${block.getX()} ` +
        `${block.getY()} ${block.getZ()} ${volume} ${pitch}`
    );
  }

  function spawnNoteParticle(level, block, newNote) {
    const particlePos = block.getPos().getCenter().add(0, 0.7, 0);
    level.spawnParticles(
      "minecraft:note",
      false,
      particlePos.x(),
      particlePos.y(),
      particlePos.z(),
      newNote / 24, // vx, used as pitch when count is 0
      0, // vy, unused
      0, // vz, unused
      0, // count, must be 0 for pitch argument to work
      1 // speed, must be 1 for pitch argument to work
    );
  }
})();
