import { Config } from '@stencil/core';
import tailwind from 'stencil-tailwind';

export const config: Config = {
  plugins: [tailwind()],
  devServer: {
    reloadStrategy: 'pageReload',
  },
  namespace: 'dd-wc',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    /* {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    }, */
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
