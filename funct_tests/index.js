let babel = require("@babel/core");
let gen = require("@babel/generator");

console.log(new gen.CodeGenerator(babel.parse("var a = 3; var b = 4, c =5, h; for(var a = 33, v = 4; a < v; v++){}")).generate().code);