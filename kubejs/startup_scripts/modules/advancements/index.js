// @ts-check

global.Advancements = (function Advancements() {
  const { toArray } = global.Utils;

  /**@type {Map<string, Object>} */
  const _advancements = new Map();

  /**@type {Map<string, Object>} */
  const _removedAdvancements = new Map();

  /**
   * @param {Category} category
   * @param {Display} display
   * @returns {DisplayData}
   */
  function _buildDisplay(
    category,
    { icon, id, title, description, background, frame, silent }
  ) {
    const display = {
      icon: {
        id: icon,
      },
      title: {
        translate:
          title ??
          `advancement.${category.namespace}.${category.name}.${id}.title`,
      },
      description: {
        translate:
          description ??
          `advancement.${category.namespace}.${category.name}.${id}.description`,
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

  /**
   * @param {Category} category
   * @param {Root} root
   * @returns {RootData}
   */
  function _buildRoot(category, root) {
    return {
      display: _buildDisplay(category, {
        icon: root.icon,
        id: "root",
        background: root.background,
        title: root.title,
        description: root.description,
        silent: true,
      }),
      criteria: root.criteria,
    };
  }

  /**
   * @param {Category} category
   * @param {Advancement} advancement
   * @returns {AdvancementData}
   */
  function _buildAdvancement(category, advancement) {
    return {
      parent: `${category.namespace}:${category.name}/${advancement.parent}`,
      display: _buildDisplay(category, {
        icon: advancement.icon,
        id: advancement.id,
        frame: advancement.type,
        title: advancement.title,
        description: advancement.description,
      }),
      criteria: advancement.criteria,
      requirements: advancement.requirements,
    };
  }

  /**
   * @param {Category} category
   * @param {Root} root
   */
  function registerRoot(category, root) {
    _advancements.set(
      `${category.namespace}:advancement/${category.name}/root`,
      _buildRoot(category, root)
    );
  }

  /**
   * @param {Category} category
   * @param {Advancement[]} advancements
   */
  function registerAdvancements(category, advancements) {
    for (const advancement of advancements) {
      _advancements.set(
        `${category.namespace}:advancement/${category.name}/${advancement.id}`,
        _buildAdvancement(category, advancement)
      );
    }
  }

  /**
   * Remove advancement(s) with the given ID(s)
   * @param {string[]} advancementIds - The ID(s) of the advancement(s). Can easily be found through /advancement command or GitHub
   */
  function removeAdvancements(advancementIds) {
    for (const advancementId of advancementIds) {
      let [namespace, path] = advancementId.split(":");
      let fullPath = `${namespace}:advancement/${path}`;

      _removedAdvancements.set(`${fullPath}`, {
        display: { hidden: true },
        criteria: {
          impossible: {
            trigger: "minecraft:impossible",
          },
        },
      });
    }
  }

  /**
   * @param {import("dev.latvian.mods.kubejs.generator.KubeDataGenerator").$KubeDataGenerator$$Type} event The event from ServerEvents.generateData(...)
   */

  function commit(event) {
    for (const [path, advancement] of _removedAdvancements) {
      event.json(path, advancement);
    }
    for (const [path, advancement] of _advancements) {
      event.json(path, advancement);
    }
    _advancements.clear();
    _removedAdvancements.clear();
  }

  return {
    registerRoot: registerRoot,
    registerAdvancements: registerAdvancements,
    removeAdvancements: removeAdvancements,
    commit: commit,
  };
})();
