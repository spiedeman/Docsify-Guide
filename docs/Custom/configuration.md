# 配置项
所有配置都在 `window.$docsify` 里。

```html
<script>
  window.$docsify = {
    repo: 'docsifyjs/docsify',
    maxLevel: 3,
    coverpage: true
  }
</script>
```

## repo
- 类型： `Boolean`
- 默认值： `null`

配置仓库地址或者 `username/repo` 的字符串，会在页面右上角渲染一个[__GitHub Corner__](http://tholman.com/github-corners/) 挂件。

```js
window.$docsify = {
  repo: 'docsifyjs/docsify',
  // or
  repo: 'https://github.com/docsifyjs/docsify/'
};
```


## loadNavbar
- 类型： `Boolean|String`
- 默认值： `false`

加载自定义导航栏，参考[定制导航栏](Intro/navbar#自定义导航栏)了解用法。设置为 `true` 后会加载
`_navbar.md` 文件，也可以自定义加载的文件名。

```js
window.$docsify = {
  // 加载 _navbar.md
  loadNavbar: true,

  // 加载 nav.md
  loadNavbar: 'nav.md'
};
```


## loadSidebar
- 类型： `Boolean|String`
- 默认值： `false`

加载自定义侧边栏，参考[多页文档](Intro/more-pages.md)。设置为 `true`
后会加载 `_sidebar.md` 文件，也可以自定义加载的文件名。

```js
window.$docsify = {
  // 加载 _sidebar.md
  loadSidebar: true,

  // 加载 summary.md
  loadSidebar: 'summary.md'
};
```

## subMaxLevel
- 类型： `Number`
- 默认值： `0`

自定义侧边栏后默认不会再生成目录，可以通过设置生成目录的最大层级开启这个功能。
```js
window.$docsify = {
  subMaxLevel: 2
};
```

## auto2top
- 类型： `Boolean`
- 默认值： `false`
  
切换页面后是否自动跳转到页面顶部。

```js
window.$docsify = {
  auto2top: true
}
```

## basePath
- 类型： `String`

文档加载的根路径，可以是二级路径或者是其他域名的路径。

```js
window.$docsify = {
  basePath: '/path/',

  // 直接渲染其他域名的文档
  basePath: 'https://docsify.js.org/',

  // 甚至直接渲染其他仓库 readme
  basePath:
    'https://raw.githubusercontent.com/ryanmcdermott/clean-code-javascript/master/'
};
```

## coverpage
- 类型： `Boolean|String`
- 默认值： `false`

启用[封面页](Intro/coverpage#封面)。开启后是加载 `_coverpage.md`
文件，也可以自定义文件名。

```js
window.$docsify = {
  coverpage: true,

  // 自定义文件名
  coverpage: 'cover.md',

  // mutiple covers
  coverpage: ['/', '/zh-cn/'],

  // mutiple covers and custom file name
  coverpage: {
    '/': 'cover.md',
    '/zh-cn/': 'cover.md'
  }
};
```

## onlyCover
- 类型： `Boolean`

当访问主页时只加载封面。

```js
window.$docsify = {
  onlyCover: false
};
```
