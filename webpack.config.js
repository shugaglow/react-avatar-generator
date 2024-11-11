const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'ReactAvatarGenerator',
    libraryTarget: 'umd',
},
module: {
    rules: [
        {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
    },
    ],
},
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
};

