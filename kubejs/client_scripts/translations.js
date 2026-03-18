(() => {
  ClientEvents.generateAssets("after_mods", (event) => {
    const supportedLocales = JsonIO.read(
      "kubejs/translations/supported_locales.jsonc"
    );
    const supportedLocalesObject = JSON.parse(
      JsonIO.toString(supportedLocales)
    );
    for (const locale of supportedLocalesObject.supported_locales) {
      let rawNamespacesToTranslations = JsonIO.read(
        `kubejs/translations/${locale}.jsonc`
      );
      let namespacesToTranslations = JSON.parse(
        JsonIO.toString(rawNamespacesToTranslations)
      );
      for (const [namespace, translations] of Object.entries(
        namespacesToTranslations
      )) {
        event.json(`${namespace}:lang/${locale}`, translations);
      }
    }
  });
})();
