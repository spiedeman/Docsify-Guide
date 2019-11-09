var themebutton = Docsify.dom.find('[class=checkbox´]')
var themes = Docsify.dom.findAll('[rel="stylesheet"]')
themes.forEach( function (theme) {
    if (!theme.disabled) {
        title = theme.title
    }
} )
console.log(title)
var article = Docsify.dom.find('[class=markdown-section]')
var oldarticalHTML = article.innerHTML

// var nav = document.getElementsByClassName('app-nav')
var dom = Docsify.dom
var nav = Docsify.dom.find('[class="app-nav"]')
var navul = Docsify.dom.find('ul')
var navlis = Docsify.dom.findAll('li')
// console.log(navul)
oldnavulHTML = navul.innerHTML

// 添加butoon切换背景（深/浅）
button = [
    '<div class="themeButton">',
    '<label class="toggle">',
    '<input type="checkbox" class="checkbox" checked=title>',
    '<div class="slider"></div>',
    '</label>',
    '</div>'
]
if (title == "vue") {
    button[2] = button[2].replace('title', 'true')
} else {
    button[2] = button[2].replace('title', 'false')
}
console.log(button[2])
button = button.join('')
navul.innerHTML = button + oldnavulHTML
navul.classList.add("navigator")
navul.style.width = "220px"
// console.log(navlis)

oldnavHTML = nav.innerHTML
style = [
    '<style>\n',
    '  .checkbox {\n',
    '    display:none;\n',
    '  }\n',
    '  .toggle {\n',
    '    position:relative;\n',
    '    width:45px;\n',
    '    height:26px;\n',
    '    display:inline-block;\n',
    '    float:right;\n',
    '  }\n',
    '  .toggle:hover {\n',
    '    cursor: pointer;\n',
    '  }\n',
    '  .toggle:hover .slider:before {\n',
    '    background: #eeeeee;\n',
    '  }\n',
    '  .slider {\n',
    '    position:absolute;\n',
    '    top:0px;\n',
    '    left:0px;\n',
    '    height: 100%;\n',
    '    width: 100%;\n',
    '    border-radius: 25px;\n',
    '    background-color: #2ecc71;\n',
    '  }\n',
    '  .slider:before{\n',
    '    position:absolute;\n',
    '    top:3px;\n',
    '    left:3px;\n',
    '    content: "";\n',
    '    height: 20px;\n',
    '    width: 20px;\n',
    '    border-radius: 50%;\n',
    '    background-color: white;\n',
    '    transition: all 0.3s;\n',
    '  }\n',
    '  input.checkbox:checked + .slider {\n',
    '    background-color: #95a5a6;\n',
    '  }\n',
    '  input.checkbox:checked + .slider:before {\n',
    '    transform: translateX(19px);\n',
    '  }\n',
    '</style>\n',
].join('')

// article.innerHTML = button + style + oldarticalHTML
nav.innerHTML = oldnavHTML + style
// console.log(nav.innerHTML)
