import type { IPost } from '~/interfaces/IPost';

export interface IPostData {
  posts: IPost[];
  total: number;
  pages: number;
}
