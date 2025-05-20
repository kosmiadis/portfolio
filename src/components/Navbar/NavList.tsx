import { useEffect } from "react";
import { breakspoints } from "../../breakpoints";
import { activeItems, useMenu } from "../../features/menu/store/menu";
import { useScreenSize } from "../../hooks/useScreenSize"
import { useSmoothScroll } from "../../hooks/useSmoothScroll";

const NavigationList: { label: string, to: activeItems}[] = [
    { label: 'Home', to: 'hero'},
    { label: 'About Me', to:'about-me'},
    { label: 'Projects', to:'projects'},
    { label: 'Skills', to:'skills'},
    { label: 'Contact', to:'contact'},
]

export default function NavList () {

    const { screenSize: { width } } = useScreenSize();
    const { toggleMenu, setActiveItem, activeItem, menuActiveItem } = useMenu();
    const { scrollToActiveSection } = useSmoothScroll();

    useEffect(() => {
        scrollToActiveSection();
    }, [activeItem])

    function handleCloseMenuWhenNavLinkClicked (item: activeItems) {
        if (width <= breakspoints.sm) {   
            toggleMenu();
        }
        setActiveItem(item);
    }

    return <ul className={`flex justify-between relative py-4 gap-6 ${width <= breakspoints.sm ? 'flex-col items-center mt-[30px]' : ''} w-full`}>
        {NavigationList.map((nav: { label: string, to: activeItems}) => (
        <li key={nav.to} onClick={() => handleCloseMenuWhenNavLinkClicked(nav.to)} className={`font-cal-sans text-nowrap ${menuActiveItem === nav.to ? width <= breakspoints.sm ? 'underline' : 'text-accent underline' : ''} ${width <= breakspoints.sm ? 'text-4xl text-nowrap' : 'text-2xl hover:underline hover:text-accent duration-100'}`}><a className="text-nowrap hover:cursor-pointer">{nav.label}</a></li>
    ))}
    </ul>
}
