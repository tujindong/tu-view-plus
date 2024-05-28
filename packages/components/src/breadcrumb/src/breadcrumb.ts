import { buildProps } from '@tu-view-plus/utils'

import type { ExtractPropTypes } from 'vue'

export const breadcrumbProps = buildProps({} as const)

export type BreadcrumbProps = ExtractPropTypes<typeof breadcrumbProps>
