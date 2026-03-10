import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Utility to merge tailwind classes */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> { }

export function Card({ className, children, ...props }: CardProps) {
    return (
        <div
            className={cn("bg-[var(--color-card-bg)] rounded-3xl border border-[var(--color-card-border)] backdrop-blur-3xl p-6 flex flex-col", className)}
            {...props}
        >
            {children}
        </div>
    );
}
