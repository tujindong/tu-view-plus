<script lang="tsx">
import { defineComponent, toRefs, computed, ref } from 'vue';
import { selectProps, selectEmits } from './select';
import { useTrigger } from '@tu-view-plus/hooks';
import { TuTrigger } from '../../trigger';
import { TuSelectView } from '../../select-view';
import { useSelect } from './use-select';
import { useFormDisabled, useFormItem, useFormItemInputId } from '../../form';
import TuSelectDropdown from './select-dropdown.vue';
import '../style/select.scss';

import type { ComponentPublicInstance } from 'vue';

export default defineComponent({
  name: 'TuSelect',

  props: selectProps,

  emits: selectEmits,

  setup(props, { slots, emit, attrs }) {
    const { popupVisible } = toRefs(props);

    const dropdownRef = ref<ComponentPublicInstance>();

    const selectDisabled = useFormDisabled();

    const { form, formItem } = useFormItem();

    const { inputId } = useFormItemInputId(props, {
      formItemContext: formItem
    });

    const { computedPopupVisible, handlePopupVisibleChange } = useTrigger({
      popupVisible,
      emit
    });

    const handleMouseEnter = () => {
      console.log('handleMouseEnter');
    };

    const handleMouseLeave = () => {
      console.log('handleMouseLeave');
    };

    const toggleMenu = () => {
      console.log('toggleMenu');
    };

    return () => {
      const renderLabel = () => {};

      const renderDropDown = () => {
        return (
          <TuSelectDropdown
            ref={dropdownRef}
            v-slots={{
              default: () => [...(slots.default?.() ?? [])]
            }}
            loading={props.loading}
          />
        );
      };

      return (
        <TuTrigger
          v-slots={{ content: renderDropDown }}
          trigger="click"
          position="bl"
        >
          {slots.trigger?.() ?? (
            <TuSelectView
              v-slots={{
                label: renderLabel,
                prefix: slots.prefix,
                'arrow-icon': slots['arrow-icon'],
                'loading-icon': slots['loading-icon'],
                'search-icon': slots['search-icon']
              }}
            />
          )}
        </TuTrigger>
      );
    };
  }
});
</script>
