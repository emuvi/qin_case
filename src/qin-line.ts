import { QinBase } from "./qin-base";
import { QinPanel, QinPanelSet } from "./qin-panel";

export class QinLine extends QinPanel {
    public constructor(options?: QinPanelSet, isQindred?: string) {
        super(options, (isQindred ? isQindred + "_" : "") + "line");
        this.styleAsFlexDirectionRow();
        this.styleAsFlexWrap();
        this.styleAsAlignItemsFlexEnd();
        this.styleAsJustifyContentFlexStart();
        this.qinedHTML.style.minWidth = "min-content";
        this.qinedHTML.style.minHeight = "min-content";
    }

    public override styled(styles: Partial<CSSStyleDeclaration>): QinLine {
        super.styled(styles);
        return this;
    }

    public override put<T extends QinBase>(item: T): QinLine {
        item.install(this);
        return this;
    }
}
