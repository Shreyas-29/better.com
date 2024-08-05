import { cn } from "@/lib/utils";
import React from 'react'

type Props = {
    children: React.ReactNode;
    className?: string;
}

const Wrapper = ({ children, className }: Props) => {
    return (
        <section
            className={cn(
                "max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-14 overflow-hidden",
                className
            )}
        >
            {children}
        </section>
    )
};

export default Wrapper