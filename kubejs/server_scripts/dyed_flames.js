ServerEvents.generateData("after_mods", event => {

    // let dyedFLamesJson = KJSTweaks.readJsonFromMod("dyedflames", "data_maps/block/fire_types")

    // console.log("Dyed Flames Fire Types:" + dyedFLamesJson)

    // Breaks every entry if trying to reference fire sources, particles or textures that don't exist
    event.json("dyedflames:data_maps/block/fire_types",
        {
            values: {
                "supplementaries:lumisene": {
                    particle: "supplementaries:sparkle",
                    texture0: "supplementaries:block/lumisene_fire_0",
                    texture1: "supplementaries:block/lumisene_fire_1"
                }
            }
        }
    )

    
})
