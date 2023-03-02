import {defineStore} from "pinia";


export const useNavStore = defineStore({
    id: "nav-store",
    state: () => {
        return {
            navOpen: false,
        };
    },
    actions: {
        openMenu() {
            this.navOpen = true;
        },
        closeMenu() {
            this.navOpen = false;
        },
        toggleMenu() {
            this.navOpen = !this.navOpen;
            
        },
    },
    getters: {
        nav: (state) => state.navOpen,
    },
});
