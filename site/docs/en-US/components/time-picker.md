# TimePicker

Use Time Picker for time input.

## Basic Usage

:::demo src="../examples/time-picker/basic.vue" title="The basic usage of TimePicker."

:::

## Range Picker

:::demo src="../examples/time-picker/range-picker.vue" title="Select time range."

:::

## V-model

:::demo src="../examples/time-picker/control.vue" title="Support v-model for two-way data binding."

:::

## Allow Clear

:::demo src="../examples/time-picker/allow-clear.vue" title="By setting allow-clear, the clear button is displayed."

:::

## Default Value

:::demo src="../examples/time-picker/default-value.vue" title="The default value can be passed through defaultValue."

:::

## Disabled

:::demo src="../examples/time-picker/disabled.vue" title="Disabled."

:::

## Disable Option

:::demo src="../examples/time-picker/disabled-time.vue" title="By setting disabledHours disabledMinutes disabledSeconds, you can disable some options of hour/minute/second."

:::

## Skip Confirm

:::demo src="../examples/time-picker/disabled-confirm.vue" title="Skip the confirm step and click directly to select time."

:::

## Custom Format

:::demo src="../examples/time-picker/format.vue" title="By setting format, you can customize the hour, minute, and second."

:::

## Step

:::demo src="../examples/time-picker/step.vue" title="By setting step, you can customize the step length of the hour, minute, and second."

:::

## Extra Content

:::demo src="../examples/time-picker/extra.vue" title="Show extra content."

:::

## Use 12 Hours

:::demo src="../examples/time-picker/use-12-hours.vue" title="By setting use12Hours, you can customize the hours, minutes, and seconds."

:::

## Sizes

:::demo src="../examples/time-picker/size.vue" title="Besides default size, tu-time-picker component provides three additional sizes for you to choose among different scenarios. Use attribute size to set additional sizes with mini, small, large."

:::

## Time-Picker API

### Time-Picker Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| type | selector type | ^[String]`'time' \| 'time-range'` | time |
| model-value / v-model | value | ^[String] ^[Number] ^[Date] ^[Array]`<string \| number \| Date>` | - |
| default-value | default value | ^[String] ^[Number] ^[Date] ^[Array]`<string \| number \| Date>` | - |
| disabled | whether to disable | ^[Boolean] | false |
| allow-clear | whether to allow clear | ^[Boolean] | false |
| readonly | whether it is read-only mode | ^[Boolean] | false |
| format | display the format of the date, refer to[String Parsing Format](#String-parsing-format) | ^[String] | HH:mm:ss |
| placeholder | placeholder | ^[String] | - |
| size | input box size | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'`| medium |
| popup-container | mount container for pop-up box | ^[String] ^[HTMLElement] | - |
| use12-hours | 12 hour clock | ^[Boolean] | false |
| step | set the hour/minute/second selection interval | ^[Object]`{hour?: number; minute?: number; second?: number;}` | - |
| disabled-hours | disabled partial hour options | ^[Function]`() => number[]` | - |
| disabled-minutes | disabled some minutes options | ^[Function]`(selectedHour?: number) => number[]` | - |
| disabled-seconds | disabled partial seconds option | ^[Function]`(selectedHour?: number, selectedMinute?: number) => number[]` | - |
| hide-disabled-options | hide disabled options | ^[Boolean] | false |
| disable-confirm | firmation step, click the time directly after opening, without clicking the confirmation button | ^[Boolean] | false |
| position | pop-up position | ^[String]`'top' \| 'tl' \| 'tr' \| 'bottom' \| 'bl' \| 'br'` | bl |
| popup-visible | control the pop-up box to open or close | ^[Boolean] | - |
| default-popup-visible | the pop-up box is opened or closed by default | ^[Boolean] | false |
| trigger-props | you can pass in the parameters of the Trigger component | ^[TriggerProps] | - |
| unmount-on-close | whether to destroy the dom structure after closing | ^[Boolean] | false |

### Time-Picker Events

| Name | Description | Type |
| ------ | ---- | ---- |
| change | the component value changes | ^[Function]`(timeString: string \| Array<string \| undefined> \| undefined, time: date \| Array<date \| undefined> \| undefined) => void` |
| select | select time but do not trigger component value change | ^[Function]`(timeString: string \| Array<string \| undefined> \| undefined, time: date \| Array<date \| undefined> \| undefined) => void` |
| clear | click the clear button | - |
| popup-visible-change | pop up box expand and collapse | ^[Function]`(visible: boolean) => void` |

### Time-Picker Slots

| Name | Description |
| ------ | ---- |
| prefix | input box prefix | - |
| suffix-icon | input box suffix icon | - |
| extra | extra footer | - |

### String parsing format{#String-parsing-format}

| Format | Output | Description |
| ------ | ---- | ---- |
| YY | 21 | two digit year |
| YYYY | 2021 | four digit year |
| M | 1-12 | month, starting from 1 |
| MM | 01-12 | month, two digits |
| MMM | Jan-Dec | abbreviated month name |
| MMMM | January-December | full month name |
| D | 1-31 | day of the month |
| DD | 01-31 | day of the month, two digits |
| d | 0-6 | day of the week, Sunday is 0 |
| dd | Su-Sa | the shortest name of the day of the week |
| ddd | Sun-Sat | abbreviated name of the day of the week |
| dddd | Sunday-Saturday | the name of the day of the week |
| H | 0-23 | hour |
| HH | 00-23 | hour, two digits |
| h | 1-12 | hour, 12-hour clock |
| hh | 01-12 | hour, 12-hour clock, two digits |
| m | 0-59 | minute |
| mm | 00-59 | minute, two digits |
| s | 0-59 | second |
| ss | 00-59 | second, two digits |
| S | 0-9 | hundreds of milliseconds, one digits |
| SS | 00-99 | tens of milliseconds, two digits |
| SSS | 000-999 | millisecond, three  |
| Z | -5:00 | UTC offset |
| ZZ | -0500 | UTC offset, add 0 in front of the number |
| A | AM PM | - |
| a | am pm | - |
| Do | 1st... 3st | day of month with serial number |
| X | 1410715640.579 | Unix timestamp |
| x | 1410715640579 | Unix millisecond timestamp |
