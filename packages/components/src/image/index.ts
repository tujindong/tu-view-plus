import { withInstall } from '@tu-view-plus/utils'
import Image from './src/image.vue'
import ImageFooter from './src/image-footer.vue'
import ImagePreview from './src/image-preview.vue'
import ImagePreviewToolbar from './src/image-preview-toolbar.vue'
import ImagePreviewArrow from './src/image-preview-arrow.vue'
import ImagePreviewAction from './src/image-preview-action.vue'
import ImagePreviewGroup from './src/image-preview-group.vue'

export const TuImage = withInstall(Image)
export const TuImageFooter = withInstall(ImageFooter)
export const TuImagePreview = withInstall(ImagePreview)
export const TuImagePreviewToolbar = withInstall(ImagePreviewToolbar)
export const TuImagePreviewArrow = withInstall(ImagePreviewArrow)
export const TuImagePreviewAction = withInstall(ImagePreviewAction)
export const TuImagePreviewGroup = withInstall(ImagePreviewGroup)
export default TuImage

export * from './src/image'
