declare const _default: import("vue").DefineComponent<{
    level: {
        type: NumberConstructor;
        default: number;
    };
}, {
    nsMenu: {
        derivedNamespace: import("vue").ComputedRef<string>;
        namespace: string;
        b: () => string;
        e: (element: string) => string;
        m: (modifier: string) => string;
        em: (element: string, modifier: string) => string;
        is: {
            (name: string, state: boolean | undefined): string;
            (name: string): string;
        };
    };
    levelIndent: import("vue").Ref<number | undefined>;
}, any, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    level: {
        type: NumberConstructor;
        default: number;
    };
}>>, {
    level: number;
}, {}>;
export default _default;
