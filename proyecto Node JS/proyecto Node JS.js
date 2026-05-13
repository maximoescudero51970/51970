import CalculatorLexer from "./generated/CalculatorLexer.js";
import CalculatorParser from "./generated/CalculatorParser.js";
import { CustomCalculatorListener } from "./CustomCalculatorListener.js";
import { CustomCalculatorVisitor } from "./CustomCalculatorVisitor.js";
import antlr4, { CharStreams, CommonTokenStream, ParseTreeWalker } from "antlr4";
import readline from 'readline';
import fs from 'fs';

async function main() {
    let input;

    // Intento leer la entrada desde el archivo input - en forma sincrona.
    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        // Si no es posible leer el archivo, solicitar la entrada del usuario por teclado
        input = await leerCadena(); // Simula lectura síncrona
        console.log(input);
    }

  let inputStream = CharStreams.fromString(input);

// ---------------- TABLA DE TOKENS ----------------

let lexer = new CalculatorLexer(inputStream);

console.log("\nTABLA DE TOKENS");
console.log("========================");

let token = lexer.nextToken();

while (token.type !== antlr4.Token.EOF) {

    console.log(
    `Token: ${token.text} | Tipo: ${CalculatorLexer.symbolicNames[token.type]}`
);

    token = lexer.nextToken();
}

// -------------------------------------------------
// RECREO EL LEXER PARA EL PARSER
// -------------------------------------------------

inputStream = CharStreams.fromString(input);

lexer = new CalculatorLexer(inputStream);

let tokenStream = new CommonTokenStream(lexer);

let parser = new CalculatorParser(tokenStream);

// OJO:
// tu regla principal ahora es dsl()
// NO prog()

let tree = parser.dsl();
    
    // Verifico si se produjeron errores
    if (parser.syntaxErrorsCount > 0) {
        console.error("\nSe encontraron errores de sintaxis en la entrada.");
    } 
    else {
        console.log("\nEntrada válida.");
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log(`Árbol de derivación: ${cadena_tree}`);

        // Utilizo un listener y un walker para recorrer el arbol e indicar cada vez que reconoce una sentencia (stat)
        //const listener = new CustomCalculatorListener();
        // ParseTreeWalker.DEFAULT.walk(listener, tree);

        // Utilizo un visitor para visitar los nodos que me interesan de mi arbol
        const visitor = new CustomCalculatorVisitor();
        visitor.visit(tree);   
    }
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

// Ejecuta la función principal
main();