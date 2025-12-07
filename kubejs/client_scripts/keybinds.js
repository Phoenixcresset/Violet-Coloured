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
    'key.fancytoasts.config_menu'
   
]

const keybindsToRebind = {
    'key.advancements': { key: GLFW.GLFW_KEY_G},
    'iris.keybind.reload': { key: GLFW.GLFW_KEY_O, modifier: KeyModifier.SHIFT },
    'iris.keybind.toggleShaders': { key: GLFW.GLFW_KEY_O, modifier: KeyModifier.CONTROL },
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