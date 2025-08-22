import { Nature } from "qin_soul";
import { QinAsset } from "./qin-assets";
import { QinEdit } from "./qin-edit";
import { QinIcon } from "./qin-icon";

export class QinBoolean extends QinEdit<boolean> {
    private _value = false;
    private _readOnly = false;

    public constructor(options?: QinBooleanSet, isQindred?: string) {
        super((isQindred ? isQindred + "_" : "") + "boolean", new QinIcon(QinAsset.FaceCheckRadio));
        this.styleAsEditable();
        this.addActionMain((_) => this.toggle());
        if (options?.initial) {
            this.setData(options.initial);
        }
        if (options?.readOnly) {
            this.turnReadOnly();
        }
        this.prepareEdit();
    }

    public override castedQine(): QinIcon {
        return this.qinedBase as QinIcon;
    }

    public override getNature(): Nature {
        return Nature.BOOL;
    }

    protected override getData(): boolean {
        return this._value;
    }

    protected override setData(data: boolean) {
        this._value = data;
        this.updateIcon();
    }

    protected override mayChange(): HTMLElement[] {
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

    public override styled(styles: Partial<CSSStyleDeclaration>): QinBoolean {
        super.styled(styles);
        return this;
    }
}

export type QinBooleanSet = {
    initial?: boolean;
    readOnly?: boolean;
};
