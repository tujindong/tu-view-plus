<template>
  <tu-trigger trigger="click">
    <tu-button>Click</tu-button>
    <template #content>
      <div class="demo-trigger-nest">
        This is trigger content.
        <tu-trigger position="right">
          <tu-button>Hover</tu-button>
          <template #content>
            <div class="demo-trigger-nest">
              This is trigger content.
              <tu-trigger trigger="click" position="right">
                <tu-button>Click</tu-button>
                <template #content>
                  <div class="demo-trigger-nest">
                    This is trigger content.
                    <tu-trigger position="right">
                      <tu-button>Hover</tu-button>
                      <template #content>
                        <div class="demo-trigger-nest">
                          This is trigger content.
                        </div>
                      </template>
                    </tu-trigger>
                  </div>
                </template>
              </tu-trigger>
            </div>
          </template>
        </tu-trigger>
      </div>
    </template>
  </tu-trigger>
</template>

<style scoped>
.demo-trigger-nest {
  display: flex;
  flex-direction: column;
  height: 80px;
  width: 180px;
  align-items: center;
  justify-content: center;
  background-color: var(--vp-c-bg);
  border-radius: 4px;
  box-shadow: 0 2px 6px 0 var(--vp-c-divider);
  font-size: 14px;
}
.tu-button {
  margin-top: 10px;
}
</style>
