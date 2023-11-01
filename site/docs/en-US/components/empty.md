# Empty

Placeholder hints for empty states.

## Basic usage

:::demo src="../examples/empty/basic.vue" title="Empty basic usage"

:::

## Custom image

:::demo src="../examples/empty/custom-image.vue" title="Use image prop to set image URL."

:::

## Image size

:::demo src="../examples/empty/image-size.vue" title="Use image-size prop to control image size."

:::

## Bottom content

:::demo src="../examples/empty/bottom-content.vue" title="Use the default slot to insert content at the bottom."

:::

## Custom styles

Now you can set custom style for empty component. Use css/scss language to change the global or local color. We set some global color variables：--empty-fill-color、--empty-stroke-color。 You can use variables like :root { --empty-fill-color: red; --empty-stroke-color: blue; } to change component's fill or stroke color。

## Default variables

| Variable | Color |
| ------ | ---- |
| --empty-fill-color | #eef0f5 |
| --empty-stroke-color | #cfd0d3 |

## Empty API

### Empty Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| image | image URL of empty | ^[string] | '' |
| image-size | image size (width) of empty | ^[number] | - |
| description | description of empty | ^[string] | '' |

### Empty Slots

| Name | Description |
| ------ | ---- |
| default | content as bottom content |
| image | content as image |
| description | content as description |
