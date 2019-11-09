# Themes

There are currently three themes available. Copy [Vue](//vuejs.org) and [buble](//buble.surge.sh) website custom theme and [@liril-net](https://github.com/liril-net) contribution to the theme of the black style.

```html
<link rel="stylesheet" href="//unpkg.com/docsify/themes/vue.css">
<link rel="stylesheet" href="//unpkg.com/docsify/themes/buble.css">
<link rel="stylesheet" href="//unpkg.com/docsify/themes/dark.css">
<link rel="stylesheet" href="//unpkg.com/docsify/themes/pure.css">
```

!> Compressed files are available in `/lib/themes/`.

```html
<!-- compressed -->

<link rel="stylesheet" href="//unpkg.com/docsify/lib/themes/vue.css">
<link rel="stylesheet" href="//unpkg.com/docsify/lib/themes/buble.css">
<link rel="stylesheet" href="//unpkg.com/docsify/lib/themes/dark.css">
<link rel="stylesheet" href="//unpkg.com/docsify/lib/themes/pure.css">
```

If you have any ideas or would like to develop a new theme, you are welcome to submit a [pull request](https://github.com/docsifyjs/docsify/pulls).

#### Click to preview

<div class="change-theme">
  <a data-theme="vue">vue.css</a>
  <a data-theme="buble">buble.css</a>
  <a data-theme="dark">dark.css</a>
  <a data-theme="pure">pure.css</a>
</div>

<style>
  .change-theme a {
    padding-right: 10px;
  }

  .change-theme a:hover {
    cursor: pointer;
    text-decoration: underline;
  }
</style>
<script>
  console.log('still in theme')
  var preview = Docsify.dom.find('.change-theme');
  var themes = Docsify.dom.findAll('[rel="stylesheet"]');
  console.log(`preview is ${preview}`)

  preview.onclick = function (e) {
    var title = e.target.getAttribute('data-theme')
    console.log(e.target)
    console.log(`Theme is ${title}`)

    themes.forEach(function (theme) {
      theme.disabled = theme.title !== title
    });
  };
</script>

## Other themes

- [docsify-themeable](https://jhildenbiddle.github.io/docsify-themeable/#/) A delightfully simple theme system for docsify.
