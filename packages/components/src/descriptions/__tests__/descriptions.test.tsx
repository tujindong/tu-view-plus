import { nextTick, ref } from 'vue';
import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Descriptions from '../src/descriptions.vue';
import DescriptionsItem from '../src/descriptions-item.vue';
import Tag from '../../tag';

describe('Descriptions.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => (
      <Descriptions title="title" extra="extra">
        {Array.from({ length: 4 }).map((_, index) => (
          <DescriptionsItem label={String(index)} />
        ))}
      </Descriptions>
    ));

    expect(wrapper.find('.tu-descriptions__title').text()).toEqual('title');
    expect(wrapper.find('.tu-descriptions__extra').text()).toEqual('extra');
    expect(wrapper.findAll('.tu-descriptions__label').length).toEqual(4);
    expect(wrapper.findAll('.tu-descriptions__content').length).toEqual(4);
  });

  test('render empty label', () => {
    const wrapper = mount(() => (
      <Descriptions>
        {Array.from({ length: 3 }).map(() => (
          <DescriptionsItem />
        ))}
      </Descriptions>
    ));

    expect(wrapper.findAll('.tu-descriptions__label').length).toEqual(0);
    expect(wrapper.findAll('.tu-descriptions__content').length).toEqual(3);
  });

  test('should render border props', () => {
    const wrapper = mount(() => (
      <Descriptions border>
        <DescriptionsItem />
      </Descriptions>
    ));

    expect(wrapper.find('table').classes()).toContain('is-bordered');
  });

  test('should render align props', () => {
    const wrapper = mount(() => (
      <Descriptions border>
        {Array.from({ length: 3 }).map(() => (
          <DescriptionsItem align="right" labelAlign="center" />
        ))}
      </Descriptions>
    ));

    expect(wrapper.find('.tu-descriptions__label').classes()).toContain(
      'is-center'
    );
    expect(wrapper.find('.tu-descriptions__content').classes()).toContain(
      'is-right'
    );
  });

  test('should render width props', () => {
    const wrapper = mount(() => (
      <Descriptions border>
        {Array.from({ length: 3 }).map(() => (
          <DescriptionsItem width="50px" min-width="60px" />
        ))}
      </Descriptions>
    ));

    expect(
      wrapper.find('.tu-descriptions__label').attributes('style')
    ).toContain('width: 50px; min-width: 60px;');
    expect(
      wrapper.find('.tu-descriptions__content').attributes('style')
    ).toContain('width: 50px; min-width: 60px;');
  });

  test('should render class props', () => {
    const wrapper = mount(() => (
      <Descriptions border>
        {Array.from({ length: 3 }).map(() => (
          <DescriptionsItem
            class-name="class-name"
            label-class-name="label-class-name"
          />
        ))}
      </Descriptions>
    ));

    expect(wrapper.find('.tu-descriptions__label').classes()).toContain(
      'label-class-name'
    );
    expect(wrapper.find('.tu-descriptions__content').classes()).toContain(
      'class-name'
    );
  });

  test('should render column props', async () => {
    const border = ref(false);

    const wrapper = mount(() => (
      <Descriptions column={5} border={border.value}>
        {Array.from({ length: 10 }).map(() => (
          <DescriptionsItem />
        ))}
      </Descriptions>
    ));

    expect(wrapper.find('tr').element.children.length).toEqual(5);

    border.value = true;

    await nextTick();

    expect(wrapper.find('tr').element.children.length).toEqual(10);
  });

  test('should render direction props', async () => {
    const direction = ref<'horizontal' | 'vertical'>('horizontal');

    const wrapper = mount(() => (
      <Descriptions column={5} direction={direction.value} border>
        {Array.from({ length: 10 }).map((item) => (
          <DescriptionsItem label={String(item)}>
            {String(item)}
          </DescriptionsItem>
        ))}
      </Descriptions>
    ));

    expect(wrapper.find('tr').element.children.length).toEqual(10);
    expect(wrapper.findAll('tr')[0].element.children[0].innerHTML).toEqual(
      wrapper.findAll('tr')[0].element.children[1].innerHTML
    );

    direction.value = 'vertical';
    await nextTick();

    expect(wrapper.find('tr').element.children.length).toEqual(5);
    expect(wrapper.findAll('tr')[0].element.children[0].innerHTML).toEqual(
      wrapper.findAll('tr')[1].element.children[0].innerHTML
    );
  });

  test('should render title slots', async () => {
    const wrapper = mount(() => (
      <Descriptions
        v-slots={{
          title: () => 'title',
          default: () =>
            Array.from({ length: 10 }).map(() => <DescriptionsItem />),
        }}
      ></Descriptions>
    ))
  
    expect(wrapper.find('.tu-descriptions__title').text()).toEqual('title')
  });

  test('should render span props', async () => {
    const wrapper = mount(() => (
      <Descriptions>
        <DescriptionsItem label="1">1</DescriptionsItem>
        <DescriptionsItem label="2" span={2}>
          2
        </DescriptionsItem>
        <DescriptionsItem label="3">3</DescriptionsItem>
        <DescriptionsItem label="4">4</DescriptionsItem>
      </Descriptions>
    ))

    expect(wrapper.findAll('td')[1].element.getAttribute('colSpan')).toEqual(
      '2'
    )
    expect(wrapper.findAll('td')[3].element.getAttribute('colSpan')).toEqual(
      '2'
    )
  });

  test('re-rendered when slots is updated', async () => {
    const CHANGE_VALUE = 'company'
    const remarks = ref(['school', 'hospital'])

    const onClick = () => {
      remarks.value[0] = CHANGE_VALUE
    }

    const wrapper = mount(() => (
      <>
        {remarks.value.map((remark, index) => (
          <Descriptions key={index} title={remark}>
            <DescriptionsItem label={remark}>
              <Tag size="small">{remark}</Tag>
            </DescriptionsItem>
          </Descriptions>
        ))}
        <button onClick={onClick}>click</button>
      </>
    ))

    wrapper.find('button').trigger('click')
    await nextTick()
    expect(wrapper.findComponent(Tag).text()).toBe(CHANGE_VALUE)
  })

});
