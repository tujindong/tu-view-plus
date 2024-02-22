import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { getFlattenTreeData, getKey2TreeNode } from '../src/utils';
import { generateTreeData } from '../src/utils/tree-data';
import {
  getCheckedStateByCheck,
  getCheckedStateByInitKeys,
} from '../src/utils/check-utils';
import { Node } from '../src/interface';
import Tree from '../src/tree.vue'

describe('tree-data', () => {
  const data = [
    {
      title: 'node1',
      key: 0,
    },
    {
      title: 'node2',
      key: '0',
    },
    {
      title: 'node3',
      key: 3,
    },
    {
      title: 'node4',
      key: 4,
      selectable: false,
      checkable: false,
      draggable: true,
    },
    {
      title: 'node5',
      key: 5,
      selectable: true,
      checkable: true,
      draggable: false,
    },
  ];
  const treeData1 = generateTreeData(data, {
    checkable: true,
    selectable: true,
    draggable: false,

    blockNode: false,
    showLine: false,
    loadMore: false,
  });
  const treeData2 = generateTreeData(data, {
    checkable: false,
    selectable: false,
    draggable: true,

    blockNode: false,
    showLine: false,
    loadMore: false,
  });
  const key2TreeNode1 = getKey2TreeNode(getFlattenTreeData(treeData1));
  const key2TreeNode2 = getKey2TreeNode(getFlattenTreeData(treeData2));

  test('should get right result by key when the type of key is number', () => {
    const node1 = key2TreeNode1.get(0) as unknown as Node;
    const node2 = key2TreeNode1.get('0') as unknown as Node;
    expect(typeof node1).toBe('object');
    expect(typeof node2).toBe('object');
    expect(node1.title).toBe('node1');
    expect(node2.title).toBe('node2');
  });

  test('the value of checkable/selectable/draggable should inherit from tree when not specify', () => {
    const node31 = key2TreeNode1.get(3) as unknown as Node;
    const node32 = key2TreeNode2.get(3) as unknown as Node;
    expect(node31.checkable).toBe(true);
    expect(node31.selectable).toBe(true);
    expect(node31.draggable).toBe(false);
    expect(node32.checkable).toBe(false);
    expect(node32.selectable).toBe(false);
    expect(node32.draggable).toBe(true);
  });

  test('the value of checkable/selectable/draggable should cover the tree when specified in node', () => {
    const node41 = key2TreeNode1.get(4) as unknown as Node;
    const node52 = key2TreeNode2.get(5) as unknown as Node;
    expect(node41.checkable).toBe(false);
    expect(node41.selectable).toBe(false);
    expect(node41.draggable).toBe(true);
    expect(node52.checkable).toBe(true);
    expect(node52.selectable).toBe(true);
    expect(node52.draggable).toBe(false);
  });
})


describe('checkUtils', () => {
  const data = [
    {
      title: 'Root',
      key: '0-0',
      children: [
        {
          title: 'Leaf',
          key: '0-0-1',
        },
        {
          title: 'Branch',
          key: '0-0-2',
          disableCheckbox: true,
          children: [
            {
              title: 'Leaf',
              key: '0-0-2-1',
            },
          ],
        },
      ],
    },
  ];
  const treeData = generateTreeData(data, {
    checkable: true,
    selectable: true,
    blockNode: false,
    showLine: false,
    loadMore: false,
    draggable: false,
  });
  const flattenTreeData = getFlattenTreeData(treeData);
  const key2TreeNode = getKey2TreeNode(flattenTreeData);
  const checkedKey = data[0].key;
  const checkedNode = key2TreeNode.get(checkedKey) as unknown as Node;

  test("[getCheckedStateByCheck] node should not be checked when it's disable or disableCheckbox is true", () => {
    let [checkedResult] = getCheckedStateByCheck({
      node: checkedNode,
      checked: true,
      checkedKeys: [],
      indeterminateKeys: [],
      checkStrictly: false,
    });
    expect(checkedResult.length).toBe(2);

    [checkedResult] = getCheckedStateByCheck({
      node: checkedNode,
      checked: false,
      checkedKeys: checkedResult,
      indeterminateKeys: [],
      checkStrictly: false,
    });
    expect(checkedResult.length).toBe(0);
  });

  test('[getCheckedStateByCheck] Only check itself when checkStrictly is true', () => {
    let [checkedResult] = getCheckedStateByCheck({
      node: checkedNode,
      checked: true,
      checkedKeys: [],
      indeterminateKeys: [],
      checkStrictly: true,
    });
    expect(checkedResult.length).toBe(1);

    [checkedResult] = getCheckedStateByCheck({
      node: checkedNode,
      checked: false,
      checkedKeys: ['0-0', '0-0-1'],
      indeterminateKeys: [],
      checkStrictly: true,
    });
    expect(checkedResult.length).toBe(1);
  });

  test("[getCheckedStateByInitKeys] node should not be checked when it's disable or disableCheckbox is true", () => {
    const [result] = getCheckedStateByInitKeys({
      initCheckedKeys: ['0-0'],
      key2TreeNode,
    });
    expect(result.length).toBe(2);
  });

  test('[getCheckedStateByInitKeys] Only check itself when checkStrictly is true', () => {
    const [result] = getCheckedStateByInitKeys({
      initCheckedKeys: ['0-0'],
      key2TreeNode,
      checkStrictly: true,
    });
    expect(result.length).toBe(1);
  });

  test('[getCheckedStateByInitKeys] Only check leaf when onlyCheckLeaf is true', () => {
    let [result] = getCheckedStateByInitKeys({
      initCheckedKeys: ['0-0'],
      key2TreeNode,
      onlyCheckLeaf: true,
    });
    expect(result.length).toBe(0);

    [result] = getCheckedStateByInitKeys({
      initCheckedKeys: ['0-0', '0-0-1'],
      key2TreeNode,
      onlyCheckLeaf: true,
    });
    expect(result.length).toBe(2);
  });

  test('Stop updating the parent node when the node is disabled', () => {
    let [checkedResult, indeterminateResult] = getCheckedStateByCheck({
      node: key2TreeNode.get('0-0-2-1') as any,
      checked: true,
      checkedKeys: [],
      indeterminateKeys: [],
      checkStrictly: false,
    });
    expect(checkedResult.length).toBe(1);
    expect(indeterminateResult.length).toBe(0);

    [checkedResult, indeterminateResult] = getCheckedStateByInitKeys({
      initCheckedKeys: ['0-0-2-1'],
      key2TreeNode,
    });
    expect(checkedResult.length).toBe(1);
    expect(indeterminateResult.length).toBe(0);
  });
})