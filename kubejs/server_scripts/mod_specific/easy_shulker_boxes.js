/** @type {Array<string>} */
const blacklistedItems = [];

/**
 * @typedef {Object} ContainerConfig
 * @property {string} type
 * @property {Array<string>} disallowed_item_contents
 * @property {string} equipment_slots
 * @property {boolean} filter_container_items
 * @property {string} interaction_permissions
 * @property {number} inventory_height
 * @property {number} inventory_width
 * @property {Array<string>} supported_items
 * @property {string} [background_color]
 */

/**
 *
 * @param {Array<string>} itemIds
 * @param {{height: number, width: number}} size
 * @param {string} [background_color]
 * @returns {ContainerConfig}
 */
function createContainerConfig(itemIds, size, background_color) {
  var config = {
    type: "iteminteractions:container",
    disallowed_item_contents: blacklistedItems,
    equipment_slots: "any",
    filter_container_items: true,
    interaction_permissions: "always",
    inventory_height: size.height,
    inventory_width: size.width,
    supported_items: itemIds,
  };
  if (background_color !== undefined) {
    config.background_color = background_color;
  }

  return config;
}

/** @typedef {Object.<string, Object.<string, ContainerConfig>>} ModContainers */
const modContainers = {
  supplementaries: {
    sack: createContainerConfig("supplementaries:sack", {
      height: 3,
      width: 3,
    }),
  },
  suppsquared: {
    "sack_{COLOR}": createContainerConfig(
      "suppsquared:sack_{COLOR}",
      { height: 3, width: 3 },
      "{COLOR}"
    ),
  },
};

ServerEvents.generateData("after_mods", (event) => {
  for (const [modid, containers] of Object.entries(modContainers)) {
    if (!Platform.isLoaded(modid)) {
      console.log(`Easy Shulker Boxes compat : Skipping containers for ${modid} (mod not loaded)`);
      continue;
    }

    for (const [template, data] of Object.entries(containers)) {
      if (template.includes("{COLOR}")) {
        Color.DYE.forEach((color) => {
          let itemName = template.replace("{COLOR}", color);
          let itemData = JSON.parse(JSON.stringify(data).replace(/{COLOR}/g, color));
          event.json(`easyshulkerboxes:item_contents_provider/${itemName}`, itemData);
        });
      } else {
        event.json(`easyshulkerboxes:item_contents_provider/${template}`, data);
      }
    }
  }
  event.json(`easyshulkerboxes:item_contents_provider/filled_map`, {
    "neoforge:conditions": [{ type: "neoforge:false" }],
  });
});
