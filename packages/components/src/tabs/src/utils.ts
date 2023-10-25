import { CSSProperties } from 'vue';

export const gap = 12;

export const getDiffRect = (node: HTMLElement, parentNode: HTMLElement) => {
  const nodeRect = node.getBoundingClientRect();
  const parentNodeRect = parentNode.getBoundingClientRect();

  return {
    left: nodeRect.left - parentNodeRect.left,
    top: nodeRect.top - parentNodeRect.top,
    right: nodeRect.right - parentNodeRect.right,
    bottom: nodeRect.bottom - parentNodeRect.bottom
  };
};

export const getTabListStyle = ({
  direction,
  type,
  offset,
  gap
}: {
  direction: string;
  type: string;
  offset: number;
  gap: number;
}): CSSProperties => {
  if (direction === 'vertical') {
    return { transform: `translateY(${-offset - gap}px)` };
  }
  return { transform: `translateX(${-offset - gap}px)` };
};
