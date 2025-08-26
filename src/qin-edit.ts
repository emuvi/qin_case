import { Nature, QinWaiter, QinWaiters } from "qin_soul";
import { QinBase } from "./qin-base";

export abstract class QinEdit<T> extends QinBase {
    public constructor(isQindred: string, qined: HTMLElement | QinBase) {
        super((isQindred ? isQindred + "_" : "") + "edit", qined);
        this.styleAsEditable();
        this.qinedHTML.addEventListener("load", () => this.prepareEdit());
    }

    public abstract getNature(): Nature;
    public abstract mayChange(): HTMLElement[];
    public abstract turnReadOnly(): void;
    public abstract turnEditable(): void;
    public abstract isEditable(): boolean;

    protected abstract _getData(): T;
    protected abstract _setData(data: T): void;

    public get value(): T {
        return this._getData();
    }

    public set value(data: T) {
        this._setData(data);
        this._changedWaiters.send(data);
    }

    private _enteredWaiters = new QinWaiters<T>();
    private _changedWaiters = new QinWaiters<T>();
    private _exitedWaiters = new QinWaiters<T>();

    public addOnEntered(waiter: QinWaiter<T>) {
        this._enteredWaiters.put(waiter);
    }

    public addOnChanged(waiter: QinWaiter<T>) {
        this._changedWaiters.put(waiter);
    }

    public addOnExited(waiter: QinWaiter<T>) {
        this._exitedWaiters.put(waiter);
    }

    private prepareEdit() {
        console.log(this.qindred, "prepared");
        for (let element of this.mayChange()) {
            element.addEventListener("focusin", () => {
                this._enteredWaiters.send(this._getData());
            });
            element.addEventListener("change", () => {
                this._changedWaiters.send(this._getData());
            });
            element.addEventListener("focusout", () => {
                this._exitedWaiters.send(this._getData());
            });
        }
    }
}
