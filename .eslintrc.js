module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'airbnb',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      "node": {
        "moduleDirectory": ["node_modules", "src/"]
      }
    }
  },
  plugins: ["react"],
  rules: {
    'react/react-in-jsx-scope': 0,
    'no-unused-vars': 2,
    'no-undef': 2,
    'no-console': 0,
    'no-dupe-else-if': 'error',
    'react/display-name': [0],
    'react-hooks/exhaustive-deps': [0],
    'prettier/prettier': 0,
    'no-duplicate-imports': ['error', { includeExports: true }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'no-param-reassign': 1,
    'import/prefer-default-export': 0,
    'react/prop-types': 0
  }
};
