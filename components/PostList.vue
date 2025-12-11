<template>
  <div class="post-list">
    <div v-if="loading" class="post-list__content">
      <div v-for="index in skeletonCount" :key="`skeleton-${index}`">
        <Skeleton
          :type="SkeletonTypeEnum.CARD"
          :lines="4"
          :height="380"
          width="100%"
        />
      </div>
    </div>
    <div v-else-if="posts && posts.length > 0" class="post-list__content">
      <PostCard
        v-for="post in posts"
        :key="post.id"
        :post="post"
        class="post-list__post-card-loaded"
      />
    </div>
    <div v-else class="post-list__empty">{{ NO_DATA }}</div>
  </div>
</template>

<script setup lang="ts">
import PostCard from '~/components/PostCard.vue';
import Skeleton from '~/components/Skeleton.vue';
import { NO_DATA } from '~/constants/no-data';
import { POST_LIST_COUNT } from '~/constants/post-list-count';
import { SkeletonTypeEnum } from '~/enums/SkeletonTypeEnum';
import type { IPostListProps } from '~/interfaces/props/IPostListProps';

const props = defineProps<IPostListProps>();

const skeletonCount = computed(() => {
  if (props.posts && props.posts.length > 0) {
    return props.posts.length;
  }
  return POST_LIST_COUNT;
});
</script>
