import js from '@eslint/js';
import ts from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs['flat/recommended'],
	prettier,
	...svelte.configs['flat/prettier'],
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		files: ['**/*.svelte'],

		rules: {
			'@typescript-eslint/explicit-function-return-type': [
				'error',
				{
					allowExpressions: false,
					allowTypedFunctionExpressions: true
				}
			]
		},

		languageOptions: {
			parserOptions: {
				parser: ts.parser
			}
		}
	},
	{
		files: ['**/*.ts'],
		languageOptions: {
			globals: globals.node
		},
		rules: {
			'@typescript-eslint/explicit-function-return-type': [
				'error',
				{
					allowExpressions: false,
					allowTypedFunctionExpressions: true
				}
			]
		}
	},
	{
		ignores: ['build/', '.svelte-kit/', 'dist/']
	}
];
