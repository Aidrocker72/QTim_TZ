import type { IPost } from '~/interfaces/IPost';
import { ApiClient } from '~/api/ApiClient';
import type { IPostService } from '~/interfaces/service/PostService/IPostService';
import { PAGINATION_LIMIT, PAGINATION_PAGE } from '~/constants/pagination';

export class PostService implements IPostService {
  private readonly apiClient: ApiClient;
  private readonly baseUrl: string;

  constructor(apiClient: ApiClient, baseURL: string = '/qtim-test-work/posts') {
    this.apiClient = apiClient;
    this.baseUrl = baseURL;
  }

  async getAllPosts(
    page: number = PAGINATION_PAGE,
    limit: number = PAGINATION_LIMIT
  ): Promise<{ posts: IPost[]; total: number; pages: number }> {
    try {
      const response = await this.apiClient.get<IPost[]>(
        `${this.baseUrl}?page=${page}&limit=${limit}`
      );
      const posts = Array.isArray(response) ? response : [];

      const allPostsResponse = await this.apiClient.get<IPost[]>(this.baseUrl);
      const total = Array.isArray(allPostsResponse)
        ? allPostsResponse.length
        : 0;
      const pages = Math.ceil(total / limit);

      return {
        posts,
        total,
        pages,
      };
    } catch (error) {
      throw new Error(`Ошибка при получении постов: ${error}`);
    }
  }

  async getPostById(id: string): Promise<IPost> {
    try {
      const response = await this.apiClient.get<IPost>(`${this.baseUrl}/${id}`);
      return response;
    } catch (error) {
      console.error(`Ошибка при получении поста с ID ${id}:`, error);
      throw new Error(`Ошибка при получении поста: ${error}`);
    }
  }
}
