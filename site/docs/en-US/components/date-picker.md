# DatePicker

By clicking the input box, you can select a date from a popup calendar.

## Basic

:::demo src="../examples/date-picker/basic.vue" title="The basic usage of DatePicker."

:::

## YearPicker

:::demo src="../examples/date-picker/year.vue" title="The basic usage of the YearPicker."

:::

## MonthPicker

:::demo src="../examples/date-picker/month.vue" title="The basic usage of the MonthPicker."

:::

## QuarterPicker

:::demo src="../examples/date-picker/quarter.vue" title="The basic usage of QuarterPicker."

:::

## WeekPicker

:::demo src="../examples/date-picker/week.vue" title="The basic usage of WeekPicker."

:::

## RangePicker

:::demo src="../examples/date-picker/range.vue" title="The basic usage of RangePicker."

:::

## DatePicker showTime

:::demo src="../examples/date-picker/show-time.vue" title="Use showTime to select a date with time."

:::

## DefaultValue

:::demo src="../examples/date-picker/default-value.vue" title="DatePicker has a default value."

:::

## Disabled date

:::demo src="../examples/date-picker/disabled-date.vue" title="Use disabledDate to disable specified dates. And use disabledTime to disable time, which needs to be used with showTime."

:::

## Shortcuts

:::demo src="../examples/date-picker/shortcuts.vue" title="Use shortcuts to preset time for quick selection."

:::

## Custom shortcuts position

:::demo src="../examples/date-picker/shortcuts-position.vue" title="Use shortcutsPosition to place the shortcuts to the left, right or bottom."

:::

## Dynamic control range

:::demo src="../examples/date-picker/disabled-date-advance.vue" title="According to the selected value to control the selected range, use onSelect and disabledDate."

:::

## Extra footer

:::demo src="../examples/date-picker/extra.vue" title="Add an extra footer to meet the needs of some customized information."

:::

## Disabled

:::demo src="../examples/date-picker/disabled.vue" title="Disabled."

:::

## Customize cell

:::demo src="../examples/date-picker/custom-date-render.vue" title="Use the named slot cell to customize the date cell."

:::

## V-model

:::demo src="../examples/date-picker/control.vue" title="Support two-way binding through v-model"

:::

## Customize trigger element

:::demo src="../examples/date-picker/custom-trigger-element.vue" title="Customize trigger element."

:::

## Panel Only

:::demo src="../examples/date-picker/panel-only.vue" title="Only use panel, hide input selection."

:::

## Sizes

:::demo src="../examples/date-picker/sizes.vue" title="Besides default size, tu-input component provides three additional sizes for you to choose among different scenarios. Use attribute size to set additional sizes with mini, small, large."

:::

## Common API

