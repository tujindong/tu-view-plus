import { CSSProperties } from 'vue';
export declare const gap = 12;
export declare const getDiffRect: (node: HTMLElement, parentNode: HTMLElement) => {
    left: number;
    top: number;
    right: number;
    bottom: number;
};
export declare const getTabListStyle: ({ direction, type, offset, gap }: {
    direction: string;
    type: string;
    offset: number;
    gap: number;
}) => CSSProperties;
