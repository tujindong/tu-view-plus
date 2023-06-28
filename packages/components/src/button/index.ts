import { withInstall } from '@tu-view-plus/utils';
import Button from './src/button.vue';
import ButtonGroup from './src/button-group.vue';

export const TuButton = withInstall(Button);
export default TuButton;

export const TuButtonGroup = withInstall(ButtonGroup);

export * from './src/button';
export * from './src/constants';
