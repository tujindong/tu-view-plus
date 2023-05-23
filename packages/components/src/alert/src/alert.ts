import { buildProps } from '@tu-view-plus/utils'

import type { ExtractPropTypes } from 'vue'
import type Alert from './alert.vue'

export const alertProps = buildProps({})

export type AlertProps = ExtractPropTypes<typeof alertProps>
export type AlertInstance = InstanceType<typeof Alert>
