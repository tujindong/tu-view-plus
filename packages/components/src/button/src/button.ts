import { buildProps } from '@tu-view-plus/utils'

import type { ExtractPropTypes } from 'vue'
import type Button from './button.vue'

export const buttonProps = buildProps({})

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonInstance = InstanceType<typeof Button>
