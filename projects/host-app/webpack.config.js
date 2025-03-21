const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: "shell",
  remotes: {
    "mfeApp": "http://localhost:5300/remoteEntry.js",    
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
  // experiments: {
  //   outputModule: true, // 🚀 Enable output as ESM
  // },

});
