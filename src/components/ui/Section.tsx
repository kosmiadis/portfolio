import { HTMLAttributes, ReactNode } from "react";

interface SectionI extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

export default function Section ({children, ...props}: SectionI) {
    return <section className="p-2" {...props}>
        {children}
    </section>
}