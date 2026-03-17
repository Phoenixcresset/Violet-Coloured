/** @typedef {import("moe.wolfgirl.probejs.generated.registry.minecraft.Fluid").$Fluid$$Type} FluidEvent */

global.FluidModule = (function FluidModule() {
  /**
   * @param {FluidEvent} event
   * @param {string} namespace
   * @param {{
   * id: string,
   * color: number,
   * name: string
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
   * @param {string} namespace
   * @param {{
   * id: string,
   * color: number,
   * name: string
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
