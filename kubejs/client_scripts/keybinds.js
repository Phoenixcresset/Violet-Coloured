const keybindsToRemove = [
    'key.kubejs.kubedex',
    'key.configured.open_mod_list',
    'iris.keybind.wireframe',
    'key.modernfix.config',
    'key.entityculling.toggle',
]

const keybindsToRebind = {
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
        event.modifyModifier(key, modifier);
    }
})