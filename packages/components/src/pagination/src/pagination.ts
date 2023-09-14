import { buildProps } from '@tu-view-plus/utils'

import type { ExtractPropTypes } from 'vue'
import type Pagination from './pagination.vue'

export const paginationProps = buildProps({})

export type PaginationProps = ExtractPropTypes<typeof paginationProps>
export type PaginationInstance = InstanceType<typeof Pagination>
