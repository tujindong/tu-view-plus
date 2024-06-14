<script lang="tsx">
import {
  defineComponent,
  toRefs,
  computed,
  ref,
  watch,
  nextTick,
  watchEffect
} from 'vue';
import { selectProps, selectEmits } from './select';
import { useTrigger, useNamespace } from '@tu-view-plus/hooks';
import {
  isArray,
  isEmptyObject,
  isFunction,
  isNull,
  isNumber,
  isObject,
  isString,
  isBoolean,
  isUndefined,
  debounce,
  debugWarn
} from '@tu-view-plus/utils';
import { useSelect } from './use-select';
import { useFormDisabled, useFormSize, useFormItem } from '../../form';
import {
  OptionValueWithKey,
  SelectOptionData,
  SelectOptionGroupInfo,
  SelectOptionInfo
} from './interface';
import {
  getKeyFromValue,
  hasEmptyStringKey,
  isGroupOptionInfo,
  isValidOption
} from './utils';
import TuTrigger from '../../trigger';
import TuSelectDropdown from './select-dropdown.vue';
import TuSelectGroup from './select-group.vue';
import TuSelectOption from './select-option.vue';
import TuVirtualList from '../../virtual-list';
import TuSelectView from '../../select-view';
import '../style/select.scss';

import type { ComponentPublicInstance } from 'vue';
import type { SelectViewValue } from '../../select-view/src/interface';

const DEFAULT_FIELD_NAMES = {
  value: 'value',
  label: 'label',
  disabled: 'disabled',
  tagProps: 'tagProps',
  render: 'render'
};

