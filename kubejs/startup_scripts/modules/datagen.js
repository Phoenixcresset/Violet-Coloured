/** @typedef {import(import("dev.latvian.mods.kubejs.script.data.GeneratedDataStage").$GeneratedDataStage$$Type)} GenerateDataEvent */

global.DataGenModule = (function DataGenModule() {
  const dataTypePaths = {
    placed_feature: "worldgen/placed_feature",
    configured_feature: "worldgen/configured_feature",
    biome_modifier: "neoforge/biome_modifier",
    structure_set: "worldgen/structure_set",
  };

  /**
   *
   * @param {"placed_feature" | "configured_feature" | "biome_modifier" | "structure_set"} dataType
   * @param {string} namespace
   * @param {string} dataName
   * @returns {string}
   */
  function _resolveDataPath(dataType, namespace, dataName) {
    const basePath = dataTypePaths[dataType];
    return `${namespace}:${basePath}/${dataName}.json`;
  }

  /**
   *
   * @param {GenerateDataEvent} event
   * @param {"placed_feature" | "configured_feature" | "biome_modifier" | "structure_set"} dataType
   * @param {string} namespace
   * @param {string} dataName
   * @param {Object} newData
   */
  function replaceData(event, { dataType, namespace, dataName, newData }) {
    const path = _resolveDataPath(dataType, namespace, dataName);
    event.json(path, newData);
  }

  /**
   *
   * @param {GenerateDataEvent} event
   * @param {"placed_feature" | "configured_feature" | "biome_modifier" | "structure_set"} dataType
   * @param {string} namespace
   * @param {string} dataName
   */
  function removeData(event, { dataType, namespace, dataName }) {
    const path = _resolveDataPath(dataType, namespace, dataName);
    event.json(path, {
      "neoforge:conditions": [{ type: "neoforge:false" }],
    });
  }
  return { replaceData: replaceData, removeData: removeData };
})();
