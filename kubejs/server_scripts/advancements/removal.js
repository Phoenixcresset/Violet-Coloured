(() => {
  const removedAdvancements = [
    "vinery:main/fruits_of_the_field",
    "vinery:main/overgrown_lattices",
    "vinery:main/budding_grapes",
  ];

  /**
   * Remove advancement(s) with the given ID(s)
   * @param {import("dev.latvian.mods.kubejs.generator.KubeDataGenerator").$KubeDataGenerator$$Type} event The event from ServerEvents.generateData(...)
   * @param {string | Array<string>} advancementIds - The ID(s) of the advancement(s). Can easily be found through /advancement command or GitHub
   */
  function removeAdvancement(event, advancementIds) {
    if (typeof advancementIds === "string") {
      advancementIds = [advancementIds];
    }

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

  ServerEvents.generateData("after_mods", (event) => {
    removeAdvancement(event, removedAdvancements);
  });
})();
