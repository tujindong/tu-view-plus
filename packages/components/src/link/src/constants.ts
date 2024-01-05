export const linkTypes = ['default','primary', 'success', 'warning', 'danger', 'info'] as const;

export type LinkTypes = (typeof linkTypes)[number];
