import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import NavList from "./NavList";
import { useMenu } from "../../features/menu/store/menu";

export default function MobileNavigation () {
    const { toggleMenu, isMobileMenuOpen } = useMenu();

    function handleCloseMenu () {
        toggleMenu();
    }

    return <AnimatePresence>
      {isMobileMenuOpen && 
      <motion.nav
          key={'mobile-menu'}
          initial={{ y: '100%',opacity: 0 }}
          animate={{ y: '30%', opacity: 1 }}
          exit={{ y: '100%', opacity: 0}}
          transition={{ duration: 0.22 }}
          className="w-full fixed top-0 min-h-screen flex flex-col items-center overflow-hidden left-0 text-primary rounded-t-4xl bg-accent"
        >
          <button onClick={handleCloseMenu} className="menu-toggle justify-self-center w-min p-4">
            <ChevronDown size={40} className="mx-auto"/>
          </button>
          <NavList />
      </motion.nav>}
    </AnimatePresence>
}