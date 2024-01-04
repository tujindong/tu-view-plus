import { withInstall } from '@tu-view-plus/utils'
import Carousel from './src/carousel.vue'
import CarouselItem from './src/carousel-item.vue'

export const TuCarousel = withInstall(Carousel)
export const TuCarouselItem = withInstall(CarouselItem)
export default TuCarousel

export * from './src/carousel'