### Common Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| locale | internationalization configuration, used to cover the locale file in the datePicker field | ^[Record]`<string, any>`| - |
| hide-trigger | there is no trigger element, only the selection panel is displayed | ^[Boolean] | false |
| allow-clear | whether to allow clear |^[Boolean]| true |
| readonly| whether it is read-only | ^[Boolean] | false |
| size | the size of the date picker | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'`| medium |
| shortcuts | quick selection of preset time range | ^[Array]`ShortcutType[]`| [] |
| shortcuts-position | the position of the preset range on the panel, which is placed at the bottom by default, and the side is generally used for scenes with a large number of preset times | ^[String]`'left' \| 'bottom' \| 'right'` | bottom |
| position | the position of the pop-up box | ^[String]`'top' \| 'tl' \| 'tr' \| 'bottom' \| 'bl' \| 'br'`| bl |
| popup-visible | control the open or closed state of the pop-up box | ^[Boolean]| - |
| default-popup-visible | the default pop-up box is open or closed | ^[Boolean]| false |
| trigger-props | you can pass in the parameters of the Trigger component | ^[TriggerProps]| - |
| unmount-on-close | whether to destroy the DOM structure when hiding | ^[Boolean] | false |
| placeholder | prompt | ^[String] | - |
| disabled | whether to disable | ^[Boolean] | false |
| disabled-date | unselectable date | ^[Function]`(current?: Date) => boolean` | - |
| disabled-time | unselectable time | ^[Function]`(current: Date) => DisabledTimeProps` | - |
| picker-value(v-model) | date displayed on the panel | ^[Date]^[String]^[Number] | - |
| default-picker-value | the date displayed on the panel by default | ^[Date]^[String]^[Number]  | - |
| popup-container | mount container for pop-up box | ^[String]^[HTMLElement]^[Null]^[Undefined] | - |
| value-format | The format of the value, valid for value / defaultValue / pickerValue / defaultPickerValue and the return value in the event, supports setting as timestamp, Date and string (refer to [String parsing format](#string-parsing-format) ). If not specified, it will be formatted as a string, in the same format as format. |  ^[Timestamp]^[Date]^[String] | - |
| preview-shortcut | whether to preview the result of the shortcut | ^[Boolean] | true |
| show-confirm-btn | Whether to show the confirm button, always show when showTime is true. | ^[Boolean] | false |
| disabled-input | whether input is disabled with the keyboard. | ^[Boolean] | false |
| abbreviation | whether to enable abbreviation | ^[Boolean] | true |

### Common Events

| Name | Description | Type |
| ------ | ---- | ---- |
| change | the component value changes | ^[Function]`(value: Date \| string \| number \| undefined, date: Date \| undefined, dateString: string \| undefined) => void` |
| select | the selected date has changed but the component value has not changed | ^[Function]`(value: Date \| string \| number \| undefined, date: Date \| undefined, dateString: string \| undefined) => void` |
| popup-visible-change | open or close the pop-up box | ^[Function]`(visible: boolean) => void` |
| ok | click the confirm button | ^[Function]`(value: Date \| string \| number, date: Date, dateString: string) => void` |
| clear | click the clear button | ^[Function]`() => void` |
| select-shortcut | click on the shortcut option | ^[Function]`(shortcut: ShortcutType) => void` |
| picker-value-change | panel date change | ^[Function]`(value: Date \| string \| number, date: Date, dateString: string) => void` |

### Date-Picker Attributes

| Name | Description |
| ------ | ----  |
| prefix | input box prefix |
| suffix-icon | input box suffix icon |
| icon-next-double | double arrow page backward icon |
| icon-prev-double | double arrow page forward icon |
| icon-next | single arrow page backward icon |
| icon-prev | single arrow page forward icon |
| cell | customize the contents of the date cell |
| extra | extra footer |

### Week-Picker Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| v-model | value | ^[Date]^[String]^[Number] | - |
| default-value | default value | ^[Date]^[String]^[Number] | - |
| format | display the format of the date, refer to [String Parsing Format](#string-parsing-format) | ^[String] | gggg-wo |
| value-format | the format of the value, valid for value / defaultValue / pickerValue / defaultPickerValue and the return value in the event, supports setting as timestamp, Date and string(refer to[String parsing format](#string-parsing-format)). | ^[String] | YYYY-MM-DD |
| day-start-of-week | the first day of the week starts on the day of the week, 0-Sunday, 1-Monday, and so on. | ^[Number]`0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6` | 0 |

### Quarter-Picker Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| v-model | value | ^[Date]^[String]^[Number] | - |
| default-value | default value | ^[Date]^[String]^[Number] | - |
| format | Display the format of the date, refer to [String parsing format](#string-parsing-format) | ^[String] | YYYY-MM |
| value-format | the format of the value, valid for value / defaultValue / pickerValue / defaultPickerValue and the return value in the event, supports setting as timestamp, Date and string (refer to [String parsing format](#string-parsing-format)). | ^[String] | YYYY-MM |

### Month-Picker Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| model-value / v-model | value | ^[Date]^[String]^[Number] | - |
| default-value | default value | ^[Date]^[String]^[Number] | - |
| format | Display the format of the date, refer to [String parsing format](#string-parsing-format) | ^[String] | YYYY-MM |

### Year-Picker Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| model-value / v-model | value | ^[Date]^[String]^[Number] | - |
| default-value | default value | ^[Date]^[String]^[Number] | - |
| format | Display the format of the date, refer to [String parsing format](#string-parsing-format) | ^[String] | YYYY |

### Range-Picker Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| mode | type of range selector | ^[String]`'date' \| 'year' \| 'quarter' \| 'month' \| 'week'` | date |
| v-model | value | ^[Array]`(Date \| string \| number)[]` | - |
| default-value | default value | ^[Array]`(Date \| string \| number)[]` | - |
| picker-value | the date displayed in the default panel | ^[Array]`(Date \| string \| number)[]` | - |
| default-picker-value | date displayed on the panel | ^[Array]`(Date \| string \| number)[]` | - |
| disabled | whether to disable | ^[Boolean]^[Array]`boolean[]` | false |
| day-start-of-week | the first day of the week starts on the day of the week, 0-Sunday, 1-Monday, and so on. | ^[Number]`0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6` | 0 |
| format | Display the format of the date, refer to [String parsing format](#string-parsing-format) | ^[String] | - |
| value-format | the format of the value, valid for `value` `defaultValue` `pickerValue` `defaultPickerValue` and the return value in the event, supports setting as timestamp, Date and string (refer to [String parsing format](#string-parsing-format)). if not specified, it will be formatted as a string, in the same format as `format`. | ^[Timestamp]^[Date]^[String] | - |
| show-time | whether to increase time selection | ^[Boolean] | false |
| time-picker-props | time display parameters | ^[Object]`Partial<TimePickerProps>` | - |
| placeholder | prompt | ^[Array]`string[]` | - |
| disabled-date | unselectable date | ^[Function]`(current: Date, type: 'start' \| 'end') => boolean` | - |
| disabled-time | unselectable time | ^[Function]`(current: Date, type: 'start' \| 'end') => DisabledTimeProps` | - |
| separator | the segmentation symbol in the input box of the range selector | ^[String]  | - |
| exchange-time | whether the time will be exchanged, by default time will affect and participate in the ordering of start and end values, if you want to fix the time order, you can turn it off. | ^[String] | true |
| disabled-input | whether input is disabled with the keyboard. | ^[Boolean] | false |
| abbreviation | whether to enable abbreviation | ^[Boolean]  | true |

### Range-Picker Events

| Name | Description | Type |
| ------ | ---- | ---- |
| change | the component value changes. | ^[Function]`(value: Date \| string \| number \| undefined, date: Date \| undefined, dateString: string \| undefined) => void` |
| select | the selected date has changed but the component value has not changed. | ^[Function]`(value: Date \| string \| number \| undefined, date: Date \| undefined, dateString: string \| undefined) => void` |
| popup-visible-change | open or close the pop-up box | ^[Function]`(visible: boolean) => void`|
| ok | click the confirm button | ^[Function]`(value: Date \| string \| number[], dateString: string[]) => void` |
| clear | click the clear button | ^[Function]`() => void` |
| select-shortcut | click on the shortcut option | ^[Function]`(shortcut: ShortcutType) => void` |
| picker-value-change | panel date change | ^[Function]`(value: Date \| string \| number[], date: Date[], dateString: string[]) => void` |

### ShortcutType

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| label | the content of shortcut | ^[String]^[Number]^[Function]`() => VNode`| - |
| value | the value of shortcut | ^[Date]^[String]^[Number]^[Array]`(Date \| string \| number)[]`^[Function]`() => (Date \| string \| number) \| (Date \| string \| number)[]` | - |
| format | the format use to parse value, refer to [String parsing format](#string-parsing-format) | ^[String] | - |

### String parsing format{#string-parsing-format}

| Format | Output | Description |
|---|---|:---|
| YY | 21 | Two-digit year |
| YYYY | 2021 | Four-digit year |
| M | 1-12 | Month, starting from 1 |
| MM | 01-12 | Month, two digits |
| MMM | Jan-Dec | Abbreviated month name |
| MMMM | January-December | Full month name |
| D | 1-31 | Day of the month |
| DD | 01-31 | Day of the month, two digits |
| d | 0-6 | Day of the week, Sunday is 0 |
| dd |Su-Sa | The shortest name of the day of the week |
| ddd |Sun-Sat| Abbreviated name of the day of the week |
| dddd | Sunday-Saturday | The name of the day of the week |
| H | 0-23 | Hour |
| HH | 00-23 | Hour, two digits |
| h | 1-12 | Hour, 12-hour clock |
| hh | 01-12 | Hour, 12-hour clock, two digits |
| m | 0-59 | Minute |
| mm | 00-59 | Minute, two digits |
| s | 0-59 | Second |
| ss | 00-59 | Second, two digits |
| S | 0-9 | Hundreds of milliseconds, one digits |
| SS | 00-99 | Tens of milliseconds, two digits |
| SSS | 000-999 | Millisecond, three digits |
| Z | -5:00 | UTC offset |
| ZZ | -0500 | UTC offset, add 0 in front of the number |
| A | AM PM | - |
| a | am pm | - |
| Do | 1st... 3st | Day of month with serial number |
| X | 1410715640.579 | Unix timestamp |
| x | 1410715640579 | Unix millisecond timestamp |
