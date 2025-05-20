import { useMenu } from "../features/menu/store/menu"

export function useSmoothScroll () {
    const { activeItem } = useMenu();
    
    function scrollToActiveSection () {
        const yOffset = -120;
        const activeSection = document.querySelector(`#${activeItem}`)
        const y = activeSection!.getBoundingClientRect().top + window.scrollY + yOffset
        window.scrollTo({ top: y, behavior: 'smooth'})
    }
    
    return { scrollToActiveSection }
}