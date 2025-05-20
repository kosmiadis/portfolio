import CarouselController from "./CarouselController"

interface CarouselControllersI {
    slides: number;
}

export default function CarouselControllers ({ slides }: CarouselControllersI) {
    return <div className="flex align-middle items-center gap-1">
        {Array.from({ length: slides }).map((_, index) => <CarouselController key={index} index={index}/>)}
    </div>
}