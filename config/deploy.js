module.exports = function (deployTarget) {
  let ENV = {
    build: {},
    ghpages: {
      gitRemoteUrl:
        'https://x-access-token:${DAVINCI}@github.com/omarkar101/da-vinci.git',
    },
  };

  if (deployTarget === 'gh-pages') {
    ENV.build.environment = 'production';
  }

  return ENV;
};
