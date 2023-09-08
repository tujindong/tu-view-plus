export const notificationTypes = [
  'success',
  'info',
  'warning',
  'error'
] as const;
export const notificationPositions = ['tr', 'tl', 'br', 'bl'] as const;

export type NotificationTypes = (typeof notificationTypes)[number];
export type NotificationPositions = (typeof notificationPositions)[number];
