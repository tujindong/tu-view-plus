import { buildProps } from '@tu-view-plus/utils'

import type { ExtractPropTypes } from 'vue'
import type Drawer from './drawer.vue'

export const drawerProps = buildProps({})

export type DrawerProps = ExtractPropTypes<typeof drawerProps>
export type DrawerInstance = InstanceType<typeof Drawer>
