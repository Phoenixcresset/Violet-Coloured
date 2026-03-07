/** @typedef {import("moe.wolfgirl.probejs.generated.registry.minecraft.Fluid").$Fluid$$Type} FluidEvent */
/** @typedef {string} FluidID */
/** @typedef {number} FluidColor */
/** @typedef {string} FluidName */

global.FluidModule = (function FluidModule() {
  /**
   * @param {FluidEvent} event
   * @param {{
   * id: FluidID,
   * color: FluidColor,
   * name: FluidName
   * }} fluid
   */
  function _registerFluid(event, namespace, fluid) {
    event
      .create(`${namespace}:liquid_${fluid.id}`, "thin")
      .tint(fluid.color)
      .tag(`${namespace}:${fluid.id}`)
      .displayName(fluid.name)
      .noBucket()
      .noBlock();
  }

  /**
   * @param {FluidEvent} event
   * @param {{
   * id: FluidID,
   * color: FluidColor,
   * name: FluidName
   * }[]} fluids
   */
  function registerFluids(event, namespace, fluids) {
    for (const fluid of fluids) {
      _registerFluid(event, namespace, fluid);
    }
  }

  return {
    registerFluids: registerFluids,
  };
})();
