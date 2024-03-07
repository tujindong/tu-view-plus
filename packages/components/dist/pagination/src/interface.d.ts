import { CSSProperties } from 'vue';
import { Size } from '@tu-view-plus/constants';
import { SelectProps } from '../../select';
export declare const PAGE_ITEM_TYPES: readonly ["page", "more", "previous", "next"];
export type PageItemType = (typeof PAGE_ITEM_TYPES)[number];
export interface PaginationProps {
    total?: number;
    current?: number;
    defaultCurrent?: number;
    pageSize?: number;
    defaultPageSize?: number;
    disabled?: boolean;
    hideOnSinglePage?: boolean;
    simple?: boolean;
    showTotal?: boolean;
    showMore?: boolean;
    showJumper?: boolean;
    showPageSize?: boolean;
    pageSizeOptions?: number[];
    pageSizeProps?: SelectProps;
    size?: Size;
    pageItemStyle?: CSSProperties;
    activePageItemStyle?: CSSProperties;
    baseSize?: number;
    bufferSize?: number;
}
