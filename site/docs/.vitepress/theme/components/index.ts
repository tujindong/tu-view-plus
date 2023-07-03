import ApiTyping from './vp-api-typing.vue';
import DemoContainer from './demo-container.vue';
import IconList from './icon-list.vue';

import type { Component } from 'vue';

export const components: [string, Component][] = [
  ['ApiTyping', ApiTyping],
  ['DemoContainer', DemoContainer],
  ['IconList', IconList]
];
