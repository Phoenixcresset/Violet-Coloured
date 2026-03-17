(() => {
  const appleTree = {
    type: "minecraft:tree",
    config: {
      decorators: [],
      dirt_provider: {
        type: "minecraft:simple_state_provider",
        state: {
          Name: "minecraft:dirt",
        },
      },
      foliage_placer: {
        type: "minecraft:cherry_foliage_placer",
        corner_hole_chance: 0.25,
        hanging_leaves_chance: 0,
        hanging_leaves_extension_chance: 0,
        height: 4,
        offset: 0,
        radius: 4,
        wide_bottom_layer_hole_chance: 0.25,
      },
      foliage_provider: {
        type: "minecraft:weighted_state_provider",
        entries: [
          {
            data: {
              Name: "vinery:apple_leaves",
              Properties: {
                can_grow_apples: "false",
                age: "0",
                has_apples: "false",
                distance: "7",
                persistent: "false",
                waterlogged: "false",
              },
            },
            weight: 15,
          },
          {
            data: {
              Name: "vinery:apple_leaves",
              Properties: {
                can_grow_apples: "true",
                age: "0",
                has_apples: "false",
                distance: "7",
                persistent: "false",
                waterlogged: "false",
              },
            },
            weight: 1,
          },
        ],
      },
      force_dirt: false,
      ignore_vines: true,
      minimum_size: {
        type: "minecraft:two_layers_feature_size",
        limit: 1,
        lower_size: 0,
        upper_size: 2,
      },
      trunk_placer: {
        type: "minecraft:cherry_trunk_placer",
        base_height: 5,
        branch_count: {
          type: "minecraft:constant",
          value: 2,
        },
        branch_end_offset_from_top: {
          type: "minecraft:uniform",
          max_inclusive: 0,
          min_inclusive: -1,
        },
        branch_horizontal_length: {
          type: "minecraft:uniform",
          max_inclusive: 2,
          min_inclusive: 2,
        },
        branch_start_offset_from_top: {
          max_inclusive: -2,
          min_inclusive: -3,
        },
        height_rand_a: 1,
        height_rand_b: 0,
      },
      trunk_provider: {
        type: "minecraft:simple_state_provider",
        state: {
          Name: "minecraft:oak_log",
          Properties: {
            axis: "y",
          },
        },
      },
    },
  };

  const darkCherryTree = {
    type: "minecraft:tree",
    config: {
      decorators: [],
      dirt_provider: {
        type: "minecraft:simple_state_provider",
        state: {
          Name: "minecraft:dirt",
        },
      },
      foliage_placer: {
        type: "minecraft:cherry_foliage_placer",
        corner_hole_chance: 0.25,
        hanging_leaves_chance: 0.33333334,
        hanging_leaves_extension_chance: 0.66666667,
        height: 4,
        offset: 0,
        radius: 4,
        wide_bottom_layer_hole_chance: 0.25,
      },
      foliage_provider: {
        type: "minecraft:weighted_state_provider",
        entries: [
          {
            data: {
              Name: "vinery:dark_cherry_leaves",
              Properties: {
                can_grow_cherries: "false",
                has_cherries: "false",
                age: "0",
                persistent: "false",
                distance: "7",
              },
            },
            weight: 15,
          },
          {
            data: {
              Name: "vinery:dark_cherry_leaves",
              Properties: {
                can_grow_cherries: "true",
                has_cherries: "true",
                age: "3",
                persistent: "false",
                distance: "7",
              },
            },
            weight: 1,
          },
        ],
      },
      force_dirt: false,
      ignore_vines: true,
      minimum_size: {
        type: "minecraft:two_layers_feature_size",
        limit: 1,
        lower_size: 0,
        upper_size: 2,
      },
      trunk_placer: {
        type: "minecraft:cherry_trunk_placer",
        base_height: 6,
        branch_count: {
          type: "minecraft:weighted_list",
          distribution: [
            {
              data: 2,
              weight: 1,
            },
            {
              data: 3,
              weight: 1,
            },
          ],
        },
        branch_end_offset_from_top: {
          type: "minecraft:uniform",
          max_inclusive: 0,
          min_inclusive: -1,
        },
        branch_horizontal_length: {
          type: "minecraft:uniform",
          max_inclusive: 3,
          min_inclusive: 2,
        },
        branch_start_offset_from_top: {
          max_inclusive: -3,
          min_inclusive: -4,
        },
        height_rand_a: 1,
        height_rand_b: 0,
      },
      trunk_provider: {
        type: "minecraft:simple_state_provider",
        state: {
          Name: "vinery:dark_cherry_log",
          Properties: {
            axis: "y",
          },
        },
      },
    },
  };

  const appleTreeFileNames = ["apple", "apple_variant"];

  const darkCherryTreeFileNames = ["dark_cherry", "dark_cherry_variant"];

  ServerEvents.generateData("after_mods", (event) => {
    for (const fileName of appleTreeFileNames) {
      global.Datagen.replaceData(event, {
        dataType: "configured_feature",
        namespace: "vinery",
        dataName: `${fileName}`,
        newData: appleTree,
      });
    }
    for (const fileName of darkCherryTreeFileNames) {
      global.Datagen.replaceData(event, {
        dataType: "configured_feature",
        namespace: "vinery",
        dataName: `${fileName}`,
        newData: darkCherryTree,
      });
    }
  });
})();
