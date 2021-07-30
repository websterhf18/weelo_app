module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            require.resolve('babel-plugin-module-resolver'),
            {
                cwd: 'babelrc',
                extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
                alias: {
                    '@controllers': './src/data/controllers',
                    '@redux': './src/data/redux',
                    '@utils': './src/data/utils',
                    '@hooks': './src/data/hooks',
                    '@repositories': './src/data/repositories',
                    '@contracts': './src/domain/contracts',
                    '@entity': './src/domain/entity',
                    '@usecases': './src/domain/usecases',
                    '@components': './src/presentation/components',
                    '@navigation': './src/presentation/navigation',
                    '@screens': './src/presentation/screens',
                }
            }
        ],
        'jest-hoist'
    ]
};