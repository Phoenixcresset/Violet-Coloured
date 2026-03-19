/** @typedef {{namespace: string, name: string}} Category */

global.Advancements = (function Advancements() {
  const { toArray } = global.Utils;

  function _buildDisplay(category, { icon, id, background, frame, silent }) {
    const display = {
      icon: {
        id: icon,
      },
      title: {
        translate: `advancement.${category.namespace}.${category.name}.${id}.title`,
      },
      description: {
        translate: `advancement.${category.namespace}.${category.name}.${id}.description`,
      },
    };

    if (background !== undefined) {
      const [backgroundNamespace, backgroundPath] = background.split(":");
      display.background = `${backgroundNamespace}:textures/${backgroundPath}.png`;
    }

    if (frame !== undefined) {
      display.frame = frame;
    }

    if (silent !== undefined) {
      display.announce_to_chat = !silent;
      display.show_toast = !silent;
    }

    return display;
  }

  function _buildRoot(category, root) {
    return {
      display: _buildDisplay(category, {
        icon: root.icon,
        id: root.id,
        background: root.background,
      }),
      criteria: root.criteria,
    };
  }

  function _buildAdvancement(category, advancement) {
    return {
      parent: `${category.namespace}:${category.name}/${advancement.parent}`,
      display: _buildDisplay(category, {
        icon: advancement.icon,
        id: advancement.id,
        frame: advancement.type,
      }),
      criteria: advancement.criteria,
      requirements: advancement.requirements,
    };
  }

  /**
   * @param {import("dev.latvian.mods.kubejs.generator.KubeDataGenerator").$KubeDataGenerator$$Type} event
   * @param {Category} category
   * @param {{id: string, icon: string, background: string, criteria: Object}} root
   * @returns {Object}
   */
  function registerRoot(event, category, root) {
    event.json(
      `${category.namespace}:advancement/${category.name}/${root.id}`,
      _buildRoot(category, root)
    );
  }

  /**
   * @param {import("dev.latvian.mods.kubejs.generator.KubeDataGenerator").$KubeDataGenerator$$Type} event
   * @param {Category} category
   * @param {{id: string, parent: string, icon: string, type?: string, criteria: Object}} advancements
   */
  function registerAdvancements(event, category, advancements) {
    advancements = toArray(advancements);

    for (const advancement of advancements) {
      event.json(
        `${category.namespace}:advancement/${category.name}/${advancement.id}`,
        _buildAdvancement(category, advancement)
      );
    }
  }

  /**
   * Remove advancement(s) with the given ID(s)
   * @param {import("dev.latvian.mods.kubejs.generator.KubeDataGenerator").$KubeDataGenerator$$Type} event The event from ServerEvents.generateData(...)
   * @param {string | Array<string>} advancementIds - The ID(s) of the advancement(s). Can easily be found through /advancement command or GitHub
   */
  function removeAdvancements(event, advancementIds) {
    advancementIds = toArray(advancementIds);

    for (const advancementId of advancementIds) {
      let [namespace, path] = advancementId.split(":");
      let fullPath = `${namespace}:advancement/${path}`;

      event.json(`${fullPath}`, {
        display: { hidden: true },
        criteria: {
          impossible: {
            trigger: "minecraft:impossible",
          },
        },
      });
    }
  }

  return {
    registerRoot: registerRoot,
    registerAdvancements: registerAdvancements,
    removeAdvancements: removeAdvancements,
  };
})();
