import { create } from "zustand";
import { ProjectType } from "../../../components/Projects/Project";

interface ModalI {
    isModalOpen: boolean,
    modalData: ProjectType | null,
    toggleModal: (data: ProjectType | null) => void,
}

export const useModal = create<ModalI>()((set) => ({
    isModalOpen: false,
    modalData: null,
    toggleModal: (data: ProjectType | null) => {
        set((state) => ({
            isModalOpen: !state.isModalOpen,
            modalData: data
        }))}
    }))