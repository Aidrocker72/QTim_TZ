<template>
  <div class="home-page">
    <div class="home-page__title">
      <span>Articles</span>
    </div>
    <div class="home-page__container">
      <PostList
        :posts="posts"
        :loading="loading"
        class="home-page__post-list"
      />
      <Pagination
        v-if="totalPages > 1"
        :current-page="currentPage"
        :total-pages="totalPages"
        @page-change="changePage"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { usePostService } from '~/composables/service/usePostService';
import type { IPostData } from '~/interfaces/IPostData';

const currentPage = ref<number>(1);
const loading = ref<boolean>(true);
const postData = ref<IPostData>({ posts: [], total: 0, pages: 0 });
const postService = usePostService();

const posts = computed(() => postData.value?.posts || []);
const totalPages = computed(() => postData.value?.pages || 0);

const loadPosts = async (): Promise<void> => {
  loading.value = true;
  try {
    postData.value = await postService.getAllPosts(currentPage.value, 8); // 6 статей на странице
  } catch (error) {
    console.error('Ошибка при загрузке статей:', error);
  } finally {
    loading.value = false;
  }
};

const changePage = (page: number) => {
  currentPage.value = page;
  loadPosts();
};

onMounted(async () => {
  if (typeof window !== 'undefined') {
    const savedPage = localStorage.getItem('blog-current-page');
    if (savedPage) {
      currentPage.value = parseInt(savedPage, 10);
    }
  }

  await loadPosts();
});

watch(currentPage, newPage => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('blog-current-page', newPage.toString());
  }
});

useHead({
  title: 'QTIM Blog - Главная',
  meta: [{ name: 'description', content: 'Последние статьи на нашем блоге' }],
});
</script>
