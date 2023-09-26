const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },

  plugins: [new HTMLWebpackPlugin({
                template: './src/index.html'
  }
  )
],
  target:"web",
  devServer: {
    port: "3000",

    static : ["./public"],

    open: true,
    hot: true,
    liveReload: true,
  },

  resolve: {
    extensions: [".js",".jsx", ".json"],
  },
  module: {
  rules: [
    {   test: /\.js$/, 
        exclude: "/node_modules", 
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
            },
        },
    },
    {   test: /\.jsx$/, 
        exclude: "/node_modules", 
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
            },
        },
    },
    {
        test: /\.css$/i,
        // include: path.resolve(__dirname, 'src'),
        
        use: ["style-loader", "css-loader","postcss-loader"],
        
      },

      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [ "file-loader" ],
        },
    ],
    
  },
  // resolveLoader: {
  //   modules: ['node_modules', path.resolve(__dirname, 'loaders')],
  // },
};
