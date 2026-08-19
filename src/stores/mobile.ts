import { defineStore } from 'pinia';

const useMobileStore = defineStore('mobile', {
    state: () => ({
        isMobile: false,
        isSideOpen: false,
    }),
    actions: {
        openSide() {
            this.isSideOpen = true;
        },
        closeSide() {
            this.isSideOpen = false;
        },
        sync(width: number) {
            this.isMobile = width < 1024;
            if (!this.isMobile) this.isSideOpen = false;
        },
    },
});

export default useMobileStore;
