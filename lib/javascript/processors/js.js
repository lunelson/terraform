var babel = require("babel-core")


exports.compile = function(filePath, fileContents, callback) {
    script = babel.transform(fileContents.toString(), {filename: '.babelrc', 'compact': false}).code
    callback(null, script)
}
