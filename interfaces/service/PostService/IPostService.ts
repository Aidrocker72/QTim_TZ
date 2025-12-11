import type { IPost } from '~/interfaces/IPost';

export interface IPostService {
  getAllPosts(
    page?: number,
    limit?: number
  ): Promise<{ posts: IPost[]; total: number; pages: number }>;
  getPostById(id: string): Promise<IPost>;
}
