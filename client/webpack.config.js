var webpack = require('webpack');

module.exports = {
  output: {
    filename: '[name].js' //出力されるファイル名
  },
  resolve: {
    extensions: ['', '.js', '.jsx'], // 省略可能な拡張子
    modulesDirectories: ['node_modules', 'bower_components'],
    alias: { //bowerでインストールしたjqueryプラグインで以下にaliasを貼るとrequire('TweenMax');のようにパス無しでつかえる
      bower: 'bower_components'
      // TweenLite: __dirname + '/bower_components/gsap/src/uncompressed/TweenLite.js',
      // TweenMax: __dirname + '/bower_components/gsap/src/uncompressed/TweenMax.js',
      // TimelineLite: __dirname + '/bower_components/gsap/src/uncompressed/TimelineLite.js',
      // TimelineMax: __dirname + '/bower_components/gsap/src/uncompressed/TimelineMax.js'
    }
  },
  module: {
    loaders: [ //使用するloaderを記述ココに書く場合とrequire時にパスの前に書くものとがある
      { test: /\.html$/, loader: 'html-loader' },
      { test: /\.html$/, loader: 'underscore-template-loader' },
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /masonry-layout/, loader: 'imports?define=>false&this=>window' },
      { test: /imagesloaded/, loader: 'imports?define=>false&this=>window' },
      { test: /jquery-mockjax/, loader: 'imports?jQuery=jquery' },
    ]
  },
  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    ),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.ProvidePlugin({})
  ]
};
