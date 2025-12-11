<template>
  <nav class="pagination" aria-label="Пагинация">
    <ul class="pagination__list">
      <li
        class="pagination__item"
        :class="{ 'pagination__item--disabled': currentPage === 1 }"
      >
        <button
          @click="changePage(currentPage - 1)"
          v-if="currentPage !== 1"
          class="pagination__link"
          aria-label="Предыдущая страница"
        >
          &laquo;
        </button>
      </li>

      <li
        v-for="page in getVisiblePages()"
        :key="page"
        class="pagination__item"
        :class="{ 'pagination__item--active': page === currentPage }"
      >
        <button
          @click="changePage(page)"
          :aria-label="`Перейти к странице ${page}`"
          class="pagination__link"
          :class="{ 'pagination__link--active': page === currentPage }"
        >
          {{ page }}
        </button>
      </li>

      <li
        class="pagination__item"
        :class="{ 'pagination__item--disabled': currentPage === totalPages }"
      >
        <button
          @click="changePage(currentPage + 1)"
          v-if="currentPage !== totalPages"
          class="pagination__link"
          aria-label="Следующая страница"
        >
          &raquo;
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import type { IPaginationEmits } from '~/interfaces/emits/IPaginationEmits';
import type { IPaginationProps } from '~/interfaces/props/IPaginationProps';

const props = withDefaults(defineProps<IPaginationProps>(), {
  currentPage: 1,
  totalPages: 1,
});

const emit = defineEmits<IPaginationEmits>();

const changePage = (page: number) => {
  if (page >= 1 && page <= props.totalPages && page !== props.currentPage) {
    emit('page-change', page);
  }
};

const getVisiblePages = (): number[] => {
  const pages: number[] = [];
  const maxVisiblePages = 5;
  const half = Math.floor(maxVisiblePages / 2);

  let start = Math.max(1, props.currentPage - half);
  let end = Math.min(props.totalPages, start + maxVisiblePages - 1);

  if (end - start + 1 < maxVisiblePages) {
    start = Math.max(1, end - maxVisiblePages + 1);
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return pages;
};
</script>
