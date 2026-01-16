const blacklistedItems = [];

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

const COLORS = [
  "black",
  "blue",
  "brown",
  "cyan",
  "gray",
  "green",
  "light_blue",
  "light_gray",
  "lime",
  "magenta",
  "orange",
  "pink",
  "purple",
  "red",
  "white",
  "yellow",
];

ServerEvents.generateData("after_mods", (event) => {
  for (const [modid, containers] of Object.entries(modContainers)) {
    if (!Platform.isLoaded(modid)) {
      console.log(
        `Easy Shulker Boxes compat : Skipping containers for ${modid} (mod not loaded)`
      );
      continue;
    }

    for (const [template, data] of Object.entries(containers)) {
      if (template.includes("{COLOR}")) {
        for (const color of COLORS) {
          let itemName = template.replace("{COLOR}", color);
          let itemData = JSON.parse(
            JSON.stringify(data).replace(/{COLOR}/g, color)
          );
          event.json(
            `easyshulkerboxes:item_contents_provider/${itemName}`,
            itemData
          );
        }
      } else {
        event.json(`easyshulkerboxes:item_contents_provider/${template}`, data);
      }
    }
  }
});
