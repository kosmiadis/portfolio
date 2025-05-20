import { motion } from "motion/react";
import Section from "../ui/Section";

export default function Hero () {
    return <Section id="hero" className="p-4 mt-4 md:p-0">
        <div className="flex flex-col gap-4">
            <div className="text-center flex flex-col items-center gap-4 md:p-0 box-content text-5xl font-cal-sans md:text-6xl leading-10 md:leading-12">
                <motion.h1 initial={{ x: -500, opacity: 0 }} animate={{x: 0, opacity: 1}} transition={{ duration: 0.8}}>Hi! I’m Vagelis,  </motion.h1>
                <motion.h1 initial={{ x: 500, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{ duration: 0.8, delay: 0.5}}>an 18 years old</motion.h1>
                <motion.h1 className="leading-12" initial={{ x: -500, opacity: 0 }} animate={{x: 0, opacity: 1}} transition={{ duration: 0.8, delay: 1}}>self taught web developer</motion.h1>
                <motion.h1 initial={{ x: 500, opacity: 0 }} animate={{x: 0, opacity: 1}} transition={{ duration: 0.8, delay: 1.5}}> from Greece.</motion.h1>
                <motion.h3 initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{duration: 1, delay: 2}} className="font-lexend-deca text-lg max-w-[500px] md:text-xl">I work with agile technologies such as <b>React.js, Node.js, Typescript, Tailwind and Redux.js</b> , to create meaningfull web apps.</motion.h3>
            </div>
        </div>
    </Section>
}