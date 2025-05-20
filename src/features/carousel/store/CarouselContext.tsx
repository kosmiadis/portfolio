import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import CarouselControllers from "../components/CarouselControllers";

interface CarouselContextI {
    slideIndex: number,
    goToSlide: (n: number) => void,
}

const CarouselCTX = createContext<CarouselContextI>({
    slideIndex: 0,
    goToSlide: () => {}
})

// eslint-disable-next-line react-refresh/only-export-components
export const useCarousel = () => useContext(CarouselCTX);

export default function CarouselContext ({slides, children}: {slides: number, children: ReactNode}) {
    const [slideIndex, setSlideIndex] = useState(0);
    
    // auto slide
    useEffect(() => {
        const slideInterval = setInterval(() => {
            setSlideIndex(prev => prev < slides - 1 ? prev + 1 : 0)
        }, 3000)

        return () => {
            clearInterval(slideInterval);
        }
        
    }, [slides, slideIndex])

    function goToSlide (n: number) {
        setSlideIndex(n);
    }

    const carouselValue: CarouselContextI = {
        slideIndex,
        goToSlide
    }

    return <CarouselCTX.Provider value={carouselValue}>
        <div className="relative min-h-[200px] transform-3d flex-flex-col box-border overflow-x-hidden">

            {/* inner */}
            <div className={`flex`}>
                {children}    
            </div>
            
            <div className="mt-2 w-min mx-auto">
                <CarouselControllers slides={slides} />
            </div>
        
        </div>
        
    </CarouselCTX.Provider>
}