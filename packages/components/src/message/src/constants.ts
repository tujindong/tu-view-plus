export const messageTypes = ['success', 'info', 'warning', 'error'] as const;
export type MessageType = (typeof messageTypes)[number];
