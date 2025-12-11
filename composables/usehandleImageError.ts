import { IMAGE_DEFAULT } from '~/constants/image-default';

/**
 * Возвращает обработчик ошибки загрузки изображения
 */
export function useImageFallback() {
  const handleError = (event: Event) => {
    const target = event.target as HTMLImageElement;
    if (target.src !== IMAGE_DEFAULT) {
      target.src = IMAGE_DEFAULT;
    }
  };

  return {
    onImageError: handleError,
  };
}
