import { withInstall, withNoopInstall } from '@tu-view-plus/utils';
import Radio from './src/radio.vue';
import RadioGroup from './src/radio-group.vue';

export const TuRadio = withInstall(Radio, { RadioGroup });

export default TuRadio;
export const TuRadioGroup = withNoopInstall(RadioGroup);

export * from './src/radio';
export * from './src/radio-group';
