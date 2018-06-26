class View {// eslint-disable-line no-unused-vars
  static BLANK () {
    return ''
  }
  static SPACE () {
    return '&nbsp;'
  }
  static TAB () {
    return '&nbsp;&nbsp;&nbsp;&nbsp;'
  }
  static NEWLINE () {
    return '<br>'
  }
  static clr () {
    document.body.style.fontFamily = 'Courier New'
    document.body.innerHTML = ''
  }
  static out (newText) {
    document.body.innerHTML += newText
  }
  static add (newText) {
    document.body.innerHTML += '<br>' + newText
  }
  static padRight (original, targetSize=17) {
    let result = '' + original
    let size = result.length
    while (size < targetSize){
      result += View.SPACE()
      size += 1
    }
    return result
  }
}