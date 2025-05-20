import { useCarousel } from '../store/CarouselContext';

export default function CarouselController ({ index }: { index: number }) {
    const { goToSlide, slideIndex} = useCarousel();

    function handleClick () {
        goToSlide(index);
    }

    return <button 
    className={
        `
        w-[13px] 
        h-[13px] 
        rounded-xl
        gap-1
        hover:cursor-pointer
        duration-200
        ${index === slideIndex ? 'bg-accent' : 'bg-[lightgrey]'}
        `
    }
    onClick={handleClick}>
    </button>
}