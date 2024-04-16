import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';

export const imagePreviewActionProps = buildProps({
  /**
   * @zh 名称
   * @en the name of the action
   */
  name: {
    type: String
  },
  
  /**
   * @zh 是否禁用
   * @en Whether to disable the action
   */
  disabled: {
    type: Boolean
  }
});

export type ImagePreviewActionProps = ExtractPropTypes<typeof imagePreviewActionProps>;
