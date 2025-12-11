<template>
  <div class="post-card">
    <div v-if="post.image" class="post-card__image">
      <img
        ref="imageRef"
        :data-src="post.image"
        :alt="post.title"
        @error="onImageError($event)"
      />
    </div>

    <div class="post-card__content">
      <p class="post-card__description">
        {{ truncateText(post.description, 150) }}
      </p>

      <div class="post-card__actions">
        <NuxtLink :to="`/post/${post.id}`" class="post-card__button">
          Read more
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import type { IPostCardProps } from '~/interfaces/props/IPostCardProps';

const props = defineProps<IPostCardProps>();

const imageRef = ref<HTMLImageElement | null>(null);

const { onImageError } = useImageFallback();

const truncateText = (text: string | undefined | null, maxLength: number) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

const observer = ref<IntersectionObserver | null>(null);

onMounted(() => {
  if (typeof window !== 'undefined' && imageRef.value) {
    observer.value = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            const dataSrc = img.getAttribute('data-src');
            if (dataSrc) {
              img.src = dataSrc;
              observer.value?.unobserve(img);
            }
          }
        });
      },
      {
        rootMargin: '50px',
      }
    );

    observer.value.observe(imageRef.value);
  }
});

onUnmounted(() => {
  if (observer.value && imageRef.value) {
    observer.value.unobserve(imageRef.value);
  }
});
</script>
