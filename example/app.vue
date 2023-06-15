
<template>
  <h4>only-child</h4>
  <tu-only-child> 我测试一下 </tu-only-child>

  <br />
  <h4>popper</h4>
  <tu-popper>popper</tu-popper>

  <br />
  <h4>popover</h4>
  <tu-popover>popover</tu-popover>

  <br />
  <h4>tooltip</h4>
  <div class="tooltip-base-box">
    <div class="row center">
      <tu-tooltip
        class="box-item"
        effect="dark"
        content="Top Left prompts info"
        placement="top-start"
      >
        <tu-button>top-start</tu-button>
      </tu-tooltip>
      <tu-tooltip
        class="box-item"
        effect="dark"
        content="Top Center prompts info"
        placement="top"
      >
        <tu-button>top</tu-button>
      </tu-tooltip>
      <tu-tooltip
        class="box-item"
        effect="dark"
        content="Top Right prompts info"
        placement="top-end"
      >
        <tu-button>top-end</tu-button>
      </tu-tooltip>
    </div>
    <div class="row">
      <tu-tooltip
        class="box-item"
        effect="dark"
        content="Left Top prompts info"
        placement="left-start"
      >
        <tu-button>left-start</tu-button>
      </tu-tooltip>
      <tu-tooltip
        class="box-item"
        effect="dark"
        content="Right Top prompts info"
        placement="right-start"
      >
        <tu-button>right-start</tu-button>
      </tu-tooltip>
    </div>
    <div class="row">
      <tu-tooltip
        class="box-item"
        effect="dark"
        content="Left Center prompts info"
        placement="left"
      >
        <tu-button class="mt-3 mb-3">left</tu-button>
      </tu-tooltip>
      <tu-tooltip
        class="box-item"
        effect="dark"
        content="Right Center prompts info"
        placement="right"
      >
        <tu-button>right</tu-button>
      </tu-tooltip>
    </div>
    <div class="row">
      <tu-tooltip
        class="box-item"
        effect="dark"
        content="Left Bottom prompts info"
        placement="left-end"
      >
        <tu-button>left-end</tu-button>
      </tu-tooltip>
      <tu-tooltip
        class="box-item"
        effect="dark"
        content="Right Bottom prompts info"
        placement="right-end"
      >
        <tu-button>right-end</tu-button>
      </tu-tooltip>
    </div>
    <div class="row center">
      <tu-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Left prompts info"
        placement="bottom-start"
      >
        <tu-button>bottom-start</tu-button>
      </tu-tooltip>
      <tu-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Center prompts info"
        placement="bottom"
      >
        <tu-button>bottom</tu-button>
      </tu-tooltip>
      <tu-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Right prompts info"
        placement="bottom-end"
      >
        <tu-button>bottom-end</tu-button>
      </tu-tooltip>
    </div>
  </div>
</template>
  
<script lang="ts" setup>
import { TuOnlyChild } from '@tu-view-plus/components/src/slot';
</script>
<style lang="scss">
.tooltip-base-box {
  width: 600px;
}
.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tooltip-base-box .center {
  justify-content: center;
}
.tooltip-base-box .box-item {
  width: 110px;
  margin-top: 10px;
}
</style>
  