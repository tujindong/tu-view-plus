import { buildProps } from '@tu-view-plus/utils'

import type { ExtractPropTypes } from 'vue'
import type Space from './space.vue'

export const spaceProps = buildProps({})

export type SpaceProps = ExtractPropTypes<typeof spaceProps>
export type SpaceInstance = InstanceType<typeof Space>
