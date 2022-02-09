module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: './src',
          extenions: [
            '.ts',
            '.tsx',
            '.js',
            '.json',
            '.png'
          ],
          alias: {
            "@screens": "./src/screens",
            "@components": "./src/components",
            "@assets": "./src/assets",
            "@theme": "./src/theme",
            "@hooks": "./src/hooks",
          }
        }
      ]
    ]
  };
};