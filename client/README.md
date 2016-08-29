# Gulp Redux React Sample


## Overview

sample SPA by Redux + React.  

- Redux + React with Gulp
- webpack for CommonJS
- Babel for ES6
- UnitTest by Mocha, Power-Assert、Sinon


## Usage

```
$ npm install
```

watch and server  

```
# default watch (assets/pc)
$ gulp

# watch for sp（assets/sp)
$ gulp -sp
```

distribution  

```
$ gulp dist
```



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

dist

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

dist

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

dist

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

dist

```javascript
img/
  └─common/sprites.png
    ├─top/...
    └─user/...
```


### Tasks

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


### Tools

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
