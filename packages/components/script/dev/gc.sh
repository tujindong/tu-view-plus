#! /bin/bash

NAME=$1

FILE_PATH=$(cd "$(dirname "${BASH_SOURCE[0]}")/../../" && pwd)
DOC_FILE_PATH=$(cd "$(dirname "${BASH_SOURCE[0]}")/../../../../" && pwd)

re="[[:space:]]+"

if [ "$#" -ne 1 ] || [[ $NAME =~ $re ]] || [ "$NAME" == "" ]; then
  echo "Usage: pnpm gc \${name} with no space"
  exit 1
fi

DIRNAME="$FILE_PATH/src/$NAME"
DOC_DIRNAME="$DOC_FILE_PATH/site/docs/zh-CN/components/$NAME"
INPUT_NAME=$NAME

if [ -d "$DIRNAME" ]; then
  echo "$NAME component already exists, please change it"
  exit 1
fi

if [ -d "$DOC_DIRNAME" ]; then
  echo "$NAME doc component already exists, please change it"
  exit 1
fi

NORMALIZED_NAME=""
for i in $(echo $NAME | sed 's/[_|-]\([a-z]\)/\ \1/;s/^\([a-z]\)/\ \1/'); do
  C=$(echo "${i:0:1}" | tr "[:lower:]" "[:upper:]")
  NORMALIZED_NAME="$NORMALIZED_NAME${C}${i:1}"
done
NAME=$NORMALIZED_NAME

mkdir -p "$DIRNAME"
mkdir -p "$DIRNAME/src"
mkdir -p "$DIRNAME/__tests__"
mkdir -p "$DIRNAME/style"

mkdir -p "$DOC_DIRNAME"

cat > $DIRNAME/src/$INPUT_NAME.vue <<EOF
<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { ${INPUT_NAME}Props } from './$INPUT_NAME'
import '../style/${INPUT_NAME}.scss';

defineOptions({
  name: 'Tu$NAME',
})

const props = defineProps(${INPUT_NAME}Props)

</script>
EOF

cat > $DIRNAME/src/$INPUT_NAME.ts <<EOF
import { buildProps } from '@tu-view-plus/utils'

import type { ExtractPropTypes } from 'vue'
import type $NAME from './$INPUT_NAME.vue'

export const ${INPUT_NAME}Props = buildProps({})

export type ${NAME}Props = ExtractPropTypes<typeof ${INPUT_NAME}Props>
export type ${NAME}Instance = InstanceType<typeof $NAME>
EOF

cat <<EOF >"$DIRNAME/index.ts"
import { withInstall } from '@tu-view-plus/utils'
import $NAME from './src/$INPUT_NAME.vue'

export const Tu$NAME = withInstall($NAME)
export default Tu$NAME

export * from './src/$INPUT_NAME'
EOF

cat > $DIRNAME/__tests__/$INPUT_NAME.test.tsx <<EOF
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import $NAME from '../src/$INPUT_NAME.vue'

const AXIOM = 'Tu view is good'

describe('$NAME.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <$NAME>{AXIOM}</$NAME>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
EOF

cat > $DIRNAME/style/$INPUT_NAME.scss <<EOF
@use 'sass:map';
@use '../../../style/mixins.scss' as *;
@use '../../../style/var.scss' as *;

@include b(${INPUT_NAME}) {}
EOF

cat > $DOC_DIRNAME/index.md <<EOF
# ${INPUT_NAME}
EOF
