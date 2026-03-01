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
  function _registerVineryFluid(event, fluid) {
    event
      .create(`vinery:liquid_${fluid.id}`, "thin")
      .tint(fluid.color)
      .tag(`vinery:${fluid.id}`)
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
  function registerVineryFluids(event, fluids) {
    for (const fluid of fluids) {
      _registerVineryFluid(event, fluid);
    }
  }

  return {
    registerVineryFluids: registerVineryFluids,
  };
})();
