import BackupVisitor from './generated/BackupVisitor.js';

export class CustomBackupVisitor extends BackupVisitor {

    constructor() {

        super();
    }

    visitAccion(ctx) {

        const nombre = ctx.nombreaccion().getText();

        console.log(`Ejecutando accion ${nombre}`);

        return this.visitChildren(ctx);
    }

    visitMoverArchivo(ctx) {

        const ruta = ctx.STRING().getText();

        console.log(`Moviendo archivo a ${ruta}`);

        return null;
    }

    visitUsarEscaneoProfundo(ctx) {

        console.log('Ejecutando escaneo profundo');

        return null;
    }

    visitNotificar(ctx) {

        const mensaje = ctx.STRING().getText();

        const codigoJS = `console.log(${mensaje});`;

        console.log("\nCodigo JavaScript generado:");

        console.log(codigoJS);

        eval(codigoJS);

        return null;
    }

    visitRetornar(ctx) {

        const mensaje = ctx.STRING().getText();

        const codigoJS = `const resultado = ${mensaje};`;

        console.log("\nCodigo JavaScript generado:");

        console.log(codigoJS);

        eval(codigoJS);

        return null;
    }
}