module.exports = {
  '**/*.js': [
    'prettier   -c  --write  --config ./.prettierrc.js',
    'eslint  --config  ./.eslintrc.js --fix'
  ]
};
