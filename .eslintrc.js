module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  env: {
    browser: true,
    jasmine: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    'import/extensions': 'off',
    'react/prop-types': 'off',
    'no-param-reassign': 'off',
    'import/order': 'off',
    'no-shadow': 'off',
    'consistent-return': 'off',
    // 'array-callback-return': 'off',
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  parser: '@typescript-eslint/parser',
};
