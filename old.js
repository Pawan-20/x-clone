import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const config = [
  // ✅ Ignore unnecessary files
  {
    ignores: ["**/node_modules/**", "**/.next/**", "**/dist/**"],
  },

  // ✅ Base and plugin configs
  ...compat.extends(
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:tailwindcss/recommended",
    "plugin:prettier/recommended",
    "plugin:@next/next/core-web-vitals"
  ),

  // ✅ TypeScript + Next.js + rules
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "import/prefer-default-export": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-props-no-spreading": "off",
      "unused-imports/no-unused-imports": "warn",
      "tailwindcss/no-custom-classname": "off", // adjust if using custom classes
    },
    async plugins() {
      const unusedImports = await import("eslint-plugin-unused-imports");
      return {
        "unused-imports": unusedImports.default,
      };
    },
  },
];