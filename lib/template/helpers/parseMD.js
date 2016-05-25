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
