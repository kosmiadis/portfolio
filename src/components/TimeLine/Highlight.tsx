import { HTMLAttributes, useEffect, useRef } from "react";
import Badge from "../ui/Badge";
import { animate, useInView, motion } from "motion/react";
import { useScreenSize } from "../../hooks/useScreenSize";
import { breakspoints } from "../../breakpoints";

interface HighlightI extends HTMLAttributes<HTMLDivElement> {
    year: number;
    text: string;
    index: number;
}

export default function Highlight ({year, text, index, ...props}: HighlightI) {

    const { screenSize: { width }} = useScreenSize();

    const highlightRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(highlightRef);

    useEffect(() => {
        if (isInView) {
            const id = '#highlight-'+year
            animate(id, { opacity: 1 }, { duration: 0.6 })
        }
        if (!isInView) {
            const id = '#highlight-'+year
            animate(id, { opacity: 0 }, { duration: 0.6 })
            
        }
    }, [isInView])

    return <motion.div id={`highlight-${year}`} initial={{ opacity: 0 }} className="sticky bg-white shadow-md rounded-xl p-4 top-40" ref={highlightRef}>
        <div className={`flex flex-col gap-2 ]`} {...props}>
            <div className={`ml-[-${width <= breakspoints.sm ? '20': '40'}px]`}><Badge>{year}</Badge></div>
            <p className="font-lexend-deca text-xl font-light">{text}</p>
        </div>
    </motion.div>
}