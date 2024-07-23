module.exports = {
    root: true, // 현재 설정 파일을 기준으로 ESLint 설정을 적용합니다.
    settings: {
        moduleDirectory: [
            'node_modules', // 모듈을 찾을 디렉토리로 node_modules를 지정합니다.
            'src/', // 모듈을 찾을 디렉토리로 src를 지정합니다.
        ],
        react: {
            pragma: 'React', // JSX를 변환하기 위한 pragma를 React로 설정합니다.
            commonjs: true, // CommonJS 모듈을 사용할 수 있게 합니다.
            es6: true, // ES6 문법을 사용할 수 있게 합니다.
            version: 'detect', // React 버전을 자동으로 감지합니다.
        },
        'import/parsers': {
            '@typescript-eslint/parser': [
                '.ts', // TypeScript 파일을 파싱합니다.
                '.tsx', // TypeScript React 파일을 파싱합니다.
                '.d.ts', // TypeScript 정의 파일을 파싱합니다.
                '.js', // JavaScript 파일을 파싱합니다.
                '.jsx', // JavaScript React 파일을 파싱합니다.
            ],
        },
        'import/resolver': {
            typescript: true, // TypeScript 모듈 해석을 지원합니다.
            node: true, // Node.js 모듈 해석을 지원합니다.
        },
    },
    env: {
        node: true, // Node.js 환경을 설정합니다.
        es6: true, // ES6 환경을 설정합니다.
        browser: true, // 브라우저 환경을 설정합니다.
        es2020: true, // ES2020 환경을 설정합니다.
    },
    parser: '@typescript-eslint/parser', // TypeScript를 파싱하기 위해 @typescript-eslint/parser를 사용합니다.
    plugins: [
        '@typescript-eslint', // TypeScript ESLint 플러그인을 사용합니다.
        'react', // React ESLint 플러그인을 사용합니다.
        'react-hooks', // React Hooks ESLint 플러그인을 사용합니다.
        'prettier', // Prettier ESLint 플러그인을 사용합니다.
    ],
    extends: [
        'eslint:recommended', // ESLint 권장 규칙을 사용합니다.
        'plugin:@typescript-eslint/recommended', // TypeScript ESLint 권장 규칙을 사용합니다.
        'plugin:@typescript-eslint/eslint-recommended', // ESLint와 TypeScript ESLint 권장 규칙을 사용합니다.
        'plugin:react/recommended', // React ESLint 권장 규칙을 사용합니다.
        'prettier', // Prettier와 충돌하는 ESLint 규칙을 비활성화합니다.
    ],
    rules: {
        'prettier/prettier': ['error', { endOfLine: 'auto' }], // Prettier 관련 규칙을 에러로 설정하여 강제합니다.
        'no-use-before-define': 'error', // 정의 전에 사용을 금지합니다.
        'no-unused-vars': [
            // 사용되지 않는 변수에 대해 경고하지 않습니다.
            'off',
        ],
        'react/react-in-jsx-scope': 'off', // JSX 안에서 React를 반드시 import하지 않아도 됩니다.
        'react/jsx-filename-extension': [
            // 특정 파일 확장자에서만 JSX를 사용할 수 있게 합니다.
            'error',
            {
                extensions: [
                    '.tsx', // TypeScript React 파일을 허용합니다.
                    '.jsx', // JavaScript React 파일을 허용합니다.
                ],
            },
        ],
        '@typescript-eslint/no-unused-vars': [
            'error', // 사용되지 않는 변수에 대해 에러를 표시합니다.
        ],
        'react/prop-types': [
            'error',
            {
                // prop-types 사용 시, 선언되지 않은 props에 대해 에러를 표시합니다.
                skipUndeclared: true, // 선언되지 않은 props는 무시합니다.
            },
        ],
        'no-magic-numbers': [
            // 매직 넘버를 사용하지 않도록 설정합니다.
            'error',
            {
                ignoreArrayIndexes: true, // 배열 인덱스는 무시합니다.
                ignoreDefaultValues: true, // 기본값은 무시합니다.
                ignore: [
                    0, // 0은 매직 넘버로 간주하지 않습니다.
                    1, // 1은 매직 넘버로 간주하지 않습니다.
                    -1, // -1은 매직 넘버로 간주하지 않습니다.
                ],
            },
        ],
    },
}
