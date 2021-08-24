import SlickSlider, { Settings } from 'react-slick'
import { Photo } from 'pages'
import Image from 'next/image'
import * as S from './styles'

type SliderProps = {
  photos: Photo[]
}

const sliderSettings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

export const Slider = ({ photos }: SliderProps) => (
  <S.Wrapper>
    <SlickSlider {...sliderSettings}>
      {photos.map((photo) => (
        <Image
          key={`photo-${photo.url}`}
          src={photo.url}
          loading="lazy"
          alt={`photo-${photo.url}`}
          width={1000}
          height={336}
        />
      ))}
    </SlickSlider>
  </S.Wrapper>
)
