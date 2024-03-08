<script lang="tsx">
import { ref, defineComponent, computed, reactive, toRefs, watch } from 'vue';
import { paginationProps, paginationEmits } from './pagination';
import { useNamespace, useLocale } from '@tu-view-plus/hooks';
import { isNumber } from '@tu-view-plus/utils';
import { useFormSize, useFormDisabled } from '../../form';
import TuPaginationJumper from './pagination-jumper.vue';
import TuPaginationItem from './pagination-item.vue';
import TuPaginationItemEllipsis from './pagination-item-ellipsis.vue';
import TuPaginationItemStep from './pagination-item-step.vue';
import TuPaginationOptions from './pagination-options.vue';
import '../style/pagination.scss';

import type { PageItemType } from './interface';
import type { Data } from '@tu-view-plus/utils';

export default defineComponent({
  name: 'TuPagination',

  props: paginationProps,

  emits: paginationEmits,

  setup(props, { emit, slots }) {
    const { pageItemStyle, activePageItemStyle } = toRefs(props);

    const nsPagination = useNamespace('pagination');

    const { t } = useLocale();

    const paginationSize = useFormSize();
    const paginationDisabled = useFormDisabled();

    const defaultCurrent = ref(props.defaultCurrent);
    const defaultPageSize = ref(props.defaultPageSize);

    const classes = computed(() => ({
      [nsPagination.b()]: true,
      [nsPagination.m(paginationSize.value)]: paginationSize.value,
      [nsPagination.m('button')]: props.button,
      [nsPagination.m('simple')]: props.simple,
      [nsPagination.is('disabled')]: paginationDisabled.value
    }));

    const computedCurrent = computed(
      () => props.current ?? defaultCurrent.value
    );

    const computedPageSize = computed(
      () => props.pageSize ?? defaultPageSize.value
    );

    const pages = computed(() =>
      Math.ceil(props.total / computedPageSize.value)
    );

    const handleClick = (page: number) => {
      if (page !== computedCurrent.value && isNumber(page) && !props.disabled) {
        defaultCurrent.value = page;
        emit('update:current', page);
        emit('change', page);
      }
    };

    const handlePageSizeChange = (pageSize: number) => {
      defaultPageSize.value = pageSize;
      emit('update:pageSize', pageSize);
      emit('pageSizeChange', pageSize);
    };

    const pagerProps = reactive({
      current: computedCurrent,
      pages,
      disabled: paginationDisabled,
      style: pageItemStyle,
      activeStyle: activePageItemStyle,
      onClick: handleClick
    });

    watch(computedPageSize, (curPageSize, prePageSize) => {
      if (
        props.autoAdjust &&
        curPageSize !== prePageSize &&
        computedCurrent.value > 1
      ) {
        const index = prePageSize * (computedCurrent.value - 1) + 1;
        const newPage = Math.ceil(index / curPageSize);
        if (newPage !== computedCurrent.value) {
          defaultCurrent.value = newPage;
          emit('update:current', newPage);
          emit('change', newPage);
        }
      }
    });

    watch(pages, (curPages, prePages) => {
      if (
        props.autoAdjust &&
        curPages !== prePages &&
        computedCurrent.value > 1 &&
        computedCurrent.value > curPages
      ) {
        defaultCurrent.value = curPages;
        emit('update:current', curPages);
        emit('change', curPages);
      }
    });

    const renderPageList = computed(() => {
      const pageList: Array<JSX.Element | JSX.Element[]> = [];

      if (pages.value < props.baseSize + props.bufferSize * 2) {
        for (let i = 1; i <= pages.value; i++) {
          pageList.push(
            renderPageItemElement('page', { key: i, pageNumber: i })
          );
        }
      } else {
        let left = 1;
        let right = pages.value;
        let hasLeftEllipsis = false;
        let hasRightEllipsis = false;

        if (computedCurrent.value > 2 + props.bufferSize) {
          hasLeftEllipsis = true;
          left = Math.min(
            computedCurrent.value - props.bufferSize,
            pages.value - 2 * props.bufferSize
          );
        }
        if (computedCurrent.value < pages.value - (props.bufferSize + 1)) {
          hasRightEllipsis = true;
          right = Math.max(
            computedCurrent.value + props.bufferSize,
            2 * props.bufferSize + 1
          );
        }

        if (hasLeftEllipsis) {
          pageList.push(
            renderPageItemElement('page', { key: 1, pageNumber: 1 })
          );
          pageList.push(
            renderPageItemElement('more', {
              key: 'left-ellipsis-pager',
              step: -(props.bufferSize * 2 + 1)
            })
          );
        }

        for (let i = left; i <= right; i++) {
          pageList.push(
            renderPageItemElement('page', { key: i, pageNumber: i })
          );
        }

        if (hasRightEllipsis) {
          pageList.push(
            renderPageItemElement('more', {
              key: 'right-ellipsis-pager',
              step: props.bufferSize * 2 + 1
            })
          );
          pageList.push(
            renderPageItemElement('page', {
              key: pages.value,
              pageNumber: pages.value
            })
          );
        }
      }

      return pageList;
    });

    const renderPageItemElement = (type: PageItemType, props: Data = {}) => {
      if (type === 'more') {
        return (
          <TuPaginationItemEllipsis
            v-slots={{ default: slots['page-item-ellipsis'] }}
            {...props}
            {...pagerProps}
          ></TuPaginationItemEllipsis>
        );
      }

      if (type === 'previous') {
        return (
          <TuPaginationItemStep
            v-slots={{ default: slots['page-item-step'] }}
            type="previous"
            {...props}
            {...pagerProps}
          />
        );
      }

      if (type === 'next') {
        return (
          <TuPaginationItemStep
            v-slots={{ default: slots['page-item-step'] }}
            type="next"
            {...props}
            {...pagerProps}
          />
        );
      }

      return (
        <TuPaginationItem
          v-slots={{ default: slots['page-item'] }}
          {...props}
          {...pagerProps}
        />
      );
    };

    const renderPagerTotal = () => {
      const { showTotal, total } = props;
      return (
        showTotal && (
          <span class={nsPagination.e('total')}>
            {slots.total?.({ total: total }) ??
              t('tu.pagination.total', { total })}
          </span>
        )
      );
    };

    const renderPager = () => {
      const { simple, showMore, bufferSize } = props;

      if (simple) {
        return (
          <span class={nsPagination.e('simple')}>
            {renderPageItemElement('previous', { simple: true })}
            <TuPaginationJumper
              simple
              disabled={paginationDisabled.value}
              current={computedCurrent.value}
              size={paginationSize.value}
              pages={pages.value}
              onChange={handleClick}
            />
            {renderPageItemElement('next', { simple: true })}
          </span>
        );
      }

      return (
        <ul class={nsPagination.e('list')}>
          {renderPageItemElement('previous', { simple: true })}
          {renderPageList.value}
          {showMore &&
            renderPageItemElement('more', {
              key: 'more',
              step: bufferSize * 2 + 1
            })}
          {renderPageItemElement('next', { simple: true })}
        </ul>
      );
    };

    const renderOptions = () => {
      const { showPageSize } = props;
      return (
        showPageSize && (
          <TuPaginationOptions
            disabled={paginationDisabled.value}
            sizeOptions={props.pageSizeOptions}
            pageSize={computedPageSize.value}
            size={paginationSize.value}
            onChange={handlePageSizeChange}
            selectProps={props.pageSizeProps}
          />
        )
      );
    };

    const renderJumper = () => {
      const { simple, showJumper } = props;
      return (
        !simple &&
        showJumper && (
          <TuPaginationJumper
            v-slots={{
              'jumper-prepend': slots['jumper-prepend'],
              'jumper-append': slots['jumper-append']
            }}
            disabled={props.disabled}
            current={computedCurrent.value}
            pages={pages.value}
            size={paginationSize.value}
            onChange={handleClick}
          />
        )
      );
    };

    return () => {
      return (
        <div class={classes.value}>
          {renderPagerTotal()}
          {renderPager()}
          {renderOptions()}
          {renderJumper()}
        </div>
      );
    };
  }
});
</script>
