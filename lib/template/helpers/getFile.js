var fs      = require("fs")
var path    = require("path")

module.exports = function(filePath){
  if(filePath === null) return null;
  return fs.readFileSync(filePath);
}
