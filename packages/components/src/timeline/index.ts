import { withInstall } from '@tu-view-plus/utils'
import Timeline from './src/timeline.vue'
import TimelineItem from './src/timeline-item.vue'

export const TuTimeline = withInstall(Timeline)
export const TuTimelineItem = withInstall(TimelineItem)
export default TuTimeline

export * from './src/timeline'
