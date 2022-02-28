import { Config } from '@stencil/core';
import tailwind, { PluginOpts } from 'stencil-tailwind-plugin';

const opts = Object.assign({}, PluginOpts.DEFAULT, { debug: false, stripComments: true });

export const config: Config = {
  plugins: [tailwind(opts)],
  devServer: {
    reloadStrategy: 'pageReload',
  },
  namespace: 'wc-stencil',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
