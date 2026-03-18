(() => {
  const keybindsToRemove = [
    "key.kubejs.kubedex",
    "key.configured.open_mod_list",
    "iris.keybind.wireframe",
    "key.modernfix.config",
    "key.entityculling.toggle",
    "key.dynamic_fps.toggle_forced",
    "key.dynamic_fps.toggle_disabled",
    "key.inventoryessentials.single_transfer",
    "key.inventoryessentials.screen_bulk_drop",
    "key.inventoryessentials.sort_inventory",
    "key.trashslot.toggle_lock",
    "key.trashslot.toggle",
    "key.fancytoasts.config_menu",
    "key.craftingtweaks.rotate",
    "key.craftingtweaks.rotate_counter_clockwise",
    "key.craftingtweaks.balance",
    "key.craftingtweaks.spread",
    "key.craftingtweaks.clear",
    "key.craftingtweaks.force_clear",
    "key.craftingtweaks.compress_one",
    "key.craftingtweaks.compress_stack",
    "key.craftingtweaks.compress_all",
    "key.craftingtweaks.decompress_one",
    "key.craftingtweaks.decompress_stack",
    "key.craftingtweaks.decompress_all",
    "key.craftingtweaks.refill_last",
    "key.craftingtweaks.refill_last_stack",
    "key.craftingtweaks.transfer_stack",
    "key.findme.pull_one",
    "key.findme.pull_stack",
    "key.lighty.enable",
    "key.fadingnightvision.toggle_night_vision",
    "key.carbon_config.key",
    "key.scholar.toggle_book_tools",
    "key.scholar.import_book",
    "key.scholar.export_book",
    "key.toggleVisualItemContents",
    "key.toggleSelectedItemTooltips",
    "key.toggleCarriedItemTooltips",
    "key.simple_music_control.next_music_track",
    "key.simple_music_control.toggle_music",
    "key.jei.toggleOverlay",
    "key.jei.focusSearch",
    "key.jei.previousPage",
    "key.jei.nextPage",
    "key.jei.toggleBookmarkOverlay",
    "key.jei.bookmark",
    "key.jei.showRecipe",
    "key.jei.showRecipe2",
    "key.jei.showUses",
    "key.jei.showUses2",
    "key.jei.transferRecipeBookmark",
    "key.jei.maxTransferRecipeBookmark",
    "key.jei.clearSearchBar",
    "key.jei.previousSearch",
    "key.jei.nextSearch",
    "key.jei.toggleCheatMode",
    "key.jei.cheatOneItem",
    "key.jei.cheatOneItem2",
    "key.jei.cheatItemStack",
    "key.jei.cheatItemStack2",
    "key.jei.toggleCheatModeConfigButton",
    "key.jei.toggleEditMode",
    "key.jei.toggleHideIngredient",
    "key.jei.toggleWildcardHideIngredient",
    "key.jei.recipeBack",
    "key.jei.previousRecipePage",
    "key.jei.nextRecipePage",
    "key.jei.previousCategory",
    "key.jei.nextCategory",
    "key.jei.closeRecipeGui",
    "key.jei.copy.recipe.id",
    "key.carry.desc",
    "supplementaries.keybind.quiver",
    "treechop.key.toggle_chopping",
    "treechop.key.cycle_sneak_behavior",
    "treechop.key.open_settings_overlay",
    "key.clickthrough.toggle",
    "quark.emote.no",
    "quark.emote.yes",
    "quark.emote.wave",
    "quark.emote.salute",
    "quark.emote.cheer",
    "quark.emote.clap",
    "quark.emote.think",
    "quark.emote.point",
    "quark.emote.shrug",
    "quark.emote.headbang",
    "quark.emote.weep",
    "quark.emote.facepalm",
    "quark.keybind.patreon_emote.dance",
    "quark.keybind.patreon_emote.tpose",
    "quark.keybind.patreon_emote.dab",
    "quark.keybind.patreon_emote.jet",
    "quark.keybind.patreon_emote.exorcist",
    "quark.keybind.patreon_emote.zombie",
    "quark.keybind.change_hotbar",
    "quark.keybind.shift_lock",
    "quark.keybind.camera_mode",
    "quark.keybind.transfer_insert",
    "quark.keybind.transfer_extract",
    "quark.keybind.sort_player",
    "quark.keybind.sort_container",
    "quark.keybind.variant_selector",
    "key.jade.show_recipes",
    "key.jade.show_uses",
  ];

  const keybindsToRebind = {
    "iris.keybind.reload": {
      key: GLFW.GLFW_KEY_O,
      modifier: KeyModifier.SHIFT,
    },
    "iris.keybind.toggleShaders": {
      key: GLFW.GLFW_KEY_O,
      modifier: KeyModifier.CONTROL,
    },
    "key.advancements": { key: GLFW.GLFW_KEY_G },
    "key.lighty.toggle": { key: GLFW.GLFW_KEY_F7 },
  };

  const keybindsToCategorize = {
    "key.categories.gameplay": ["key.spyglass-improvements.use"],
    "key.categories.inventory": [
      "key.trashslot.delete",
      "key.trashslot.delete_all",
      "key.findme.search",
    ],
    "key.categories.misc": ["key.lighty.toggle", "key.firstperson.toggle"],
    "key.categories.remove_when_done": [
      "key.raised.options",
      "key.immersiveoverlays.settings",
      "key.modmenu.open_menu",
    ],
  };

  KeyBindJSEvents.modify((event) => {
    if (!Platform.isClientEnvironment()) {
      return;
    }

    for (const key of keybindsToRemove) {
      event.remove(key);
    }

    for (const [key, { key: newKey, modifier }] of Object.entries(
      keybindsToRebind
    )) {
      event.modifyKey(key, newKey);
      event.modifyModifier(
        key,
        modifier !== undefined ? modifier : KeyModifier.NONE
      );
    }

    for (const [category, keys] of Object.entries(keybindsToCategorize)) {
      for (const key of keys) {
        event.modifyCategory(key, category);
      }
    }
  });

  KeyBindJSEvents.register((event) => {
    // TODO Fix wrong key assignment when trying to assign Mouse Buttons
    event.create(
      "sort_inventory",
      "key.ipn.sort_inventory",
      GLFW.GLFW_MOUSE_BUTTON_MIDDLE,
      "key.categories.inventory"
    );

    event.create(
      "move_all_items",
      "key.ipn.move_all_items",
      GLFW.GLFW_KEY_S,
      "key.categories.inventory"
    );
    event
      .create(
        "copy_item_id",
        "key.ipn.copy_item_id",
        GLFW.GLFW_KEY_C,
        "key.categories.misc"
      )
      .addModifier(KeyModifier.CONTROL);
  });
})();
