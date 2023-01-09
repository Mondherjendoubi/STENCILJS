/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
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
    interface NavComp {
        "url": string;
    }
    interface SrComp {
        "navSelected": string;
        "searchSymbol": string;
    }
}
export interface NavCompCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLNavCompElement;
}
declare global {
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
    interface HTMLElementTagNameMap {
        "btn-exp": HTMLBtnExpElement;
        "card-comp": HTMLCardCompElement;
        "ft-box": HTMLFtBoxElement;
        "gif-comp": HTMLGifCompElement;
        "grid-comp": HTMLGridCompElement;
        "nav-comp": HTMLNavCompElement;
        "sr-comp": HTMLSrCompElement;
    }
}
declare namespace LocalJSX {
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
    interface NavComp {
        "onNavSelected"?: (event: NavCompCustomEvent<string>) => void;
        "url"?: string;
    }
    interface SrComp {
        "navSelected"?: string;
        "searchSymbol"?: string;
    }
    interface IntrinsicElements {
        "btn-exp": BtnExp;
        "card-comp": CardComp;
        "ft-box": FtBox;
        "gif-comp": GifComp;
        "grid-comp": GridComp;
        "nav-comp": NavComp;
        "sr-comp": SrComp;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "btn-exp": LocalJSX.BtnExp & JSXBase.HTMLAttributes<HTMLBtnExpElement>;
            "card-comp": LocalJSX.CardComp & JSXBase.HTMLAttributes<HTMLCardCompElement>;
            "ft-box": LocalJSX.FtBox & JSXBase.HTMLAttributes<HTMLFtBoxElement>;
            "gif-comp": LocalJSX.GifComp & JSXBase.HTMLAttributes<HTMLGifCompElement>;
            "grid-comp": LocalJSX.GridComp & JSXBase.HTMLAttributes<HTMLGridCompElement>;
            "nav-comp": LocalJSX.NavComp & JSXBase.HTMLAttributes<HTMLNavCompElement>;
            "sr-comp": LocalJSX.SrComp & JSXBase.HTMLAttributes<HTMLSrCompElement>;
        }
    }
}