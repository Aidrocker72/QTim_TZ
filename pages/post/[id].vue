<template>
  <div class="post-detail-page">
    <div class="post-detail-page__container">
      <div v-if="loading" class="post-detail-page__loading loading">
        <Skeleton
          :type="SkeletonTypeEnum.CARD"
          :lines="4"
          :height="380"
          width="100%"
        />
      </div>

      <article v-else-if="post" class="post-detail-page__content post-detail">
        <header class="post-detail-page__header">
          <div class="post-detail-page__title">{{ post.title }}</div>
        </header>

        <div v-if="post.image" class="post-detail-page__image">
          <img :src="post.image" :alt="post.title" @error="onImageError" />
        </div>

        <div class="post-detail-page__content">
          <div class="post-detail-page__content-title">About</div>
          <p class="post-detail-page__body">{{ post.description }}</p>
        </div>
      </article>

      <div v-else class="post-detail-page__error no-post">
        {{ NO_DATA }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { usePostService } from '~/composables/service/usePostService';
import { NO_DATA } from '~/constants/no-data';
import { SkeletonTypeEnum } from '~/enums/SkeletonTypeEnum';
import type { IPost } from '~/interfaces/IPost';

const route = useRoute();
const postService = usePostService();
const { onImageError } = useImageFallback();
const loading = ref(true);
const post = ref<IPost | null>(null);

const loadPost = async () => {
  try {
    const postId = route.params.id as string;
    post.value = await postService.getPostById(postId);
  } catch (error) {
    console.error('Ошибка при загрузке статьи:', error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  loadPost();
});

useHead({
  title: post?.value?.title || 'Загрузка...',
  meta: [
    {
      name: 'description',
    },
  ],
});
</script>
