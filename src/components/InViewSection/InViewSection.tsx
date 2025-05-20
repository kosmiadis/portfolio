import { ReactNode, useEffect, useRef } from "react";
import { activeItems, useMenu } from "../../features/menu/store/menu";
import { useInView } from "motion/react";

interface InViewSectionI {
    id: activeItems;
    children: ReactNode;
}

export default function InViewSection ({ id, children }: InViewSectionI) {

    const inViewRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(inViewRef, {
        margin: '-200px',
    });
    const { setMenuActiveItem } = useMenu();

    useEffect(() => {
        if (isInView) {
            setMenuActiveItem(id);
        }
    }, [isInView, id, setMenuActiveItem])


    return <div ref={inViewRef}>
        {children}
    </div>
}