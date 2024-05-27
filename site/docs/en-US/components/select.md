# Select

When there are plenty of options, use a drop-down menu to display and select desired ones.

## Basic Usage

:::demo src="../examples/select/basic.vue" title="v-model is the value of tu-select-option that is currently selected."

:::

## Disabled Option

:::demo src="../examples/select/disabled.vue" title="Set disabled of tu-select to make it disabled."

:::

## Multiple Select

:::demo src="../examples/select/multiple.vue" title="By setting multiple, the selector can support multiple selection. In addition, the maximum number of tags displayed can be set by max-tag-count."

:::

## Allow Clear

:::demo src="../examples/select/allow-clear.vue" title="By setting allow-clear, the clear button is displayed."

:::

## Loading

:::demo src="../examples/select/loading.vue" title="Select boxes and drop-down menus show loading status."

:::

## Dropdown Header

:::demo src="../examples/select/header.vue" title="custom dropdown menu header."

:::

## Dropdown Footer

:::demo src="../examples/select/footer.vue" title="custom dropdown menu footer."

:::

## Allow Create

:::demo src="../examples/select/allow-create.vue" title="By setting allow-create, the selector can create items that do not exist in the options."

:::

## Allow Search

:::demo src="../examples/select/allow-search.vue" title="By setting allow-search, you can make the selector support searching for options, and you can customize the search with filter-option."

:::

## Dropdown Scroll

:::demo src="../examples/select/scroll.vue" title="By setting monitor the scroll event of the drop-down menu through dropdown-scroll. Or use dropdown-reach-bottom to monitor the event of the drop-down menu scrolling to the bottom."

:::

## Remote Search

:::demo src="../examples/select/remote.vue" title="Use the search event to search remotely and change options."

:::

## Group

:::demo src="../examples/select/group.vue" title="Use the tu-select-group component to add grouping options."

:::

## Custom Label

:::demo src="../examples/select/label.vue" title="The display content of the select box can be customized through the #label slot."

:::

## Linkage Select

:::demo src="../examples/select/linkage.vue" title="Show how to realize the linkage selection box."

:::

## Custom Field Names

:::demo src="../examples/select/field-names.vue" title="The format of the data in options can be customized through the field-names attribute."

:::

## Virtual List

:::demo src="../examples/select/virtual-list.vue" title="How to use the virtual list."

:::

## Sizes

:::demo src="../examples/select/size.vue" title="Besides default size, tu-select component provides three additional sizes for you to choose among different scenarios. Use attribute size to set additional sizes with mini, small, large."

:::

<!-- Select -->

## Select API

