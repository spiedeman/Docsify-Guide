* 入门
  * [快速开始](Intro/quick-start.md)
  * [多页文档](Intro/more-pages.md)
  * [定制导航栏](Intro/navbar.md)
  * [封面](Intro/cover.md)
* 配置
  * [配置项](Custom/configuration.md)
  * [主题](Custom/themes.md)
  * [插件列表](Custom/plugins.md)
  * [开发插件](Custom/write-a-plugin.md)
  * [Markdown 配置](Custom/markdown.md)
  * [代码高亮](Custom/language-highlight.md)

<li>
  <p><strong>主题</strong></p>
  <ul class="theme-preview">
    <li>
      <a data-theme="vue">light</a>
    </li>
    <li>
      <a data-theme="dark">Dark</a>
    </li>
    <li>
      <a data-theme="pure">Pure</a>
    </li>
	<li>
      <a data-theme="buble">Buble</a>
    </li>
	<li>
      <a data-theme="dolphin">dolphin</a>
    </li>
  </ul>
</li>

<style>
  .demo-theme-preview a {
    padding-right: 10px;
  }

  .demo-theme-preview a:hover {
    cursor: pointer;
    text-decoration: underline;
  }
</style>

<script>
  var preview = Docsify.dom.find('.demo-theme-preview');
  var themes = Docsify.dom.findAll('[rel="stylesheet"]');

  preview.onclick = function (e) {
    var title = e.target.getAttribute('data-theme')

    themes.forEach(function (theme) {
      theme.disabled = theme.title !== title
    });
  };
</script>
