import { withInstall, withInstallFunction } from '@tu-view-plus/utils';
import Modal from './src/modal.vue';
import ModalMethods from './src/methods';

export const TuModal = withInstall(Modal);
export const TuModalBox = withInstallFunction(ModalMethods, '$modal');

export default TuModalBox;

export * from './src/modal';
