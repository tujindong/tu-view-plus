import { withInstall } from '@tu-view-plus/utils';
import Avatar from './src/avatar.vue';
import AvatarGroup from './src/avatar-group.vue';

export const TuAvatar = withInstall(Avatar);
export const TuAvatarGroup = withInstall(AvatarGroup);
export default TuAvatar;

export * from './src/avatar';
export * from './src/constants';
