window.onload = function() {
    var themebox = Docsify.dom.find('[class=checkbox]')
    var themes = Docsify.dom.findAll('[rel="stylesheet"]')
    // var title = "vue"

    // themes.forEach( function (theme) {
    //     if (!theme.disabled) {
    //         title = theme.title
    //     }
    // } )
    // console.log(title)
    // if (title == "vue") {
    //     themebox.checked = false
    // } else {
    //     themebox.checked = true
    // }
    // console.log(themebox.checked)
    themebox.onclick = function () {
        if (themebox.checked == true) {
          title = "dark"
        } else {
          title = "vue"
        }
        console.log(title)
        themes.forEach( function (theme) {
          theme.disabled = theme.title !== title
        });
    };
}
