import { Nature } from "qin_soul";
import { QinAsset } from "./qin-assets";
import { QinEdit } from "./qin-edit";
import { QinIcon } from "./qin-icon";

export class QinBool extends QinEdit<boolean> {
    
    private _value = false;
    private _readOnly = false;

    public constructor(options?: QinBooleanSet, isQindred?: string) {
        super((isQindred ? isQindred + "_" : "") + "boolean", new QinIcon(QinAsset.FaceCheckRadio));
        this.addActionMain((_) => this.toggle());
        if (options?.initial) {
            this._setData(options.initial);
        }
        if (options?.readOnly) {
            this.turnReadOnly();
        }
    }

    public override castedQine(): QinIcon {
        return this.qinedBase as QinIcon;
    }

    public override getNature(): Nature {
        return Nature.BOOL;
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

    protected override _getData(): boolean {
        return this._value;
    }

    protected override _setData(data: boolean) {
        this._value = data;
        this.updateIcon();
    }

    private updateIcon() {
        if (this._value) {
            this.castedQine().asset = QinAsset.FaceCheckedRadio;
        } else {
            this.castedQine().asset = QinAsset.FaceCheckRadio;
        }
    }

    public toggle() {
        this.value = !this.value;
    }

    public override styled(styles: Partial<CSSStyleDeclaration>): QinBool {
        super.styled(styles);
        return this;
    }
}

export type QinBooleanSet = {
    initial?: boolean;
    readOnly?: boolean;
};
