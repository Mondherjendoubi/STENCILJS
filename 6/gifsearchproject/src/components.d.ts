/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AccordionComponent {
        "backgroundColor": string;
        "hoverBackgroundColor": string;
        "itemHead": string;
    }
    interface BackgroundVideo {
        "image": string;
    }
    interface BodyItem {
    }
    interface BodyTable {
        "numberColumn": number;
    }
    interface BtnExp {
        "colorButton": string;
        "content": string;
        "fontColor": string;
    }
    interface CardComp {
        "cardBackButtonColor": string;
        "cardBackButtonColorFont": string;
        "cardBackColor": string;
        "cardFrontColor": string;
        "price": string;
        "spanColorInput": string;
        "title": string;
        "url": string;
    }
    interface DropDown {
        "backgroundColor": string;
    }
    interface DropLink {
        "backgroundColor": string;
    }
    interface FtBox {
        "cardColor": string;
        "title": string;
    }
    interface GifComp {
        "url": string;
    }
    interface GridComp {
        "columnType": string;
    }
    interface HeadItem {
    }
    interface HeadTable {
        "numberColumn": number;
    }
    interface NavComp {
        "url": string;
    }
    interface SrComp {
        "navSelected": string;
        "searchSymbol": string;
    }
    interface StoryComp {
        "captionStory": string;
        "colorStory": string;
        "fontColor": string;
        "titleStory": string;
        "url": string;
    }
    interface TableComp {
    }
}
export interface NavCompCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLNavCompElement;
}
declare global {
    interface HTMLAccordionComponentElement extends Components.AccordionComponent, HTMLStencilElement {
    }
    var HTMLAccordionComponentElement: {
        prototype: HTMLAccordionComponentElement;
        new (): HTMLAccordionComponentElement;
    };
    interface HTMLBackgroundVideoElement extends Components.BackgroundVideo, HTMLStencilElement {
    }
    var HTMLBackgroundVideoElement: {
        prototype: HTMLBackgroundVideoElement;
        new (): HTMLBackgroundVideoElement;
    };
    interface HTMLBodyItemElement extends Components.BodyItem, HTMLStencilElement {
    }
    var HTMLBodyItemElement: {
        prototype: HTMLBodyItemElement;
        new (): HTMLBodyItemElement;
    };
    interface HTMLBodyTableElement extends Components.BodyTable, HTMLStencilElement {
    }
    var HTMLBodyTableElement: {
        prototype: HTMLBodyTableElement;
        new (): HTMLBodyTableElement;
    };
    interface HTMLBtnExpElement extends Components.BtnExp, HTMLStencilElement {
    }
    var HTMLBtnExpElement: {
        prototype: HTMLBtnExpElement;
        new (): HTMLBtnExpElement;
    };
    interface HTMLCardCompElement extends Components.CardComp, HTMLStencilElement {
    }
    var HTMLCardCompElement: {
        prototype: HTMLCardCompElement;
        new (): HTMLCardCompElement;
    };
    interface HTMLDropDownElement extends Components.DropDown, HTMLStencilElement {
    }
    var HTMLDropDownElement: {
        prototype: HTMLDropDownElement;
        new (): HTMLDropDownElement;
    };
    interface HTMLDropLinkElement extends Components.DropLink, HTMLStencilElement {
    }
    var HTMLDropLinkElement: {
        prototype: HTMLDropLinkElement;
        new (): HTMLDropLinkElement;
    };
    interface HTMLFtBoxElement extends Components.FtBox, HTMLStencilElement {
    }
    var HTMLFtBoxElement: {
        prototype: HTMLFtBoxElement;
        new (): HTMLFtBoxElement;
    };
    interface HTMLGifCompElement extends Components.GifComp, HTMLStencilElement {
    }
    var HTMLGifCompElement: {
        prototype: HTMLGifCompElement;
        new (): HTMLGifCompElement;
    };
    interface HTMLGridCompElement extends Components.GridComp, HTMLStencilElement {
    }
    var HTMLGridCompElement: {
        prototype: HTMLGridCompElement;
        new (): HTMLGridCompElement;
    };
    interface HTMLHeadItemElement extends Components.HeadItem, HTMLStencilElement {
    }
    var HTMLHeadItemElement: {
        prototype: HTMLHeadItemElement;
        new (): HTMLHeadItemElement;
    };
    interface HTMLHeadTableElement extends Components.HeadTable, HTMLStencilElement {
    }
    var HTMLHeadTableElement: {
        prototype: HTMLHeadTableElement;
        new (): HTMLHeadTableElement;
    };
    interface HTMLNavCompElement extends Components.NavComp, HTMLStencilElement {
    }
    var HTMLNavCompElement: {
        prototype: HTMLNavCompElement;
        new (): HTMLNavCompElement;
    };
    interface HTMLSrCompElement extends Components.SrComp, HTMLStencilElement {
    }
    var HTMLSrCompElement: {
        prototype: HTMLSrCompElement;
        new (): HTMLSrCompElement;
    };
    interface HTMLStoryCompElement extends Components.StoryComp, HTMLStencilElement {
    }
    var HTMLStoryCompElement: {
        prototype: HTMLStoryCompElement;
        new (): HTMLStoryCompElement;
    };
    interface HTMLTableCompElement extends Components.TableComp, HTMLStencilElement {
    }
    var HTMLTableCompElement: {
        prototype: HTMLTableCompElement;
        new (): HTMLTableCompElement;
    };
    interface HTMLElementTagNameMap {
        "accordion-component": HTMLAccordionComponentElement;
        "background-video": HTMLBackgroundVideoElement;
        "body-item": HTMLBodyItemElement;
        "body-table": HTMLBodyTableElement;
        "btn-exp": HTMLBtnExpElement;
        "card-comp": HTMLCardCompElement;
        "drop-down": HTMLDropDownElement;
        "drop-link": HTMLDropLinkElement;
        "ft-box": HTMLFtBoxElement;
        "gif-comp": HTMLGifCompElement;
        "grid-comp": HTMLGridCompElement;
        "head-item": HTMLHeadItemElement;
        "head-table": HTMLHeadTableElement;
        "nav-comp": HTMLNavCompElement;
        "sr-comp": HTMLSrCompElement;
        "story-comp": HTMLStoryCompElement;
        "table-comp": HTMLTableCompElement;
    }
}
declare namespace LocalJSX {
    interface AccordionComponent {
        "backgroundColor"?: string;
        "hoverBackgroundColor"?: string;
        "itemHead"?: string;
    }
    interface BackgroundVideo {
        "image"?: string;
    }
    interface BodyItem {
    }
    interface BodyTable {
        "numberColumn"?: number;
    }
    interface BtnExp {
        "colorButton"?: string;
        "content"?: string;
        "fontColor"?: string;
    }
    interface CardComp {
        "cardBackButtonColor"?: string;
        "cardBackButtonColorFont"?: string;
        "cardBackColor"?: string;
        "cardFrontColor"?: string;
        "price"?: string;
        "spanColorInput"?: string;
        "title"?: string;
        "url"?: string;
    }
    interface DropDown {
        "backgroundColor"?: string;
    }
    interface DropLink {
        "backgroundColor"?: string;
    }
    interface FtBox {
        "cardColor"?: string;
        "title"?: string;
    }
    interface GifComp {
        "url"?: string;
    }
    interface GridComp {
        "columnType"?: string;
    }
    interface HeadItem {
    }
    interface HeadTable {
        "numberColumn"?: number;
    }
    interface NavComp {
        "onNavSelected"?: (event: NavCompCustomEvent<string>) => void;
        "url"?: string;
    }
    interface SrComp {
        "navSelected"?: string;
        "searchSymbol"?: string;
    }
    interface StoryComp {
        "captionStory"?: string;
        "colorStory"?: string;
        "fontColor"?: string;
        "titleStory"?: string;
        "url"?: string;
    }
    interface TableComp {
    }
    interface IntrinsicElements {
        "accordion-component": AccordionComponent;
        "background-video": BackgroundVideo;
        "body-item": BodyItem;
        "body-table": BodyTable;
        "btn-exp": BtnExp;
        "card-comp": CardComp;
        "drop-down": DropDown;
        "drop-link": DropLink;
        "ft-box": FtBox;
        "gif-comp": GifComp;
        "grid-comp": GridComp;
        "head-item": HeadItem;
        "head-table": HeadTable;
        "nav-comp": NavComp;
        "sr-comp": SrComp;
        "story-comp": StoryComp;
        "table-comp": TableComp;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "accordion-component": LocalJSX.AccordionComponent & JSXBase.HTMLAttributes<HTMLAccordionComponentElement>;
            "background-video": LocalJSX.BackgroundVideo & JSXBase.HTMLAttributes<HTMLBackgroundVideoElement>;
            "body-item": LocalJSX.BodyItem & JSXBase.HTMLAttributes<HTMLBodyItemElement>;
            "body-table": LocalJSX.BodyTable & JSXBase.HTMLAttributes<HTMLBodyTableElement>;
            "btn-exp": LocalJSX.BtnExp & JSXBase.HTMLAttributes<HTMLBtnExpElement>;
            "card-comp": LocalJSX.CardComp & JSXBase.HTMLAttributes<HTMLCardCompElement>;
            "drop-down": LocalJSX.DropDown & JSXBase.HTMLAttributes<HTMLDropDownElement>;
            "drop-link": LocalJSX.DropLink & JSXBase.HTMLAttributes<HTMLDropLinkElement>;
            "ft-box": LocalJSX.FtBox & JSXBase.HTMLAttributes<HTMLFtBoxElement>;
            "gif-comp": LocalJSX.GifComp & JSXBase.HTMLAttributes<HTMLGifCompElement>;
            "grid-comp": LocalJSX.GridComp & JSXBase.HTMLAttributes<HTMLGridCompElement>;
            "head-item": LocalJSX.HeadItem & JSXBase.HTMLAttributes<HTMLHeadItemElement>;
            "head-table": LocalJSX.HeadTable & JSXBase.HTMLAttributes<HTMLHeadTableElement>;
            "nav-comp": LocalJSX.NavComp & JSXBase.HTMLAttributes<HTMLNavCompElement>;
            "sr-comp": LocalJSX.SrComp & JSXBase.HTMLAttributes<HTMLSrCompElement>;
            "story-comp": LocalJSX.StoryComp & JSXBase.HTMLAttributes<HTMLStoryCompElement>;
            "table-comp": LocalJSX.TableComp & JSXBase.HTMLAttributes<HTMLTableCompElement>;
        }
    }
}
