import { Nature, QinSkin } from "qin_soul";
import { QinEdit } from "./qin-edit";

export class QinNumeric extends QinEdit<number> {
    public constructor(options?: QinNumericSet, isQindred?: string) {
        super((isQindred ? isQindred + "_" : "") + "numeric", document.createElement("input"));
        this.castedQine().type = "number";
        this.castedQine().style.width = "90px";
        this.castedQine().addEventListener("focusout", () => {
            this._setData(this._getData());
        });
        if (options?.initial) {
            this._setData(options.initial);
        }
        if (options?.readOnly) {
            this.turnReadOnly();
        }
    }

    public override castedQine(): HTMLInputElement {
        return this.qinedHTML as HTMLInputElement;
    }

    public override getNature(): Nature {
        return Nature.NUMERIC;
    }

    public override mayChange(): HTMLElement[] {
        return [this.qinedHTML];
    }

    public override turnReadOnly(): void {
        this.castedQine().readOnly = true;
        QinSkin.styleAsReadOnly(this.qinedHTML);
    }

    public override turnEditable(): void {
        this.castedQine().readOnly = false;
        QinSkin.styleAsEditable(this.qinedHTML);
    }

    public override isEditable(): boolean {
        return !this.castedQine().readOnly;
    }

    protected override _getData(): number {
        const value = this.castedQine().value;
        if (value == null || value == undefined || value.length == 0) {
            return null;
        } else {
            return parseFloat(value);
        }
    }

    protected override _setData(data: number) {
        if (data == null || data == undefined) {
            this.castedQine().value = "";
        } else {
            this.castedQine().value = data.toString();
        }
    }

    public override styled(styles: Partial<CSSStyleDeclaration>): QinNumeric {
        super.styled(styles);
        return this;
    }
}

export type QinNumericSet = {
    initial?: number;
    readOnly?: boolean;
};
