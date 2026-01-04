const obliteratedPatterns = {
    "minecraft": [
        // Placeholder to show usage, remove this line when adding actual items
        /.*carrot.*/,
    ]
}

const creativeTabs = [
    "minecraft:building_blocks",
    "minecraft:colored_blocks",
    "minecraft:natural_blocks",
    "minecraft:functional_blocks",
    "minecraft:redstone_blocks",
    "minecraft:tools_and_utilities",
    "minecraft:combat",
    "minecraft:food_and_drinks",
    "minecraft:ingredients",
    "minecraft:spawn_eggs",
]

// Flatten obliteratedPatterns object into an array of strings and regexes
let obliteratedItems = []

for (const [prefix, items] of Object.entries(obliteratedPatterns)) {
    for (const item of items) {
        if (typeof item === "string") {
            obliteratedItems.push(`${prefix}:${item}`)
        } else if (item instanceof RegExp) {
            obliteratedItems.push(new RegExp(`^${prefix}:${item.source}$`))
        }
    }
}

global.obliteratedItems = obliteratedItems

// Check if itemID exists within obliteratedItems
global.isObliterated = (itemId) => {
    for (let i = 0; i < obliteratedItems.length; i++) {
        let id = obliteratedItems[i]
        let reg = new RegExp(id)
        if (typeof id == "string") {
            if (itemId == id) return true
        } else if (id instanceof RegExp) {
            if (reg.test(itemId)) return true
        }
    }
    return false
}
