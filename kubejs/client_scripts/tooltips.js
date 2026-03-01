/**
 * @typedef {Object} TooltipSegment
 * @property {string} type
 * @property {string} translationKey
 */

/** @typedef {Object.<string, Array<TooltipSegment>>} TooltipConfig */
const tooltipConfig = {
  "minecraft:soul_campfire": [
    {
      type: "condition",
      translationKey: "block.minecraft.campfire.condition1",
    },
    {
      type: "behaviour",
      translationKey: "block.minecraft.campfire.behaviour1",
    },
  ],
};

/** @typedef {Object} ColorPalette
 * @property {Object} hint
 * @property {number} hint.default
 * @property {number} hint.highlight
 * @property {number} hint.highlightStrong
 * @property {Object} description
 * @property {number} description.default
 * @property {number} description.highlight
 * @property {number} description.condition
 */
const colorPalette = {
  hint: {
    default: 0x555555,
    highlight: 0xaaaaaa,
    highlightStrong: 0xffffff,
  },
  description: {
    default: 0xc7954b,
    highlight: 0xeeda78,
    condition: 0xaaaaaa,
  },
};

/** @type {Array<string>} */
const VALID_TYPES = ["condition", "behaviour"];

/** @param {TooltipConfig} config */
function validateTooltipConfig(config) {
  /** @type {Array<string>} */
  const errors = [];

  Object.entries(config).forEach(([itemId, segments]) => {
    if (!Array.isArray(segments)) {
      errors.push(`${itemId}: config must be an array`);
      return;
    }
    segments.forEach((segment, index) => {
      if (!segment.type || !segment.translationKey) {
        errors.push(`${itemId}[${index}]: missing type or translationKey`);
        return;
      }
      if (!VALID_TYPES.includes(segment.type)) {
        errors.push(`${itemId}[${index}]: invalid type '${segment.type}'`);
      }
    });
  });

  if (errors.length > 0) {
    throw new Error(`Tooltip configuration validation failed:\n- ${errors.join("\n- ")}`);
  }
}

/** @param {boolean} isHeld */
function holdShiftLine(isHeld) {
  const shiftKey = isHeld
    ? Text.of(Text.translatable("violetcolored.tooltip.keyShift")).color(
        colorPalette.hint.highlightStrong
      )
    : Text.of(Text.translatable("violetcolored.tooltip.keyShift")).color(
        colorPalette.hint.highlight
      );

  return Text.of(
    Text.translatable("violetcolored.tooltip.holdForDescription", shiftKey).color(
      colorPalette.hint.default
    )
  );
}

/**
 * @param {string} itemId
 * @param {Array<TooltipSegment>} segments
 * @param {boolean} shiftRequired
 */
function createTooltipHandler(itemId, segments, shiftRequired) {
  ItemEvents.modifyTooltips((event) => {
    event.modify(itemId, { shift: shiftRequired }, (tooltip) => {
      tooltip.insert(1, holdShiftLine(shiftRequired));

      if (!shiftRequired) {
        return;
      }

      tooltip.insert(2, "");

      const generatedLines = segments.map((segment) => generateTooltipLine(segment));
      tooltip.insert(3, generatedLines);
    });
  });
}

/** @param {TooltipSegment} segment */
function generateTooltipLine(segment) {
  const text = Text.translatable(segment.translationKey);
  switch (segment.type) {
    case "condition":
      return text.color(colorPalette.description.condition);
    case "behaviour":
      return text.color(colorPalette.description.default);
    default:
      throw new Error(`Unknown tooltip segment type: ${segment.type}`);
  }
}

validateTooltipConfig(tooltipConfig);
Object.entries(tooltipConfig).forEach(([itemId, segments]) => {
  createTooltipHandler(itemId, segments, false);
  createTooltipHandler(itemId, segments, true);
});
