// requires: create

const tooltipConfig = {
  "minecraft:soul_campfire": [
    {
      type: "condition",
      text: "block.minecraft.campfire.condition1",
    },
    {
      type: "behaviour",
      text: "block.minecraft.campfire.behaviour1",
    },
  ],
};

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

const VALID_TYPES = ["condition", "behaviour"];

function validateTooltipConfig(config) {
  const errors = [];

  Object.entries(config).forEach(([itemId, segments]) => {
    if (!Array.isArray(segments)) {
      errors.push(`${itemId}: config must be an array`);
      return;
    }
    segments.forEach((segment, index) => {
      if (!segment.type || !segment.text) {
        errors.push(`${itemId}[${index}]: missing type or text`);
        return;
      }
      if (!VALID_TYPES.includes(segment.type)) {
        errors.push(`${itemId}[${index}]: invalid type '${segment.type}'`);
      }
    });
  });

  if (errors.length > 0) {
    throw new Error(
      `Tooltip configuration validation failed:\n- ${errors.join("\n- ")}`
    );
  }
}

function holdShiftLine(isHeld) {
  const shiftKey = isHeld
    ? Text.of(Text.translatable("create.tooltip.keyShift")).color(
        colorPalette.hint.highlightStrong
      )
    : Text.of(Text.translatable("create.tooltip.keyShift")).color(
        colorPalette.hint.highlight
      );

  return Text.of(
    Text.translatable("create.tooltip.holdForDescription", shiftKey).color(
      colorPalette.hint.default
    )
  );
}

function createTooltipHandler(itemId, segments, shiftRequired) {
  ItemEvents.modifyTooltips((event) => {
    event.modify(itemId, { shift: shiftRequired }, (tooltip) => {
      tooltip.insert(1, holdShiftLine(shiftRequired));

      if (!shiftRequired) {
        return;
      }

      tooltip.insert(2, "");

      const generatedLines = segments.map((segment) =>
        generateTooltipLine(segment)
      );
      tooltip.insert(3, generatedLines);
    });
  });
}

function generateTooltipLine(segment) {
  const text = Text.translatable(segment.text);
  switch (segment.type) {
    case "condition":
      return text.color(colorPalette.description.condition);
    case "behaviour":
      return formatHighlightedText(text);
    default:
      throw new Error(`Unknown tooltip segment type: ${segment.type}`);
  }
}

function formatHighlightedText(text) {
  console.log("Formatting text:", text);
  const parts = String(text.getString()).split(/(_.*?_)/);
  console.log("Split parts:", parts);
  return Text.join(
    parts.map((part) => {
      if (part.startsWith("_") && part.endsWith("_")) {
        return Text.of(part.slice(1, -1)).color(
          colorPalette.description.highlight
        );
      } else {
        return Text.of(part).color(colorPalette.description.default);
      }
    })
  );
}

validateTooltipConfig(tooltipConfig);
Object.entries(tooltipConfig).forEach(([itemId, segments]) => {
  createTooltipHandler(itemId, segments, false);
  createTooltipHandler(itemId, segments, true);
});
