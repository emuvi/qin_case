import { QinBase } from "./qin-base";
import { QinColumn } from "./qin-column";
import { QinLabel } from "./qin-label";
import { QinLine } from "./qin-line";

export class QinTitled extends QinColumn {
    private _qinTitle: QinLabel;
    private _qinHead = new QinLine();
    private _qinBody = new QinLine();

    public constructor(options?: QinTitledSet, isQindred?: string) {
        super(null, (isQindred ? isQindred + "_" : "") + "titled");
        if (options?.label) {
            this._qinTitle = options.label;
        } else {
            this._qinTitle = new QinLabel();
        }
        this._qinTitle.install(this._qinHead);
        if (options?.items) {
            options.items.forEach((item) => item.install(this._qinBody));
        }
        this._qinHead.install(this);
        this._qinBody.install(this);
    }

    public get title(): string {
        return this._qinTitle.title;
    }

    public set title(title: string) {
        this._qinTitle.title = title;
    }

    public override put(item: QinBase): QinTitled {
        item.install(this._qinBody);
        return this;
    }

    public override addChild(child: QinBase): QinTitled {
        if (child === this._qinBody || child === this._qinHead) {
            super.addChild(child);
        } else {
            this._qinBody.addChild(child);
        }
        return this;
    }

    public override delChild(child: QinBase): QinTitled  {
        if (child === this._qinBody || child === this._qinHead) {
            super.delChild(child);
        } else {
            this._qinBody.delChild(child);
        }
        return this;
    }

    public override styled(styles: Partial<CSSStyleDeclaration>): QinTitled {
        super.styled(styles);
        return this;
    }
}

export type QinTitledSet = {
    label?: QinLabel;
    items?: QinBase[];
};
