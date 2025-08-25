import { Nature } from "qin_soul";
import { QinAsset } from "./qin-assets";
import { QinEdit } from "./qin-edit";
import { QinIcon } from "./qin-icon";
import { QinIconCell } from "./qin-icon-cell";
import { QinLine } from "./qin-line";

export class QinIconPick extends QinEdit<QinAsset> {
    
    private _readOnly = false;

    public constructor(options?: QinIconPickSet, isQindred?: string) {
        super((isQindred ? isQindred + "_" : "") + "icon-pick", new QinLine());
        this.styleAsEditable();
        if (options?.initial) {
            this._setData(options?.initial);
        }
        if (options?.iconList) {
            for (const icon of options.iconList) {
                this.addIcon(icon);
            }
        }
        if (options?.iconCellList) {
            for (const cell of options.iconCellList) {
                this.addCell(cell);
            }
        }
        if (options?.readOnly) {
            this.turnReadOnly();
        }
    }

    public override castedQine(): QinLine {
        return this.qinedBase as QinLine;
    }

    public override getNature(): Nature {
        return Nature.CHARS;
    }

    public override mayChange(): HTMLElement[] {
        return [];
    }

    public override turnReadOnly(): void {
        this._readOnly = true;
        this.styleAsReadOnly();
    }

    public override turnEditable(): void {
        this._readOnly = false;
        this.styleAsEditable();
    }

    public override isEditable(): boolean {
        return !this._readOnly;
    }

    protected override _getData(): QinAsset {
        for (let child of this.children()) {
            if (child instanceof QinIconCell) {
                if (child.selected) {
                    return child.icon.asset;
                }
            }
        }
        return null;
    }

    protected override _setData(asset: QinAsset) {
        let found = false;
        for (let child of this.qinedBase.children()) {
            if (child instanceof QinIconCell) {
                if (child.icon.asset == asset) {
                    found = true;
                    child.selected = true;
                } else {
                    child.selected = false;
                }
            }
        }
    }

    public addIcon(icon: QinIcon) {
        this.addCell(new QinIconCell(icon));
    }

    public addCell(cell: QinIconCell) {
        cell.addActionMain((_) => {
            if (this.isEditable()) {
                this._setData(cell.icon.asset);
            }
        });
        cell.install(this.qinedBase);
    }

    public override styled(styles: Partial<CSSStyleDeclaration>): QinIconPick {
        super.styled(styles);
        return this;
    }
}

export type QinIconPickSet = {
    initial?: QinAsset;
    iconList?: QinIcon[];
    iconCellList?: QinIconCell[];
    readOnly?: boolean;
};
