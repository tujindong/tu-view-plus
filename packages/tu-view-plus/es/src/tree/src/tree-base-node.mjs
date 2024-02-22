import { buildProps as e } from "@tu-view-plus/utils";
const t = e({
  key: {
    type: [String, Number]
  },
  title: {
    type: String
  },
  selectable: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  disableCheckbox: {
    type: Boolean,
    default: !1
  },
  checkable: {
    type: Boolean,
    default: !1
  },
  draggable: {
    type: Boolean,
    default: !1
  },
  isLeaf: {
    type: Boolean,
    default: !1
  },
  icon: {
    type: Function
  },
  switcherIcon: {
    type: Function
  },
  loadingIcon: {
    type: Function
  },
  dragIcon: {
    type: Function
  },
  isTail: {
    type: Boolean,
    default: !1
  },
  blockNode: {
    type: Boolean
  },
  showLine: {
    type: Boolean
  },
  level: {
    type: Number,
    default: 0
  },
  lineless: {
    type: Array,
    default: () => []
  }
});
export {
  t as treeBaseNodeProps
};
