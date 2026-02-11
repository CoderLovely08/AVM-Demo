import { ReactNode } from "react";

type BaseLayoutProps = {
    isGradient?: boolean;
    children: ReactNode;
};

const CardLayout = ({ isGradient = false, children }: BaseLayoutProps) => {
    return (
        <div className=
            {isGradient
                ? "rounded-2xl p-6 bg-linear-to-br from-primary/30 via-secondary/5 to-background backdrop-blur-md h-full"
                : "bg-background rounded-2xl p-6 border border-background flex flex-col justify-between h-full"
            }>
            {children}
        </div >
    );
};

export default CardLayout;