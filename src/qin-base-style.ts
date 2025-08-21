import { QinActionableStyles, QinDimension, QinGrandeur, QinSkin, QinStyles } from "qin_soul";
import { QinAsset } from "./qin-assets";
import { QinBase } from "./qin-base";

export class QinBaseStyle {
    private _el: HTMLElement;

    public constructor(root: HTMLElement | QinBase) {
        if (root instanceof QinBase) {
            this._el = root.qinedHTML;
        } else {
            this._el = root;
        }
    }

    public get rootEl() {
        return this._el;
    }

    public putAsBody() {
        document.body.appendChild(this._el);
        QinSkin.styleAsBody(this._el);
    }

    public delAsBody() {
        document.body.removeChild(this._el);
    }

    public styleAsWhole() {
        QinSkin.styleAsWhole(this._el)
    }

    public styleAsBase() {
        QinSkin.styleAsBase(this._el);
    }

    public styleAsSpaced() {
        QinSkin.styleAsSpaced(this._el);
    }

    public styleAsEditable() {
        QinSkin.styleAsEditable(this._el);
    }

    public styleAsReadOnly() {
        QinSkin.styleAsReadOnly(this._el);
    }

    public styleAsActionable(styles: QinActionableStyles = QinStyles) {
        QinSkin.styleAsActionable(this._el, styles);
    }

    public styleMaxSizeForNotOverFlow() {
        QinSkin.styleMaxSizeForNotOverFlow(this._el);
    }

    public styleAsScroll() {
        QinSkin.styleAsScroll(this._el);
    }

    public styleAsMargin(margin: number) {
        QinSkin.styleAsMargin(this._el, margin);
    }

    public styleAsMarginTop(margin: number) {
        QinSkin.styleAsMarginTop(this._el, margin);
    }

    public styleAsMarginBottom(margin: number) {
        QinSkin.styleAsMarginBottom(this._el, margin);
    }

    public styleAsMarginLeft(margin: number) {
        QinSkin.styleAsMarginLeft(this._el, margin);
    }

    public styleAsMarginRight(margin: number) {
        QinSkin.styleAsMarginRight(this._el, margin);
    }

    public styleAsPadding(padding: number) {
        QinSkin.styleAsPadding(this._el, padding);
    }

    public styleAsPaddingTop(padding: number) {
        QinSkin.styleAsPaddingTop(this._el, padding);
    }

    public styleAsPaddingBottom(padding: number) {
        QinSkin.styleAsPaddingBottom(this._el, padding);
    }

    public styleAsPaddingLeft(padding: number) {
        QinSkin.styleAsPaddingLeft(this._el, padding);
    }

    public styleAsPaddingRight(padding: number) {
        QinSkin.styleAsPaddingRight(this._el, padding);
    }

    public styleAsBorder(thick: number, color: string = QinSkin.styles.ColorForeground, style: string = "solid") {
        if (thick) {
            this._el.style.border = thick + "px " + style + " " + color;
        } else {
            this._el.style.border = "none";
        }
    }

    public styleAsBorderTop(thick: number, color: string = QinSkin.styles.ColorForeground, style: string = "solid") {
        if (thick) {
            this._el.style.borderTop = thick + "px " + style + " " + color;
        } else {
            this._el.style.borderTop = "none";
        }
    }

    public styleAsBorderBottom(thick: number, color: string = QinSkin.styles.ColorForeground, style: string = "solid") {
        if (thick) {
            this._el.style.borderBottom = thick + "px " + style + " " + color;
        } else {
            this._el.style.borderBottom = "none";
        }
    }

    public styleAsBorderLeft(thick: number, color: string = QinSkin.styles.ColorForeground, style: string = "solid") {
        if (thick) {
            this._el.style.borderLeft = thick + "px " + style + " " + color;
        } else {
            this._el.style.borderLeft = "none";
        }
    }

    public styleAsBorderRight( thick: number, color: string = QinSkin.styles.ColorForeground, style: string = "solid") {
        if (thick) {
            this._el.style.borderRight = thick + "px " + style + " " + color;
        } else {
            this._el.style.borderRight = "none";
        }
    }

    public styleAsBorderRadius(radius: number) {
        this._el.style.borderRadius = radius + "px";
    }

    public styleAsBorderTopLeftRadius(radius: number) {
        this._el.style.borderTopLeftRadius = radius + "px";
    }

    public styleAsBorderTopRightRadius(radius: number) {
        this._el.style.borderTopRightRadius = radius + "px";
    }

    public styleAsBorderBottomRightRadius(radius: number) {
        this._el.style.borderBottomRightRadius = radius + "px";
    }

    public styleAsBorderBottomLeftRadius(radius: number) {
        this._el.style.borderBottomLeftRadius = radius + "px";
    }

    public styleAsDisplayFlex() {
        this._el.style.display = "flex";
    }

    public styleAsDisplayInline() {
        this._el.style.display = "inline";
    }

    public styleAsDisplayInlineBlock() {
        this._el.style.display = "inline-block";
    }

    public styleAsPositionStatic() {
        this._el.style.position = "static";
    }

    public styleAsPositionAbsolute() {
        this._el.style.position = "absolute";
    }

    public styleAsPositionFixed() {
        this._el.style.position = "fixed";
    }

    public styleAsPositionRelative() {
        this._el.style.position = "relative";
    }

    public styleAsPositionSticky() {
        this._el.style.position = "sticky";
    }

    public styleAsPositionInitial() {
        this._el.style.position = "initial";
    }

