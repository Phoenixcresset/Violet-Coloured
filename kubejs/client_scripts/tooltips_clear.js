(() => {
  /**
   * @typedef {Object} TooltipClearingConfig
   * @property {string|RegExp} itemId
   * @property {number} linesToClear
   */
  function createTooltipClearingConfig(itemId, linesToClear) {
    return {
      itemId: itemId,
      linesToClear: linesToClear,
    };
  }

  /**
   * @param {string} modId
   * @param {string|RegExp} itemId
   * @returns {string|RegExp}
   */
  function getItemIdPattern(modId, itemId) {
    if (itemId instanceof RegExp) {
      return new RegExp(`^${modId}:${itemId.source}$`);
    }
    return `${modId}:${itemId}`;
  }

  /** @type {Object.<string, Array<TooltipClearingConfig>>} */
  const tooltipClearingConfig = {
    supplementaries: [createTooltipClearingConfig("sack", 6)],
    suppsquared: [createTooltipClearingConfig(/sack_.*/, 6)],
  };

  ItemEvents.modifyTooltips((event) => {
    for (const [modId, items] of Object.entries(tooltipClearingConfig)) {
      if (!Platform.isLoaded(modId)) {
        console.log(
          `Tooltip Clearing : Skipping for ${modId} (mod not loaded)`
        );
        continue;
      }

      for (const item of items) {
        let fullItemId = getItemIdPattern(modId, item.itemId);
        event.modify(fullItemId, (tooltip) => {
          for (let i = 0; i < item.linesToClear; i++) {
            tooltip.removeLine(1);
          }
        });
      }
    }
  });
})();
