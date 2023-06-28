//trigger 弹出方位
export const TRIGGER_POSITIONS = [
  'top',
  'tl',
  'tr',
  'bottom',
  'bl',
  'br',
  'left',
  'lt',
  'lb',
  'right',
  'rt',
  'rb'
] as const;
export type TriggerPosition = (typeof TRIGGER_POSITIONS)[number];

//trigger 事件
export const TRIGGER_EVENTS = [
  'hover',
  'click',
  'focus',
  'contextMenu'
] as const;
export type TriggerEvent = (typeof TRIGGER_EVENTS)[number];
