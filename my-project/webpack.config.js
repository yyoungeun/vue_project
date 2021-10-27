// path : output속성에서 사용할 노드 path라이브러리
// webpack : 웹팩 플러그인에서 사용할 node_modules의 웹팩 라이브러리를 node_modules폴더에서 로딩하여 저장
var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  // main.js파일에 정의한 내용에 따라 애플리케이션의 구성요소및 파일들이 웹팩으로 번들링(빌드)된다.
  output: {
    // 웹팩으로 빌드하고 난 결과물 위치, 이름 지정
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  // 웹팩으로 애플리케이션 파일들을 빌드할 때 HTML, CSS, PNG파일을 자바스크립트로 변환해 주는 로더 지정
  // vue-style-loader, css-loader : css 파일 변환
  // vue-loader : vue => template, script, style 변환
  // babel-loader : 자바스크립트 파일의 ES6 문법을 모든 브라우저에서 호환 가능한 자바스크립트로 변환
  // file-loader : 이미지 파일 변환
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  // 웹팩으로 빌드할 때 뷰 라이브러리의 여러 유형 중 어떤 걸 선택할 지 지정
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
