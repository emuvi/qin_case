import { QinBoolean } from "./qin-boolean";
import { QinCombo } from "./qin-combo";
import { QinDate } from "./qin-date";
import { QinEdit } from "./qin-edit";
import { QinFilePath } from "./qin-file-path";
import { QinFilePick } from "./qin-file-pick";
import { QinFileView } from "./qin-file-view";
import { QinIconPick } from "./qin-icon-pick";
import { QinInteger } from "./qin-integer";
import { QinNumeric } from "./qin-numeric";
import { QinString } from "./qin-string";
import { QinSuggestion } from "./qin-suggestion";
import { Qine } from "./qin-main";

export enum QinMutants {
    BOOLEAN = "BOOLEAN",
    INTEGER = "INTEGER",
    NUMERIC = "NUMERIC",
    STRING = "STRING",
    PASSWORD = "PASSWORD",
    SUGGESTION = "SUGGESTION",
    DATE = "DATE",
    COMBO = "COMBO",
    ICON_PICK = "ICON_PICK",
    FILE_PATH = "FILE_PATH",
    FILE_PICK = "FILE_PICK",
    FILE_VIEW = "FILE_VIEW",
}

function newEdit(kind: QinMutants, options: any): QinEdit<any> {
    switch (kind) {
        case QinMutants.BOOLEAN:
            return new QinBoolean(options);
        case QinMutants.INTEGER:
            return new QinInteger(options);
        case QinMutants.NUMERIC:
            return new QinNumeric(options);
        case QinMutants.STRING:
            return new QinString(options);
        case QinMutants.SUGGESTION:
            return new QinSuggestion(options);
        case QinMutants.DATE:
            return new QinDate(options);
        case QinMutants.COMBO:
            return new QinCombo(options);
        case QinMutants.ICON_PICK:
            return new QinIconPick(options);
        case QinMutants.FILE_PATH:
            return new QinFilePath(options);
        case QinMutants.FILE_PICK:
            return new QinFilePick(options);
        case QinMutants.FILE_VIEW:
            return new QinFileView(options);
        default:
            throw new Error(Qine.qinpel.tr("Unknown kind of mutant to create: ") + kind);
    }
}

export const QinMutantsArm = {
    newEdit,
};
