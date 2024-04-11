import { buildProps } from '@tu-view-plus/utils'

import type { ExtractPropTypes } from 'vue'

export const listProps = buildProps({})

export type ListProps = ExtractPropTypes<typeof listProps>
