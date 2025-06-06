import { Children, isValidElement, ReactNode } from "react"
import CarouselContext from "../store/CarouselContext";
import ImageSlide from "./ImageSlide";

interface CarouselI {
    children: ReactNode
}

interface ImageChildProps {
  src: string;
  alt?: string;
}


export default function Carousel ({ children }: CarouselI) {
    const childrenArray = Children.toArray(children);
    const slides = childrenArray.length;
    
    return <CarouselContext slides={slides}>
        {childrenArray.map((child, index) => {
            if (isValidElement<ImageChildProps>(child)) {
                return <ImageSlide key={`${index}-${child.props.src}`} index={index} src={child.props.src} alt={''}/>
            }
        })}
    </CarouselContext>
}
