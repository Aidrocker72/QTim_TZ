import type { IPost } from '~/interfaces/IPost';

export interface IPostListProps {
  posts?: IPost[];
  loading?: boolean;
}
