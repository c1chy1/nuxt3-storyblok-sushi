
export const useMenu = () => {
    const isOpenMenu = useState<boolean>('menu', () => true)

   const openMenu = () => {

        isOpenMenu.value = true
    };

    const closeMenu = () => {
        isOpenMenu.value = false
    }

    const toggleMenu = () => {
        isOpenMenu.value === true ? closeMenu() : openMenu()
    }

    return {
        isOpenMenu,
        openMenu,
        closeMenu,
        toggleMenu,
    }
}
