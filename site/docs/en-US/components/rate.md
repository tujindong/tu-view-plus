# Rate

Used for rating

## Basic usage

:::demo src="../examples/rate/basic.vue" title="Rate divides rating scores into several levels and these levels can be distinguished by using different background colors. By default background colors are the same, but you can assign them an array with three element to reflect three levels using the colors attribute, and their two thresholds can be defined by low-threshold and high-threshold, or you can assign them with a object which key is the threshold between two levels and value is the corresponding color."

:::

## Sizes

:::demo src="../examples/rate/size.vue" title="Besides default size, tu-rate component provides three additional sizes for you to choose among different scenarios. Use attribute size to set additional sizes with mini, small, large."

:::

## With allow-half

:::demo src="../examples/rate/allow-half.vue" title="Add attribute allow-half Half star allowed"

:::

## With text

:::demo src="../examples/rate/text.vue" title="Using text to indicate rating scoreAdd attribute show-text to display text at the right of Rate. You can assign texts for different scores using texts. texts is an array whose length should be equal to the max score max."

:::

## Clearable

:::demo src="../examples/rate/clearable.vue" title="You can reset the value to 0 when you click at the same value again."

:::

## More icons

:::demo src="../examples/rate/more-icons.vue" title="You can use different icons to distinguish different rate components.You can customize icons by passing icons an array with three elements or a object which key is the threshold between two levels and value is the corresponding icon. In this example, we also use void-icon to set the icon if it is unselected."

:::

## Read-only

:::demo src="../examples/rate/readonly.vue" title="Read-only Rate is for displaying rating score. Half star is supported.Use attribute disabled to make the component read-only. Add show-score to display the rating score at the right side. Additionally, you can use attribute score-template to provide a score template. It must contain {value}, and {value} will be replaced with the rating score."

:::

## Custom styles

You can set custom style for rate component. Use css/scss language to change the global or local color. We set some global color variables: --rate-void-color, --rate-fill-color, --rate-disabled-void-color, --rate-text-color. You can use like: :root { --rate-void-color: red; --rate-fill-color: blue; }.

## Rate API

### Rate Attributes

| Name | Description | Type | Default |
| --------- | ---- | ---- | :----: |
| model-value / v-model | binding value | ^[Number] | 0 |
| max | max rating score | ^[Number] | 5 |
| size | size of Rate | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |
| disabled | whether Rate is read-only | ^[Boolean] | false |
| allow-half | whether picking half start is allowed | ^[Boolean] | false |
| low-threshold | threshold value between low and medium level. The value itself will be included in low level | ^[Number] | 2 |
| high-threshold | threshold value between medium and high level. The value itself will be included in high level | ^[Number] | 4 |
| colors | colors for icons. If array, it should have 3 elements, each of which corresponds with a score level, else if object, the key should be threshold value between two levels, and the value should be corresponding color | ^[Object]`'string[] \| Record<number, string>'`| ['#F7BA2A', '#F7BA2A', '#F7BA2A'] |
| void-color | color of unselected icons | ^[String] | #C6D1DE |
| disabled-void-color | color of unselected read-only icons | ^[String] | #F0F2F5 |
| icons | icon components. If array, it should have 3 elements, each of which corresponds with a score level, else if object, the key should be threshold value between two levels, and the value should be corresponding icon component | ^[Object]`'string[] \| Component[] \| Record<number, string>'`| [StarFilled, StarFilled, StarFilled] |
| void-icon | component of unselected icons | ^[String] ^[Component] | Star |
| disabled-void-icon | component of unselected read-only icons | ^[String] ^[Component] | StarFilled |
| show-text | whether to display texts | ^[Boolean] | false |
| show-score | whether to display current score. show-score and show-text cannot be true at the same time | ^[Boolean] | false |
| text-color | color of texts | ^[String] | - |
| texts | text array | ^[Array]`'string[]'`| ['Extremely bad', 'Disappointed', 'Fair', 'Satisfied', 'Surprise'] |
| score-template | score template | ^[String] | - |
| clearable | whether value can be reset to 0 | ^[Boolean] | false |
| id | native id attribute | ^[String] | - |
| label | same as aria-label in Rate | ^[String] | - |

### Rate Events

| Name | Description | Type |
| ------ | ---- | ---- |
| change | triggers when rate value is changed | ^[Function]`(value: number) => void` |

### Rate Exposes

| Name | Description | Type |
| ------ | ---- | ---- |
| setCurrentValue | set current value | ^[Function]`(value: number) => void` |
| resetCurrentValue | 	reset current value | ^[Function]`(value: number) => void` |