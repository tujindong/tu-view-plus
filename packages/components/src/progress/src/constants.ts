export const progressTypes = ['line', 'circle', 'dashboard'] as const;
export const statusTypes = ['', 'success', 'exception', 'warning'] as const;

export type ProgressTypes = (typeof progressTypes)[number];
export type StatusTypes = (typeof statusTypes)[number];