// var highlight = require('highlight.js');
// var prism = require('prismjs');

var marked = require("marked");
var renderer = new marked.Renderer();

// This overrides Marked’s default headings with IDs,
// since this changed after v0.2.9
// https://github.com/sintaxi/harp/issues/328
renderer.heading = function(text, level) { return '<h' + level + '>' +  text + '</h' + level + '>'}

marked.setOptions({
  renderer: renderer,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
  langPrefix: 'language-'
})

var TerraformError = require("../../error").TerraformError

module.exports = function(fileContents, options){

  return {
    compile: function(){
      return function (locals){
        return marked(fileContents.toString().replace(/^\uFEFF/, ''), {
          renderer: renderer
        })
      }
    },

    parseError: function(error){
      error.stack = fileContents.toString()
      return new TerraformError(error)
    }
  }
}
