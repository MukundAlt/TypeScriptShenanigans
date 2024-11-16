const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/TypeScriptShenanigans/',
    },
    devServer: {
        static: './dist',
    }
};

// const path = require('path');

// module.exports = {
//   entry: './src/index.ts',  // Your entry TypeScript file
//   output: {
//     filename: 'bundle.js',  // Output file
//     path: path.resolve(__dirname, 'dist'),  // Output folder
//   },
//   resolve: {
//     extensions: ['.ts', '.js'],  // Resolve TypeScript and JavaScript files
//   },
//   module: {
//     rules: [
//       {
//         test: /\.ts$/,  // Apply to .ts files
//         use: 'ts-loader',  // Use TypeScript loader
//         exclude: /node_modules/,
//       },
//     ],
//   },
//   devtool: 'source-map',  // Optional: helps with debugging
// };
