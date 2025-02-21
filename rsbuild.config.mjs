import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import {pluginModuleFederation} from '@module-federation/rsbuild-plugin' 

export default defineConfig({

  mode: 'production', 

  plugins: [
    pluginReact(),

    pluginModuleFederation({
      name: 'producer2',
      exposes: {
        './UserInterface': './src/UserInterface.jsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],

  output: {
    assetPrefix: process.env.ASSET_PREFIX || '/'
  },

  

  

});
