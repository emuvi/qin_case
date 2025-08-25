import { Nature, Valued, QinHead, QinFoot } from "qin_soul";
import { QinEdit } from "./qin-edit";
import { QinLine } from "./qin-line";
import { QinString } from "./qin-string";
import { QinTitled } from "./qin-titled";
import { QinLabel } from "./qin-label";
import { QinCombo } from "./qin-combo";

export class QinValued extends QinEdit<Valued> {
    
    private _nameString = new QinString();
    private _nameTitled = new QinTitled({label: new QinLabel(QinHead.tr("Name")), items: [this._nameString]});
    private _typeCombo = new QinCombo({ofEnum: Nature});
    private _typeTitled = new QinTitled({label: new QinLabel(QinHead.tr("Type")), items: [this._typeCombo]});
    private _dataString = new QinString();
    private _dataTitled = new QinTitled({label: new QinLabel(QinHead.tr("Data")), items: [this._dataString]});
    
    public constructor(options?: QinValuedSet, isQindred?: string) {
        super((isQindred ? isQindred + "_" : "") + "valued", new QinLine());
        if (options?.name) {
            this._nameString.value = options?.name;
        }
        if (options?.type) {
            this._typeCombo.value = options?.type;
        }
        if (options?.data) {
            this._dataString.value = JSON.stringify(options?.data);
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
        return [...this._nameString.mayChange(), ...this._typeCombo.mayChange(), ...this._dataString.mayChange()];
    }

    public override turnReadOnly(): void {
        this._nameString.turnReadOnly();
        this._typeCombo.turnReadOnly();
        this._dataString.turnReadOnly();
    }

    public override turnEditable(): void {
        this._nameString.turnEditable();
        this._typeCombo.turnEditable();
        this._dataString.turnEditable();
    }

    public override isEditable(): boolean {
        return this._dataString.isEditable();
    }

    protected override _getData(): Valued {
        const name = this._nameString.value;
        const type = this._typeCombo.value as Nature;
        return {
            name, type,
            data: QinFoot.parseValued(type, this._dataString.value)
        };
    }

    protected override _setData(data: Valued) {
        this._nameString.value = data?.name;
        this._typeCombo.value = data?.type;
        this._dataString.value = JSON.stringify(data?.data);
    }
}

export type QinValuedSet = {
    name?: string;
    type?: Nature;
    data?: any;
};