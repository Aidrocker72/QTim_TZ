<template>
  <div class="skeleton" :class="skeletonClass" :style="skeletonStyle">
    <div
      v-for="n in lines"
      :key="n"
      class="skeleton__line"
      :style="{
        width: getLineWidth(n),
        height: lineHeight,
        marginBottom: lineSpacing,
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { SkeletonTypeEnum } from '~/enums/SkeletonTypeEnum';
import type { ISkeletonProps } from '~/interfaces/props/ISkeletonProps';

const props = withDefaults(defineProps<ISkeletonProps>(), {
  type: SkeletonTypeEnum.TEXT,
  lines: 1,
  lineHeight: '1rem',
  lineSpacing: '0.5rem',
  animated: true,
});

const skeletonStyle = computed(() => {
  const style: Record<string, string> = {};

  if (props.width) {
    style.width =
      typeof props.width === 'number' ? `${props.width}px` : props.width;
  }

  if (props.height) {
    style.height =
      typeof props.height === 'number' ? `${props.height}px` : props.height;
  }

  if (props.type === SkeletonTypeEnum.CIRCLE) {
    style.borderRadius = '50%';
  } else if (
    props.type === SkeletonTypeEnum.RECT ||
    props.type === SkeletonTypeEnum.IMAGE ||
    props.type === SkeletonTypeEnum.TEXT
  ) {
    style.borderRadius = '8px';
  }

  return style;
});

const skeletonClass = computed(() => {
  return [
    `skeleton--${props.type}`,
    {
      'skeleton--animated': props.animated,
    },
  ];
});

const getLineWidth = (lineIndex: number): string => {
  if (props.type === 'card') {
    if (lineIndex === 1) return '100%';
    if (lineIndex === 2) return '70%';
    return '100%';
  }

  if (props.type === 'text') {
    const widths = ['100%', '90%', '85%', '100%', '70%', '95%', '80%'];
    return widths[(lineIndex - 1) % widths.length];
  }

  return '100%';
};
</script>
