<!-- components/Icon.vue -->
<template>
  <div
    v-if="svg"
    v-html="svg"
    :style="{ width: width + 'px', height: height + 'px' }"
  />
  <div v-else class="icon--missing">⚠️</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { ISvgIconProps } from '~/interfaces/props/ISvgIconProps';

const props = withDefaults(defineProps<ISvgIconProps>(), {
  width: 24,
  height: 24,
});

const svgModules = import.meta.glob('~/assets/svg/**/*.svg', {
  query: '?raw',
  import: 'default',
  eager: true,
});

const iconMap = new Map<string, string>();

for (const path in svgModules) {
  const key = path.replace(/^\/assets\/svg\//, '').replace(/\.svg$/, '');
  iconMap.set(key, svgModules[path] as string);
}

const svg = computed(() => {
  return iconMap.get(props.name) || null;
});
</script>
