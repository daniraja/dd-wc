/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface WcSideDrawer {
        "closable": boolean;
        "headerText": string;
        "open": boolean;
        "openDrawer": () => Promise<void>;
    }
    interface WcToolTip {
        "infoText": string;
        "show": () => Promise<void>;
        "visible": boolean;
    }
}
declare global {
    interface HTMLWcSideDrawerElement extends Components.WcSideDrawer, HTMLStencilElement {
    }
    var HTMLWcSideDrawerElement: {
        prototype: HTMLWcSideDrawerElement;
        new (): HTMLWcSideDrawerElement;
    };
    interface HTMLWcToolTipElement extends Components.WcToolTip, HTMLStencilElement {
    }
    var HTMLWcToolTipElement: {
        prototype: HTMLWcToolTipElement;
        new (): HTMLWcToolTipElement;
    };
    interface HTMLElementTagNameMap {
        "wc-side-drawer": HTMLWcSideDrawerElement;
        "wc-tool-tip": HTMLWcToolTipElement;
    }
}
declare namespace LocalJSX {
    interface WcSideDrawer {
        "closable"?: boolean;
        "headerText"?: string;
        "open"?: boolean;
    }
    interface WcToolTip {
        "infoText"?: string;
        "visible"?: boolean;
    }
    interface IntrinsicElements {
        "wc-side-drawer": WcSideDrawer;
        "wc-tool-tip": WcToolTip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "wc-side-drawer": LocalJSX.WcSideDrawer & JSXBase.HTMLAttributes<HTMLWcSideDrawerElement>;
            "wc-tool-tip": LocalJSX.WcToolTip & JSXBase.HTMLAttributes<HTMLWcToolTipElement>;
        }
    }
}
