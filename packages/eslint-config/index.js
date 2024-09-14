// @ts-check
import react from '@eslint-react/eslint-plugin'
import eslintConfigPrettier from 'eslint-config-prettier'
import tailwind from 'eslint-plugin-tailwindcss'
import tsESlint from 'typescript-eslint'

export default [
  react.configs.recommended,
  ...tsESlint.configs.recommendedTypeChecked,
  ...tsESlint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/*.cjs'],
  },
  {
    rules: {
      '@eslint-react/naming-convention/filename': ['warn', 'kebab-case'],
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/no-misused-promises': 'off',

      // FIXME: temporarily disabled for refactoring / optimization
      '@typescript-eslint/require-await': 'warn',
      '@typescript-eslint/no-unused-vars': 'off', // 'warn'
    },
  },
  {
    ignores: [
      '.next/',
      'prisma/fake-data.ts',
      'cosmos.imports.ts',
      'prisma/',
      'src/app/cosmos/',
      'src/shadcn/',
      'src/locales/',
      'src/lib/swr.ts',
      'src/lib/retrieval/',
    ],
  },
  ...tailwind.configs['flat/recommended'],
  eslintConfigPrettier,
]
