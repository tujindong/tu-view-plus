<script lang="tsx">
import { inject, ref, computed, defineComponent } from 'vue';
import { breadcrumbItemProps } from './breadcrumb-item';
import { useNamespace } from '@tu-view-plus/hooks';
import { MoreFilled, ArrowDown } from '@tu-view-plus/icons-vue';
import { breadcrumbInjectKey } from './context';
import { TuDropdown, TuDropdownItem } from '../../dropdown';
import { TuIcon } from '../../icon';
import '../style/breadcrumb.scss';

export default defineComponent({
  name: 'TuBreadcrumbItem',

  props: breadcrumbItemProps,

  setup(props, { slots, attrs }) {
    const nsBreadcrumb = useNamespace('breadcrumb');

    const breadcrumbCtx = inject(breadcrumbInjectKey, undefined);
    const dropdownVisible = ref(false);

    const show = computed(() => {
      if (breadcrumbCtx && breadcrumbCtx.needHide) {
        if (
          props.index > 1 &&
          props.index <= breadcrumbCtx.total - breadcrumbCtx.maxCount
        ) {
          return false;
        }
      }
      return true;
    });

    const displayMore = computed(() => {
      if (breadcrumbCtx && breadcrumbCtx.needHide) {
        return props.index === 1;
      }
      return false;
    });

    const itemClass = computed(() => ({
      [nsBreadcrumb.e('item')]: true,
      [nsBreadcrumb.em('item', 'with-dropdown')]:
        props.droplist || slots.droplist
    }));

    const itemDropdownIconClass = computed(() => ({
      [nsBreadcrumb.e('item-dropdown-icon')]: true,
      [nsBreadcrumb.is('active')]: dropdownVisible.value
    }));

    const showSeparator = computed(() =>
      breadcrumbCtx ? props.index < breadcrumbCtx.total - 1 : true
    );

    const separatorRender = () => {
      if (!showSeparator.value) return null;
      const separatorElement =
        slots.separator?.() ??
        props.separator ??
        breadcrumbCtx?.slots.separator?.() ??
        breadcrumbCtx?.separator ??
        '/';
      return (
        <div aria-hidden="true" class={nsBreadcrumb.e('item-separator')}>
          {separatorElement}
        </div>
      );
    };

    const handleVisibleChange = (visible: boolean) => {
      dropdownVisible.value = visible;
    };

    const renderItem = () => {
      return (
        <div
          role="listitem"
          class={itemClass.value}
          {...(displayMore.value
            ? { 'aria-label': 'ellipses of breadcrumb items' }
            : undefined)}
          {...attrs}
        >
          {displayMore.value
            ? breadcrumbCtx?.slots['more-icon']?.() ?? (
                <TuIcon>
                  <MoreFilled />
                </TuIcon>
              )
            : slots.default?.()}
          {(props.droplist || slots.droplist) && (
            <span aria-hidden class={itemDropdownIconClass.value}>
              <TuIcon>
                <ArrowDown />
              </TuIcon>
            </span>
          )}
        </div>
      );
    };

    const renderDropdownContent = () => {
      return (
        slots.droplist?.() ??
        props.droplist?.map((item) => (
          <TuDropdownItem value={item.path}>{item.label}</TuDropdownItem>
        ))
      );
    };

    const renderDropdown = () => {
      return (
        <TuDropdown
          v-slots={{ content: renderDropdownContent }}
          popupVisible={dropdownVisible.value}
          onPopupVisibleChange={handleVisibleChange}
          {...props.dropdownProps}
        >
          {renderItem()}
        </TuDropdown>
      );
    };

    return () => {
      if (show.value) {
        return (
          <>
            {slots.droplist || props.droplist ? renderDropdown() : renderItem()}
            {separatorRender()}
          </>
        );
      }
      return null;
    };
  }
});
</script>
