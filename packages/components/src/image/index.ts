import { withInstall } from '@tu-view-plus/utils'
import Image from './src/image.vue'
import ImageFooter from './src/image-footer.vue'
import Preview from './src/preview.vue'
import PreviewToolbar from './src/preview-toolbar.vue'
import PreviewArrow from './src/preview-arrow.vue'
import PreviewAction from './src/preview-action.vue'
import PreviewGroup from './src/preview-group.vue'

export const TuImage = withInstall(Image)
export const TuImageFooter = withInstall(ImageFooter)
export const TuPreview = withInstall(Preview)
export const TuPreviewToolbar = withInstall(PreviewToolbar)
export const TuPreviewArrow = withInstall(PreviewArrow)
export const TuPreviewAction = withInstall(PreviewAction)
export const TuPreviewGroup = withInstall(PreviewGroup)
export default TuImage

export * from './src/image'
