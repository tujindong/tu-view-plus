export const messageTypes = ['success', 'info', 'warning', 'error'] as const;
export type messageType = (typeof messageTypes)[number];
