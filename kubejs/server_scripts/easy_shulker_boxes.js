const itemsWithInteractions = {
    "sack": {
        "type": "iteminteractions:container",
        "disallowed_item_contents": [],
        "equipment_slots": "any",
        "filter_container_items": true,
        "interaction_permissions": "always",
        "inventory_height": 4,
        "inventory_width": 4,
        "supported_items": "supplementaries:sack"
    },
//     "suppsquared:item_containers_providers/sack_black"
}

const COLORS = ["black", "blue", "brown", "cyan", "gray", "green", "light_blue", "light_gray", "lime", "magenta", "orange", "pink", "purple", "red", "white", "yellow"];

const dyedItemsWithInteractions = {
    "sack_{COLOR}": {
        "type": "iteminteractions:container",
        "background_color": "{COLOR}",
        "disallowed_item_contents": [],
        "equipment_slots": "any",
        "filter_container_items": true,
        "interaction_permissions": "always",
        "inventory_height": 3,
        "inventory_width": 3,
        "supported_items": "suppsquared:sack_{COLOR}"
    },
}

ServerEvents.generateData("after_mods", event => {
    for (const [name, data] of Object.entries(itemsWithInteractions)) {
        // The path is easyshulkerboxes:item_contents_provider/ + the item id
        event.json(`easyshulkerboxes:item_contents_provider/${name}`, data)
    }
    for (const [template, data] of Object.entries(dyedItemsWithInteractions)) {
        for (const color of COLORS) {
            let itemName = template.replace("{COLOR}", color);
            let itemData = JSON.parse(
                JSON.stringify(data).replace(/{COLOR}/g, color)
            );
            event.json(`easyshulkerboxes:item_contents_provider/${itemName}`, itemData)
        }
    }
})

