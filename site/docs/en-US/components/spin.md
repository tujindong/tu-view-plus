# Spin

Show animation while loading data.

## Basic usage

:::demo src="../examples/spin/basic.vue" title="Used to show the status of loading."

:::

## Custom size

:::demo src="../examples/spin/size.vue" title="A small Spin use in loading text, default Spin use in loading card-level block, and large Spin use in loading page."

:::

## Dot

:::demo src="../examples/spin/dot.vue" title="Spin with dot styles."

:::

## Container

:::demo src="../examples/spin/inside-container.vue" title="You can add a loading indicator to any content."

:::

## Add tip

:::demo src="../examples/spin/tip.vue" title="You can customize loading text by using tip attribute"

:::

## Custom icon

:::demo src="../examples/spin/custom-icon.vue" title="Use the icon slot to set custom icon."

:::

## Spin API

### Spin Attributes

| Name | Description | Type | Default |
| --------- | ---- | ---- | :----: |
| size | Size of spin | ^[Number] | 14 |
| loading | Whether it is loading state (Only effective in container mode) | ^[Boolean] | true |
| dot | Whether to use dot type animation | ^[Boolean]  | false |
| tip | Prompt content | ^[String] | - |

### Radio Slots

| Name | Description |
| ------ | ---- |
| default | Custom content |
| tip | Custom tip |
| icon | Custom icon (auto-rotation) |
