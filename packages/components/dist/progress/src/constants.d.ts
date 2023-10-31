export declare const progressTypes: readonly ["line", "circle", "dashboard"];
export declare const statusTypes: readonly ["", "success", "exception", "warning"];
export type ProgressTypes = (typeof progressTypes)[number];
export type StatusTypes = (typeof statusTypes)[number];
