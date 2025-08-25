import { QinBase } from "./qin-base";
import { QinColumn } from "./qin-column";
import { QinPanel, QinPanelSet } from "./qin-panel";

export class QinRows extends QinColumn {
    private _panelList: QinPanel[];

    public constructor(options?: QinRowsSet & QinPanelSet, isQindred?: string) {
        super(options, (isQindred ? isQindred + "_" : "") + "rows");
        if (options?.rows) {
            this._panelList = options.rows;
        } else {
            this._panelList = [];
        }
        if (options?.size) {
            while (this._panelList.length < options.size) {
                this.addRow();
            }
        }
    }

    public putOn(row: number, item: QinBase): QinRows {
        while (row >= this._panelList.length) {
            this.addRow();
        }
        this._panelList[row].put(item);
        return this;
    }

    public addRow() {
        let row = new QinPanel();
        row.install(this);
        this._panelList.push(row);
    }

    public override put(item: QinBase): QinRows {
        item.install(this);
        return this;
    }

    public override styled(styles: Partial<CSSStyleDeclaration>): QinRows {
        super.styled(styles);
        return this;
    }
}

export type QinRowsSet = {
    rows?: QinPanel[];
    size?: number;
};
