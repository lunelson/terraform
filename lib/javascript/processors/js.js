var babel = require("babel-core");

exports.compile = function(filePath, fileContents, callback){
  callback(null, babel.transform(fileContents.toString(), {filename: '.babelrc', 'compact': true}).code)
}
