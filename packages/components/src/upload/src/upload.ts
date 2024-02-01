import { buildProps } from '@tu-view-plus/utils'

import type { ExtractPropTypes } from 'vue'
import type Upload from './upload.vue'

export const uploadProps = buildProps({})

export type UploadProps = ExtractPropTypes<typeof uploadProps>
export type UploadInstance = InstanceType<typeof Upload>
