module.exports = {
	root: true,
	env: {
		browser: true, // 브라우저 환경에서 실행
		node: true // 노드 환경에서 실행
	},
	parser: 'vue-eslint-parser', // Vue.js 코드를 분석할 때 사용할 파서 지정
	parserOptions: {
		ecmaVersion: 'latest', // 최신 ECMAScript 버전 사용
		parser: '@typescript-eslint/parser', // TypeScript 코드를 파싱하는 데 사용할 파서 지정
		sourceType: 'module' // ECMAScript 모듈 형식으로 코드 작성
	},
	plugins: ['@typescript-eslint', 'vue'],
	extends: [
		'eslint:recommended', // ESLint에서 권장 규칙 (eslint)
		'plugin:nuxt/recommended', // Nuxt.js 권장 규칙 (eslint-plugin-nuxt)
		'plugin:vue/recommended', // Vue.js 권장 규칙 (eslint-plugin-vue)
		'plugin:@typescript-eslint/recommended', // TypeScript ESLint 규칙 (@typescript-eslint/eslint-plugin)
		'@nuxtjs/eslint-config-typescript', //  Nuxt.js 프로젝트에서 TypeScript와 함께 사용되는 ESLint 규칙 (@nuxtjs/eslint-config-typescript)
		'plugin:prettier/recommended', // ESLint, Prettier 충돌방지 (eslint-config-prettier, eslint-plugin-prettier)
		'@vue/eslint-config-prettier/skip-formatting' // ESLint, Prettier 충돌방지 (eslint-config-prettier, eslint-plugin-prettier)
	],
	rules: {
		eqeqeq: 'warn', // == 대신 === 사용 권장
		'no-throw-literal': 'error', // 예외를 문자열이 아닌 Error 객체로 던지도록 권장
		'no-unreachable': 'error', // 도달할 수 없는 코드 방지
		'no-redeclare': 'error', // 변수 재선언 방지
		'prefer-const': 'warn', // 가능하면 const 사용 권장
		'vue/multi-word-component-names': 'off', // Vue 컴포넌트 명 2개 이상의 단어 off
		'no-console': 'off',
		'vue/html-self-closing': [
			'warn',
			{
				html: {
					void: 'always',
					normal: 'never',
					component: 'always'
				},
				svg: 'always',
				math: 'always'
			}
		]
	}
}
