import { InjectionKey, VNodeTypes } from 'vue';
import { InternalMenuProps, MenuData } from './interface';
export declare const MenuInjectionKey: InjectionKey<MenuContext>;
export type MenuContext = Readonly<Pick<InternalMenuProps, 'mode' | 'levelIndent' | 'autoScrollIntoView' | 'scrollConfig' | 'inTrigger' | 'triggerProps' | 'tooltipProps' | 'popupMaxHeight'> & {
    selectedKeys: string[];
    openKeys: string[];
    collapsed: boolean;
    expandIconDown?: () => VNodeTypes;
    expandIconRight?: () => VNodeTypes;
    onSubMenuClick?: (key: string, level: number) => void;
    onMenuItemClick?: (key: string) => void;
}>;
export declare const LevelInjectionKey: InjectionKey<LevelContext>;
export type LevelContext = Readonly<{
    level: number;
}>;
export type MenuMapType = Map<string, string[]>;
export declare const DataCollectorInjectionKey: InjectionKey<DataCollectorContext>;
export type DataCollectorContext = Readonly<{
    collectSubMenu: (key: string, children: MenuData, isReport?: boolean) => void;
    removeSubMenu: (key: string) => void;
    collectMenuItem: (key: string) => void;
    removeMenuItem: (keys: string) => void;
    reportMenuData: (data: MenuData) => void;
}>;
export declare const effectTypes: readonly ["default", "outset", "inset", "bordered", "outlined", "flat"];
export type EffectTypes = (typeof effectTypes)[number];
