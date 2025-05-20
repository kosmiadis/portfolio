import profileImg from '/src/assets/github_pfp.png';
import { useEffect, useRef } from "react";
import Section from "../ui/Section";
import { useInView } from "motion/react"
import { animate } from "motion";


export default function AboutMe () {

    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref);

    useEffect(() => {
        if (isInView) {
            animate('#about-me', { opacity: 1 }, { duration: 0.5, delay: 0.5 })
        }
        else {
            animate('#about-me', { opacity: 0 }, { duration: 0.5, delay: 0.5 })
        }
    }, [isInView])

    return <Section id='about-me'  className="p-4 opacity-0 mt-[50px]">
        <div ref={ref} className="font-lexend-deca flex flex-col gap-10 text-xl">
            <h2 className="section-heading">A few words about me...</h2>
            <p>I'm a <b>self-taught web developer</b> and <b>high school student</b> with a passion for building interactive, user-focused applications. I started learning programming at 14, fueled by curiosity and YouTube tutorials. Since then, I've developed a range of projects from real-time chat apps to full-stack tools like URL shorteners and digital bookshelves.</p>
            <p>My main stack includes <b>React, Node.js, MongoDB, and TypeScript</b>, and I love working on both the <b>frontend and backend</b>. I’m especially interested in modern UI libraries, real-time communication with WebSockets, and building tools that are not just functional, but enjoyable to use.</p>
            <p>I'm currently preparing for the National Exams to <b>study Computer Science at the University of Thessaloniki</b>. When I'm not coding, I enjoy exploring design inspiration, reading tech blogs, working out, reading books or listening to music.</p>
            
            <div className='flex flex-col items-center sm:items-start sm:flex-row sm:align-middle gap-2'>
                <img className='w-[200px] sm:w-[180px] rounded-full' src={profileImg} /> 
                <p className="text-2xl italic w-full text-center sm:text-left my-auto">"<b>I'm always open</b> to feedback, collaboration, or just connecting with other developers!"</p>
            </div>
        </div>
    </Section>
}