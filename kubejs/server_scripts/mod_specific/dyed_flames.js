/**
 * @typedef {Object.<string, string>} FireType
 * @property {string} particle
 * @property {string} texture0
 * @property {string} texture1
 */

/**
 * @param {string} particle
 * @param {string} textureBase
 * @returns {FireType}
 */
const createFireType = (particle, textureBase) => ({
  particle: particle,
  texture0: `${textureBase}_0`,
  texture1: `${textureBase}_1`,
});

/** @typedef {Object.<string, Object.<string, FireType>>} ModFireTypes */
const modFireTypes = {
  supplementaries: {
    lumisene: createFireType("supplementaries:sparkle", "supplementaries:block/lumisene_fire"),
  },
};

ServerEvents.generateData("after_mods", (event) => {
  /** @type {Object.<string, FireType>} */
  let fireTypesData = {};

  for (const [modid, fireTypes] of Object.entries(modFireTypes)) {
    if (!Platform.isLoaded(modid)) {
      console.log(`Dyed Flames compat : Skipping fire types for ${modid} (mod not loaded)`);
      continue;
    }

    for (const [name, data] of Object.entries(fireTypes)) {
      fireTypesData[`${modid}:${name}`] = data;
    }
  }
  event.json("dyedflames:data_maps/block/fire_types", {
    values: fireTypesData,
  });
});
