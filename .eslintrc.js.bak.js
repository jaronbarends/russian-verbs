module.exports = {
	root: true,
	parserOptions: {
	  sourceType: "module",
	  parser: 'babel-eslint',
	},

	// please keep the rules in alphabetical order for easy finding
	rules: {
	  'linebreak-style': 0,
	  'no-console': 'off',
	  'no-debugger': 'off',
	  'no-param-reassign': [
		'error',
		{
		  props: true,
		  ignorePropertyModificationsFor: [
			'state', // for vuex state
		  ],
		},
	  ],
	  'no-unused-vars': 1,
	  'vue/component-name-in-template-casing': ['error', 'kebab-case'],
	  'vue/html-self-closing': { normal: 'never', void: 'always' },
	  'vue/max-attributes-per-line': false,
	  'vue/no-v-html': false,
	  
	},
  };
  