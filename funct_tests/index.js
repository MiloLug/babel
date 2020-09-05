const parser = require("@babel/parser");
const gen = require("@babel/generator");

console.log(
  new gen.CodeGenerator(
    parser.parse(
	  `
	  code_native 'int main(){'; 
	  	var a = 3; var b = 4, c =5, h; 
	  	for(var a = 33, v = 4; a < v; v++){}
	  code_native 'return 0; }';
	  `
    )
  ).generate().code
// JSON.stringify(parser.parse(
// 	`var a = 3; var b = 4, c =5, h; for(var a = 33, v = 4; a < v; v++){}; 
// 	code_native \"int lol = 33; int kek = 34;\" + \"ffff\";`
//   ))
);

// console.log(JSON.stringify(babel.parse(
// 	"var a = 3; var b = 4, c =5, h; for(var a = 33, v = 4; a < v; v++){}"
// )));