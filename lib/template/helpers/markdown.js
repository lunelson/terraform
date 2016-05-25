var mm = require('marky-mark');

var highlight = require('highlight.js');
function applySyntaxHighlighting (code, lang) {
  if (lang !== undefined && typeof lang === "string" && highlight.getLanguage(lang) !== undefined)
    return highlight.highlight(lang, code).value
  var result = highlight.highlightAuto(code);
  console.log("Code block language was not specified in markdown. Auto detected language: " + result.language)
  return result.value
}

markedOptions = {
  context: {},
  marked: {
    langPrefix: 'language-',
    headerPrefix: '' ,
    highlight: applySyntaxHighlighting
  }
}

function parseMD(pathArg, matchArg, options) {
  var result;
  if (Array.isArray(pathArg)) {
    // parseFilesSync
  } else {
    var stats = fs.statSync(directory);
    if (stats.isFile()) {
      // parseFileSync
    } else if (stats.isDirectory()) {
     // parseDirectorySync || parseMatchesSync, if there is second arg
    }
  }
  return result;
}

parseDirectorySync
parseMatchesSync
parseFileSync
parseFilesSync
