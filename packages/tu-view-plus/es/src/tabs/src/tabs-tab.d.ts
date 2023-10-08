import type { ExtractPropTypes, PropType } from 'vue';
import type TabsTab from './tabs-tab.vue';
import type { TabData } from './constants';
export declare const tabsTabProps: {
    readonly tab: {
        readonly type: PropType<TabData>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly active: BooleanConstructor;
    readonly editable: BooleanConstructor;
};
export declare const tabsTabEmits: {
    click: (key: string | number, evt: Event) => boolean;
    delete: (key: string | number, ev: Event) => boolean;
};
export declare type TabsTabProps = ExtractPropTypes<typeof tabsTabProps>;
export declare type TabsTabInstance = InstanceType<typeof TabsTab>;
export declare type TabsTabEmits = typeof tabsTabEmits;
