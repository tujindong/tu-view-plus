import { buildProps } from '@tu-view-plus/utils';
import { resultStatusTypes, ResultStatusTypes } from './constans';
import type { ExtractPropTypes, PropType } from 'vue';

export const resultProps = buildProps({
  /**
   * @zh 结果页显示的状态
   * @en The status displayed on the result page
   * @values 'info','success','warning','error','403','404','500', null
   */
  status: {
    type: String as PropType<ResultStatusTypes>,
    default: 'info',
    validator: (value: any) => resultStatusTypes.includes(value)
  },

  /**
   * @zh 标题内容
   * @en Title
   */
  title: String,

  /**
   * @zh 子标题内容
   * @en Subtitle
   */
  subtitle: String
});

export type ResultProps = ExtractPropTypes<typeof resultProps>;
