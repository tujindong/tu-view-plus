export declare const TRIGGER_EVENTS: readonly ["hover", "click", "focus", "contextMenu"];
export declare const TRIGGER_POSITIONS: readonly ["top", "tl", "tr", "bottom", "bl", "br", "left", "lt", "lb", "right", "rt", "rb"];
export declare type TriggerEvent = (typeof TRIGGER_EVENTS)[number];
export declare type TriggerPosition = (typeof TRIGGER_POSITIONS)[number];
export declare type TriggerPopupTranslate = [number, number] | {
    [key in TriggerPosition]?: [number, number];
};
