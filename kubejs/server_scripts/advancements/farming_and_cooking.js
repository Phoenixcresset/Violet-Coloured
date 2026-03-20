(() => {
  const { Criteria, registerRoot, registerAdvancements } = global.Advancements;

  const category = {
    namespace: "violetcoloured",
    name: "farming_and_cooking",
  };

  const categoryRoot = {
    id: "root",
    background: "minecraft:block/bricks",
    icon: "minecraft:hay_block",
    criteria: {
      consumed_item: {
        trigger: "minecraft:consume_item",
      },
    },
  };

  const advancements = [
    {
      id: "place_keg",
      parent: "root",
      icon: "brewinandchewin:keg",
      criteria: {
        placed_keg: Criteria.placeBlock("brewinandchewin:keg"),
      },
    },
    {
      id: "brew_drink",
      parent: "place_keg",
      icon: "brewinandchewin:beer",
      criteria: {
        has_drink: Criteria.hasItem("#brewinandchewin:fermented_drinks"),
      },
    },
    {
      id: "drink_all_fermented_drinks",
      parent: "brew_drink",
      icon: "brewinandchewin:steel_toe_stout",
      type: "challenge",
      criteria: Criteria.consumeAll(
        Ingredient.of("#brewinandchewin:fermented_drinks").getItemIds()
      ),
    },
    {
      id: "have_all_wines",
      parent: "brew_drink",
      icon: "vinery:noir_wine",
      type: "challenge",
      criteria: {
        wines: Criteria.hasAllItems(
          Ingredient.of("#vinery:wines").getItemIds()
        ),
      },
    },
    {
      id: "ferment_cheese",
      parent: "place_keg",
      icon: "brewinandchewin:unripe_flaxen_cheese_wheel",
      criteria: {
        unripe_cheese_wheel: Criteria.hasItem(
          "#brewinandchewin:cheese_wheels/unripe"
        ),
      },
    },
    {
      id: "place_temperature_source_near_keg",
      parent: "place_keg",
      icon: "brewinandchewin:ice_crate",
      criteria: {
        placed_temperature_source_near_keg: Criteria.blockInRadius({
          baseBlocks: "#brewinandchewin:temperature_sources",
          blocksToCheckFor: "brewinandchewin:keg",
          range: 2,
          trigger: "minecraft:placed_block",
          additionalBaseBlocksConditions: Criteria.optionalBlockStateCondition({
            key: "lit",
            value: "true",
          }),
        }),

        placed_keg_near_temperature_source: Criteria.blockInRadius({
          baseBlocks: "brewinandchewin:keg",
          blocksToCheckFor: "#brewinandchewin:temperature_sources",
          range: 2,
          trigger: "minecraft:placed_block",
          additionalBlocksToCheckForConditions:
            Criteria.optionalBlockStateCondition({
              key: "lit",
              value: "true",
            }),
        }),

        updated_temperature_source_near_keg: Criteria.blockInRadius({
          baseBlocks: "#brewinandchewin:temperature_sources",
          blocksToCheckFor: "brewinandchewin:keg",
          range: 2,
          trigger: "minecraft:item_used_on_block",
          additionalBaseBlocksConditions: Criteria.optionalBlockStateCondition({
            key: "lit",
            value: "true",
          }),
        }),
      },
      requirements: [
        [
          "placed_temperature_source_near_keg",
          "placed_keg_near_temperature_source",
          "updated_temperature_source_near_keg",
        ],
      ],
    },
  ];

  ServerEvents.generateData("after_mods", (event) => {
    registerRoot(event, category, categoryRoot);
    registerAdvancements(event, category, advancements);
  });
})();
