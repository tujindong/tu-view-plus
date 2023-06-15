import { buildProps } from '@tu-view-plus/utils'

import type { ExtractPropTypes } from 'vue'
import type Popover from './popover.vue'

export const popoverProps = buildProps({})

export type PopoverProps = ExtractPropTypes<typeof popoverProps>
export type PopoverInstance = InstanceType<typeof Popover>
