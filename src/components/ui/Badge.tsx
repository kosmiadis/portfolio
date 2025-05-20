import { HTMLAttributes, ReactNode } from "react";

interface BadgeI extends HTMLAttributes<HTMLSpanElement> {
    children: ReactNode
}

export default function Badge ({ children }: BadgeI) {
    // from-accent from-50% to-secondary
    return <span className="w-min text-nowrap bg-gradient-to-br shadow-xl bg-accent  p-0.5 px-[4px] text-sm rounded-lg text-primary font-light font-lexend-deca">
        {children}
    </span>
}