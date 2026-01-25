import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  { files: ["**/*.js"], languageOptions: { sourceType: "script" } },
  {
    languageOptions: {
      globals: {
        StartupEvents: "readonly",
        ServerEvents: "readonly",
        ItemEvents: "readonly",
        BlockEvents: "readonly",
        PlayerEvents: "readonly",
        RecipeViewerEvents: "readonly",
        Ingredient: "readonly",
        Text: "readonly",
        Color: "readonly",
        Platform: "readonly",
        JsonIO: "readonly",
        LootJS: "readonly",
        LootEntry: "readonly",
        MoreJS: "readonly",
        KeyBindJSEvents: "readonly",
        GLFW: "readonly",
        KeyModifier: "readonly",
        console: "readonly",
        global: "readonly",
      },
    },
  },
  eslintConfigPrettier,
]);
