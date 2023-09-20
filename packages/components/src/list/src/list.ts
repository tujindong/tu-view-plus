import { buildProps } from '@tu-view-plus/utils'

import type { ExtractPropTypes } from 'vue'
import type List from './list.vue'

export const listProps = buildProps({})

export type ListProps = ExtractPropTypes<typeof listProps>
export type ListInstance = InstanceType<typeof List>
