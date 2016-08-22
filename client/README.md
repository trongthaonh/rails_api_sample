# Gulp Redux React Template

```
$ npm install
```

## 概要

- gulpとReactを使ったJSアプリケーション開発環境。  
- webpackを用いたCommonJS環境。
- Babelを用いたES6での開発環境。
- Mocha, Power-Assert、Sinonを用いたユニットテスト。

※Babelを使用する場合はES5ベースになるので、IE9以上のモダンブラウザのみ対応。


## HTML

assets

```javascript
scripts/
  └─templates/
    ├─partiales/...
    ├─index.ejs
    └─home/
      ├─partiales/...
      └─index.ejs
```

dist後

```javascript
index.html
home
  └─index.html
```


## CSS

assets

```javascript
styl/
  ├─common/...
  ├─index/...
  ├─top/...
  └─samplePage/...
```

dist時に各ページ一枚のcommon.cssにまとめます。

```javascript
css/
  ├─index/index.css
  └─home/index.css
```

## JSX

assets

```javascript
scripts/
  ├─components/
  │  ├─album/...
  │  ├─common/...
  │  ├─feed/...
  │  ├─header/...
  │  ├─mypage/...
  │  ├─partials/...
  │  └─search/...
  ├─index.jsx
  └─home.jsx
```

dist後

```javascript
js/
  ├─index.js
  └─home.js
```

## IMG

assets

```javascript
img/
  ├─common/...
  ├─index/...
  └─samplePage/...
_imgSprites/...
```

dist後

```javascript
img/
  └─common/sprites.png // spritesはcommon内に一枚だけ作成します
    ├─top/...
    └─user/...
```

### ファイル監視の実行 & サーバー起動

```
# ディレクトリを監視(assets/pc)
$ gulp

# 指定ディレクトリを監視（assets/spディレクトリを監視する例)
$ gulp -sp
```

### リリースファイル作成

```
$ gulp dist
```

### 個別タスク

```
$ gulp clean
$ gulp copy
$ gulp ejs
$ gulp html
$ gulp script
$ gulp server
$ gulp sprite
$ gulp style
```

### 使用ツール

- [Redux](https://github.com/reactjs/redux)
- [React](https://facebook.github.io/react/)
- [ESLint](http://eslint.org/)
- [Stylus](https://learnboost.github.io/stylus/)
- [EJS](http://www.embeddedjs.com/)
- [Babel](https://babeljs.io/)
- [Webpack](http://webpack.github.io/)
- [Karma](https://karma-runner.github.io/0.13/index.html)
- [PhantomJS](http://phantomjs.org/)
- [Mocha](http://mochajs.org/)
- [PowerAssert](https://github.com/power-assert-js/power-assert)
- [Sinon](http://sinonjs.org/)
