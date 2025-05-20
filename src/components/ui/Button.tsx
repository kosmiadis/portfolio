import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonI extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

export default function Button ({children, ...props}: ButtonI) {
    return <button className="font-lexend-deca bg-accent font-semibold text-primary w-[160px] p-2.5 hover:bg-primary hover:text-accent duration-150 hover:cursor-pointer rounded-xs " {...props}>
        {children}
    </button>
}