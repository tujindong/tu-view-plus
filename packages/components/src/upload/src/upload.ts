import { buildProps } from '@tu-view-plus/utils'

import type { ExtractPropTypes } from 'vue'

export const uploadProps = buildProps({})

export type UploadProps = ExtractPropTypes<typeof uploadProps>
