var mm = require('marky-mark');
var marked = mm.marked;
var highlight = require('highlight.js');
// var frontMatter = require("yaml-front-matter");
// var _ = require('lodash');

marked.setOptions({
  langPrefix: 'language-',
  headerPrefix: '' ,
  highlight: applySyntaxHighlighting
})

// This overrides Marked’s default headings with IDs,
// since this changed after v0.2.9
// https://github.com/sintaxi/harp/issues/328
// var renderer = new marked.Renderer()
// renderer.heading = function(text, level){ return '<h' + level + '>' +  text + '</h' + level + '>'}

var TerraformError = require("../../error").TerraformError

module.exports = function(fileContents, options){

  return {
    compile: function(){
      return function (locals){
        var markyContent = mm.parse(fileContents.toString().replace(/^\uFEFF/, ''))
        // var markyContent = mm.parse(fileContents.toString().replace(/^\uFEFF/, ''), {marked: {renderer: renderer}})
        return markyContent.content;

        // return marked(fileContents.toString().replace(/^\uFEFF/, ''), {
        //   renderer: renderer
        // })
      }
    },

    parseError: function(error){
      error.stack = fileContents.toString()
      return new TerraformError(error)
    }
  }
}

function applySyntaxHighlighting (code, lang) {
  if (lang !== undefined && typeof lang === "string" && highlight.getLanguage(lang) !== undefined)
    return highlight.highlight(lang, code).value

  var result = highlight.highlightAuto(code);
  console.log("Code block language was not specified in markdown. Auto detected language: " + result.language)
  return result.value
}