export default defineComponent({
  name: 'TuSelect',

  props: selectProps,

  emits: selectEmits,

  inheritAttrs: false,

  setup(props, { slots, emit, attrs }) {
    const {
      options,
      filterOption,
      valueKey,
      multiple,
      popupVisible,
      showExtraOptions,
      modelValue,
      fieldNames,
      loading,
      defaultActiveFirstOption
    } = toRefs(props);

    const nsSelect = useNamespace('select');

    const { formItem } = useFormItem();

    const dropdownRef = ref<ComponentPublicInstance>();
    const optionRefs = ref<Record<string, HTMLElement>>({});
    const virtualListRef = ref();

    const _value = ref(props.defaultValue);
    const extraValueObjects = ref<OptionValueWithKey[]>([]);
    const _selectedOption = ref();
    const _inputValue = ref('');

    const selectDisabled = useFormDisabled();
    const selectSize = useFormSize();

    const selectClasses = computed(() => ({
      [nsSelect.b()]: true,
      [nsSelect.m(selectSize.value)]: true
    }));

    const retainInputValue = computed(
      () =>
        isObject(props.allowSearch) &&
        Boolean(props.allowSearch.retainInputValue)
    );

    const mergedFieldNames = computed(() => ({
      ...DEFAULT_FIELD_NAMES,
      ...fieldNames?.value
    }));

    const component = computed(() => (props.virtualListProps ? 'div' : 'li'));

    const computedInputValue = computed(
      () => props.inputValue ?? _inputValue.value
    );

    const computedValueKeys = computed(() =>
      computedValueObjects.value.map((obj) => obj.key)
    );

    const extraOptions = computed(() =>
      extraValueObjects.value.map((obj) => {
        let optionInfo = getFallBackOption(obj.value);
        const extraOptionRawInfo = _selectedOption.value?.[obj.key];
        if (
          !isUndefined(extraOptionRawInfo) &&
          !isEmptyObject(extraOptionRawInfo)
        ) {
          optionInfo = { ...optionInfo, ...extraOptionRawInfo };
        }
        return optionInfo;
      })
    );

    const computedValueObjects = computed<OptionValueWithKey[]>(() => {
      const mergedValue = props.modelValue ?? _value.value;
      const valueArray = isArray(mergedValue)
        ? mergedValue
        : mergedValue ||
          isNumber(mergedValue) ||
          isString(mergedValue) ||
          isBoolean(mergedValue)
        ? [mergedValue]
        : [];
      return valueArray.map((value) => ({
        value,
        key: getKeyFromValue(value, props.valueKey)
      }));
    });

    const selectViewValue = computed(() => {
      const result: SelectViewValue[] = [];
      for (const item of computedValueObjects.value) {
        const optionInfo = optionInfoMap.get(item.key);
        if (optionInfo) {
          result.push({
            ...optionInfo,
            value: item.key,
            label:
              optionInfo?.label ??
              String(
                isObject(item.value) ? item.value[valueKey?.value] : item.value
              ),
            closable: !optionInfo?.disabled
          });
        }
      }
      return result;
    });

    const getFallBackOption = (
      value: string | number | boolean | Record<string, unknown>
    ): SelectOptionData => {
      if (isFunction(props.fallbackOption)) {
        return props.fallbackOption(value);
      }
      return {
        [mergedFieldNames.value.value]: value,
        [mergedFieldNames.value.label]: String(
          isObject(value) ? value[valueKey?.value] : value
        )
      };
    };

    const getValueFromValueKeys = (valueKeys: string[]) => {
      if (!props.multiple) {
        return (
          optionInfoMap.get(valueKeys[0])?.value ??
          (hasEmptyStringKey(optionInfoMap)
            ? (undefined as unknown as string)
            : '')
        );
      }
      return valueKeys.map((key) => optionInfoMap.get(key)?.value ?? '');
    };

    const getRawOptionFromValueKeys = (valueKeys: string[]) => {
      const optionMap: Record<string, unknown> = {};

      valueKeys.forEach((key) => {
        optionMap[key] = optionInfoMap.get(key);
      });

      return optionMap;
    };

    const updateSelectedOption = (valueKeys: string[]) => {
      _selectedOption.value = getRawOptionFromValueKeys(valueKeys);
    };

    const updateValue = (valueKeys: string[]) => {
      const value = getValueFromValueKeys(valueKeys);
      _value.value = value;
      emit('update:modelValue', value);
      emit('change', value);
      formItem?.validate('change').catch((err) => debugWarn(err));
      updateSelectedOption(valueKeys);
    };

    const updateInputValue = (inputValue: string) => {
      _inputValue.value = inputValue;
      emit('update:inputValue', inputValue);
      emit('inputValueChange', inputValue);
    };

    const getExtraValueData = (): OptionValueWithKey[] => {
      const valueArray: OptionValueWithKey[] = [];
      const keyArray: string[] = [];

      if (props.allowCreate || props.fallbackOption) {
        for (const item of computedValueObjects.value) {
          if (!keyArray.includes(item.key) && item.value !== '') {
            const optionInfo = optionInfoMap.get(item.key);
            if (!optionInfo || optionInfo.origin === 'extraOptions') {
              valueArray.push(item);
              keyArray.push(item.key);
            }
          }
        }
      }

      if (props.allowCreate && computedInputValue.value) {
        const key = getKeyFromValue(computedInputValue.value);
        if (!keyArray.includes(key)) {
          const optionInfo = optionInfoMap.get(key);
          if (!optionInfo || optionInfo.origin === 'extraOptions') {
            valueArray.push({
              value: computedInputValue.value,
              key
            });
          }
        }
      }
      return valueArray;
    };

    const getOptionContentFunc = (optionInfo: SelectOptionInfo) => {
      if (isFunction(slots.option)) {
        const optionSlot = slots.option;
        return () => optionSlot({ data: optionInfo.raw });
      }
      if (isFunction(optionInfo.render)) {
        return optionInfo.render;
      }
      return () => optionInfo.label;
    };

    // events
    const handleSelect = (key: string, ev: Event) => {
      if (props.multiple) {
        if (!computedValueKeys.value.includes(key)) {
          if (enabledOptionKeys.value.includes(key)) {
            if (
              props.limit > 0 &&
              computedValueKeys.value.length >= props.limit
            ) {
              const info = optionInfoMap.get(key);
              emit('exceedLimit', info?.value, ev);
            } else {
              const valueKeys = computedValueKeys.value.concat(key);
              updateValue(valueKeys);
            }
          }
        } else {
          const valueKeys = computedValueKeys.value.filter(
            (_key) => _key !== key
          );
          updateValue(valueKeys);
        }
        if (!retainInputValue.value) {
          // 点击一个选项时，清空输入框内容
          updateInputValue('');
        }
      } else {
        if (key !== computedValueKeys.value[0]) {
          updateValue([key]);
        }
        if (retainInputValue.value) {
          const optionInfo = optionInfoMap.get(key);
          if (optionInfo) {
            updateInputValue(optionInfo.label);
          }
        }

        handlePopupVisibleChange(false);
      }
    };

    const handleSearch = debounce((value: string) => {
      emit('search', value);
    }, props.searchDelay);

    const handleInputValueChange = (inputValue: string) => {
      if (inputValue !== computedInputValue.value) {
        if (!computedPopupVisible.value) {
          handlePopupVisibleChange(true);
        }

        updateInputValue(inputValue);

        if (props.allowSearch) {
          handleSearch(inputValue);
        }
      }
    };

    const handleRemove = (key: string) => {
      const optionInfo = optionInfoMap.get(key);
      const newKeys = computedValueKeys.value.filter((_key) => _key !== key);
      updateValue(newKeys);
      emit('remove', optionInfo?.value);
    };

    const handleClear = (e: Event) => {
      e?.stopPropagation();
      const newKeys = computedValueKeys.value.filter(
        (key) => optionInfoMap.get(key)?.disabled
      );
      updateValue(newKeys);
      updateInputValue('');
      emit('clear', e);
    };

    const handleDropdownScroll = (e: Event) => {
      emit('dropdownScroll', e);
    };

    const handleDropdownReachBottom = (e: Event) => {
      emit('dropdownReachBottom', e);
    };

    const { computedPopupVisible, handlePopupVisibleChange } = useTrigger({
      popupVisible,
      emit
    });

    const {
      validOptions,
      optionInfoMap,
      validOptionInfos,
      enabledOptionKeys,
      handleKeyDown
    } = useSelect({
      selectSize,
      multiple,
      options,
      extraOptions,
      inputValue: computedInputValue,
      filterOption,
      showExtraOptions,
      component,
      valueKey,
      fieldNames,
      loading,
      popupVisible: computedPopupVisible,
      valueKeys: computedValueKeys,
      dropdownRef,
      optionRefs,
      virtualListRef,
      defaultActiveFirstOption,
      onSelect: handleSelect,
      onPopupVisibleChange: handlePopupVisibleChange
    });

    watch(modelValue, (value) => {
      if (isUndefined(value) || isNull(value)) {
        _value.value = multiple.value ? [] : (value as any);
      }
    });

    watch(computedPopupVisible, (visible) => {
      if (!visible && !retainInputValue.value && computedInputValue.value) {
        updateInputValue('');
      }
    });

    nextTick(() => {
      watchEffect(() => {
        const valueData = getExtraValueData();
        if (valueData.length !== extraValueObjects.value.length) {
          extraValueObjects.value = valueData;
        } else if (valueData.length > 0) {
          for (let i = 0; i < valueData.length; i++) {
            if (valueData[i].key !== extraValueObjects.value[i]?.key) {
              extraValueObjects.value = valueData;
              break;
            }
          }
        }
      });
    });

    return () => {
      const renderLabel = ({ data }: { data: SelectViewValue }) => {
        if ((slots.label || isFunction(props.formatLabel)) && data) {
          const optionInfo = optionInfoMap.get(data.value as string);
          if (optionInfo?.raw) {
            return (
              slots.label?.({ data: optionInfo.raw }) ??
              props.formatLabel?.(optionInfo.raw)
            );
          }
        }
        return data?.label ?? '';
      };

      const renderOption = (
        optionInfo: SelectOptionInfo | SelectOptionGroupInfo
      ) => {
        if (isGroupOptionInfo(optionInfo)) {
          return (
            <TuSelectGroup key={optionInfo.key} label={optionInfo.label}>
              {optionInfo.options.map((child) => renderOption(child))}
            </TuSelectGroup>
          );
        }

        if (
          !isValidOption(optionInfo, {
            inputValue: computedInputValue.value,
            filterOption: filterOption?.value
          })
        ) {
          return null;
        }

        return (
          <TuSelectOption
            v-slots={{
              default: getOptionContentFunc(optionInfo)
            }}
            // @ts-ignore
            ref={(ref: ComponentPublicInstance) => {
              if (ref?.$el) {
                optionRefs.value[optionInfo.key] = ref.$el;
              }
            }}
            key={optionInfo.key}
            value={optionInfo.value}
            label={optionInfo.label}
            disabled={optionInfo.disabled}
            internal
          />
        );
      };

      const renderDropDown = () => {
        return (
          <TuSelectDropdown
            ref={dropdownRef}
            v-slots={{
              default: () => [
                ...(slots.default?.() ?? []),
                ...validOptions.value.map(renderOption)
              ],
              'virtual-list': () => (
                <TuVirtualList
                  {...props.virtualListProps}
                  ref={virtualListRef}
                  data={validOptions.value}
                  v-slots={{
                    item: ({
                      item
                    }: {
                      item: SelectOptionInfo | SelectOptionGroupInfo;
                    }) => renderOption(item)
                  }}
                />
              ),
              empty: slots.empty,
              header: slots.header,
              footer: slots.footer
            }}
            loading={props.loading}
            empty={validOptionInfos.value.length === 0}
            virtualList={Boolean(props.virtualListProps)}
            scrollbar={props.scrollbar}
            showHeaderOnEmpty={props.showHeaderOnEmpty}
            showFooterOnEmpty={props.showFooterOnEmpty}
            onScroll={handleDropdownScroll}
            onReachBottom={handleDropdownReachBottom}
          />
        );
      };

      return (
        <TuTrigger
          v-slots={{ content: renderDropDown }}
          trigger="click"
          position="bl"
          popupOffset={8}
          animationName="slide-dynamic-origin"
          hideEmpty
          preventFocus
          autoFitPopupWidth
          autoFitTransformOrigin
          disabled={selectDisabled.value}
          popupVisible={computedPopupVisible.value}
          unmountOnClose={props.unmountOnClose}
          clickToClose={!(props.allowSearch || props.allowCreate)}
          popupContainer={props.popupContainer}
          onPopupVisibleChange={handlePopupVisibleChange}
          {...props.triggerProps}
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
              class={selectClasses.value}
              modelValue={selectViewValue.value}
              inputValue={computedInputValue.value}
              multiple={props.multiple}
              disabled={selectDisabled.value}
              loading={props.loading}
              allowClear={props.allowClear}
              allowCreate={props.allowCreate}
              allowSearch={Boolean(props.allowSearch)}
              opened={computedPopupVisible.value}
              maxTagCount={props.maxTagCount}
              placeholder={props.placeholder}
              bordered={props.bordered}
              size={selectSize.value}
              onInputValueChange={handleInputValueChange}
              onRemove={handleRemove}
              onClear={handleClear}
              onKeydown={handleKeyDown}
              {...attrs}
            />
          )}
        </TuTrigger>
      );
    };
  }
});
</script>
