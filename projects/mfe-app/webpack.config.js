const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfeApp',
  filename: "remoteEntry.js",
  exposes: {
    './TodoListComponent': './projects/mfe-app/src/app/todo-list/todo-list.component.ts',
    './InventoryComponent': './projects/mfe-app/src/app/inventory/inventory.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
 

});
