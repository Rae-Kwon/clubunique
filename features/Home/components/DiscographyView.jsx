import Image from 'next/image'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import styles from './DiscographyView.module.css'

const DiscographyView = ({
  discography,
  setCurrentTrack,
  stopSpin,
}) => {
  const slideChangeHandler = (activeIndex) => {
    if (activeIndex === 0) {
      setCurrentTrack(discography[discography.length - 1])
    } else if (activeIndex === discography.length + 1) {
      setCurrentTrack(discography[0])
    } else {
      setCurrentTrack(discography[activeIndex - 1])
    }
  }

  if (!discography) return null

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={50}
      grabCursor={true}
      navigation={true}
      loop={true}
      initialSlide={1}
      speed={1000}
      modules={[Navigation]}
      centeredSlides={true}
      onSlideChangeTransitionEnd={stopSpin}
      onSlideChange={(swiper) => {
        slideChangeHandler(swiper.activeIndex)
      }}
      className={styles.carousel}
    >
      {discography.map((album, index) => {
        return (
          <SwiperSlide key={index}>
            <Image
              src={album.artwork}
              alt={`Album art for ${album.album}`}
              width={400}
              height={400}
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
export default DiscographyView
