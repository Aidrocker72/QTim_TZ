<template>
  <header class="header">
    <div class="header__container">
      <div class="header__content">
        <NuxtLink to="/" class="header__logo">
          <SvgIcon name="logo" width="84" height="25" />
        </NuxtLink>

        <nav class="header__navigation">
          <NuxtLink to="/" class="nav-item">Works</NuxtLink>
          <NuxtLink to="/" class="nav-item">About</NuxtLink>
        </nav>

        <div class="header__actions">
          <div class="header__language-selector">
            <div class="header__flag-wrapper" @click="toggleLanguageDropdown">
              <SvgIcon
                :name="`flags/${currentLanguage.flag}`"
                width="24px"
                height="24px"
                class="header__flag-icon"
              />
            </div>

            <div
              v-show="showLanguageDropdown"
              class="header__language-dropdown"
            >
              <div
                v-for="lang in AVAILABLE_LANGUAGES"
                :key="lang.code"
                class="header__language-option"
                @click="selectLanguage(lang)"
              >
                <SvgIcon
                  :name="`flags/${lang.flag}`"
                  width="20px"
                  height="20px"
                />
                <span>{{ lang.name }}</span>
              </div>
            </div>
          </div>
          <NuxtLink to="/" class="header__contact-button">Let's work</NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { AVAILABLE_LANGUAGES } from '~/constants/available-languages';
import type { ILanguage } from '~/interfaces/ILanguage';

const currentLanguage = ref<ILanguage>(AVAILABLE_LANGUAGES[0]);
const showLanguageDropdown = ref<boolean>(false);

const toggleLanguageDropdown = (): void => {
  showLanguageDropdown.value = !showLanguageDropdown.value;
};

const selectLanguage = (lang: ILanguage): void => {
  currentLanguage.value = lang;
  showLanguageDropdown.value = false;
};

const handleClickOutside = (event: Event): void => {
  const target = event.target as HTMLElement;
  if (!target.closest('.header__language-selector')) {
    showLanguageDropdown.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>
