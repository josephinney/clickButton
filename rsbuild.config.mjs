import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import {pluginModuleFederation} from '@module-federation/rsbuild-plugin' 

export default defineConfig({

  plugins: [
    pluginReact(),

    pluginModuleFederation({
      name: 'producer2',
      filename: 'remoteEntry.js',
      exposes: {
        './UserInterface': './src/UserInterface.jsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],

  server: {
    port: process.env.PORT || 5000,
    headers: {
      'Access-Control-Allow-Origin': '*', 
    }
  }

});
