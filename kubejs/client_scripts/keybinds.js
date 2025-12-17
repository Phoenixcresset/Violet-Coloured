const keybindsToRemove = [
    'key.kubejs.kubedex',
    'key.configured.open_mod_list',
    'iris.keybind.wireframe',
    'key.modernfix.config',
    'key.entityculling.toggle',
    'key.dynamic_fps.toggle_forced',
    'key.dynamic_fps.toggle_disabled',
    'key.inventoryessentials.single_transfer',
    'key.inventoryessentials.screen_bulk_drop',
    'key.inventoryessentials.sort_inventory',
    'key.trashslot.toggle_lock',
    'key.trashslot.toggle',
    'key.fancytoasts.config_menu',
    'key.craftingtweaks.rotate',
    'key.craftingtweaks.rotate_counter_clockwise',
    'key.craftingtweaks.balance',
    'key.craftingtweaks.spread',
    'key.craftingtweaks.clear',
    'key.craftingtweaks.force_clear',
    'key.craftingtweaks.compress_one',
    'key.craftingtweaks.compress_stack',
    'key.craftingtweaks.compress_all',
    'key.craftingtweaks.decompress_one',
    'key.craftingtweaks.decompress_stack',
    'key.craftingtweaks.decompress_all',
    'key.craftingtweaks.refill_last',
    'key.craftingtweaks.refill_last_stack',
    'key.craftingtweaks.transfer_stack',
    'key.findme.pull_one',
    'key.findme.pull_stack',
    'key.lighty.enable',
    'key.drop_confirm.toggle',
    'key.fadingnightvision.toggle_night_vision',
    'key.carbon_config.key',
]

const keybindsToRebind = {
    'key.advancements': { key: GLFW.GLFW_KEY_G},
    'iris.keybind.reload': { key: GLFW.GLFW_KEY_O, modifier: KeyModifier.SHIFT },
    'iris.keybind.toggleShaders': { key: GLFW.GLFW_KEY_O, modifier: KeyModifier.CONTROL },
    'key.lighty.toggle': { key: GLFW.GLFW_KEY_F7 }
}

KeyBindJSEvents.modify(event => {
    if (!Platform.isClientEnvironment()) return;

    for (const key of keybindsToRemove) {
        console.log(`Removed keybind: ${key}`);
        event.remove(key);
    }

    for (const [key, { key: newKey, modifier }] of Object.entries(keybindsToRebind)) {
        event.modifyKey(key, newKey);
        event.modifyModifier(key, modifier !== undefined ? modifier : KeyModifier.NONE);
    }
})