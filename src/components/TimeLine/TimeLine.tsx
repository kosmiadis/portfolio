import Section from "../ui/Section";
import Highlight from "./Highlight";

const TIMELINEHIGHLIGHTS = [
    { year: 2021, text: 'Back in 2021, when I was just 14, I didn’t even own a computer. Still, I was fascinated by technology and spent hours watching coding tutorials on YouTube. A few months later, I got my first laptop and immediately began writing Python code—this marked the true beginning of my programming journey.'},
    { year: 2022, text: 'Within the first few months, I built a solid foundation in Python and developed a basic understanding of how programming works. Even though I was still navigating the vast and sometimes overwhelming world of code, I started learning the fundamentals of web development, including HTML and CSS.'},
    { year: 2023, text: 'This year was a turning point—I decided to focus seriously on web development. During the summer break, I taught myself JavaScript and began building small personal projects. Once I felt confident with JavaScript, I transitioned into learning React.js through online tutorials, which opened the door to building more dynamic applications.'},
    { year: 2024, text: 'At the beginning of 2024, I took a short break due to burnout, but I returned with greater motivation and a more disciplined mindset. During the summer break, I began working part-time. With my first paycheck, I invested in online courses on React.js, Node.js, and Git & GitHub via Udemy. By the end of the year, I felt comfortable working on both frontend and backend development, using TypeScript, state management libraries, and various CSS frameworks.'},
    { year: 2025, text: 'This is my final year of senior high school, and I’m preparing for the National Exams to pursue Computer Science at the University of Thessaloniki. My current goals are to sharpen my problem-solving skills, gain a deeper understanding of microservice architecture, and build scalable, production-ready web applications.'},
]

export default function TimeLine () {
    return <Section className="p-4">
        <div className="max-w-[500px] mx-auto flex gap-2">
            <div className="w-[3px]  rounded-xl border-3 border-secondary"></div>
            <div className="flex p-2 flex-col gap-[40vh]">
            {TIMELINEHIGHLIGHTS.map((highlight, index) => {
                if (index === TIMELINEHIGHLIGHTS.length - 1) {
                    return <Highlight key={index} index={index} year={highlight.year} text={highlight.text} className="" />    
                }
                return <Highlight key={index} index={index} year={highlight.year} text={highlight.text}/>})}
            </div>
        </div>
    </Section>
}