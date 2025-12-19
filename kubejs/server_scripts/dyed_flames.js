const createFireType = (particle, textureBase) => ({
    particle: particle,
    texture0: `${textureBase}_0`,
    texture1: `${textureBase}_1`
});

const modFireTypes = {
    "supplementaries": {
        "lumisene": createFireType(
            "supplementaries:sparkle",
            "supplementaries:block/lumisene_fire"
        ),
    }
}

ServerEvents.generateData("after_mods", event => {

    let fireTypesData = {};

    for (const [modid, fireTypes] of Object.entries(modFireTypes)) {
        if (!Platform.isLoaded(modid)) {
            console.log(`Dyed Flames compat : Skipping fire types for ${modid} (mod not loaded)`)
            continue
        }

        for (const [name, data] of Object.entries(fireTypes)) {
            fireTypesData[`${modid}:${name}`] = data
        }
    }
    event.json("dyedflames:data_maps/block/fire_types",
        {
            values: fireTypesData
        }
    )    
})
