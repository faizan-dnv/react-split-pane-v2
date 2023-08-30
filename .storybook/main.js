module.exports = {
  stories: [
    {
      // 👇 Sets the directory containing your stories
      directory: '../stories',
      // 👇 Storybook will load all files that match this glob
      files: '*.js',
      // 👇 Used when generating automatic titles for your stories
      titlePrefix: 'MyComponents',
    },
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  features: {
    storyStoreV7: false,
  },

  docs: {
    autodocs: true,
  },
};
