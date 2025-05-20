import { Github, X } from "lucide-react";
import { useEffect, useRef } from "react";
import Button from "../../../components/ui/Button";
import { createPortal } from "react-dom";
import { useModal } from "../store/modal.store";
import { AnimatePresence, motion } from 'motion/react';
import Badge from "../../../components/ui/Badge";
import Social from "../../../components/ui/Social";
import Carousel from "../../carousel/components/Carousel";
import ImageSlide from "../../carousel/components/ImageSlide";

export default function Modal () {
    const { toggleModal, isModalOpen, modalData } = useModal();
    const modalRef = useRef<HTMLDialogElement>(null)

    useEffect(() => {
        if (isModalOpen) {
            modalRef.current?.showModal();
        }
        else {
            modalRef.current?.close();
        }
    }, [isModalOpen])


    return createPortal(
    <AnimatePresence mode="wait">
        {isModalOpen && 
        <motion.dialog key={'modal'} ref={modalRef}
        // 
        className="fixed flex flex-col w-[100%] m-auto sm:w-[1100px] h-screen rounded-xl shadow-lg"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        exit={{ opacity: 0 }}
        >
            <Button className="ml-auto hover:text-accent hover:cursor-pointer p-2" onClick={() => toggleModal(null)}><X /></Button>
            <div className="overflow-y-scroll px-6 pb-4 ">
                {modalData && <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <h3 className="sticky pb-1 bg-white top-0 z-100 font-semibold font-lexend-deca text-lg">{modalData.title}</h3>
                    <Carousel>
                        {modalData.images.map((image, index) => <ImageSlide src={image} index={index} alt={""}/>)}
                    </Carousel>
                </div>
                <div>
                    <h3 className="font-cal-sans">Description</h3>
                    <p className="font-lexend-deca text-md font-light">{modalData.description}</p>
                </div>
                <div>
                    <h3>Tech Stack</h3>
                    <ul className="p-0 flex flex-wrap gap-0.5">
                        {modalData.techStack.map(tech => <li key={tech}><Badge className="text-xs">{tech}</Badge></li> )}
                    </ul>
                </div>

                {modalData.tags.frontend && <div>
                        <span>Frontend Depedencies</span>
                        <ul className="p-0 flex flex-wrap gap-0.5">
                            {modalData.tags.frontend!.map(tech => <li key={tech}><Badge className="text-xs">{tech}</Badge></li> )}
                        </ul>
                    </div>
                }

                {modalData.tags.backend && <div>
                        <span>Backend Depedencies</span>
                        <ul className="p-0 flex flex-wrap gap-0.5">
                            {modalData.tags.backend!.map(tech => <li key={tech}><Badge className="text-xs">{tech}</Badge></li> )}
                        </ul>
                </div>}
                <Social icon={<Github />} url={modalData.github} />
            </div>}
                    
            </div>
        </motion.dialog>}
    </AnimatePresence>, document.getElementById('modal')!)
}