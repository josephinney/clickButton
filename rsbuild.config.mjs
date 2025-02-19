import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import {pluginModuleFederation} from '@module-federation/rsbuild-plugin' 

export default defineConfig({

  plugins: [
    pluginReact(),

    pluginModuleFederation({
      name: 'producer2',
      filename: "remoteEntry.js",
      exposes: {
        './UserInterface': './src/UserInterface.jsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],

  output: {
    distPath: {
      js: "dist/js",    
      css: "dist/css",  
      assets: "dist/assets", 
    },
    assetPrefix: "/"
  },

  server: {
    headers: {
      'Access-Control-Allow-Origin': '*', 
    }
  }

});
