import { Menu } from "lucide-react";
import { breakspoints } from "../../breakpoints";
import { useMenu } from "../../features/menu/store/menu";
import { useScreenSize } from "../../hooks/useScreenSize"
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation"
import { useMotionValueEvent, useScroll, motion } from "motion/react";
import { useState } from "react";

export default function Navbar () {
    const { screenSize: { width } } = useScreenSize();
    const { toggleMenu } = useMenu();
    const [ scrollDirection, setScrollDirection ] = useState<'down' | 'up'>('down');

    const { scrollY } = useScroll();

    //detect when user scrolls up so that the header becomes visible again.
    useMotionValueEvent(scrollY, 'change', (current) => {
        const diff = current - scrollY.getPrevious()!
        setScrollDirection(diff > 0 ? 'down' : 'up');
    })

    let NavigationMenu = <MobileNavigation />
    
    if (width > breakspoints.sm) {
        NavigationMenu = <Navigation />
    }

    function handleOpenMenu () {
        toggleMenu()
    }
    
    return <motion.header className={`${window.scrollY <= 1000 ? 'sticky' : 'fixed'} ${scrollDirection === 'up' ? 'top-0 shadow-sm' : 'top-[-80px]'} bg-primary z-50 w-screen duration-150  flex flex-col items-end p-2 px-4`}>
        { width <= breakspoints.sm && <div className="w-full flex justify-between align-middle"><span className=" my-auto text-lg font-cal-sans"><span className="text-accent">{'<>'}</span>Vagelis Kosmiadis<span className="text-accent">{'</>'}</span></span><button onClick={handleOpenMenu} className="menu-toggle"><Menu color="black" size={50} /></button></div>}
        {NavigationMenu}
    </motion.header>
}