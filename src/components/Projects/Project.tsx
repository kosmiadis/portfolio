import { HTMLAttributes, useEffect, useRef } from "react";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import { useModal } from "../../features/modal/store/modal.store";
import { animate, useInView } from "motion/react";

interface ProjectI extends HTMLAttributes<HTMLDivElement> {
    project: ProjectType
}

export type ProjectType = {
    id: number,
    title: string,
    description: string,
    techStack: string[],
    featuredImg: string,
    images: string[],
    github: string,
    tags: {
        frontend?: string[],
        backend?: string[],
    }
}

export default function Project ({project}: ProjectI) {
    const projectRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(projectRef);

    useEffect(() => {
        if (isInView) {
            animate(`#project-${project.id}`, { opacity: 1 }, { duration: 0.5 })
        }
        else {
            animate(`#project-${project.id}`, { opacity: 0 }, { duration: 0.5 })
        }
    }, [isInView])

    const { toggleModal } = useModal();
    return <div ref={projectRef} id={`project-${project.id}`} className="opacity-0 flex flex-col gap-4 w-[90%] sm:max-w-[360px] justify-between shadow-2xl rounded-xl p-4 px-6">
        <div className="flex flex-col gap-2">
            <h3 className="font-light font-lexend-deca text-lg">{project.title}</h3>
            <img src={project.featuredImg} />
        </div>
        <div className="h-[70px] overflow-hidden text-ellipsis">
            <p className="font-lexend-deca text-md font-light overflow-hidden text-ellipsis">{project.description}...</p>
        </div>
        <div className="flex flex-col gap-2">
            <h3 className="font-cal-sans">Tech Stack</h3>
            <ul className="p-0 flex flex-wrap gap-0.5">
                {project.techStack.map(tech => <li key={tech}><Badge className="text-xs">{tech}</Badge></li> )}
            </ul>
        </div>
        <Button className="font-lexend-deca outline-accent text-md hover:cursor-pointer hover:text-accent" onClick={() => toggleModal(project)}>More Details</Button>
    </div>
}