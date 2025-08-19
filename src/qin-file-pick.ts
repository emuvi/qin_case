import { FilesDescriptor, FilesNature, FilesOperation, Nature } from "qin_soul";
import { QinAsset } from "./qin-assets";
import { QinButton } from "./qin-button";
import { QinColumn } from "./qin-column";
import { QinCombo } from "./qin-combo";
import { QinEdit } from "./qin-edit";
import { QinFileView } from "./qin-file-view";
import { QinIcon } from "./qin-icon";
import { QinLine } from "./qin-line";
import { QinPanel } from "./qin-panel";
import { QinString } from "./qin-string";

export class QinFilePick extends QinEdit<string[]> {
    private _qinUpper = new QinLine();
    private _qinConfirm = new QinButton({icon: new QinIcon(QinAsset.FaceConfirm)});
    private _qinFolder = new QinString();
    private _qinExtensions = new QinCombo();
    private _qinSearch = new QinButton({icon: new QinIcon(QinAsset.FaceSearch)});
    private _qinUnder = new QinPanel();
    private _qinView = new QinFileView();

    private _nature: FilesNature;
    private _operation: FilesOperation;
    private _descriptors: FilesDescriptor[];
    private _singleSelection: boolean;
    private _readOnly = false;

    private _onChosen: QinFilePickChosen[] = [];

    public constructor(options?: QinFilePickSet, isQindred?: string) {
        super((isQindred ? isQindred + "_" : "") + "file-pick", new QinColumn());
        this._nature = options?.nature ? options.nature : FilesNature.BOTH;
        this._operation = options?.operation ? options.operation : FilesOperation.OPEN;
        this._descriptors = options?.descriptors ? options.descriptors : [];
        this._singleSelection = options?.singleSelection ?? false;
        this.initMain();
        this.initUpper();
        this.initUnder();
        if (options?.readOnly) {
            this.turnReadOnly();
        }
        this.prepareEdit();
    }

    private initMain() {
        this._qinUpper.install(this.qinedBase);
        this._qinUnder.install(this.qinedBase);
    }

    private initUpper() {
        this._qinUpper.styleAsFlexMin();
        this._qinConfirm.install(this._qinUpper);
        this._qinConfirm.addActionMain((_) => {
            let data = this.getData();
            for (const chosen of this._onChosen) {
                chosen(data);
            }
        });
        this._qinFolder.install(this._qinUpper);
        this._qinFolder.styleAsMinWidth(100);
        this._qinFolder.styleAsFlexMax();
        this._qinFolder.addActionMain((_) => {
            if (this.isEditable()) {
                this.loadFolder();
            }
        });
        this._qinExtensions.install(this._qinUpper);
        this._qinExtensions.styleAsMinWidth(100);
        this.initExtensions();
        this._qinSearch.install(this._qinUpper);
        this._qinSearch.addAction((_) => {
            if (this.isEditable()) {
                this.loadFolder();
            }
        });
    }

    private initUnder() {
        this._qinUnder.styleAsScroll();
        this._qinUnder.styleAsFlexMax();
        this._qinView.install(this._qinUnder);
        this._qinView.nature = this._nature;
        this._qinView.singleSelection = this._singleSelection;
    }

    private initExtensions() {
        if (this._descriptors.length == 0) {
            this._qinExtensions.addItem({
                title: this.qinpel.tr("All files") + " (*.*)",
                value: "*",
                selected: true,
            });
            this._qinView.extensions = [];
        } else {
            for (let index = 0; index < this._descriptors.length; index++) {
                const descriptor = this._descriptors[index];
                this._qinExtensions.addItem({
                    title: descriptor.description,
                    value: descriptor.extensions.join(";"),
                    selected: index == 0,
                });
            }
            this._qinView.extensions = this._descriptors[0].extensions;
        }
    }

    public override castedQine(): QinColumn {
        return this.qinedBase as QinColumn;
    }

    public override getNature(): Nature {
        return Nature.CHARS;
    }

    protected override getData(): string[] {
        return this._qinView.value;
    }

    protected override setData(data: string[]) {
        this._qinView.value = data;
    }

    protected override mayChange(): HTMLElement[] {
        return [...this._qinView.getChangeable()];
    }

    public override turnReadOnly(): void {
        this._readOnly = true;
        this._qinFolder.turnReadOnly();
        this._qinExtensions.turnReadOnly();
        this._qinView.turnReadOnly();
    }

    public override turnEditable(): void {
        this._readOnly = false;
        this._qinFolder.turnEditable();
        this._qinExtensions.turnEditable();
        this._qinView.turnEditable();
    }

    public override isEditable(): boolean {
        return !this._readOnly;
    }

    public get qinUpper(): QinLine {
        return this._qinUpper;
    }

    public get qinConfirm(): QinButton {
        return this._qinConfirm;
    }

    public get qinFolder(): QinString {
        return this._qinFolder;
    }

    public get qinExtensions(): QinCombo {
        return this._qinExtensions;
    }

    public get qinSearch(): QinButton {
        return this._qinSearch;
    }

    public get qinUnder(): QinPanel {
        return this._qinUnder;
    }

    public get qinExplorer(): QinFileView {
        return this._qinView;
    }

    public get nature(): FilesNature {
        return this._nature;
    }

    public set nature(value: FilesNature) {
        this._nature = value;
        this._qinView.nature = value;
    }

    public get operation(): FilesOperation {
        return this._operation;
    }

    public set operation(value: FilesOperation) {
        this._operation = value;
    }

    public get descriptors(): FilesDescriptor[] {
        return this._descriptors;
    }

    public set descriptors(value: FilesDescriptor[]) {
        this._descriptors = value;
    }

    public get singleSelection(): boolean {
        return this._singleSelection;
    }

    public set singleSelection(value: boolean) {
        this._singleSelection = value;
        this._qinView.singleSelection = value;
    }

    public addOnChosen(onChosen: QinFilePickChosen): QinFilePick {
        this._onChosen.push(onChosen);
        return this;
    }

    public override styled(styles: Partial<CSSStyleDeclaration>): QinFilePick {
        super.styled(styles);
        return this;
    }

    private loadFolder() {
        this._qinView.load(this._qinFolder.value, (loaded) => {
            this._qinFolder.value = loaded;
        });
    }
}

export type QinFilePickSet = {
    nature?: FilesNature;
    operation?: FilesOperation;
    descriptors?: FilesDescriptor[];
    singleSelection?: boolean;
    readOnly?: boolean;
};

export type QinFilePickChosen = (chosenPaths: string[]) => void;
