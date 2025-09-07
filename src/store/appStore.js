import { defineStore } from "pinia";

export const useAppStore = defineStore("appStore", {
  state: () => ({
    showModal: false,
  }),
  actions: {
    showModalAction(state) {
        if( ! this.showModal  ) {
            this.showModal = true;
        } else {
            this.showModal = false;
        }
    },
  },
});
