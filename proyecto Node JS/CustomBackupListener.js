import BackupListener from "./generated/BackupListener.js";

export class CustomBackupListener extends BackupListener {

    enterAccion(ctx) {

        console.log(`Se detectó una acción: ${ctx.constructor.name}`);
    }

}