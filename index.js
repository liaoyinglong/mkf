const tplMap = {
  '.gitignore': './.gitignore',
  '.editorconfig': './.editorconfig',
  '.eslintignore': './.eslintignore',
  'webpack.config.js': './webpack.config.js',
}
module.exports = {
  tplMap,
  list: [
    {
      type: 'list',
      name: 'fileType',
      message: 'What do you want to create?',
      choices: Object.keys(tplMap),
    },
  ],
}
