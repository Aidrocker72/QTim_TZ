import { PostService } from '~/services/PostService';
import { ApiClient } from '~/api/ApiClient';

export const usePostService = () => {
  const config = useRuntimeConfig();
  const apiClient = new ApiClient(config.public.apiUrl);
  return new PostService(apiClient);
};
