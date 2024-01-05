import { Mode } from '../interface';
interface PanelSpanProps {
    mode: Mode;
}
export declare function usePanelSpan(props: PanelSpanProps): {
    span: import("vue").ComputedRef<number>;
    superSpan: import("vue").ComputedRef<number>;
};
export {};
