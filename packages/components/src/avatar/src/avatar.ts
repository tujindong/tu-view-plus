import { buildProps } from '@tu-view-plus/utils'

import type { ExtractPropTypes } from 'vue'
import type Avatar from './avatar.vue'

export const avatarProps = buildProps({})

export type AvatarProps = ExtractPropTypes<typeof avatarProps>
export type AvatarInstance = InstanceType<typeof Avatar>
