import {makeConfig, withPolyfills} from '@haul-bundler/preset-0.60';

export default makeConfig({
  platforms: ['windows'], // or ['windows'] if you only use windows platform
  bundles: {
    index: {
      entry: withPolyfills('./index.js', {
        initializeCoreLocation:
          'react-native-windows/Libraries/Core/InitializeCore.js',
      }),
      providesModuleNodeModules: ['react-native', 'react-native-windows'],
      hasteOptions: {platforms: ['native', 'windows']},
      transform({config}) {
        config.resolve.alias = {
          ...config.resolve.alias,
          'react-native': 'react-native-windows',
        };
      },
    },
  },
});
