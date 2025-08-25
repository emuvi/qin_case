import { Nature, Valued, QinHead, QinFoot } from "qin_soul";
import { QinEdit } from "./qin-edit";
import { QinLine } from "./qin-line";
import { QinChars } from "./qin-chars";
import { QinTitled } from "./qin-titled";
import { QinLabel } from "./qin-label";
import { QinCombo } from "./qin-combo";

export class QinValued extends QinEdit<Valued> {
    
    private _nameChars = new QinChars();
    private _nameTitled = new QinTitled({label: new QinLabel(QinHead.tr("Name")), items: [this._nameChars]});
    private _typeCombo = new QinCombo({ofEnum: Nature});
    private _typeTitled = new QinTitled({label: new QinLabel(QinHead.tr("Type")), items: [this._typeCombo]});
    private _dataChars = new QinChars();
    private _dataTitled = new QinTitled({label: new QinLabel(QinHead.tr("Data")), items: [this._dataChars]});
    
    public constructor(options?: QinValuedSet, isQindred?: string) {
        super((isQindred ? isQindred + "_" : "") + "valued", new QinLine());
        if (options?.name) {
            this._nameChars.value = options?.name;
        }
        if (options?.type) {
            this._typeCombo.value = options?.type;
        }
        if (options?.data) {
            this._dataChars.value = JSON.stringify(options?.data);
        }
        this._nameTitled.install(this);
        this._typeTitled.install(this);
        this._dataTitled.install(this);
    }
    
    public override castedQine(): HTMLInputElement {
        return this.qinedHTML as HTMLInputElement;
    }

    public override getNature(): Nature {
        return this._typeCombo.value as Nature;
    }

    public override mayChange(): HTMLElement[] {
        return [...this._nameChars.mayChange(), ...this._typeCombo.mayChange(), ...this._dataChars.mayChange()];
    }

    public override turnReadOnly(): void {
        this._nameChars.turnReadOnly();
        this._typeCombo.turnReadOnly();
        this._dataChars.turnReadOnly();
    }

    public override turnEditable(): void {
        this._nameChars.turnEditable();
        this._typeCombo.turnEditable();
        this._dataChars.turnEditable();
    }

    public override isEditable(): boolean {
        return this._dataChars.isEditable();
    }

    protected override _getData(): Valued {
        const name = this._nameChars.value;
        const type = this._typeCombo.value as Nature;
        return {
            name, type,
            data: QinFoot.parseValued(type, this._dataChars.value)
        };
    }

    protected override _setData(data: Valued) {
        this._nameChars.value = data?.name;
        this._typeCombo.value = data?.type;
        this._dataChars.value = JSON.stringify(data?.data);
    }
}

export type QinValuedSet = {
    name?: string;
    type?: Nature;
    data?: any;
};