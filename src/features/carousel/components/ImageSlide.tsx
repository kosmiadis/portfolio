import { useCarousel } from "../store/CarouselContext";

interface ImageSlideI {
    index: number,
    src: string, 
    alt: string
}

export default function ImageSlide ({ index, src, alt }: ImageSlideI) {

    const { slideIndex } = useCarousel();
    return <img className={`${index === slideIndex ? 'visible' : 'hidden'} duration-100`} src={src} alt={alt} />
}