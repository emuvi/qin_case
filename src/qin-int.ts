import { Nature, QinSkin } from "qin_soul";
import { QinEdit } from "./qin-edit";

export class QinInt extends QinEdit<number> {
    public constructor(options?: QinIntegerSet, isQindred?: string) {
        super((isQindred ? isQindred + "_" : "") + "integer", document.createElement("input"));
        this.castedQine().type = "number";
        QinSkin.styleAsEditable(this.qinedHTML);
        this.qinedHTML.style.width = "90px";
        this.qinedHTML.addEventListener("focusout", () => {
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
        return Nature.INT;
    }

    public override mayChange(): HTMLElement[] {
        return [this.castedQine()];
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
            return parseInt(value, 10);
        }
    }

    protected override _setData(data: number) {
        if (data == null || data == undefined) {
            this.castedQine().value = "";
        } else {
            this.castedQine().value = data.toString();
        }
    }

    public override styled(styles: Partial<CSSStyleDeclaration>): QinInt {
        super.styled(styles);
        return this;
    }
}

export type QinIntegerSet = {
    initial?: number;
    readOnly?: boolean;
};
