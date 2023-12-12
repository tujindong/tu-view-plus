<script lang="tsx">
import { defineComponent, ref, computed, watch, toRefs } from 'vue';
import { useNamespace } from '@tu-view-plus/hooks';
import { Close, Loading, Search, ArrowDown } from '@tu-view-plus/icons-vue';
import { selectViewProps, selectViewEmits } from './select-view';
import TuInputLabel from '../../input-label';
import TuInputTag from '../../input-tag';
import TuIcon from '../../icon';
import { useFormDisabled, useFormSize } from '../../form';
import '../style/select-view.scss';

import type { ComponentPublicInstance } from 'vue';

export default defineComponent({
  name: 'TuSelectView',

  props: selectViewProps,

  emits: selectViewEmits,

  setup(props, { emit, slots, expose }) {
    const nsSelectView = useNamespace('select-view');

    const { opened } = toRefs(props);

    const componentRef = ref<ComponentPublicInstance>();
    const inputRef = computed<HTMLInputElement>(
      // @ts-ignore
      () => componentRef.value?.inputRef
    );

    const isEmptyValue = computed(() => props.modelValue.length === 0);
    const enabledInput = computed(() => props.allowSearch || props.allowCreate);
    const showClearVisible = computed(
      () => props.allowClear && !props.disabled && !isEmptyValue.value
    );

    const selectViewSize = useFormSize();
    const selectViewDisabled = useFormDisabled();

    const classes = computed(() => ({
      [nsSelectView.b()]: true,
      [nsSelectView.m(props.multiple ? 'multiple' : 'single')]: true,
      [nsSelectView.is('opened')]: props.opened
    }));

    const handleRemove = (tag: string | number, evt: Event) => {
      emit('remove', tag, evt);
    };

    const handleFocus = (evt: FocusEvent) => {
      emit('focus', evt);
    };

    const handleBlur = (evt: FocusEvent) => {
      emit('blur', evt);
    };

    const handleClear = (evt: MouseEvent) => {
      emit('clear', evt);
    };

    const focus = () => {
      if (inputRef.value) {
        inputRef.value.focus();
      }
    };

    const blur = () => {
      if (inputRef.value) {
        inputRef.value.blur();
      }
    };

    watch(opened, (opened) => {
      if (
        !opened &&
        inputRef.value &&
        inputRef.value.isSameNode(document.activeElement)
      ) {
        inputRef.value.blur();
      }
    });

    expose({ focus, blur });

    return () => {
      const renderIcon = () => {
        if (props.loading)
          return (
            slots['loading-icon']?.() ?? (
              <TuIcon
                class={[
                  'is-loading',
                  nsSelectView.e('icon'),
                  nsSelectView.em('icon', 'loading')
                ]}
              >
                <Loading />
              </TuIcon>
            )
          );
        if (props.allowSearch && props.opened)
          return (
            slots['search-icon']?.() ?? (
              <TuIcon
                class={[
                  nsSelectView.e('icon'),
                  nsSelectView.em('icon', 'search')
                ]}
              >
                <Search />
              </TuIcon>
            )
          );
        if (slots['arrow-icon']) return slots['arrow-icon']();
        return (
          <TuIcon
            class={[nsSelectView.e('icon'), nsSelectView.em('icon', 'arrow')]}
          >
            <ArrowDown />
          </TuIcon>
        );
      };

      const renderSuffix = () => (
        <>
          {showClearVisible.value && (
            <TuIcon
              class={[nsSelectView.e('icon'), nsSelectView.em('icon', 'clear')]}
              onMousedown={(evt: MouseEvent) => evt.stopPropagation()}
              onClick={handleClear}
            >
              <Close />
            </TuIcon>
          )}
          {renderIcon()}
        </>
      );

      return props.multiple ? (
        <TuInputTag
          ref={componentRef}
          v-slots={{
            prefix: slots.prefix,
            suffix: renderSuffix,
            tag: slots.label
          }}
          class={classes.value}
          model-value={props.modelValue}
          input-value={props.inputValue}
          focused={props.opened}
          placeholder={props.placeholder}
          disabled={selectViewDisabled.value}
          size={selectViewSize.value}
          maxTagCount={props.maxTagCount}
          disabledInput={!props.allowSearch && !props.allowCreate}
          retain-input-value
          uninject-form-item-context
          onRemove={handleRemove}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      ) : (
        <TuInputLabel
          ref={componentRef}
          v-slots={{
            default: slots.label,
            prefix: slots.prefix,
            suffix: renderSuffix
          }}
          class={classes.value}
          model-value={props.modelValue?.[0]}
          input-value={props.inputValue}
          focused={props.opened}
          placeholder={props.placeholder}
          disabled={selectViewDisabled.value}
          size={selectViewSize.value}
          enabled-input={enabledInput.value}
          uninject-form-item-context
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      );
    };
  }
});
</script>
