import { withInstall } from '@tu-view-plus/utils'
import Skeleton from './src/skeleton.vue'
import SkeletonLine from './src/skeleton-line.vue'
import SkeletonShape from './src/skeleton-shape.vue'

export const TuSkeleton = withInstall(Skeleton)
export const TuSkeletonLine = withInstall(SkeletonLine);
export const TuSkeletonShape = withInstall(SkeletonShape);
export default TuSkeleton

export * from './src/skeleton'

