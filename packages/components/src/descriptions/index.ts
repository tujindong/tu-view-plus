import { withInstall } from '@tu-view-plus/utils'
import Descriptions from './src/descriptions.vue'
import DescriptionsItem from './src/descriptions-item.vue'

export const TuDescriptions = withInstall(Descriptions)
export const TuDescriptionsItem = withInstall(DescriptionsItem)
export default TuDescriptions

export * from './src/descriptions'