### Select Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| multiple | Whether to open multi-select mode (The search is turned on by default in the multi-select mode)）| ^[Boolean] | false |
| model-value/v-model | Value | ^[String] ^[Number] ^[Boolean] ^[Object]`Record<string, any>\| (string \| number \| boolean \| Record<string, any>)[]`| - |
| default-value | Default value (uncontrolled mode) | ^[String] ^[Number] ^[Boolean] ^[Object]`Record<string, any>\| (string \| number \| boolean \| Record<string, any>)[]`| - |
| input-value | The value of the input | ^[String] | - |
| default-input-value | The default value of the input (uncontrolled mode) | ^[String] | '' |
| size | The size of the select | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |
| placeholder | Placeholder | ^[String] | - |
| loading | Whether it is loading state | ^[Boolean] | false |
| disabled | Whether to disable | ^[Boolean] | false |
| allow-clear | Whether to allow clear | ^[Boolean] | false |
| allow-search | Whether to allow search | ^[Boolean] ^[Object]`{ retainInputValue?: boolean }` | false (single) \| true (multiple) |
| allow-create | Whether to allow creation | ^[Boolean] | false |
| max-tag-count | In multi-select mode, the maximum number of labels displayed. 0 means unlimited | ^[Number] | 0 |
| popup-container | Mount container for popup | ^[String] ^[HTMLElement] | - |
| default-active-first-option | Whether to select the first option by default when there is no value | ^[Boolean] | true |
| popup-visible | Whether to show the dropdown | ^[Boolean] | - |
| default-popup-visible | Whether the popup is visible by default (uncontrolled mode) | ^[Boolean] | false |
| unmount-on-close | Whether to destroy the element when the dropdown is closed |  ^[Boolean]  | false |
| filter-option | Whether to filter options | ^[Boolean] ^[Function]`((inputValue: string, option: SelectOptionData) => boolean)`|true |
| options | Option data | ^[Array]`(string \| number \| boolean \| SelectOptionData \| SelectOptionGroup)[]` | [] |
| virtual-list-props | Pass the virtual list attribute, pass in this parameter to turn on virtual scrolling [VirtualListProps](#VirtualListProps)| ^[VirtualListProps] | - |
| trigger-props | Trigger props of the drop-down menu | ^[TriggerProps] | - |
| format-label | Format display content | ^[Function]`(data: SelectOptionData) => string` | - |
| show-extra-options | Options that do not exist in custom values | ^[Boolean] | true |
| value-key | Used to determine the option key value attribute name | ^[String] | value |
| search-delay | Delay time to trigger search event | ^[Number] | 500 |
| limit | Maximum number of choices in multiple choice | ^[Number] | 0 |
| field-names | Customize fields in SelectOptionData | ^[SelectFieldNames] | -|
| scrollbar | Whether to enable virtual scroll bar | ^[Boolean] ^[ScrollbarProps] | true |
| show-header-on-empty | Whether to display the header in the empty state | ^[boolean] | false |
| show-footer-on-empty | Whether to display the footer in the empty state | ^[boolean] | false |

### Select Events

| Name | Description | Type |
| ------ | ---- | ---- |
| change | Triggered when the value changes | ^[Function]`(value: string \| number \| boolean \| Record<string, any> \| (string \| number \| boolean \| Record<string, any>)[]) => void` |
| input-value-change | Triggered when the value of the input changes | ^[Function]`(inputValue: string) => void`|
| popup-visible-change | Triggered when the display state of the drop-down box changes | ^[Function]`(visible: boolean) => void`|
| clear | Triggered when the clear button is clicked | - |
| remove | Triggered when the delete button of the label is clicked | ^[Function]`(removed: string \| number \| boolean \| Record<string, any> \| undefined) => void` |
| search | Triggered when the user searches | ^[Function]`(inputValue: string) => void` |
| dropdown-scroll | Triggered when the drop-down scrolls | - |
| dropdown-reach-bottom | Triggered when the drop-down menu is scrolled to the bottom | - |
| exceed-limit | Triggered when multiple selection exceeds the limit | ^[Function]`(value: string \| number \| boolean \| Record<string, any> \| undefined, ev: Event) => void`|

### Select Slots

| Name | Description | Type |
| ------ | ---- | ---- |
| trigger | Custom trigger element | - |
| prefix | Prefix | - |
| search-icon | Search icon for select box | - |
| loading-icon | Loading icon for select box | - |
| arrow-icon | Arrow icon for select box | - |
| footer | The footer of the drop-down box | - |
| header | The header of the drop-down box | - |
| label | Display content of label |data: `SelectOptionData` |
| option | Display content of options |data: `SelectOptionData` |
| empty | Display content when the option is empty | - |

<!-- Select-option -->

### Select Option Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| value | Option value (if not filled, it will be obtained from the content) | ^[String]^[Number]^[Boolean]^[Object] | - |
| label | Option label (if not filled, it will be obtained from the content) |^[String] | - |
| disabled | Whether to disable | ^[Boolean] | false |
| tag-props | Displayed tag attributes | ^[TagProps] | - |
| extra | Extra data | ^[Object] | - |
| index | Index for manually specifying option | ^[Number] | - |

<!-- Select-group -->

### Select Group Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| label | Title of option group | ^[string] | - |

### Select Group Slots

| Name | Description | Type |
| ------ | ---- | ---- |
| label | Title of option group | - |

### Type

```ts
type Option = string | number | SelectOptionData | SelectOptionGroup;

type FilterOption = boolean | ((inputValue: string, option: SelectOptionData) => boolean);
```

### SelectOptionData

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| value | Option Value | ^[String]^[Number]^[Boolean]^[Record]`string \| unknown` | - |
| label | Option content | ^[String] | - |
| disabled | Whether to disable | ^[Boolean] | false |
| tagProps | Props of the multi-select label corresponding to the option | ^[any] | - |
| render | Custom render | ^[RenderFunction] | - |

### SelectOptionGroup

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| isGroup | Whether it is an option group | ^[Boolean] | - |
| label | Option group title | ^[String] | - |
| options | Options in the option group | ^[Array]`` | - |

### VirtualListProps{#VirtualListProps}

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| height | Viewable area height | ^[String]^[Number] | - |
| threshold | The threshold of the number of elements to enable virtual scrolling. When the number of data is less than the threshold, virtual scrolling will not be enabled. | ^[Number] | - |
| fixedSize | Is the element height fixed.| ^[Boolean] | false |
| estimatedSize | Is the element height fixed. | ^[Number] | - |
| buffer | The number of elements mounted in advance outside the boundary of the viewport. | ^[Number] | 10 |

## FAQ

### Use Object format as option value

When using the Object format as the value of the option, you need to specify the field name to obtain the unique identifier for the selector through the value-key attribute, and the default value is value.
In addition, the object value of value needs to be defined in setup, and the object cannot be created in the template, which will lead to repeated rendering of the Option component.

For example, when I need to specify key as a unique identifier:

```vue
<template>
  <tu-select v-model="value" placeholder="Please select" value-key="key">
    <tu-select-option v-for="item of data" :value="item" :label="item.label" />
  </tu-select>
</template>

<script setup>
import { ref } from 'vue';

const value = ref();
const options = [
  {
    value: 'option1',
    label: 'option1',
    key: 'extra1'
  },
  {
    value: 'option2',
    label: 'option2',
    key: 'extra3'
  },
  {
    value: 'option3',
    label: 'option3',
    key: 'extra3'
  },
]
</script>
```

### Dropdown menu separation issue in scroll container

The Select component does not enable the container scrolling event monitoring function by default. If you encounter the problem of separating the drop-down menu in the scrolling container, you can manually enable the updateAtScroll function of the internal Trigger component.

If this is the case in the global environment, you can use the ConfigProvider component to enable this property by default.

```vue
<tu-select :trigger-props="{updateAtScroll:true}"></tu-select>
```
