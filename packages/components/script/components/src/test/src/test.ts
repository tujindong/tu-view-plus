import { buildProps } from '@tu-view-plus/utils'

import type { ExtractPropTypes } from 'vue'
import type Test from './test.vue'

export const testProps = buildProps({})

export type TestProps = ExtractPropTypes<typeof testProps>
export type TestInstance = InstanceType<typeof Test>
