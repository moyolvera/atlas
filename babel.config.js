module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@actions': './src/actions',
            '@components': './src/components',
            '@screens': './src/screens',
            '@theme': './src/theme'
          },
          extensions: ['.ts', '.tsx', 'web.ts', '.web.tsx']
        }
      ]
    ]
  };
};
