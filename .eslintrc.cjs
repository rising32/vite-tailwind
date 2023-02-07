module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    'overrides': [
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module',
        // 'project': './tsconfig.json',
    },
    'plugins': [
        'react',
        'react-hooks',
        '@typescript-eslint',
        'prettier'
    ],
    'settings': {
        'react': {
          'version': 'detect',
        },
        'import/resolver': {
          'node': {
            'paths': ['src'],
            'extensions': ['.js', '.jsx', '.ts', '.tsx'],
          },
        },
    },
    'rules': {
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
        'indent': [
            'error',
            2
        ],
        'linebreak-style': [
            'error',
            'windows'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ]
    }
};
