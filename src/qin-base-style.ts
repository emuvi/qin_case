import { BorderStyle, QinActionableStyles, QinDimension, QinGrandeur, QinSkin, QinStyles } from "qin_soul";
import { QinAsset, qinAssetUrl } from "./qin-assets";
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

    public styleAsBorder(thick?: number, color: string = QinSkin.styles.ColorForeground, style: BorderStyle = BorderStyle.SOLID) {
        QinSkin.styleAsBorder(this._el, thick, color, style);
    }

    public styleAsBorderTop(thick?: number, color: string = QinSkin.styles.ColorForeground, style: BorderStyle = BorderStyle.SOLID) {
        QinSkin.styleAsBorderTop(this._el, thick, color, style);
    }

    public styleAsBorderBottom(thick?: number, color: string = QinSkin.styles.ColorForeground, style: BorderStyle = BorderStyle.SOLID) {
        QinSkin.styleAsBorderBottom(this._el, thick, color, style);
    }

    public styleAsBorderLeft(thick?: number, color: string = QinSkin.styles.ColorForeground, style: BorderStyle = BorderStyle.SOLID) {
        QinSkin.styleAsBorderLeft(this._el, thick, color, style);
    }

    public styleAsBorderRight(thick?: number, color: string = QinSkin.styles.ColorForeground, style: BorderStyle = BorderStyle.SOLID) {
        QinSkin.styleAsBorderRight(this._el, thick, color, style);
    }

    public styleAsBorderRadius(radius: number) {
        QinSkin.styleAsBorderRadius(this._el, radius);
    }

    public styleAsBorderTopLeftRadius(radius: number) {
        QinSkin.styleAsBorderTopLeftRadius(this._el, radius);
    }

    public styleAsBorderTopRightRadius(radius: number) {
        QinSkin.styleAsBorderTopRightRadius(this._el, radius);
    }

    public styleAsBorderBottomRightRadius(radius: number) {
        QinSkin.styleAsBorderBottomRightRadius(this._el, radius);
    }

    public styleAsBorderBottomLeftRadius(radius: number) {
        QinSkin.styleAsBorderBottomLeftRadius(this._el, radius);
    }

    public styleAsDisplayBlock() {
        QinSkin.styleAsDisplayBlock(this._el);
    }

    public styleAsDisplayInline() {
        QinSkin.styleAsDisplayInline(this._el);
    }

    public styleAsDisplayInlineBlock() {
        QinSkin.styleAsDisplayInlineBlock(this._el);
    }

    public styleAsDisplayFlex() {
        QinSkin.styleAsDisplayFlex(this._el);
    }

    public styleAsDisplayInlineFlex() {
        QinSkin.styleAsDisplayInlineFlex(this._el);
    }

    public styleAsDisplayGrid() {
        QinSkin.styleAsDisplayGrid(this._el);
    }

    public styleAsDisplayInlineGrid() {
        QinSkin.styleAsDisplayInlineGrid(this._el);
    }

    public styleAsDisplayFlowRoot() {
        QinSkin.styleAsDisplayFlowRoot(this._el);
    }

    public styleAsDisplayNone() {
        QinSkin.styleAsDisplayNone(this._el);
    }

    public styleAsDisplayContents() {
        QinSkin.styleAsDisplayContents(this._el);
    }

    public styleAsDisplayTable() {
        QinSkin.styleAsDisplayTable(this._el);
    }

    public styleAsDisplayTableRow() {
        QinSkin.styleAsDisplayTableRow(this._el);
    }

    public styleAsDisplayListItem() {
        QinSkin.styleAsDisplayListItem(this._el);
    }

    public styleAsDisplayInherit() {
        QinSkin.styleAsDisplayInherit(this._el);
    }

    public styleAsDisplayInitial() {
        QinSkin.styleAsDisplayInitial(this._el);
    }

    public styleAsDisplayRevert() {
        QinSkin.styleAsDisplayRevert(this._el);
    }

    public styleAsDisplayRevertLayer() {
        QinSkin.styleAsDisplayRevertLayer(this._el);
    }

    public styleAsDisplayUnset() {
        QinSkin.styleAsDisplayUnset(this._el);
    }

    public styleAsPositionStatic() {
        QinSkin.styleAsPositionStatic(this._el);
    }

    public styleAsPositionAbsolute() {
        QinSkin.styleAsPositionAbsolute(this._el);
    }

    public styleAsPositionFixed() {
        QinSkin.styleAsPositionFixed(this._el);
    }

    public styleAsPositionRelative() {
        QinSkin.styleAsPositionRelative(this._el);
    }

    public styleAsPositionSticky() {
        QinSkin.styleAsPositionSticky(this._el);
    }

    public styleAsPositionInitial() {
        QinSkin.styleAsPositionInitial(this._el);
    }

    public styleAsFlexDirectionRow() {
        QinSkin.styleAsFlexDirectionRow(this._el);
    }

    public styleAsFlexDirectionRowReverse() {
        QinSkin.styleAsFlexDirectionRowReverse(this._el);
    }

    public styleAsFlexDirectionColumn() {
        QinSkin.styleAsFlexDirectionColumn(this._el);
    }

    public styleAsFlexDirectionColumnReverse() {
        QinSkin.styleAsFlexDirectionColumnReverse(this._el);
    }

    public styleAsFlexWrap() {
        QinSkin.styleAsFlexWrap(this._el);
    }

    public styleAsFlexWrapNot() {
        QinSkin.styleAsFlexWrapNot(this._el);
    }

    public styleAsFlexWrapReverse() {
        QinSkin.styleAsFlexWrapReverse(this._el);
    }

    public styleAsFlexMin() {
        QinSkin.styleAsFlexMin(this._el);
    }

    public styleAsFlexMax() {
        QinSkin.styleAsFlexMax(this._el);
    }

    public styleAsAllCentered() {
        QinSkin.styleAsAllCentered(this._el);
    }

    public styleAsJustifyContentFlexStart() {
        QinSkin.styleAsJustifyContentFlexStart(this._el);
    }

    public styleAsJustifyContentFlexEnd() {
        QinSkin.styleAsJustifyContentFlexEnd(this._el);
    }

    public styleAsJustifyContentCenter() {
        QinSkin.styleAsJustifyContentCenter(this._el);
    }

    public styleAsJustifyContentSpaceBetween() {
        QinSkin.styleAsJustifyContentSpaceBetween(this._el);
    }

    public styleAsJustifyContentSpaceAround() {
        QinSkin.styleAsJustifyContentSpaceAround(this._el);
    }

    public styleAsJustifyContentSpaceEvenly() {
        QinSkin.styleAsJustifyContentSpaceEvenly(this._el);
    }

    public styleAsJustifyContentInitial() {
        QinSkin.styleAsJustifyContentInitial(this._el);
    }

    public styleAsJustifyContentInherit() {
        QinSkin.styleAsJustifyContentInherit(this._el);
    }

    public styleAsAlignItemsStretch() {
        QinSkin.styleAsAlignItemsStretch(this._el);
    }

    public styleAsAlignItemsCenter() {
        QinSkin.styleAsAlignItemsCenter(this._el);
    }

    public styleAsAlignItemsFlexStart() {
        QinSkin.styleAsAlignItemsFlexStart(this._el);
    }

    public styleAsAlignItemsFlexEnd() {
        QinSkin.styleAsAlignItemsFlexEnd(this._el);
    }

    public styleAsAlignItemsBaseline() {
        QinSkin.styleAsAlignItemsBaseline(this._el);
    }

    public styleAsAlignItemsInitial() {
        QinSkin.styleAsAlignItemsInitial(this._el);
    }

    public styleAsAlignItemsInherit() {
        QinSkin.styleAsAlignItemsInherit(this._el);
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
        QinSkin.styleAsForeground(this._el, foreground);
    }

    public styleAsBackground(background: string) {
        QinSkin.styleAsBackground(this._el, background);
    }

    public styleAsBackgroundImage(imageURL: string) {
        QinSkin.styleAsBackgroundImage(this._el, imageURL)
    }

    public styleAsBackgroundImageAsset(asset: QinAsset) {
        QinSkin.styleAsBackgroundImage(this._el, qinAssetUrl(asset))
    }

    public styleAsBackgroundImageInitial() {
        QinSkin.styleAsBackgroundImageInitial(this._el)
    }

    public styleAsZIndex(index: number) {
        QinSkin.styleAsZIndex(this._el, index);
    }

    public styleAsWhiteSpaceNormal() {
        QinSkin.styleAsWhiteSpaceNormal(this._el);
    }

    public styleAsWhiteSpaceNoWrap() {
        QinSkin.styleAsWhiteSpaceNoWrap(this._el);
    }

    public styleAsWhiteSpacePre() {
        QinSkin.styleAsWhiteSpacePre(this._el);
    }

    public styleAsWhiteSpacePreLine() {
        QinSkin.styleAsWhiteSpacePreLine(this._el);
    }

    public styleAsWhiteSpacePreWrap() {
        QinSkin.styleAsWhiteSpacePreWrap(this._el);
    }

    public styleAsWhiteSpaceInitial() {
        QinSkin.styleAsWhiteSpaceInitial(this._el);
    }

    public styleAsWhiteSpaceInherit() {
        QinSkin.styleAsWhiteSpaceInherit(this._el);
    }

    public disabledSelection() {
        QinSkin.disableSelection(this._el);
    }

    public clearSelection() {
        QinSkin.clearSelection();
    }
}
