var babel = require('babel-core');

exports.compile = function(filePath, fileContents, callback){
  try{
    var errors = null
    var script = babel.transform(fileContents.toString(), {filename: '.babelrc', 'compact': true}).code
  }catch(e){
    var errors = e
    errors.source = "Babel"
    errors.dest = "JavaScript"
    errors.filename = filePath
    errors.stack = fileContents.toString()
    errors.lineno = parseInt(errors.location.first_line ? errors.location.first_line + 1 : -1)
    var script = null
    var error = new TerraformError(errors)
  }finally{
    callback(error, script)
  }
}

