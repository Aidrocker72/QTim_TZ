import type { SkeletonTypeEnum } from '~/enums/SkeletonTypeEnum';

export interface ISkeletonProps {
  type?: SkeletonTypeEnum;
  width?: string | number;
  height?: string | number;
  lines?: number;
  lineHeight?: string;
  lineSpacing?: string;
  animated?: boolean;
}
