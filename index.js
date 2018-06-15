module.exports = {
  'extends': '@eslint/eslint-config-common',

  'rules': {    
    'comma-dangle': [2, {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'always-multiline',
    }]
  },

  'env': {
    'browser': true
  }
};
