import BackupLexer from "./generated/BackupLexer.js";
import BackupParser from "./generated/BackupParser.js";
import { CustomBackupListener } from "./CustomBackupListener.js";
import { CustomBackupVisitor } from "./CustomBackupVisitor.js";
import antlr4, { CharStreams, CommonTokenStream, ParseTreeWalker } from "antlr4";
import readline from "readline";
import fs from "fs";

async function main() {

    let input;

    // Intento leer la entrada desde el archivo input
    try {

        input = fs.readFileSync("input.txt", "utf8");

    } catch (err) {

        // Si no encuentra el archivo, pide entrada por teclado
        input = await leerCadena();

        console.log(input);
    }

    let inputStream = CharStreams.fromString(input);

    // ---------------- TABLA DE TOKENS ----------------

    let lexer = new BackupLexer(inputStream);

    console.log("\nTABLA DE TOKENS");

    console.log("========================");

    let token = lexer.nextToken();

    while (token.type !== antlr4.Token.EOF) {

        console.log(
            `Token: ${token.text} | Tipo: ${BackupLexer.symbolicNames[token.type]}`
        );

        token = lexer.nextToken();
    }

    // -------------------------------------------------
    // RECREO EL LEXER PARA EL PARSER
    // -------------------------------------------------

    inputStream = CharStreams.fromString(input);

    lexer = new BackupLexer(inputStream);

    let tokenStream = new CommonTokenStream(lexer);

    let parser = new BackupParser(tokenStream);

    // ---------------- MANEJO DE ERRORES ----------------

    parser.removeErrorListeners();

    parser.addErrorListener({

        syntaxError(recognizer, offendingSymbol, line, column, msg, err) {

            console.error(`\nError sintáctico en línea ${line}, columna ${column}`);

            console.error(`Detalle: ${msg}`);

            console.error(`Token inválido: ${offendingSymbol.text}`);
        }
    });

    // ---------------------------------------------------

    // Regla principal
    let tree = parser.dsl();

    // Verifico si hubo errores sintácticos
    if (parser.syntaxErrorsCount > 0) {

        console.error("\nSe encontraron errores de sintaxis en la entrada.");

    } else {

        console.log("\nEntrada válida.");

        const cadena_tree = tree.toStringTree(parser.ruleNames);

        console.log(`Árbol de derivación: ${cadena_tree}`);

        // Listener opcional
        // const listener = new CustomBackupListener();
        // ParseTreeWalker.DEFAULT.walk(listener, tree);

        // Visitor principal
        const visitor = new CustomBackupVisitor();

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