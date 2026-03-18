(() => {
  const { obliteratedItems } = global;

  const { isObliterated } = global;

  if (global.obliteratedItems.length === 0) {
    return;
  }
  // Remove recipes
  ServerEvents.recipes((event) => {
    event.remove({ input: obliteratedItems });
    event.remove({ output: obliteratedItems });
  });

  // Remove compostable recipes
  ServerEvents.compostableRecipes((event) => {
    // Iterates over obliteratedItems since it does not work if we pass the array directly
    for (const item of obliteratedItems) {
      // Correctly removes the recipe, even though it is not shown in EMI, issue on  their part (#1098)
      event.remove(item);
    }
  });

  // Remove tags
  ServerEvents.tags("item", (event) => {
    event.removeAllTagsFrom(obliteratedItems);
    event.add("c:hidden_from_recipe_viewers", obliteratedItems);
  });

  ServerEvents.tags("fluid", (event) => {
    event.removeAllTagsFrom(obliteratedItems);
    event.add("c:hidden_from_recipe_viewers", obliteratedItems);
  });

  ServerEvents.tags("block", (event) => {
    event.removeAllTagsFrom(obliteratedItems);
    event.add("c:hidden_from_recipe_viewers", obliteratedItems);
  });

  // Append disabled tooltip
  ItemEvents.modifyTooltips((event) => {
    event.add(obliteratedItems, Text.red("Disabled"));
  });

  // Remove from recipe viewer
  RecipeViewerEvents.removeEntriesCompletely("item", (event) => {
    event.remove(obliteratedItems);
  });

  // Remove from loot pools
  if (Platform.isLoaded("lootjs")) {
    LootJS.lootTables((event) => {
      event.modifyLootTables(/.*/).removeItem(obliteratedItems);
    });
  } else {
    console.warn(
      "[Obliterate Items] LootJS not loaded, skipping loot table removals."
    );
  }

  if (Platform.isLoaded("morejs")) {
    // Remove from villager trades
    MoreJS.villagerTrades((event) => {
      event.removeTrades({
        first: Ingredient.of(obliteratedItems),
      });
      event.removeTrades({
        second: Ingredient.of(obliteratedItems),
      });
      event.removeTrades({
        output: Ingredient.of(obliteratedItems),
      });
    });

    MoreJS.wandererTrades((event) => {
      event.removeTrades({
        first: Ingredient.of(obliteratedItems),
      });
      event.removeTrades({
        output: Ingredient.of(obliteratedItems),
      });
    });
  } else {
    console.warn(
      "[Obliterate Items] MoreJS not loaded, skipping villager trade and potion brewing removals."
    );
  }

  // Destroy on interaction
  BlockEvents.rightClicked((event) => {
    let { block } = event;
    if (isObliterated(block.getId())) {
      block.set("minecraft:air");
    }
  });

  // Destroy on block placement
  BlockEvents.placed((event) => {
    let { block } = event;
    if (isObliterated(block.getId())) {
      block.set("minecraft:air");
    }
  });

  // Destroy on pickup
  ItemEvents.canPickUp((event) => {
    let { item, itemEntity } = event;
    if (itemEntity.hasPickUpDelay()) {
      return;
    }
    if (isObliterated(item.id)) {
      item.setCount(0);
    }
  });

  // Destroy on drop
  ItemEvents.dropped((event) => {
    let { item } = event;
    if (isObliterated(item.id)) {
      item.setCount(0);
    }
  });

  // Destroy on inventory changed
  PlayerEvents.inventoryChanged((event) => {
    let { item, player } = event;
    if (isObliterated(item.getId())) {
      event.player.statusMessage = Text.yellow(item.getId()).append(
        " is disabled"
      );
      event.player.playNotifySound(
        "entity.experience_orb.pickup",
        "ambient",
        0.2,
        1
      );
      player.inventory.clear(item);
    }
  });
})();
