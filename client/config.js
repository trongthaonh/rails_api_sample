/**
 * タスク設定ファイル
 */
module.exports = {
    // 出力先ディレクトリ
    dist: 'dist/%type%',
    // gulpコマンドでデフォルトで監視するディレクトリ(assets/*/)
    defaultPath: 'pc',
    // サーバー設定
    server: {
      ghostMode: {
        clicks: false,
        location: false,
        forms: false,
        scroll: false
      }
    },
    // パス設定
    path: {
      html: {
        dist: 'dist/%type%/**/*.html',
        dest: 'dist/%type%/'
      },
      style: {
        src: 'assets/%type%/styles/**/index.styl',
        watch: 'assets/%type%/styles/**/*.styl',
        dist: 'dist/%type%/css/**/*.css',
        dest: 'dist/%type%/css'
      },
      sprite: {
        src: 'assets/%type%/_imgSprites/**/*',
        watch: 'assets/%type%/_imgSprites/**/*',
        imageDest: 'assets/%type%/img/common',
        cssDest: 'assets/%type%/styles/common/var/'
      },
      js: {
        src: [
          'assets/%type%/scripts/home.jsx',
        ],
        dist: 'dist/%type%/js/**/*.js',
        dest: 'dist/%type%/js'
      },
      json: {
        dist: 'dist/%type%/**/*.json',
        dest: 'dist/%type%/'
      },
      test: {
        src: [
          'node_modules/power-assert/build/power-assert.js',
          'node_modules/sinon/pkg/sinon.js',
          'assets/%type%/spec/**/*Spec.js'
        ]
      },
      img: {
        dist: 'dist/%type%/img/**/*',
        dest: 'dist/%type%/img'
      },
      copy: [
        {
          from: 'assets/%type%/**/*.html',
          to: 'dist/%type%/'
        },
        {
          from: 'assets/%type%/scripts/_api/**/*',
          to: 'dist/%type%/scripts/_api'
        },
        {
          from: 'assets/%type%/img/**/*',
          to: 'dist/%type%/img'
        }
      ]
    }
};