    public styleAsFlexDirectionRow() {
        this._el.style.flexDirection = "row";
    }

    public styleAsFlexDirectionRowReverse() {
        this._el.style.flexDirection = "row-reverse";
    }

    public styleAsFlexDirectionColumn() {
        this._el.style.flexDirection = "column";
    }

    public styleAsFlexDirectionColumnReverse() {
        this._el.style.flexDirection = "column-reverse";
    }

    public styleAsFlexWrap() {
        this._el.style.flexWrap = "wrap";
    }

    public styleAsFlexWrapNot() {
        this._el.style.flexWrap = "nowrap";
    }

    public styleAsFlexWrapReverse() {
        this._el.style.flexWrap = "wrap-reverse";
    }

    public styleAsFlexMin() {
        this._el.style.flex = "none";
    }

    public styleAsFlexMax() {
        this._el.style.flex = "auto";
    }

    public styleAsAllCentered() {
        this._el.style.textAlign = "center";
        this._el.style.alignItems = "center";
        this._el.style.alignContent = "center";
        this._el.style.verticalAlign = "middle";
    }

    public styleAsJustifyContentFlexStart() {
        this._el.style.justifyContent = "flex-start";
    }

    public styleAsJustifyContentFlexEnd() {
        this._el.style.justifyContent = "flex-end";
    }

    public styleAsJustifyContentCenter() {
        this._el.style.justifyContent = "center";
    }

    public styleAsJustifyContentSpaceBetween() {
        this._el.style.justifyContent = "space-between";
    }

    public styleAsJustifyContentSpaceAround() {
        this._el.style.justifyContent = "space-around";
    }

    public styleAsJustifyContentSpaceEvenly() {
        this._el.style.justifyContent = "space-evenly";
    }

    public styleAsJustifyContentInitial() {
        this._el.style.justifyContent = "initial";
    }

    public styleAsJustifyContentInherit() {
        this._el.style.justifyContent = "inherit";
    }

    public styleAsAlignItemsStretch() {
        this._el.style.alignItems = "stretch";
    }

    public styleAsAlignItemsCenter() {
        this._el.style.alignItems = "center";
    }

    public styleAsAlignItemsFlexStart() {
        this._el.style.alignItems = "flex-start";
    }

    public styleAsAlignItemsFlexEnd() {
        this._el.style.alignItems = "flex-end";
    }

    public styleAsAlignItemsBaseline() {
        this._el.style.alignItems = "baseline";
    }

    public styleAsAlignItemsInitial() {
        this._el.style.alignItems = "initial";
    }

    public styleAsAlignItemsInherit() {
        this._el.style.alignItems = "inherit";
    }

    public styleAsBounds(top: number, right: number, bottom: number, left: number) {
        QinSkin.styleAsBounds(this._el, top, right, bottom, left);
    }

    public styleAsWidth(width: number | QinGrandeur) {
        QinSkin.styleAsWidth(this._el, width);
    }

    public styleAsHeight(height: number | QinGrandeur) {
        QinSkin.styleAsHeight(this._el, height);
    }

    public styleAsSize(size: QinDimension | QinGrandeur) {
        QinSkin.styleAsSize(this._el, size);
    }

    public styleAsMinWidth(width: number | QinGrandeur) {
        QinSkin.styleAsMinWidth(this._el, width);
    }

    public styleAsMinHeight(height: number | QinGrandeur) {
        QinSkin.styleAsMinHeight(this._el, height);
    }

    public styleAsMinSize(size: QinDimension | QinGrandeur) {
        QinSkin.styleAsMinSize(this._el, size);
    }

    public styleAsMaxWidth(width: number | QinGrandeur) {
        QinSkin.styleAsMaxWidth(this._el, width);
    }

    public styleAsMaxHeight(height: number | QinGrandeur) {
        QinSkin.styleAsMaxHeight(this._el, height);
    }

    public styleAsMaxSize(size: QinDimension | QinGrandeur) {
        QinSkin.styleAsMaxSize(this._el, size);
    }

    public styleAsForeground(foreground: string) {
        this._el.style.color = foreground;
    }

    public styleAsBackground(background: string) {
        this._el.style.background = background;
    }

    public styleAsBackAsset(asset: QinAsset) {
        this._el.style.backgroundImage = "url('/pub/qin-desk/assets/" + asset + "')";
    }

    public styleAsBackInitial() {
        this._el.style.backgroundImage = "initial";
    }

    public styleAsZIndex(index: number) {
        if (index == null || index == undefined) {
            this._el.style.zIndex = "initial";
        } else {
            this._el.style.zIndex = index.toString();
        }
    }

    public styleAsWhiteSpaceNormal() {
        this._el.style.whiteSpace = "normal";
    }

    public styleAsWhiteSpaceNoWrap() {
        this._el.style.whiteSpace = "nowrap";
    }

    public styleAsWhiteSpacePre() {
        this._el.style.whiteSpace = "pre";
    }

    public styleAsWhiteSpacePreLine() {
        this._el.style.whiteSpace = "pre-line";
    }

    public styleAsWhiteSpacePreWrap() {
        this._el.style.whiteSpace = "pre-wrap";
    }

    public styleAsWhiteSpaceInitial() {
        this._el.style.whiteSpace = "initial";
    }

    public styleAsWhiteSpaceInherit() {
        this._el.style.whiteSpace = "inherit";
    }

    public disabledSelection() {
        QinSkin.disableSelection(this._el);
    }
}
