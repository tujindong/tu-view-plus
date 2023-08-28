import { withInstallFunction } from '@tu-view-plus/utils';
import Modal from './src/methods';

export const TuModal = withInstallFunction(Modal, '$modal');
export default TuModal;

export * from './src/modal';
