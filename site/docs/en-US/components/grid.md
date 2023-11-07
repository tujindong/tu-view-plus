# Grid

Quickly and easily create layouts with the basic 24-column.

:::tip
The component uses flex layout by default, no need to set type="flex" manually.

Please note that the parent container should avoid using inline related styles, which will cause the component to not fill up its width.
:::

## Basic layout

:::demo src="../examples/grid/basic.vue" title="Create basic grid layout using columns. With row and col, we can easily manipulate the layout using the span attribute."

:::

## Column spacing

:::demo src="../examples/grid/spacing.vue" title="Column spacing is supported. Row provides gutter attribute to specify spacings between columns, and its default value is 0."

:::

## Hybrid layout

:::demo src="../examples/grid/hybrid.vue" title="Form a more complex hybrid layout by combining the basic 1/24 columns."

:::

## Column offset

:::demo src="../examples/grid/offset.vue" title="You can specify the number of column offset by setting the value of offset attribute of Col."

:::

## Alignment

:::demo src="../examples/grid/alignment.vue" title="Default use the flex layout to make flexible alignment of columns. You can define the layout of child elements by setting justify attribute with start, center, end, space-between, space-around or space-evenly."

:::

## Responsive Layout

:::demo src="../examples/grid/responsive.vue" title="Taking example by Bootstrap is responsive design, five breakpoints are preset: xs, sm, md, lg and xl."

:::

## Row API

### Row Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| gutter | grid spacing | ^[Number] | 0 |
| justify | horizontal alignment of flex layout | ^[String]`'start' \| 'end' \| 'center' \| 'space-around'\|'space-between' \| 'space-evenly'` | start |
| align | vertical alignment of flex layout | ^[String]`'top' \| 'middle' \| 'bottom'` | top |
| tag | custom element tag | ^[String] | div |

### Row Slots

| Name | Description | Type |
| ------ | ---- | ---- |
| default | customize default content | Col |

## Col API

### Col Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| span | number of column the grid spans | ^[Number] | 24 |
| offset | number of spacing on the left side of the grid | ^[Number] | 0 |
| push | number of columns that grid moves to the right | ^[Number] | 0 |
| pull | number of columns that grid moves to the left | ^[Number] | 0 |
| xs | `<768px`  Responsive columns or column props object | ^[Number] ^[Object]`{span?: number, offset?: number, pull?: number, push?: number}` | - |
| sm | `≥768px`  Responsive columns or column props object | ^[Number] ^[Object]`{span?: number, offset?: number, pull?: number, push?: number}` | - |
| md | `≥992px`  Responsive columns or column props object | ^[Number] ^[Object]`{span?: number, offset?: number, pull?: number, push?: number}` | - |
| lg | `≥1200px`  Responsive columns or column props object | ^[Number] ^[Object]`{span?: number, offset?: number, pull?: number, push?: number}` | - |
| xl | `≥1920px`  Responsive columns or column props object | ^[Number] ^[Object]`{span?: number, offset?: number, pull?: number, push?: number}` | - |
| tag | custom element tag | ^[String] | div |

### Col Slots

| Name | Description | Type |
| ------ | ---- | ---- |
| default | customize default content | Col |
